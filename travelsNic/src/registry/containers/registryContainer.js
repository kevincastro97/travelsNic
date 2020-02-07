import React, { Component } from 'react';
import Registry from './../components/registry';
import firebase from 'react-native-firebase';
import uuid from 'uuid/v4';

import {
    addUsers
} from './../../../lib/data/user-data'

import {
    Alert,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

class RegistryContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            beenInSaving: 'comienzo',
            user: null,
            email: '',
            password: '',
            userName: '',
            avatar: '',

            avatarSource: require('./../../assets/registry/user.png'),
        };

        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

    selectPhotoTapped() {
        const options = {
          title: 'Seleccionar foto',
          storageOptions: {
            skipBackup: true,
            path: 'images',
            allowEditing: true,
          },
        };
    
        ImagePicker.showImagePicker(options, response => {
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            let source = {
                uri: response.uri.toString(),
                path: response.path.toString(),
            };
  
            this.setState({
                avatarSource: source,
            });

            this.uploadImage();
          }
        });
    }

    uploadImage = () => {

        const  { avatar, avatarSource } = this.state;
  
  
        if(avatarSource != null){
          //const ext = avatarSource.split('.').pop();
          const filename = `${uuid()}.jpg`; // Extract image extension
          // Generate unique name
          this.setState({
              loadingState: 'cargando',
          });

          console.log("registryContainer: ", avatarSource);

          firebase
          .storage()
          .ref(`/users/${filename}`)
          .putFile(avatarSource.path)
          .then(snapshot => {
                console.log("Firebase Storage TEST:");
                console.log(snapshot.downloadURL);
                this.setState({
                    loadingState: '',
                    avatar: snapshot.downloadURL,
                });
                Alert.alert('La imagen se cargo correctamente');
          })
          .catch(error => console.log(error));

          /*upload.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            snapshot => {
                console.log(snapshot.state);
            },
            error => {
              unsubscribe();
              alert('Sorry, Try again.');
            }, () => {
                console.log("----Terminado-------");
                upload.snapshot.ref.getDownloadURL().then(downloadURL => {
                    this.setState({
                        loadingState: '',
                        avatar: snapshot.downloadURL,
                    });
                })
            }
          );*/
          
        }
  
        if(avatarSource === null){
          Alert.alert('Debe de agregar una imagen');
        } 
  
      };

    myUserEvent = (userName) => {

        this.setState({
            userName: userName,
        });
    }
  

    myEmailEvent = (email) => {

        this.setState({
            email: email,
        })
    }

    myPasswordEvent = (password) => {

        this.setState({
            password: password,
        })
    }

    myEventPressSave = () => {

        const { email, password, userName, avatar, } = this.state;

        if(email === ''){
            Alert.alert("Debe de ingresar Email");
        } else {
            if(password === ''){
                Alert.alert("Debe de ingresar Password");
            } else {
                if(userName === ''){

                } else {
                    if(email === '' && password === ''){
                        Alert.alert("Debe de ingresar Email o Password");
                    } else{
    
                        this.setState({
                            loadingState: 'cargando',
                        })
    
                        firebase
                        .auth()
                        .createUserWithEmailAndPassword (email, password)
                
                        .then (res => {

                            addUsers(
                                {
                                    email: email,
                                    password: password,
                                    userName: userName,
                                    avatar: avatar,
                                },
                                res.user.uid
                            );

                            this.setState({
                                user: res.user,
                                email: '',
                                password: '',
                                userName: '',
                                loadingState: 'cargado',
                            });
                            
                            Alert.alert("Los datos se agregaron correctamente");
                        })
                        .catch((error) => {
                            this.setState({
                                loadingState: 'error',
                                error: error,
                            });
                            
                            if(password.length <= 5){
                                Alert.alert("Debe ingresar 6 caracteres como minimo");
                            }
                
                            else {
                                Alert.alert("El usuario ya existe");
                                this.setState({
                                    email: '',
                                    password: '',
                                    userName: ''
                                });
                            } 
                        });
                        
                    }
                }
            }
        } 
    }

    navigateToLogin = () =>{
        this.props.navigation.navigate('Login')
    }

    render() {

        const { 
            userName,
            email,
            password,
            beenInSaving,
            avatarSource
        } = this.state

        return(
            <Registry
                userName = {userName}
                myUserEvent = {this.myUserEvent}
                email = {email}
                myEmailEvent = {this.myEmailEvent}
                password = {password}
                myPasswordEvent = {this.myPasswordEvent}
                myEventPressSave = {this.myEventPressSave}
                beenInSaving = {beenInSaving}
                navigateToLogin = {this.navigateToLogin}
                selectPhotoTapped = {this.selectPhotoTapped.bind(this)}
                avatarSource = {avatarSource}
                uploadImage = {this.uploadImage}
            />
        )

    }

}

export default RegistryContainer;
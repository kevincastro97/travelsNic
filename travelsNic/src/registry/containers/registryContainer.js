import React, { Component } from 'react';
import Registry from './../components/registry';
import firebase from 'react-native-firebase';

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
            data: {
                email: '',
                password: '',
                userName: '',
            },

            avatarSource: require('./../../assets/bus.png'),
        };

        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

    selectPhotoTapped() {
        const options = {
          title: 'Seleccionar foto',
          takePhotoButtonTitle: 'Tomar foto',
          chooseFromLibraryButtonTitle: 'Galeria',
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true,
          },
        };
    
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            let source = {uri: response.uri};
  
            this.setState({
              avatarSource: source,
            });
          }
        });
      }

    myUserEvent = (userName) => {
        
        const { email, password } = this.state;

        this.setState({
            userName: userName,
            data: {
                email: email,
                password: password
            }
        });
    }

    myEmailEvent = (email) => {

        const { password, userName } = this.state;

        this.setState({
            email: email,
            data: {
                email: email,
                password: password,
                userName: userName,
            }
        })
    }

    myPasswordEvent = (password) => {
        const { email, userName } = this.state;

        this.setState({
            password: password,
            data: {
                email: email,
                password: password,
                userName: userName,
            }
        })
    }

    myEventPressSave = () => {

        const { email, password, userName, data } = this.state;

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
                          
                            addUsers(data);
    
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
            />
        )

    }

}

export default RegistryContainer;
import React, {Component} from 'react';

import ImagePicker from 'react-native-image-picker';

import GaleriaImage from "./../components/agregandoImage";

import firebase from 'react-native-firebase';
import uuid from 'uuid/v4';

import {addUsers}  from './../../../lib/data/prueba'

import {
  Alert
} from 'react-native'

export default class App extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            avatarSource: null,
            images: '',
            data:{
              avatar: '',
            },
            progress: 0,
        }

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
            avatar: response.uri,
          });
        }
      });
    }

    uploadImage = () => {

      const  {data, avatar, avatarSource , progress} = this.state;


      if(data.avatar != null){
        const ext = avatar.split('.').pop();
        const filename = `${uuid()}.${ext}`; // Extract image extension
        // Generate unique name
        firebase
        .storage()
        .ref(`users/${filename}`)
        .putFile(avatar)
        .on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          snapshot => {
            let state = {};
            state = {
              ...state,
              progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Calculate progress percentage
            };
            if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
              state = {
                ...state,
                data:{
                  avatar: snapshot.downloadURL,
                },
                progress: 0,
              };
            }
            this.setState(state);

           
          },
          error => {
            unsubscribe();
            alert('Sorry, Try again.');
          }
        );

        Alert.alert('La imagen se cargo correctamente');
        
      }

      if(avatarSource === null){
        Alert.alert('Debe de agregar una imagen');
      } 

    };

    GuardarIm = () =>{
      const {data } = this.state;
      addUsers(data)
      Alert.alert('Registro completo');
    }
    
    render() {

        const { avatarSource, avatar } = this.state;

      return (
        <GaleriaImage
            selectPhotoTapped = {this.selectPhotoTapped.bind(this)}
            avatarSource = {avatarSource}
            uploadImage = {this.uploadImage}
            GuardarIm = {this.GuardarIm}
            imageUri = {avatar}
        />
      );
    }
}
  
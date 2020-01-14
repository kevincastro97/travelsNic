import React, {Component} from 'react';

import ImagePicker from 'react-native-image-picker';

import GaleriaImage from "./../components/agregandoImage";

export default class App extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            avatarSource: null,
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
          });
        }
      });
    }
    
    render() {

        const { avatarSource } = this.state;

      return (
        <GaleriaImage
            selectPhotoTapped = {this.selectPhotoTapped.bind(this)}
            avatarSource = {avatarSource}
        />
      );
    }
}
  
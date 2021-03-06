import React from 'react';

import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';



const GaleriaImage = (props) => {

    const { selectPhotoTapped, avatarSource, uploadImage, imageUri , GuardarIm} = props;

    return(
        <View style={styles.container}>

            <TouchableOpacity
              onPress = {selectPhotoTapped}
            >
              <View
                  style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}
              >
                  <Image 
                          style={styles.avatar}
                          source={avatarSource}    
                  />
              </View>
            </TouchableOpacity>

            <View style = {styles.iconContainer}>
              <TouchableOpacity 
                  onPress={uploadImage}
              >
                <Image 
                  style={styles.icon}
                  source={require('./../../assets/settings/save.png')}    
                />
              </TouchableOpacity>
            </View>
            <Button
              title= 'guardar'
              onPress = {GuardarIm}
            />

            <Text>{imageUri}</Text>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    avatarContainer: {
      borderColor: '#9B9B9B',
      borderWidth: 1 / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      borderRadius: 75,
      width: 150,
      height: 150,
    },
    icon:{
        height: 40,
        width: 40
    },
    iconContainer:{
      marginTop: -60,
      marginLeft: 90
    }
  });

export default GaleriaImage;
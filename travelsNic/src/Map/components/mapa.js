import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';

const Login = (props) =>{

    return(
        <View style = {styles.container}>

            <Text style = {styles.color}>este es del mapa</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f4f6f8',

    },
    color:{
        backgroundColor: '#FFFFFF',
        padding: 50
    }
}) 

export default Login;
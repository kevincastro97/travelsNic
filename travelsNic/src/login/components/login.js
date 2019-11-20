import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Login = (props) =>{

    return(
        <View style = {styles.container}>
            <Text style = {styles.color}>Hola</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f4f6f8'
    },
    color:{
        backgroundColor: '#FFFFFF',
        padding: 50
    }
}) 

export default Login;
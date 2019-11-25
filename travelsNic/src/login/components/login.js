import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    Dimensions,
    TextInput
} from 'react-native';

const Login = (props) =>{

    return(
        <ImageBackground
            source = {require('./../../assets/login/loginBackground.png')}
            style = {styles.container}
        >
            <Image
                source={require('../../assets/login/icon.png')}
                style = {styles.image}
            />

            <Text style = {styles.nameAplication}>
                TravelsNic
            </Text>  

            <View style = {styles.div}/>

                <View style = {styles.size}>

                    <Text style = {styles.textDescription}>
                        Correo
                    </Text>

                    <View style = {styles.textImput}>

                        <TextInput
                            style = {styles.letterImput}
                            placeholder = 'Correo electronico'
                        />
   
                    </View>

                    <View style = {styles.divText}/>

                    <Text style = {styles.textDescription}>
                        Contraseña
                    </Text>

                    <View style = {styles.textImput}>

                        <TextInput
                            style = {styles.letterImput}
                            placeholder = 'Contraseña'
                        />
   
                    </View>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Screen')}
                    >
                        <Text style = {styles.textRecover}>
                            ¿Has olvidaste tu contraseña?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.textButton}>
                            Iniciar sesión
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style = {styles.textRegistry}>
                            no tienes cuenta? Regístrate
                        </Text>
                    </TouchableOpacity>
                   
                </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        width: Dimensions.get('window').width,
    },
    image:{
        width: 120,
        height: 120,
        borderRadius: 135,
        resizeMode: 'cover',
        borderWidth: 4,
        borderColor: '#fff',
        marginTop: 20
    },
    nameAplication: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 5,
    },
    size: {
        width: '80%',
    },

    div: {
        height: 20
    },

    divText: {
        height: 20
    },

    textDescription:{
        fontSize: 16,
        fontWeight: 'normal',
        color: 'white',
        marginTop: 10,
    },

    textImput:{
        backgroundColor: 'white',
        width: '100%',
        height: 35,
        borderRadius: 50,
        marginTop: 5,
        paddingLeft: 10,

    },

    letterImput:{
        fontSize: 12,
        lineHeight: 35
    },

    textRecover:{
        textAlign: 'right',
        fontSize: 14,
        fontWeight: 'normal',
        color: 'white',
        marginTop: 5,
    },

    button: {
        backgroundColor: '#1878ff',
        width: '100%',
        height: 35,
        borderRadius: 50,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },

    textRegistry: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'normal',
        color: 'white',
        marginTop: 30
    },
    color:{
        //backgroundColor: '#FFFFFF',
        //backgroundColor: '#f4f6f8',
    }
}) 


export default Login;
import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';

import SeparatorText from './../utilities/components/separatorText'

const Login = (props) =>{

    const {
        onChangeEmail,
        userEmail,
        onChangePassword,
        userPassword,
        startButton,
        registryButtonNavigation,
        loadingState,
    } = props;

    return(
        <ImageBackground
            source = {require('./../../assets/login/lBackground.png')}
            style = {styles.imageContainer}
        > 
            <ScrollView>
                <View  style = {styles.container}>
                    <View style = {styles.header}>

                        <Image
                            source={require('../../assets/login/travelsNic.png')}
                            style = {styles.image}
                        />

                        <Text style = {styles.nameAplicacion}>
                            TravelsNic
                        </Text>

                    </View>

                    <View style = {styles.loginContainer}>
                        <Text style = {styles.textDescription}>
                            Correo
                        </Text>

                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Correo electronico'
                                autoCompleteType = 'email'
                                onChangeText={onChangeEmail}
                                value={userEmail}
                                editable={loadingState === 'cargando' ? false : true }
                            />

                            <View style = {styles.centerIcon}>

                            <TouchableOpacity>
                                <Image
                                    source = {require('./../../assets/login/email.png')}
                                    style = {styles.icon}
                                />
                            </TouchableOpacity>
                                
                            </View>

                        </View>

                        <SeparatorText/>

                        <View style = {styles.divText}/>

                        <Text style = {styles.textDescription}>
                            Contraseña
                        </Text>

                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Contraseña'
                                secureTextEntry = {true} 
                                onChangeText={onChangePassword}
                                value={userPassword}
                                maxLength = {8}
                                editable={loadingState === 'cargando' ? false : true }
                            />

                            <View style = {styles.centerIcon}>

                                <TouchableOpacity>
                                    <Image
                                        source = {require('./../../assets/login/eye.png')}
                                        style = {styles.icon}
                                    />
                                </TouchableOpacity>
                                    
                            </View>
                            
                        </View>

                        <TouchableOpacity >
                            <Text style = {styles.textRecover}>
                                ¿Has olvidaste tu contraseña?
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style = {styles.buttonContainer}>

                        <View style = {styles.containerRow}>

                            <TouchableOpacity 
                                style = {styles.button}
                                onPress={startButton}
                                disabled={ loadingState=== 'cargando' ? true : false }
                            >
                                <Text style = {styles.textButton}>
                                    Iniciar sesión
                                </Text>
                            </TouchableOpacity>

                            <SeparatorText/>

                            <TouchableOpacity 
                                onPress = {registryButtonNavigation}
                                style = {styles.button}
                            >
                                <Text style = {styles.textButton}>
                                    Registrarme
                                </Text>
                            </TouchableOpacity>

                        </View>

                        <SeparatorText/>

                        <View style = {styles.containerRegistry}>
        
                            <Text style = {styles.text}>
                                no tienes cuenta? 
                            </Text>

                            <View style = {styles.divVertical}/>
                            
                            <Text style = {styles.Registry}>
                                Regístrate
                            </Text>

                        </View>

                        <View style = {styles.end}/>
                        <SeparatorText/>

                    </View>

                </View>  
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    header:{
        alignItems: 'center',
        resizeMode: 'cover',
        justifyContent: 'space-between',
        marginTop: 20
    },

    image:{
        width: 120,
        height: 120,
        resizeMode: 'cover',
        marginTop: 20
    },

    nameAplicacion:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#FFFFFF'
    },

    loginContainer:{
        //backgroundColor: '#FFFFFF',
        borderRadius: 15,
        width: '90%',
        padding: 10,
        height: '40%',
        marginTop: 30,
        justifyContent: 'center'
    },

    textDescription:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },

    textImput:{
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        borderRadius: 50,
        marginTop: 5,
        paddingLeft: 8,
        borderColor: '#37acff',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        resizeMode: 'cover',
    },

    centerIcon: {
        justifyContent: 'center',
        resizeMode: 'cover',
        alignItems: 'stretch',
        marginHorizontal: 8
    },

    icon:{
        width: 24,
        height: 24,
    },

    letterImput:{
        fontSize: 14,
        padding: 8,
    },

    textRecover:{
        textAlign: 'right',
        fontSize: 14,
        fontWeight: 'normal',
        color: 'white',
        marginTop: 5,
    },

    buttonContainer:{
        borderRadius: 15,
        width: '90%',
        alignItems: 'center',
        marginTop: 20
    },
    
    containerRow: {
        flexDirection: 'row',
        resizeMode: 'cover',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },

    button: {
        backgroundColor: '#1878ff',
        width: '48%',
        height: 30,
        borderRadius: 50,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },

    containerRegistry: {
        flexDirection: 'row',
        resizeMode: 'cover',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 16,
        textAlign: 'justify',
        fontWeight: 'normal',
        color: 'white',
    },

    Registry : {
        fontSize: 16,
        textAlign: 'justify',
        fontWeight: 'bold',
        color: 'white',
    },

    divVertical:{
        width: 10
    },

    end:{
        height: 5
    },

}) 


export default Login;

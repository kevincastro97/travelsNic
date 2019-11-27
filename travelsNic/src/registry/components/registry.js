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

import SeparatorText from './../utilities/components/separatorText'

const Registry = (props) =>{

    return(
        <ImageBackground
            source = {require('./../../assets/registry/registryBackground.png')}
            style = {styles.container}
        >
            <View  style = {styles.header}>

                <View style = {styles.imageContainer}>
                    <Image
                        source={require('../../assets/login/icon.png')}
                        style = {styles.image}
                    />

                    <Text style = {styles.nameAplication}>
                        TravelsNic
                    </Text>
                </View>

                <Text style = {styles.registry}>
                    Registrarme
                </Text>

            </View>

            <View style = {styles.size}> 

                <View style = {styles.textContainer}>
                    <Text style = {styles.textDescription}>
                        Nombre de usuario
                    </Text>

                    <View style = {styles.size}>
                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Nombre de usuario'
                            />

                        </View>
                    </View>

                    <SeparatorText/>

                    <Text style = {styles.textDescription}>
                        Email
                    </Text>

                    <View style = {styles.size}>
                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Email'
                            />

                        </View>
                    </View>

                    <SeparatorText/>

                    <Text style = {styles.textDescription}>
                        Contraseña
                    </Text>

                    <View style = {styles.size}>
                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Contraseña'
                            />

                        </View>
                    </View>
                    
                </View>

                <View style = {styles.sizeButton}>
                    <TouchableOpacity 
                        onPress={() => props.navigation.navigate('Login')}
                        style = {styles.button}
                    >
                        <Text style = {styles.textButton}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <View style = {styles.div}/>

                    <TouchableOpacity 
                       
                        style = {styles.button}
                    >
                        <Text style = {styles.textButton}>
                            Registrarme
                        </Text>
                    </TouchableOpacity>    

                </View>

            </View>        

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height: '100%',
        width: Dimensions.get('window').width,        
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    imageContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 10
    },

    image:{
        width: 80,
        height: 80,
        borderRadius: 135,
        resizeMode: 'cover',
        borderWidth: 4,
        borderColor: '#fff',
    }, 

    nameAplication: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 2
    },

    registry:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 15,
        marginHorizontal: 25,
    },

    size:{
        width: '100%',
        alignItems: 'center'
    },

    sizeButton:{
        width: '90%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    textContainer: {
        backgroundColor: '#FFFFFF',
        marginTop: 50,
        width: '90%',
        borderRadius: 20,
        padding: 10
    },

    textDescription:{
        fontSize: 15,
        fontWeight: 'normal',
        color: 'black',
        marginHorizontal: 10
    },

    textImput:{
        backgroundColor: 'white',
        width: '95%',
        height: 35,
        borderRadius: 50,
        marginTop: 2,
        paddingLeft: 8,
        borderColor: '#37acff',
        borderWidth: 1
    },

    letterImput:{
        fontSize: 13,
        lineHeight: 35,
        padding: 8
    },

    button: {
        backgroundColor: '#1878ff',
        width: '36%',
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

    div:{
        width: 10
    }
}) 


export default Registry;
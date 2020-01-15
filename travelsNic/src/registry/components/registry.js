import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    PixelRatio,
} from 'react-native';

import SeparatorText from './../utilities/components/separatorText'

const Registry = (props) =>{

    const {
        userName,
        myUserEvent,
        email,
        myEmailEvent,
        password,
        myPasswordEvent,
        myEventPressSave,
        beenInSaving,
        navigateToLogin,
        selectPhotoTapped,
        avatarSource
    } = props;

    return(

        <ImageBackground
            source = {require('./../../assets/registry/registryBackground.png')}
            style = {styles.containerImage}
        > 

            <View  style = {styles.container}>

                <View style = {styles.header}>

                    <View style = {styles.alimg}>

                        <View>

                            <View
                                style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}
                            >
                                <Image 
                                        style={styles.avatar}
                                        source={avatarSource}    
                                />
                            </View>

                            <View style = {styles.iconContainer}>
                                <TouchableOpacity 
                                    onPress={selectPhotoTapped}
                                >
                                    <Image 
                                        style={styles.iconOption}
                                        source={require('./../../assets/registry/optionCamera.png')}    
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>
                        
                        <Text style = {styles.nameAplicacion}>
                            TravelsNic
                        </Text>

                    </View>
                    
                    <View>
                        <Text style = {styles.nameRegistry}>
                            Registrarme
                        </Text>
                    </View>

                </View>

                <View style = {styles.loginContainer}>

                    <View style = {styles.flex}>
                        <Text style = {styles.textDescription}>
                            Usuario
                        </Text>

                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Nombre de Usuario'
                                value = {userName}
                                onChangeText = {myUserEvent}
                                editable = {beenInSaving === 'cargando' ? false : true }
                            />

                            <View style = {styles.centerIcon}>

                                <TouchableOpacity>
                                    <Image
                                        source = {require('./../../assets/login/user.png')}
                                        style = {styles.icon}
                                    />
                                </TouchableOpacity>
                                
                            </View>

                        </View>

                        <SeparatorText/>

                        <Text style = {styles.textDescription}>
                            Email
                        </Text>

                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Correo electronico'
                                value = {email}
                                onChangeText = {myEmailEvent}
                                editable = {beenInSaving === 'cargando' ? false : true }
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

                        <Text style = {styles.textDescription}>
                            Contraseña
                        </Text>

                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Contraseña'
                                value = {password}
                                onChangeText = {myPasswordEvent}
                                editable = {beenInSaving === 'cargando' ? false : true }
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

                    </View>
                   
                    <View style = {styles.buttonContainer}>

                        <View style = {styles.containerRow}>

                            <TouchableOpacity 
                                onPress={navigateToLogin}
                                style = {styles.button}
                            >
                                <Text style = {styles.textButton}>
                                    Inicio
                                </Text>
                            </TouchableOpacity>

                            <View style = {styles.divButton}/>

                            <TouchableOpacity 
                                onPress = {myEventPressSave}
                                editable = {beenInSaving === 'cargando' ? false : true }
                                style = {styles.button}
                            >
                                <Text style = {styles.textButton}>
                                    Registrarme
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                    

                    <View>
                        <Text style = {styles.textButton}>
                            TravelsNic la mejor forma de viajar!!!
                        </Text>
                    </View>

                </View>

            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginTop: 10
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 135,
        borderColor: '#FFFFFF',
        borderWidth: 2
    },

    iconContainer:{
        marginTop: -55,
        marginLeft: 65
    },

    iconOption:{
        height: 35,
        width: 35
    },

    containerImage:{
        flex: 1,
        flexDirection: 'row',
        resizeMode: 'cover',
        justifyContent: 'space-between'
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        resizeMode: 'cover',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    alimg:{
        alignItems: 'center'
    },

    header:{
        resizeMode: 'cover',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        height: '35%',
    },

    nameAplicacion:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 5
    },

    nameRegistry: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginVertical: 26
    },

    loginContainer:{
        width: '90%',
        padding: 10,
        justifyContent: 'center',
        marginTop: 8,
        height: '65%',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center'
    },

    flex :{
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 10,
        width: '100%'
    },

    textDescription:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
    },

    textImput:{
        backgroundColor: 'white',
        width: '100%',
        height: 35,
        borderRadius: 50,
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

    buttonContainer:{
        borderRadius: 15,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: -20
    },
    
    containerRow: {
        flexDirection: 'row',
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        width: '100%',
    },

    divButton:{
        width: 10
    },

    button: {
        backgroundColor: '#1878ff',
        width: '36%',
        height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textButton: {
        fontSize: 14,
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

}) 

export default Registry;
import React from 'react';

import{
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,

} from 'react-native';

import Separator from './../utilities/components/separatorText'

const AboutUs = () =>{
    return(

        <ScrollView>
            <View style = {styles.container}>
                <View style = {styles.margin}>
                    <Text style = {styles.title}>
                        Informacion de la compañia desarrollora de software 
                    </Text>

                    <Text style = {styles.textSubTitle}>
                        Desarrollador
                    </Text>

                    <Text style = {styles.description}>
                        Aprosystem
                    </Text>

                    <Text style = {styles.textSubTitle}>
                        Version
                    </Text>

                    <Text style = {styles.description}>
                        1.0.1
                    </Text>

                </View>

                <View style = {styles.margin}>
                    <Text style = {styles.title}>
                        Asociado 
                    </Text>

                    <Text style = {styles.textSubTitle}>
                        Ministerio de Transporte e Infraestructura-daf 
                    </Text>

                    <View style = {styles.containerMti}>
                        <View style = {styles.imageMti}>
                            <Image
                                source = {require('./../../assets/settings/mti.jpg')}
                                style = {styles.image}
                            />
                        </View>

                        <View style = {styles.textMti}>
                            <Text  style = {styles.description}>
                                Esta aplicacion tiene informacion real proporcionado por el MTI, el 
                                cual las unidades de transporte deben de ligarse a las tarifias establecidas en la app.
                            </Text>
                        </View>

                    </View>
                </View>

                <View style = {styles.margin}>
                    <Text style = {styles.title}>
                        Contactanos en: 
                    </Text>

                    <View style = {styles.containerDescription}>
                        <View style = {styles.control}>
                            <Image
                                source = {require('./../../assets/settings/facebook.png')}
                                style = {styles.icon}
                            />
                        </View>

                        <View style = {styles.textControl}>
                            <Text style = {styles.subTitleContact}>
                                Facebook
                            </Text>
                            <Text style = {styles.contact}>
                                TravelsNic Nicaragua
                            </Text>
                        </View>
                    </View>

                    <Separator/>

                    <View style = {styles.containerDescription}>
                        <View style = {styles.control}>
                            <Image
                                source = {require('./../../assets/settings/instagram.png')}
                                style = {styles.icon}
                            />
                        </View>

                        <View style = {styles.textControl}>
                            <Text style = {styles.subTitleContact}>
                                Instragram
                            </Text>
                            <Text style = {styles.contact}>
                                TravelsNic Nicaragua
                            </Text>
                        </View>
                    </View>

                    <Separator/>

                    <View style = {styles.containerDescription}>
                        <View style = {styles.control}>
                            <Image
                                source = {require('./../../assets/settings/twitter.png')}
                                style = {styles.icon}
                            />
                        </View>

                        <View style = {styles.textControl}>
                            <Text style = {styles.subTitleContact}>
                                Twitter
                            </Text>
                            <Text style = {styles.contact}>
                                TravelsNic Nicaragua
                            </Text>
                        </View>
                    </View>

                    <Separator/>

                    <View style = {styles.containerDescription}>
                        <View style = {styles.control}>
                            <Image
                                source = {require('./../../assets/settings/youtube.png')}
                                style = {styles.icon}
                            />
                        </View>

                        <View style = {styles.textControl}>
                            <Text style = {styles.subTitleContact}>
                                YouTobe
                            </Text>
                            <Text style = {styles.contact}>
                                TravelsNic el transporte de Nicaragua
                            </Text>
                        </View>
                    </View>

                    <Separator/>

                    <View style = {styles.containerDescription}>
                        <View style = {styles.control}>
                            <Image
                                source = {require('./../../assets/settings/gmail.png')}
                                style = {styles.icon}
                            />
                        </View>

                        <View style = {styles.textControl}>
                            <Text style = {styles.subTitleContact}>
                                Gmail
                            </Text>
                            <Text style = {styles.contact}>
                                nictravelsnic@gmail.com
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        resizeMode: 'cover'
    },
    containerDescription:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        resizeMode: 'cover',
        width: '100%',
        alignItems: 'center',
        paddingLeft: 20,
        marginTop: 10
    },
    containerMti:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        resizeMode: 'cover',
        width: '100%',
        alignItems: 'center',
        marginTop: 15
    },
    control:{
        width: '15%',
    },
    textControl:{
        width: '85%',
    },
    imageMti:{
        width: '25%',
    },
    textMti:{
        width: '75%',
    },
    margin: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    title:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#193555'
    },
    icon: {
        width: 40,
        height: 40
    },
    textSubTitle:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 10
    },
    subTitleContact:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
    },
    description:{
        fontSize: 13,
        marginTop: 5,
        marginLeft: 20,
        color: '#7E7D7D',
        textAlign: 'justify'
    },
    contact:{
        fontSize: 13,
        color: '#7E7D7D'
    },

    image:{
        width: 90,
        height: 55,
    },
})

export default AboutUs;
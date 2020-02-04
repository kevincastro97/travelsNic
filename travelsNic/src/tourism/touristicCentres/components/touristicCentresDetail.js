import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';

import TransparentEffect from '../utilities/transparentEffect';
import SeparatorHorizontal from '../utilities/separatorHorizontal';

const TouristicCentresDetail = (props) =>{

    const { data } = props;

    return(
        <SafeAreaView>
            <ScrollView>
                <View style = {styles.container}>
                    <Image
                        source = {{ uri: data.image}}
                        style = {styles.image}
                    />

                    <TransparentEffect/>

                    <View style = {styles.textContainer}>
                        <Text  style = {styles.title}>
                            {data.title}
                        </Text>
                    </View>

                    <View style = {styles.containerInformation}>

                        <View style = {styles.centerTitle}>
                            <Text style = {styles.titleInformation}>
                                INFORMACION
                            </Text>
                        </View>

                        <Text style = {styles.descriptionInformation}>
                            {data.description}
                        </Text>
                    </View>

                    <View style = {styles.containerInformation}>

                        <View style = {styles.centerTitle}>
                            <Text style = {styles.titleInformation}>
                                DIRECCION
                            </Text>
                        </View>

                        <Text style = {styles.descriptionInformation}>
                            {data.direction}
                        </Text>
                    </View>

                    <View style = {styles.containerInformation}>

                        <View style = {styles.centerTitle}>
                            <Text style = {styles.titleInformation}>
                                CONTACTO
                            </Text>
                        </View>
         
                        <View style = {styles.directionContainer}>

                            <View style = {styles.directionContainer}>
                                <Image
                                    source = {require('./../../../assets/details/whatsapp.png')}
                                    style = {styles.whatsapp}
                                />
                                
                                <SeparatorHorizontal/>
                                
                                <Text>
                                    {data.whatsapp}
                                </Text>
                            </View>

                            <View style = {styles.directionContainer}>
                                <Image
                                    source = {require('./../../../assets/details/phone.png')}
                                    style = {styles.whatsapp}
                                />

                                <SeparatorHorizontal/>

                                <Text>
                                    {data.phone}
                                </Text>
                            </View>
                            
                        </View>

                        <View style = {styles.directionContainerX}>
                            <Image
                                source = {require('./../../../assets/details/email.png')}
                                style = {styles.whatsapp}
                            />

                            <SeparatorHorizontal/>

                            <Text>
                                {data.email}
                            </Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f4f6f9'
    },

    centerTitle:{
        width: '100%',
        alignItems: 'center'
    },

    directionContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    directionContainerX:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5
    },

    containerInformation:{
        backgroundColor: '#FFFFFF',
        padding: 8,
        marginTop: 10,
        borderRadius: 15,
        marginHorizontal: 5,
        justifyContent: 'space-between',
        borderColor: '#397f8b',
        borderTopWidth: 25
    },

    image:{
        width: '100%',
        height: 220
    },
    
    textContainer:{
        flexDirection: 'row',
        marginTop: -32,
        height: 25,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    title:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginHorizontal: 5,
        width: '60%'
    },

    place:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginHorizontal: 5
    },

    titleInformation: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: -30,
        color: '#FFFFFF'
    },

    descriptionInformation:{
        fontSize: 15,
        textAlign: 'justify',
        marginTop: 10
    },

    whatsapp:{
        height: 20,
        width: 20
    },
})

export default TouristicCentresDetail;
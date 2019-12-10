import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

import TransparentEffect from './../utilities/components//transparentEffect'
import SeparatorLine from './../utilities/components/separatorLine';


const DetailList = (props) =>{

    const  { headers } = props;


    return(
        <View style = {styles.container}>
            
            <Image
                source = {{ uri: headers.image }}
                style = {styles.image}
            />

            <TransparentEffect/>

            <View style = {styles.textContainer}>
                <Text  style = {styles.title}>
                    {headers.title}
                </Text>

                <Text  style = {styles.place}>
                    {headers.subTitle}
                </Text>
            </View>

            <View style = {styles.containerDescription}>
                <View style = {styles.containerSubTitle}>
                    <Text style = {styles.weather}>
                        Tiempo
                    </Text>

                    <Text style = {styles.rate}>
                        {headers.approximateTime}
                    </Text>
                </View>

                <View style = {styles.containerSubTitleRate}>
                    <Text style = {styles.weather}>
                        Tarifa
                    </Text>

                    <Text style = {styles.rate}>
                        {headers.rate}
                    </Text>
                </View>

            </View>

            <SeparatorLine/>

            <View style = {styles.containerInformation}>
                <Text style = {styles.subTitle}>
                    Detalle de horario y tiempo
                </Text>
            </View>

            <View>
                <Text style = {styles.informationDistance}>
                    Distancia: { headers.distance}
                </Text>

                <View style = {styles.containerInformation}>

                    <View>
                        <Text style = {styles.informationRow}>
                            Salida: { headers.exit}
                        </Text>
                    </View>

                    <View>

                    <Text style = {styles.informationRow}>
                        Llegada: {headers.arrival}
                        </Text>
                        
                    </View>
                    
                </View>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    image: {
        width: '100%',
        height: 220
    },

    textContainer:{
        flexDirection: 'row',
        marginTop: -35,
        height: 35,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    title:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginHorizontal: 5
    },

    place:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginHorizontal: 5
    },

    containerDescription:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10
    },

    containerSubTitle:{
        alignItems: 'baseline'
    },

    containerSubTitleRate:{
        alignItems: 'center'
    },

    weather:{
        fontSize: 15,
        fontWeight: 'bold'
    },

    rate:{
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'justify'
    },
    
    subTitle:{
        fontSize: 15,
        fontWeight: 'bold',
        marginHorizontal: 5
    },

    informationDistance:{
        fontSize: 14,
        marginHorizontal: 10,
        marginTop: 5,
    },

    informationRow:{
        fontSize: 14,
        marginHorizontal: 5
    },

    containerInformation:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginTop: 2
    }

})

export default DetailList;
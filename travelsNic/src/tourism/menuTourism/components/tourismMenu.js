import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import Effect from './../../utilities/effect'

const MenuTourism = (props) => {

    const {
        navigationToHotelAndRestaurant,
        navigationToSmallBusiness,
        navigationToTuristicCentres
    } = props;

    return(
        <View style = {styles.container}>

            <View style = {styles.fond}>
                <TouchableOpacity
                    onPress = {navigationToHotelAndRestaurant}
                >
                    <Image
                        source = {require('./../../../assets/hotel.jpg')}
                        style = {styles.image}
                    />

                    <Effect/>

                    <Text style = {styles.text}>
                        Hoteles y Restaurantes
                    </Text>
                    
                </TouchableOpacity>
            </View>
            
            <View style = {styles.fond}>
                <TouchableOpacity
                    onPress = {navigationToTuristicCentres}
                >
                    <Image
                        source = {require('./../../../assets/turismo.jpg')}
                        style = {styles.image}
                    />

                    <Effect/>

                    <Text style = {styles.text}>
                        Centros Turisticos
                    </Text>
                    
                </TouchableOpacity>
            </View>

            <View style = {styles.fond}>
                <TouchableOpacity
                    onPress = {navigationToSmallBusiness}
                >
                    <Image
                        source = {require('./../../../assets/negocios.jpg')}
                        style = {styles.image}
                    />

                    <Effect/>

                    <Text style = {styles.text}>
                        Pequeños Negocios
                    </Text>
                    
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f6f9',
        padding: 10,
        justifyContent: 'space-between',
        flex: 1
    },

    image:{
        width: '100%',
        height: '100%',
        borderRadius: 15
    },

    fond: {
        width: '100%',
        height: '30%',
    },

    text:{
        color: '#FFFFFF',
        marginTop: -30,
        paddingHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }

})

export default MenuTourism;
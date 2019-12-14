import React from 'react'

import Headerd from './../utilities/containers/headerContainer'

import {
    View,
    Image
} from 'react-native'

const Map =(props)=>{
    
    return(
        <View>

            <Headerd/>

            <Image
                source = {require('./../../assets/mapa.png')}
            />
        </View>
    );
}

export default Map;
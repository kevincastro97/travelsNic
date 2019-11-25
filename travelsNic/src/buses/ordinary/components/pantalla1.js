import React from 'react'

import {
    View,Text,Button
} from 'react-native'

const Pantalla1 =(props)=>{
    
    return(
        <View>
            <Text>Pantalla1</Text>

            <Button
                title= 'navegar pantalla2'
            />
        </View>
    );
}

export default Pantalla1;
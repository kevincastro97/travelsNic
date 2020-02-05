import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';


const SeparatorLine = () =>{
    return(
        <View style = {styles.container}/>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 5,
        borderTopWidth: 0.4,
        borderColor: '#BAB6B6',
        width: '100%'
    }
})

export default SeparatorLine;
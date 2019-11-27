import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

const ExpressTransparentEffect = () =>{

    return(
        <View style = {styles.container}/>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000000',
        opacity: 0.5,
        height: 35,
        marginTop: -35
    }
})

export default ExpressTransparentEffect;
import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

const TransparentEffect = () =>{

    return(
        <View style = {styles.container}/>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000000',
        opacity: 0.5,
        height: 37,
        marginTop: -37
    }
})

export default TransparentEffect;
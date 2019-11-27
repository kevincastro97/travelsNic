import React from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';

const ExpressSeparatorLine = (props) =>{

    return(
        <View style = {styles.container}></View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 5,
        borderTopWidth: 0.4,
        borderColor: '#BAB6B6',
    }
})


export default ExpressSeparatorLine;
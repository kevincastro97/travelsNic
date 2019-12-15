import React from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';

const SeparatorHorizontal = (props) =>{

    return(
        <View style = {styles.container}></View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: 5
    }
})


export default SeparatorHorizontal;
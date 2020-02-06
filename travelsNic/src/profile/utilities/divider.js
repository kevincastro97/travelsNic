import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

const Divider = () =>{
    return(
        <View style = {styles.container}/>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 50
    }
})

export default Divider;
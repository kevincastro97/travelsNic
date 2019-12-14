import React from 'react';

import {
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const ButtonMap = (props) =>{

    const { navigateToSettings } = props;

    return(
        <TouchableOpacity
            onPress = {navigateToSettings}
            style = {styles.fond}
        >
            <Image
                source = {require('./../../../assets/menu/Options.png')}
                style = {styles.image}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image:{
        width:15,
        height: 20,
        marginHorizontal: 10
    },

    fond:{
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    }
})

export default ButtonMap;
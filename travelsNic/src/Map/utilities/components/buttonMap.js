import React from 'react';

import {
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const ButtonMap = () =>{

    return(
        <TouchableOpacity

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
        width:20,
        height: 25,
        marginHorizontal: 10
    },
})

export default ButtonMap;
import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const ExpressSeason = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.season}>
                Caracteristicas
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginTop: 10
    },

    season: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ExpressSeason;

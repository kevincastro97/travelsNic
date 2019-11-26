import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Season = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.season}>
                Estaciones del Autobus
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

export default Season;

import React from 'react';
import { withNavigation } from 'react-navigation'

import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,

} from 'react-native';

export  const SearchFor = (props) => {

    return (
        
        <View style={styles.container}>
            <View style={styles.seeker}>
                <TextInput
                    style={styles.textBox}
                    placeholder='Buscar...'
                    placeholderTextColor={'#aaaeae'}
                />
            </View>

            <TouchableOpacity
                onPress = {()=> props.navigation.navigate('OrdinaryDetail')}
            >
                <View  style={styles.modal}>
                    <Image
                        source = {require('./../../../assets/header/filter.png')}
                        style={styles.image}
                    />
                </View>
            </TouchableOpacity>

        </View>
        
    );

};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    seeker: {
        backgroundColor: '#FFFFFF',
        height: 40,
        borderRadius: 48,
        marginHorizontal: 5,
        marginVertical: 10,
        flex: 1,
        borderColor: '#069dab',
        borderWidth: 1,
    },

    textBox: {
        backgroundColor: 'transparent',
        color: 'white',
        flex: 1,
        height: 40,
        marginHorizontal: 15,
        color: 'black'
    },

    modal:{
        backgroundColor: '#FFFFFF',
        marginRight: 5,
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        borderColor: '#069dab',
        borderWidth: 1
    },

    image:{
        height: 20,
        width: 20
    }
}); 


export default withNavigation(SearchFor);

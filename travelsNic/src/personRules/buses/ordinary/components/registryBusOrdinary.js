import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

const RegistryBusOrdinary = (props) =>{
    return(
        <ScrollView>
            <View>
                <Text>
                    Ingrese el nombre
                </Text>

                <View style = {styles.caja}>
                    <TextInput
                         placeholder = 'Nombre del autobus'
                    />
                </View>

                <Text>
                    Ingrese el nombre
                </Text>

                <View style = {styles.caja}>
                    <TextInput
                         placeholder = 'Dueño'
                    />
                </View> 
            
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    caja:{
        borderColor: '#000000',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15
    }
})

export default RegistryBusOrdinary;
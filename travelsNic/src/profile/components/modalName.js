import React from 'react';

import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Text

} from 'react-native';

const SearchFor = (props) => {

    const {
        modalVisible,
        onChangeOpen,
        onChangeClose,
    } = props;

    return (
        
        <View style={styles.container}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>

                    <View style={styles.center}>
                        <Text style = {styles.textDescriptiontitle}>
                            Filtro de Autobuses Expresos
                        </Text>
                    </View>

                    <View style = {styles.buttonContainer}>

                        <TouchableOpacity 
                            onPress = {onChangeClose}
                            style = {styles.button}
                        >
                            <Text style = {styles.textButton}>
                                Aceptar
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </Modal>

            <TouchableOpacity
                onPress = {onChangeOpen}
            >
                <View  style={styles.modal}>
                    <Image
                        source = {require('./../../assets/header/filter.png')}
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
        alignItems: 'center'
    },

    center:{
        width: '100%',
        alignItems: 'center',
        marginVertical: 20
    },

    seeker: {
        backgroundColor: '#FFFFFF',
        height: 40,
        borderRadius: 48,
        marginHorizontal: 5,
        marginVertical: 10,
        flex: 1,
        borderColor: '#0c64a2',
        borderWidth: 1,
    },

    textBox: {
        backgroundColor: 'transparent',
        color: 'white',
        flex: 1,
        height: 40,
        marginHorizontal: 15,
        color: 'black',
        fontSize: 15,
        padding: 5
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
        justifyContent: 'center',
        alignItems: 'center', 
        borderColor: '#0c64a2',
        borderWidth: 1
    },

    image:{
        height: 20,
        width: 20
    },

    modalContainer:{
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: '50%',
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 18,
        marginVertical: 180,
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'column',
    },

    buttonContainer:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    button: {
        backgroundColor: '#1878ff',
        width: '50%',
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 5
    },

    textImput:{
        backgroundColor: 'white',
        width: '100%',
        height: 35,
        borderRadius: 50,
        paddingLeft: 8,
        borderColor: '#37acff',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        resizeMode: 'cover',
    },
    letterImput:{
        fontSize: 14,
        padding: 8,
    },
    textDescription:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
    },

    textDescriptiontitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },

}); 

export default SearchFor

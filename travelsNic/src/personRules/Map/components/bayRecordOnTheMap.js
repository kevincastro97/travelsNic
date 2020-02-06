import React from 'react';

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Picker
} from 'react-native';

import Separator from './../utilities/separatorBahiaMap';

const BayRecordOnTheMap = (props) =>{

    const { 
        loadingState,
        title,
        myOnChangeTitle, 
        icon,
        myOnChangeIcon,
        latitude,
        myOnChangeLatitude,
        longitude,
        myOnChangeLongitude,
        myEventSave
    } = props;

    return(

        <ImageBackground
            source = {require('./../../../assets/login/lBackground.png')}
            style = {styles.imageContainer}
        > 
            <ScrollView>

                <View  style = {styles.container}>

                    <Text style = {styles.title}>
                        Bahias del Mapa
                    </Text>

                    <Separator/>

                    <Image
                        source = {require('./../../../assets/bus.png')}
                        style = {styles.imageFond}
                    />

                    <Separator/>

                    <View style = {styles.row}>
                        <View style = {styles.columnDirection}>
                            <Text style = {styles.textDescription}>
                                Ingrese el Nombre
                            </Text>

                            <View style = {styles.textImput}>

                                <TextInput
                                    style = {styles.letterImput}
                                    placeholder = 'Nombre'
                                    value = {title}
                                    onChangeText = {myOnChangeTitle}
                                    maxLength = { 20 }
                                    editable = {loadingState === 'cargando' ? false : true }
                                />
                            </View>
                        </View>

                    </View>

                    <Separator/>

                    <View style = {styles.row}>
                        <View style = {styles.columnDirection}>
                            <Text style = {styles.textDescription}>
                                Ingrese la latitud
                            </Text>

                            <View style = {styles.textImput}>

                                <TextInput
                                    style = {styles.letterImput}
                                    placeholder = 'Latitud'
                                    value = {String(latitude)}
                                    onChangeText = {myOnChangeLatitude}
                                    keyboardType={'numeric'}
                                    maxLength = {9}
                                    editable = {loadingState === 'cargando' ? false : true }
                                />
                            </View>
                        </View>

                    </View>

                    <Separator/>

                    <View style = {styles.row}>
                        <View style = {styles.columnDirection}>
                            <Text style = {styles.textDescription}>
                                Ingrese la longitud
                            </Text>

                            <View style = {styles.textImput}>

                                <TextInput
                                    style = {styles.letterImput}
                                    placeholder = 'Longitud'
                                    value = {String(longitude)}
                                    onChangeText = {myOnChangeLongitude}
                                    keyboardType={'numeric'}
                                    maxLength = {10}
                                    editable = {loadingState === 'cargando' ? false : true }
                                />
                            </View>
                        </View>

                    </View>

                   <Separator/>

                   <View style={styles.containerPicker}>

                        <Picker
                            selectedValue = { icon }
                            style = { styles.picker }
                            onValueChange = { myOnChangeIcon }
                        >
                            <Picker.Item 
                                label = 'Seleccionar icono'
                                value = '' 
                            />
                            <Picker.Item 
                                label = 'Autobus'
                                value = 'https://firebasestorage.googleapis.com/v0/b/travelsnic-d524e.appspot.com/o/map%2Fautobus.png?alt=media&token=c4f5a05e-1410-45cd-99d4-e84d3d8b3fb1' 
                            />
                            <Picker.Item 
                                label = 'Hotel y Restaurante'
                                value = 'https://firebasestorage.googleapis.com/v0/b/travelsnic-d524e.appspot.com/o/map%2FhotelAndRestaurant.png?alt=media&token=1041372a-5c78-4c20-9388-27247528c55e' 
                            />
                            <Picker.Item 
                                label = 'Pequeños Negocios'
                                value = 'https://firebasestorage.googleapis.com/v0/b/travelsnic-d524e.appspot.com/o/map%2Fdeals.png?alt=media&token=8c62a855-4fad-4b5d-80f8-a6c9006e0644' 
                            />
                            <Picker.Item 
                                label = 'Centros Turisticos'
                                value = 'https://firebasestorage.googleapis.com/v0/b/travelsnic-d524e.appspot.com/o/map%2Ftouristic.png?alt=media&token=b4887e39-4f58-47c7-b252-8798718c54b3' 
                            />

                        </Picker>

                    </View>

                    <TouchableOpacity 
                        onPress = {myEventSave}
                        editable = {loadingState === 'cargando' ? false : true }
                        style = {styles.button}
                    >
                        <Text style = {styles.textButton}>
                            Guardar
                        </Text>
                    </TouchableOpacity>

                </View>

                <Separator/>

            </ScrollView>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    containerPicker:{
        height: 40, 
        width: '100%', 
        borderRadius: 40,
        backgroundColor: '#FFFFFF',
        borderColor: '#37acff',
        borderWidth: 1,
        marginTop: 5,
        paddingLeft: 5
    },

    picker: {
        height: 40, 
        width: '95%',
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: '100%'
    },

    textDescription:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        width: '90%',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },

    textImput:{
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        borderRadius: 50,
        marginTop: 5,
        paddingLeft: 8,
        borderColor: '#37acff',
        borderWidth: 1,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },

    columnDirection: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%'
    },

    imageFond: {
        height: 200,
        width: '100%',
        borderRadius: 15
    },

    button: {
        backgroundColor: '#1878ff',
        width: '100%',
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },

    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default BayRecordOnTheMap;
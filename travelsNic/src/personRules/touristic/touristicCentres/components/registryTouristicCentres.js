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

import Separator from '../../utilities/separatorForm'

const RegistryTouristicCentres = (props) =>{

    const { 
        loadingState,
        title,
        myOnChangeTitle, 
        price, 
        myOnChangePrice,
        phone, 
        myOnChangePhone,
        whatsapp, 
        myOnChangeWhatsapp,
        origin, 
        myOnChangeOrigin,
        image,
        myOnChangeImage,
        email,
        myOnChangeEmail,
        direction,
        myOnChangeDirection,
        description,
        myOnChangeDescription,
        department,
        myOnChangeDepartment,
        myEventSave
    } = props;

    return(

        <ImageBackground
            source = {require('./../../../../assets/login/lBackground.png')}
            style = {styles.imageContainer}
        > 
            <ScrollView>

                <View  style = {styles.container}>

                    <Text style = {styles.title}>
                        Centros Turisticos
                    </Text>

                    <Separator/>

                    <Image
                        source = {require('./../../../../assets/bus.png')}
                        style = {styles.imageFond}
                    />

                    <Separator/>

                    <View style = {styles.row}>
                        <View style = {styles.columnDirection}>
                            <Text style = {styles.textDescription}>
                                Nombre del centro turistico
                            </Text>

                            <View style = {styles.textImput}>

                                <TextInput
                                    style = {styles.letterImput}
                                    placeholder = 'Nombre del centro turistico'
                                    value = {title}
                                    onChangeText = {myOnChangeTitle}
                                    maxLength = {50}
                                    editable = {loadingState === 'cargando' ? false : true }
                                />
                            </View>
                        </View>

                    </View>

                    <Separator/>

                    <View style = {styles.columnDirection}>
                        <Text style = {styles.textDescription}>
                            Email
                        </Text>

                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Correo Electronico'
                                keyboardType={'email-address'}
                                value = {email}
                                onChangeText = {myOnChangeEmail}
                                maxLength = {50}
                                editable = {loadingState === 'cargando' ? false : true }
                            />
                        </View>
                    </View>

                    <Separator/>

                    <View style = {styles.columnDirection}>
                        <Text style = {styles.textDescription}>
                            Direccion
                        </Text>

                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Ingrese la direccion'
                                value = {direction}
                                onChangeText = {myOnChangeDirection}
                                maxLength = {50}
                                editable = {loadingState === 'cargando' ? false : true }
                            />
                        </View>
                    </View>

                    <Separator/>

                    <View style = {styles.row}>
                        <View style = {styles.columnDirection}>
                            <Text style = {styles.textDescription}>
                                Origen
                            </Text>

                            <View style = {styles.textImput}>

                                <TextInput
                                    style = {styles.letterImput}
                                    placeholder = 'Municipio'
                                    value = {origin}
                                    onChangeText = {myOnChangeOrigin}
                                    maxLength = {30}
                                    editable = {loadingState === 'cargando' ? false : true }
                                />
                            </View>
                        </View>
                    </View>

                    <Separator/>

                   <View style = {styles.columnDirection}>
                        <Text style = {styles.textDescription}>
                            Departamento
                        </Text>
                   </View>


                    <View style={styles.containerPicker}>

                        <Picker
                            selectedValue = { department }
                            style = { styles.picker }
                            onValueChange = { myOnChangeDepartment }
                        >
                            <Picker.Item 
                                label = 'Seleccionar departamento'
                                value = '' 
                            />

                            <Picker.Item 
                                label = 'Atlantico Norte (RAAN)'
                                value = 'RAAN' 
                            />
                            <Picker.Item 
                                label = 'Atlantico Sur (RAAS)'
                                value = 'RAAS' 
                            />
                            <Picker.Item 
                                label = 'Boaco'
                                value = 'Boaco' 
                            />
                            <Picker.Item 
                                label = 'Carazo'
                                value = 'Carazo' 
                            />
                            <Picker.Item 
                                label = 'Chinandega'
                                value = 'Chinandega' 
                            />
                            <Picker.Item 
                                label = 'Chontales'
                                value = 'Chontales' 
                            />
                            <Picker.Item 
                                label = 'Esteli'
                                value = 'Esteli' 
                            />
                            <Picker.Item 
                                label = 'Granada'
                                value = 'Granada' 
                            />
                            <Picker.Item 
                                label = 'Jinotega'
                                value = 'Jinotega' 
                            />
                            <Picker.Item 
                                label = 'Leon'
                                value = 'Leon' 
                            />
                            <Picker.Item 
                                label = 'Madriz'
                                value = 'Madriz' 
                            />
                            <Picker.Item 
                                label = 'Managua'
                                value = 'Managua' 
                            />
                            <Picker.Item 
                                label = 'Masaya'
                                value = 'Masaya' 
                            />
                            <Picker.Item 
                                label = 'Matagalpa'
                                value = 'Matagalpa' 
                            />
                            <Picker.Item 
                                label = 'Nueva Segovia'
                                value = 'Nueva Segovia' 
                            />
                            <Picker.Item 
                                label = 'Rio San Juan'
                                value = 'Rio San Juan' 
                            />
                            <Picker.Item 
                                label = 'Rivas'
                                value = 'Rivas' 
                            />

                        </Picker>
                        
                    </View>

                    <Separator/>

                    <View style = {styles.columnDirection}>
                        <Text style = {styles.textDescription}>
                            Descripcion
                        </Text>

                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Ingrese la descripcion'
                                value = {description}
                                onChangeText = {myOnChangeDescription}
                                maxLength = {200}
                                editable = {loadingState === 'cargando' ? false : true }
                            />
                        </View>
                    </View>

                    <Separator/>

                    <View style = {styles.columnDirection}>
                        <Text style = {styles.textDescription}>
                            Precio
                        </Text>

                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Precio'
                                onChangeText = {myOnChangePrice}
                                value = {price}
                                maxLength = { 20 }
                                editable = {loadingState === 'cargando' ? false : true }
                            />
                        </View>
                    </View>

                    <Separator/>

                    <View style = {styles.row}>

                        <View style = {styles.column4}>
                            <Text style = {styles.textDescription}>
                                whatsapp
                            </Text>

                            <View style = {styles.textImput}>

                                <TextInput
                                    style = {styles.letterImput}
                                    placeholder = 'whatsapp'
                                    onChangeText = {myOnChangeWhatsapp}
                                    value = {whatsapp}
                                    keyboardType={'numeric'}
                                    maxLength = {8}
                                    editable = {loadingState === 'cargando' ? false : true }
                                />
                            </View>
                        </View>

                        <View style = {styles.column4}>
                            <Text style = {styles.textDescription}>
                                Telefono
                            </Text>

                            <View style = {styles.textImput}>

                                <TextInput
                                    style = {styles.letterImput}
                                    placeholder = 'Telefono'
                                    onChangeText = {myOnChangePhone}
                                    value = {phone}
                                    keyboardType={'numeric'}
                                    maxLength = {8}
                                    editable = {loadingState === 'cargando' ? false : true }
                                />
                            </View>
                        </View>
                   </View>

                   <Separator/>

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

    column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '80%'
    },

    column1: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '20%'
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

    column3: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '48%'
    },

    column4: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '48%'
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

export default RegistryTouristicCentres;
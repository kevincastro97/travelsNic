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
    Picker,
    Modal
} from 'react-native';

import Separator from './../utilities/separatorForm'
import SeparatorHorizontal from './../utilities/separatorHorizontal'

const RegistryHotelAndRestaurant = (props) =>{

    const {
        title,
        onChangeTitle,
        approximateTime,
        onChangeApproximateTime,
        arrivalTime,
        onChangeArrivalTime,
        department,
        onChangeDepartment,
        departureTime,
        onChangeDepartureTime,
        distance,
        onChangeDistance,
        image,
        line,
        onChangeLine,
        origin,
        onChangeOrigin,
        passengers,
        onChangePassengers,
        price,
        onChangePrice,
        myEventSave,

        loadingState,
        modal,
        onChangeOpenModal,
        onChangeCloseModal

    } = props;

    return(

        <ImageBackground
            source = {require('./../../../../assets/login/lBackground.png')}
            style = {styles.imageContainer}
        > 
            <ScrollView>

                <View  style = {styles.container}>

                    <View style = {styles.row}>
                        
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modal}
                        >
                            <ScrollView>
                                <View style={styles.modalContainer}>

                                    <View style={styles.leng}>

                                        <View>

                                            <Text style = {styles.titleM}>
                                                Nombre de la estacion
                                            </Text>

                                            <View style = {styles.textImput}>

                                                <TextInput
                                                    style = {styles.letterImput}
                                                    placeholder = 'Nombre de la estacion'
                                                />
                                            </View>

                                        </View>

                                        <Separator/>

                                        <View>

                                            <Text style = {styles.titleM}>
                                                Distancia
                                            </Text>

                                            <View style = {styles.textImput}>

                                                <TextInput
                                                    style = {styles.letterImput}
                                                    placeholder = 'Distancia'
                                                />
                                            </View>

                                        </View>

                                        <Separator/>

                                        <View>

                                            <Text style = {styles.titleM}>
                                                Precio
                                            </Text>

                                            <View style = {styles.textImput}>

                                                <TextInput
                                                    style = {styles.letterImput}
                                                    placeholder = 'Precio'
                                                />
                                            </View>

                                        </View>

                                        <Separator/>

                                        <View>

                                            <Text style = {styles.titleM}>
                                                Hora
                                            </Text>

                                            <View style = {styles.textImput}>

                                                <TextInput
                                                    style = {styles.letterImput}
                                                    placeholder = 'Hora'
                                                />
                                            </View>

                                        </View>

                                        <Separator/>

                                        <View>

                                            <Text style = {styles.titleM}>
                                                Tiempo
                                            </Text>

                                            <View style = {styles.textImput}>

                                                <TextInput
                                                    style = {styles.letterImput}
                                                    placeholder = 'Tiempo'
                                                />
                                            </View>

                                        </View>

                                        <Separator/>

                                        <View>

                                            <Text style = {styles.titleM}>
                                                Bahia
                                            </Text>

                                            <View style = {styles.textImput}>

                                                <TextInput
                                                    style = {styles.letterImput}
                                                    placeholder = 'Bahia'
                                                />
                                            </View>

                                        </View>

                                        <Separator/>

                                        <View>

                                            <Text style = {styles.titleM}>
                                                Numero de la estacion
                                            </Text>

                                            <View style = {styles.textImput}>

                                                <TextInput
                                                    style = {styles.letterImput}
                                                    placeholder = 'Numero de la estacion'
                                                />
                                            </View>

                                        </View>

                                        <Separator/>

                                        <View style = {styles.buttonContainer}>

                                            <TouchableOpacity 
                                                onPress = {onChangeCloseModal}
                                                style = {styles.buttonModal}
                                            >
                                                <Text style = {styles.textButton}>
                                                    Cancelar
                                                </Text>
                                            </TouchableOpacity>

                                            <SeparatorHorizontal/>

                                            <TouchableOpacity 
                                                onPress = {onChangeCloseModal}
                                                style = {styles.buttonModal}
                                            >
                                                <Text style = {styles.textButton}>
                                                    Aceptar
                                                </Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>

                                </View>
                            </ScrollView>
                        </Modal>
                    </View>

                    <Text style = {styles.title}>
                        Autobuses Ordinarios
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
                                Nombre del autobus
                            </Text>

                            <View style = {styles.textImput}>

                                <TextInput
                                    style = {styles.letterImput}
                                    placeholder = 'Nombre del autobus'
                                    value = {title}
                                    onChangeText = {onChangeTitle}
                                    maxLength = {25}
                                    editable = {loadingState === 'cargando' ? false : true }
                                />
                            </View>
                        </View>

                    </View>

                    <Separator/>

                    <View style = {styles.columnDirection}>
                        <Text style = {styles.textDescription}>
                            Linea
                        </Text>

                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Linea de recorrido'
                                value = {line}
                                onChangeText = {onChangeLine}
                                maxLength = {25}
                                editable = {loadingState === 'cargando' ? false : true }
                            />
                        </View>
                    </View>

                    <Separator/>

                    <View style = {styles.columnDirection}>
                        <Text style = {styles.textDescription}>
                            Distancia de recorrido
                        </Text>

                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = 'Distancia'
                                value = {distance}
                                onChangeText = {onChangeDistance}
                                maxLength = {25}
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
                                    onChangeText = {onChangeOrigin}
                                    maxLength = {25}
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
                            onValueChange = { onChangeDepartment }
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

                    <View style = {styles.row}>

                        <View style = {styles.column4}>
                            <Text style = {styles.textDescription}>
                                Hora de salida
                            </Text>

                            <View style = {styles.textImput}>

                                <TextInput
                                    style = {styles.letterImput}
                                    placeholder = 'Horario'
                                    value = {departureTime}
                                    onChangeText = {onChangeDepartureTime}
                                    maxLength = {10}
                                    editable = {loadingState === 'cargando' ? false : true }
                                />
                            </View>
                        </View>

                        <View style = {styles.column4}>
                            <Text style = {styles.textDescription}>
                                Hora de llegada
                            </Text>

                            <View style = {styles.textImput}>

                                <TextInput
                                    style = {styles.letterImput}
                                    placeholder = 'Horario'
                                    value = {arrivalTime}
                                    onChangeText = {onChangeArrivalTime}
                                    maxLength = {10}
                                    editable = {loadingState === 'cargando' ? false : true }
                                />
                            </View>
                        </View>
                   </View>

                   <Separator/>

                   <View style = {styles.row}>

                        <View style = {styles.column4}>
                            <Text style = {styles.textDescription}>
                                Pasajeros
                            </Text>

                            <View style = {styles.textImput}>

                                <TextInput
                                    style = {styles.letterImput}
                                    placeholder = 'Cantidad'
                                    value = {String(passengers)}
                                    onChangeText = {onChangePassengers}
                                    maxLength = {2}
                                    keyboardType={'numeric'}
                                    editable = {loadingState === 'cargando' ? false : true }
                                />
                            </View>
                        </View>

                        <View style = {styles.column4}>
                            <Text style = {styles.textDescription}>
                                Precio
                            </Text>

                            <View style = {styles.textImput}>

                                <TextInput
                                    style = {styles.letterImput}
                                    placeholder = 'Precio'
                                    value = {String(price)}
                                    onChangeText = {onChangePrice}
                                    keyboardType={'numeric'}
                                    maxLength = {3}
                                    editable = {loadingState === 'cargando' ? false : true }
                                />
                            </View>
                        </View>
                    </View>

                    <Separator/>

                    <View style = {styles.row}>
                        <View style = {styles.columnDirection}>
                            <Text style = {styles.textDescription}>
                                Tiempo aproximado
                            </Text>

                            <View style = {styles.textImput}>

                                <TextInput
                                    style = {styles.letterImput}
                                    placeholder = 'Tiempo'
                                    value = {approximateTime}
                                    onChangeText = {onChangeApproximateTime}
                                    maxLength = {25}
                                    editable = {loadingState === 'cargando' ? false : true }
                                />
                            </View>
                        </View>
                    </View>

                    <Separator/>

                    <View style = {styles.row}>
                        <TouchableOpacity 
                            style = {styles.button}
                            onPress = {myEventSave}
                            editable = {loadingState === 'cargando' ? false : true }
                        >
                            <Text style = {styles.textButton}>
                                Guardar
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style = {styles.button}
                            onPress = { onChangeOpenModal }
                        >
                            <Text style = {styles.textButton}>
                                Agregar Estaciones
                            </Text>
                        </TouchableOpacity>
                    </View>

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
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: '100%',
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
        width: '49%',
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

    modalContainer:{
        width: '100%',
        height: '100%',
        padding: 15,
        justifyContent: 'space-between',
        flexDirection: 'column',
    },

    leng:{
        backgroundColor: '#f4f6f9',
        width: '100%',
        height: '100%',
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'column',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#0c64a2',
    },

    buttonContainer:{
        width: '100%',
        justifyContent:  'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    buttonModal: {
        backgroundColor: '#1878ff',
        width: '45%',
        height: 35,
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

    text:{
        marginTop: 6,
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        fontSize: 15,
    },

    titleM:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
})

export default RegistryHotelAndRestaurant;
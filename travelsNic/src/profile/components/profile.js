import React from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TextInput,
    Modal,
} from 'react-native';

import Separator from './../utilities/separatorProfile';
import SeparatorLine from './../utilities/separatorLine';
import Divider from './../utilities/divider';
import SeparatorHorizontal from './../utilities/separatorHorizontal'

const Profile = (props) => {

    const {
        modalVisible,
        onChangeOpen,
        onChangeClose,
        modal,
        onChangeOpenModal,
        onChangeCloseModal
    } = props;


    return(

        <ScrollView>

            <View  style = {styles.container}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.modalContainer}>

                        <View style={styles.center}>
                            <Text style = {styles.title}>
                                Escribe tu nombre
                            </Text>

                            <TextInput
                                style = {styles.text}
                                placeholder = 'Nombre'
                            />
                        </View>

                        <View style = {styles.buttonContainer}>

                            <TouchableOpacity 
                                onPress = {onChangeClose}
                                style = {styles.button}
                            >
                                <Text style = {styles.textButton}>
                                    Cancelar
                                </Text>
                            </TouchableOpacity>

                            <SeparatorHorizontal/>

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

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal}
                >
                    <View style={styles.modalContainer}>

                        <View style={styles.center}>
                            <Text style = {styles.title}>
                                Escribe tu Contraseña
                            </Text>

                            <TextInput
                                style = {styles.text}
                                placeholder = 'Contraseña'
                            />
                        </View>

                        <View style = {styles.buttonContainer}>

                            <TouchableOpacity 
                                onPress = {onChangeClose}
                                style = {styles.button}
                                onPress = {onChangeCloseModal}
                            >
                                <Text style = {styles.textButton}>
                                    Cancelar
                                </Text>
                            </TouchableOpacity>

                            <SeparatorHorizontal/>

                            <TouchableOpacity 
                                onPress = {onChangeCloseModal}
                                style = {styles.button}
                            >
                                <Text style = {styles.textButton}>
                                    Aceptar
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Modal>
                
                <Separator/>

                <Image
                    source = {require('./../../assets/simba.jpg')}
                    style = {styles.image}
                />

                <Divider/>

                <TouchableOpacity 
                    style = {styles.row}
                    onPress = {onChangeOpen}
                >

                    <View style = {styles.column}>
                        <Image
                            source = {require('./../../assets/profile/user.png')}
                            style = {styles.icon}
                        />
                    </View>

                    <View style = {styles.column1}>
                        <Text style = {styles.title}>
                            Nombre
                        </Text>

                        <Text style = {styles.subTitle}>
                            Kevin Castro
                        </Text>
                    </View>

                    <View style = {styles.column2}>

                        <TouchableOpacity
                            onPress = {onChangeOpen}
                        >
                            <View style = {styles.fondIcon}>
                                <Image
                                    source = {require('./../../assets/profile/edit.png')}
                                    style = {styles.edit}
                                />
                            </View>
                        </TouchableOpacity>
                        
                    </View>

                </TouchableOpacity>

                <Separator/>

                <SeparatorLine/>

                <Separator/>

                <TouchableOpacity style = {styles.row}>

                    <View style = {styles.column}>
                        <Image
                            source = {require('./../../assets/profile/mail.png')}
                            style = {styles.icon}
                        />
                    </View>

                    <View style = {styles.column1}>
                        <Text style = {styles.title}>
                            Correo Electronico
                        </Text>

                        <Text style = {styles.subTitle}>
                            kc83208@gmail.com
                        </Text>
                    </View>

                    <View style = {styles.column2}/>

                </TouchableOpacity>

                <Separator/>

                <SeparatorLine/>

                <Separator/>

                <TouchableOpacity 
                    style = {styles.row}
                    onPress = {onChangeOpenModal}
                >

                    <View style = {styles.column}>
                        <Image
                            source = {require('./../../assets/profile/lock.png')}
                            style = {styles.icon}
                        />
                    </View>

                    <View style = {styles.column1}>
                        <Text style = {styles.title}>
                            Contraseña
                        </Text>

                        <Text style = {styles.subTitle}>
                            123456
                        </Text>
                    </View>

                    <View style = {styles.column2}>

                        <TouchableOpacity
                            onPress = {onChangeOpenModal}
                        >
                            <View style = {styles.fondIcon}>
                                <Image
                                    source = {require('./../../assets/profile/edit.png')}
                                    style = {styles.edit}
                                />
                            </View>
                        </TouchableOpacity>
                        
                    </View>

                </TouchableOpacity>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: '100%'
    },

    image:{
        width: 150,
        height: 150,
        borderColor: '#FAB96B',
        borderWidth: 3,
        borderRadius: 100
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        //backgroundColor: '#FAB96B',
    },

    column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '15%',
        //backgroundColor: 'red'
    },

    column1: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '70%',
        //backgroundColor: 'green'
    },

    column2:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '15%',
        //backgroundColor: 'yellow',
        alignItems: 'flex-end'
    },

    icon:{
        width: 25,
        height: 25
    },

    edit:{
        width: 15,
        height: 15
    },

    fondIcon:{
        backgroundColor: '#f4f6f9',
        height: 35,
        width: 35,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },

    subTitle:{
        fontSize: 16,
        fontWeight: 'normal',
        color: 'black',
        marginTop: 5
    },
    
    modalContainer:{
        backgroundColor: '#f4f6f9',
        width: '92%',
        height: '30%',
        marginHorizontal: 14,
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'column',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: 308
    },

    buttonContainer:{
        width: '100%',
        justifyContent:  'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },

    button: {
        backgroundColor: '#1878ff',
        width: '40%',
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
    }
})

export default Profile;
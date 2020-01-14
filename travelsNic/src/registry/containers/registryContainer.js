import React, { Component } from 'react';
import Registry from './../components/registry';
import firebase from 'react-native-firebase';

import {
    addUsers
} from './../../../lib/data/user-data'

import {
    Alert,
} from 'react-native';

class RegistryContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beenInSaving: 'comienzo',
            user: null,
            email: '',
            password: '',
            data: {
                email: '',
                password: '',
                userName: '',
            }
        };
    }

    myUserEvent = (userName) => {
        
        const { email, password } = this.state;

        this.setState({
            userName: userName,
            data: {
                email: email,
                password: password
            }
        });
    }

    myEmailEvent = (email) => {

        const { password, userName } = this.state;

        this.setState({
            email: email,
            data: {
                email: email,
                password: password,
                userName: userName,
            }
        })
    }

    myPasswordEvent = (password) => {
        const { email, userName } = this.state;

        this.setState({
            password: password,
            data: {
                email: email,
                password: password,
                userName: userName,
            }
        })
    }

    myEventPressSave = () => {

        const { email, password, userName, data } = this.state;

        if(email === ''){
            Alert.alert("Debe de ingresar Email");
        } else {
            if(password === ''){
                Alert.alert("Debe de ingresar Password");
            } else {
                if(userName === ''){

                } else {
                    if(email === '' && password === ''){
                        Alert.alert("Debe de ingresar Email o Password");
                    } else{
    
                        this.setState({
                            loadingState: 'cargando',
                        })
    
                        firebase
                        .auth()
                        .createUserWithEmailAndPassword (email, password)
                
                        .then (res => {
                          
                            addUsers(data);
    
                            this.setState({
                                user: res.user,
                                email: '',
                                password: '',
                                userName: '',
                                loadingState: 'cargado',
                            });
                            
                            Alert.alert("Los datos se agregaron correctamente");
                        })
                        .catch((error) => {
                            this.setState({
                                loadingState: 'error',
                                error: error,
                            });
                            
                            if(password.length <= 5){
                                Alert.alert("Debe ingresar 6 caracteres como minimo");
                            }
                
                            else {
                                Alert.alert("El usuario ya existe");
                                this.setState({
                                    email: '',
                                    password: '',
                                    userName: ''
                                });
                            } 
                        });
                        
                    }
                }
            }
        }
    }

    navigateToLogin = () =>{
        this.props.navigation.navigate('Login')
    }

    render() {

        const { 
            userName,
            email,
            password,
            beenInSaving,
        } = this.state

        return(
            <Registry
                userName = {userName}
                myUserEvent = {this.myUserEvent}
                email = {email}
                myEmailEvent = {this.myEmailEvent}
                password = {password}
                myPasswordEvent = {this.myPasswordEvent}
                myEventPressSave = {this.myEventPressSave}
                beenInSaving = {beenInSaving}
                navigateToLogin = {this.navigateToLogin}
            />
        )

    }

}

export default RegistryContainer;
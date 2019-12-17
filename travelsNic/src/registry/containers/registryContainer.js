import React, { Component } from 'react';
import Registry from './../components/registry';
import firebase from 'react-native-firebase'

class RegistryContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            beenInSaving: 'comienzo',
        };
    }

    myUserEvent = (userName) => {
        this.setState({
            userName: userName,
            beenInSaving: 'comienzo',
        });
    }

    myEmailEvent = (email) => {
        this.setState({
            email: email,
            beenInSaving: 'comienzo',
        })
    }

    myPasswordEvent = (password) => {
        this.setState({
            password: password,
            beenInSaving: 'comienzo',
        })
    }

    myEventPressSave = () => {

        this.setState({
            beenInSaving: 'cargando',
        })

        const db = firebase.firestore();

        const {
            userName,
            email,
            password
        } = this.state;

        db
        .collection('users')
        .add({
            userName: userName,
            email: email,
            password: password
        })
        .then(() => {
            this.setState({
                userName: '',
                email: '',
                password: '',
                beenInSaving: 'guardado',
            })
        })
        .catch((error) => {
            this.setState({
                beenInSaving: 'error',
            })
        })
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
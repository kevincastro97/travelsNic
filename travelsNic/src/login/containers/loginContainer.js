import React, {Component} from 'react';
import firebase from 'react-native-firebase';

import Login from '../components/login';

import {
    Alert,
} from 'react-native';

class LoginContainer extends Component {

    constructor(props){
        super(props);

        this.unsubscriber = null;

        this.state = {
            loadingState: '',
            userEmail: '',
            userPassword: '',
            user: null,
        }
    }

    componentDidMount() {
        this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
          this.setState({ user });
        });
      }
    
    componentWillUnmount() {
        if (this.unsubscriber) {
            this.unsubscriber();
        }
    }
    
    login = () => {

        const { userEmail, userPassword, } = this.state;

        if(userEmail === ''){
            Alert.alert("Ingrese un usuario");
        } else {
            if(userPassword === ''){
                Alert.alert("Ingrese una contraseña");
            } else {
                if(userEmail === '' && userPassword === ''){
                    Alert.alert("ingrese usuario y contraseña");
                } else{
                    this.setState({
                        loadingState: 'cargando',
                    });
                    
                    firebase
                    .auth()
                    .signInWithEmailAndPassword (userEmail, userPassword)
                    .then (res => {
                        this.setState({
                            user: res.user,
                            loadingState: 'cargado',
                        });
                        this.props.navigation.navigate('MenuTabs');
                    })
                    .catch((error) => {
                        this.setState({
                            loadingState: 'error',
                            error: error,
                            userEmail: '',
                            userPassword: ''
                        });
                        Alert.alert("Usuario o contaseña incorrecto");
                    });
                }
            }
        }

    }

    onChangeEmail = (email) =>{
        this.setState({
            userEmail: email
        })
    }

    onChangePassword = (password) =>{
        this.setState({
            userPassword: password
        })
    }

    onChangeNavigationRegistry = () =>{
        this.props.navigation.navigate('Registry')
    }

    render() {
        const {
            userEmail,
            userPassword,
            loadingState,
        } = this.state;
        
        return(
            <Login
                loadingState={loadingState}
                onChangeEmail = {this.onChangeEmail}
                userEmail = {userEmail}
                onChangePassword = {this.onChangePassword}
                userPassword = {userPassword}
                startButton={ this.login }
                registryButtonNavigation ={ this.onChangeNavigationRegistry }
            />
        ); 
    }    
}

export default LoginContainer;

import React, {Component} from 'react';
import firebase from 'react-native-firebase';

import Login from '../components/login';
import Registro from './../../registry/components/registry'

class LoginContainer extends Component {

    constructor(props){
        super();

        this.unsubscribe = null

        this.state = {
            user: null,
            userEmail: '',
            userPassword: ''
        }
    }

    componentDidMount(){
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user });
          });
    }


    componentWillUnmount() {
        if (this.unsubscribe) {
          this.unsubscribe();
        }
      }

    login = (userEmail, userPassword) =>{
        try{
        firebase
        .auth()
        .signInWithEmailAndPassword (userEmail, userPassword)
        .then (res => {
            console.log(res.user.email);
        })
        } catch(error){
        onsole.log(error.toString(error));
        }
    }

    onChangeEmail = (email) =>{
        this.setState({
            userEmail = email
        })
    }

    onChangePassword = (password) =>{
        this.setState({
            userPassword = password
        })
    }


    render() {

        const { } = props;

        if (!this.state.user) {
            return(
                <Login
                    onChangeEmail = { }
                    userEmail = { }
                    onChangePassword = { }
                    userPassword = { }
                />
            ); 
        }

        return (
            <Registro/>
        );
    }    
}

export default LoginContainer;
import React, {Component} from 'react';

import {
    withNavigation
} from 'react-navigation';

import { connect } from 'react-redux';

import firebase from 'react-native-firebase'

import OrdinaryBusOptionsList from './../components/ordinaryBusOptionsList';

import {
    dataLine,
    filterDataLine,
} from './../../../state/actions/linesAction'


class OrdinaryBusOptionsListContainer extends Component {

    constructor(props){
        super(props)

        this.ref = firebase.firestore().collection('ordinaryLines');
        this.unsubscribe = null;
        this.state = {
            data: []
        };
    }

    navigateToOrdinaryDetail = () =>{
        this.props.navigation.navigate('OrdinaryDetail')
    }

    componentDidMount(){

        const db = firebase.firestore();
        db.collection('ordinaryLines').onSnapshot((instantanea) => {
            const { data } = this.state;

            this.setState({
                data: data,
            });
        });

        if(this.props.idCuidad){
            this.unsubscribe = this.ref.where('idCuidad', '==', this.props.idCuidad).onSnapshot(this.onCollectionUpdate)
        }
        else {
            this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.idCuidad !== prevProps.idCuidad) {
            if(this.props.idCuidad) {
                this.unsubscribe = this.ref.where("idCuidad", "==", this.props.idCuidad).onSnapshot(this.onCollectionUpdate)
            }
            else {
                this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
            }
        }
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    addLinea = (title, price, passengers, line, image, departureTime, arrivalTime) => {
        this.ref.add({
            title: title,
            line: line,
            price: price,
            passengers: passengers,
            image: image,
            departureTime: departureTime,
            arrivalTime: arrivalTime
        });
    };

    onCollectionUpdate = (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
            const { title, price, passengers, line, image, departureTime, arrivalTime } = doc.data();
            data.push({
                key: doc.id,
                title,
                price,
                passengers,
                line,
                image,
                departureTime,
                arrivalTime
            });
        });
        this.props.dataLine(data);
    }

    render(){

        const { data } = this.state

        return(
            <OrdinaryBusOptionsList
                data = {data}
                navigateToOrdinaryDetail = {this.navigateToOrdinaryDetail}
            />
        );

    }
}

const mapStateToProps = (newState ) => {

    let { lines } = newState;

    return {
        data: lines.data,
        ciudadId: lines.id,
    };
};

const mapDispatchToProps = (dispatch) => ({
    dataLine: (data) => dispatch(dataLine(data)),
    filterDataLine: (id) => dispatch(filterDataLine(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdinaryBusOptionsListContainer);
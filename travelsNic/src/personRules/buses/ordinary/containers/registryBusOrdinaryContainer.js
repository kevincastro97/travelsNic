import React, {Component} from 'react';

import {
    Alert
} from 'react-native'

import {
    addOrdinaryLines
} from './../../.././../../lib/data/ordinary-lines-data'

import RegistryBusOrdinary from './../components/registryBusOrdinary';

class RegistryBusOrdinaryContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            modal: false,
            title:'',
            line: '',
            approximateTime:'',
            arrivalTime: '',
            department: '',
            departureTime: '',
            distance: '',
            image: '',
            origin: '',
            passengers: '',
            price: '',

            loadingState: ''
        }
    }

    setModal = (visible) =>{
        this.setState({
          modal: visible,
        })
      }
  
      onChangeCloseModal = () =>{
        this.setModal(!this.state.modal);
      }
  
      onChangeOpenModal = () =>{
        this.setModal(true);
    }

    onChangeTitle = (title) =>{
        this.setState({
            title: title
        })
    }

    onChangeLine = (line) =>{
        this.setState({
            line: line
        })
    }

    onChangeApproximateTime = (approximateTime) =>{
        this.setState({
            approximateTime: approximateTime
        })
    }

    onChangeArrivalTime = (arrivalTime) =>{
        this.setState({
            arrivalTime: arrivalTime
        })
    }

    onChangeDepartment = (department) =>{
        this.setState({
            department: department
        })
    }
    onChangeDepartureTime = (departureTime) =>{
        this.setState({
            departureTime: departureTime
        })
    }
    onChangeDistance = (distance) =>{
        this.setState({
            distance: distance
        })
    }
    onChangePassengers = (passengers) =>{
        this.setState({
            passengers: passengers
        })
    }
    onChangePrice = (price) =>{
        this.setState({
            price: price
        })
    }
    onChangeOrigin = (origin) =>{
        this.setState({
            origin: origin
        })
    }

    myEventSave = () =>{

        this.setState({
            loadingState: 'cargando'
        })

        const {
            title,
            approximateTime,
            arrivalTime,
            department,
            departureTime,
            distance,
            image,
            line,
            origin,
            passengers,
            price,
        } = this.state;

        const priceData = 'C$ ' + price;

        addOrdinaryLines({
            title: title,
            approximateTime: approximateTime,
            arrivalTime: arrivalTime,
            department: department,
            departureTime: departureTime,
            distance: distance,
            image: image,
            line: line,
            origin: origin,
            passengers: passengers,
            price: priceData,
        })

        .then(() => {
            this.setState({

                title:'',
                line: '',
                approximateTime:'',
                arrivalTime: '',
                department: '',
                departureTime: '',
                distance: '',
                image: '',
                origin: '',
                passengers: '',
                price: '',

                loadingState: 'guardado',
            })

            Alert.alert("Los datos se agregaron correctamente");
        })
        .catch((error) => {
            this.setState({
                loadingState: 'error',
            })

            Alert.alert("Ocurrio un error al agregar los datos");
        })
    }

    render(){

        const {
            title,
            approximateTime,
            arrivalTime,
            department,
            departureTime,
            distance,
            image,
            line,
            origin,
            passengers,
            price,

            loadingState,
            modal,

        } = this.state;

        return(
            <RegistryBusOrdinary
                loadingState = { loadingState }
                title = { title }
                onChangeTitle = { this.onChangeTitle }
                approximateTime = { approximateTime }
                onChangeApproximateTime = { this.onChangeApproximateTime }
                arrivalTime = { arrivalTime }
                onChangeArrivalTime = { this.onChangeArrivalTime }
                department = { department }
                onChangeDepartment = { this.onChangeDepartment}
                departureTime = { departureTime }
                onChangeDepartureTime = { this.onChangeDepartureTime }
                distance = { distance }
                onChangeDistance = { this.onChangeDistance}
                line = { line }
                onChangeLine = { this.onChangeLine }
                origin = { origin }
                onChangeOrigin = { this.onChangeOrigin}
                passengers = { passengers }
                onChangePassengers = { this.onChangePassengers }
                price = { price }
                onChangePrice = { this.onChangePrice}
                myEventSave = {this.myEventSave}

                modal = {modal}
                onChangeOpenModal = {this.onChangeOpenModal}
                onChangeCloseModal = {this.onChangeCloseModal}
            />
        );
    }
}

export default RegistryBusOrdinaryContainer;
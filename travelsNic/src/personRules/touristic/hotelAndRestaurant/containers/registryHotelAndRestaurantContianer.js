import React, { Component } from 'react';

import {
    Alert
} from 'react-native';

import {
    addHotelAndRestaurant
} from './../../../../../lib/data/addHotelAndRestaurantRegistration'

import RegistryHotelAndRestaurant from './../components/registryHotelAndRestaurant';

class RegistryHotelAndRestaurantContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            price: '',
            phone: '',
            whatsapp: '',
            origin: '',
            imageStars: '',
            image: '',
            email: '',
            direction: '',
            description: '',
            department:'',

            loadingState: ''
        }
    }

    myOnChangeTitle = (title) =>{
        this.setState({
            title: title,
        })
    }

    myOnChangePrice = (price) =>{

        this.setState({
            price: price,
        })
    }

    myOnChangePhone = (phone) =>{
        this.setState({
            phone: phone,
        })
    }

    myOnChangeWhatsapp = (whatsapp) =>{
        this.setState({
            whatsapp: whatsapp,
        })
    }
    myOnChangeOrigin = (origin) =>{
        this.setState({
            origin: origin,
        })
    }

    myOnChangeImageStars = (imageStars) =>{
        this.setState({
            imageStars: imageStars,
        })
    }

    myOnChangeImage = (image) =>{
        this.setState({
            image: image,
        })
    }

    myOnChangeEmail = (email) =>{
        this.setState({
            email: email,
        })
    }

    myOnChangeDirection = (direction) =>{
        this.setState({
            direction: direction,
        })
    }
    
    myOnChangeDescription = (description) =>{
        this.setState({
            description: description,
        })
    }

    myOnChangeDepartment = (department) =>{
        this.setState({
            department: department,
        })
    }

    myEventSave = () =>{

        this.setState({
            loadingState: 'cargando'
        })

        const { 
            title, 
            price, 
            phone, 
            whatsapp, 
            origin, 
            imageStars, 
            image,
            email,
            direction,
            description,
            department
        } = this.state

        addHotelAndRestaurant({
            title: title,
            price: price,
            phone: phone,
            whatsapp: whatsapp,
            origin: origin,
            imageStars: imageStars,
            image: image,
            email: email,
            direction: direction,
            description: description,
            department: department,
            
        })

        .then(() => {
            this.setState({
                title: '',
                price: '',
                phone: '',
                whatsapp: '',
                origin: '',
                imageStars: '',
                image: '',
                email: '',
                direction: '',
                description: '',
                department:'',
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
            price, 
            phone, 
            whatsapp, 
            origin, 
            imageStars, 
            image,
            email,
            direction,
            description,
            department,
            loadingState
        } = this.state

        return(
            <RegistryHotelAndRestaurant
                loadingState = { loadingState }
                title = { title }
                myOnChangeTitle = { this.myOnChangeTitle } 
                price = { price } 
                myOnChangePrice = { this.myOnChangePrice } 
                phone = { phone }
                myOnChangePhone = { this.myOnChangePhone }
                whatsapp = { whatsapp }
                myOnChangeWhatsapp = { this.myOnChangeWhatsapp }
                origin = { origin }
                myOnChangeOrigin = { this.myOnChangeOrigin }
                imageStars = { imageStars }
                myOnChangeImageStars = { this.myOnChangeImageStars }
                image = { image }
                myOnChangeImage = { this.myOnChangeImage }
                email = { email }
                myOnChangeEmail = { this.myOnChangeEmail }
                direction = { direction }
                myOnChangeDirection = { this.myOnChangeDirection}
                description = { description }
                myOnChangeDescription = {this.myOnChangeDescription}
                department = { department }
                myOnChangeDepartment  = { this.myOnChangeDepartment }
                myEventSave = { this.myEventSave }
            />
        );
    }
}

export default RegistryHotelAndRestaurantContainer;
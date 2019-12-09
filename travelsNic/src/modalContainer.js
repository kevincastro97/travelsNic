import React, {Component} from 'react';

import ModalPrueba from './modal';

class ModalContainer extends Component{

    constructor(props){
        super(props)

        this.state = {
            modalVisible: false,
        }
    }

    setModalVisible = (visisble) =>{
        this.setState({
            modalVisible: visisble,
        })
    }

    onChangeClose = () =>{
        this.setModalVisible(!this.state.modalVisible);
    }

    onChangeOpen = () =>{
        this.setModalVisible(true);
    }

    render(){

        const { modalVisible } = this.state;

        return(
            <ModalPrueba
                modalVisible = {modalVisible}
                onChangeOpen = {this.onChangeOpen}
                onChangeClose = {this.onChangeClose}
            />
        );
    }
}

export default ModalContainer;
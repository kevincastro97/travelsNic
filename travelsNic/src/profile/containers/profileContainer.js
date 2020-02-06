import React, {Component} from 'react';

import Profile from './../components/profile';

class ProfileContainer extends Component {
    
    constructor(props){
    super(props)

        this.state = {
          modalVisible: false,
          modal: false
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

    setModal = (visisble) =>{
      this.setState({
        modal: visisble,
      })
    }

    onChangeCloseModal = () =>{
      this.setModal(!this.state.modal);
    }

    onChangeOpenModal = () =>{
      this.setModal(true);
  }

    render(){

        const { modalVisible, modal } = this.state;

        return(
            <Profile
                modalVisible = {modalVisible}
                onChangeOpen = {this.onChangeOpen}
                onChangeClose = {this.onChangeClose}
                modal = {modal}
                onChangeOpenModal = {this.onChangeOpenModal}
                onChangeCloseModal = {this.onChangeCloseModal}
            />
        );
    }
}

export default ProfileContainer;
import React from 'react';

import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Alert,
  StyleSheet
} from 'react-native';

const ModalPrueba = (props) => {

  const { modalVisible, onChangeOpen, onChangeClose } = props;
  
  return(
    <View>
     <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}>
          <View style={{marginTop: 22, backgroundColor: 'red', height: '80%', width: '80%'}}>
            <View>
              <Text>Hello World!</Text>
              <TouchableOpacity
                onPress = {onChangeClose}
              >
                <Text>Cerrar modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          onPress = {onChangeOpen}
        >
          <Text>Abrir modal</Text>
        </TouchableOpacity>
    </View>
  );
}


export default ModalPrueba;




/*import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';

class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22, backgroundColor: 'red', height: '80%', width: '80%'}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ModalExample;*/
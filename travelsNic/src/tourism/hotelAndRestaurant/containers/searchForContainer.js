import  React, {Component} from 'react';

import SearchFor from './../components/searchFor';

class SearchForContainer extends Component {

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

    const {
      onSearch,
    } = this.props;
    
    return(
      
      <SearchFor
        modalVisible = {modalVisible}
        onChangeOpen = {this.onChangeOpen}
        onChangeClose = {this.onChangeClose}
        onSearch={onSearch}
      />
        
    );

  }
}
  
export default SearchForContainer;
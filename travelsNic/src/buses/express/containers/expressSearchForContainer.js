import  React, {Component} from 'react';

import ExpressSearchFor from '../components/expressSearchFor';

class expressSearchForContainer extends Component {

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
      searchText,
      originSearchText,
      onChangeOriginSearchText,
      departmentSearchText,
      onChangeDepartmentSearchText,
    } = this.props;

    return(
      
      <ExpressSearchFor
        modalVisible = {modalVisible}
        onChangeOpen = {this.onChangeOpen}
        onChangeClose = {this.onChangeClose}
        onSearch={onSearch}
        searchText={searchText}
        originSearchText={originSearchText}
        onChangeOriginSearchText={onChangeOriginSearchText}
        departmentSearchText={departmentSearchText}
        onChangeDepartmentSearchText={onChangeDepartmentSearchText}
      />
        
    );

  }
}
  
export default expressSearchForContainer;
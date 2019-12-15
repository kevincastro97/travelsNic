import React, {Component} from 'react';

import {
    getSmallBusiness
} from './../../../../lib/data/smallBusiness-data'; 

import SmallBusinessOptionList from './../components/smallBusinessOptionList';

class SmallBusinessOptionListContainer extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            loadingState: 'cargando',
            data: [],
            searchText: '',
            originSearchText: '',
            departmentSearchText: '',
        };
    }

    navigateToSmallBusinessDetail = (smallBusiness) => {
        this.props.navigation.navigate('SmallBusinessDetail', {
            smallBusiness: smallBusiness,
        })
    }

    render(){

        const {
            loadingState,
            searchText,
            originSearchText,
            departmentSearchText,
        } = this.state

        return(
            <SmallBusinessOptionList
                data = {this.handleFilterAdvanced()}
                refreshing={loadingState === 'cargando' ? true : false}
                onRefresh={this.handleRefresh}
                navigateToSmallBusinessDetail = {this.navigateToSmallBusinessDetail}
                searchText={searchText}
                onSearch={this.handleSearch}
                originSearchText={originSearchText}
                onChangeOriginSearchText={this.handleChangeOriginSearchText}
                departmentSearchText={departmentSearchText}
                onChangeDepartmentSearchText={this.handleChangeDepartmentSearchText}
            />
        );

    }

    componentDidMount() {
        this.loadSmallBusinessData();
    }

    loadSmallBusinessData = () => {

        this.setState({
            loadingState: 'cargando',
        });

        getSmallBusiness()
        .then((smallBusinessArray) => {

            console.log(smallBusinessArray);
            
            this.setState({
                loadingState: 'cargado',
                data: smallBusinessArray,
            });

        })
        .catch((error) => {
            
            this.setState({
                loadingState: 'error',
                error: error,
            });
            
        });

    };

    handleRefresh = () => {
        this.loadSmallBusinessData();
    };

    handleSearch = (searchText) => {
        this.setState({
            searchText: searchText,
        });
    };

    handleChangeDepartmentSearchText = (departmentSearchText) => {
        this.setState({
            departmentSearchText: departmentSearchText,
        });
    };

    handleChangeOriginSearchText = (originSearchText) => {
        this.setState({
            originSearchText: originSearchText,
        });
    };

    handleFilterAdvanced = () => {
        const {
            searchText,
            originSearchText,
            departmentSearchText,
            data,
        } = this.state;
        
        if(!searchText && !originSearchText && !departmentSearchText) return data;

        let arrayFilter = data;

        if(searchText) {
            arrayFilter = arrayFilter.filter((item) => {
                return item.title.toLowerCase().includes(searchText.toLowerCase());
            });
        }
        console.log('Filtros: ', arrayFilter);

        if(originSearchText) {
            arrayFilter = arrayFilter.filter((item) => {
                return item.origin.toLowerCase().includes(originSearchText.toLowerCase());
            });
        }

        if(departmentSearchText) {
            arrayFilter = arrayFilter.filter((item) => {
                return item.department.toLowerCase().includes(departmentSearchText.toLowerCase());
            });
        }

        return arrayFilter;
        
    };
}

export default SmallBusinessOptionListContainer;
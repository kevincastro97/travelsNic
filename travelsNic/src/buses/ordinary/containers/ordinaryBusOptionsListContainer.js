import React, {Component} from 'react';

import {
    getOrdinaryLines,
} from './../../../../lib/data/ordinary-lines-data'; 

import OrdinaryBusOptionsList from './../components/ordinaryBusOptionsList';

class OrdinaryBusOptionsListContainer extends Component {

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

    navigateToOrdinaryDetail = (ordinaryLines) => {
        this.props.navigation.navigate('OrdinaryDetail', {
            ordinaryLines: ordinaryLines,
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
            <OrdinaryBusOptionsList
                data = {this.handleFilterAdvanced()}
                refreshing={loadingState === 'cargando' ? true : false}
                onRefresh={this.handleRefresh}
                navigateToOrdinaryDetail = {this.navigateToOrdinaryDetail}
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
        this.loadOrdinaryLinesData();
    }

    loadOrdinaryLinesData = () => {

        this.setState({
            loadingState: 'cargando',
        });

        getOrdinaryLines()
        .then((ordinaryLinesArray) => {

            console.log(ordinaryLinesArray);
            
            this.setState({
                loadingState: 'cargado',
                data: ordinaryLinesArray,
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
        this.loadOrdinaryLinesData();
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

export default OrdinaryBusOptionsListContainer;
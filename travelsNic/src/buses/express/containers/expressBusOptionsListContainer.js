import React, {Component} from 'react';

import {
    getExpressLines
} from './../../../../lib/data/express-lines-data'; 

import ExpressBusOptionsList from '../components/expressBusOptionsList'

class ExpressBusOptionsListContainer extends Component {

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

    navigateToExpressDetail = (expressDetail) =>{
        this.props.navigation.navigate('ExpressDetail', {
            expressLines: expressDetail,
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
            <ExpressBusOptionsList
                data = {this.handleFilterAdvanced()}
                refreshing={loadingState === 'cargando' ? true : false}
                onRefresh={this.handleRefresh}
                navigateToExpressDetail = {this.navigateToExpressDetail}
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
        this.loadExpressLinesData();
    }

    loadExpressLinesData = () => {

        this.setState({
            loadingState: 'cargando',
        });

        getExpressLines()
        .then((expressLinesArray) => {

            console.log(expressLinesArray);
            
            this.setState({
                loadingState: 'cargado',
                data: expressLinesArray,
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
        this.loadExpressLinesData();
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

export default ExpressBusOptionsListContainer;
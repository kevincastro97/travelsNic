import React, {Component} from 'react';

import {
    getTouristicCentres
} from './../../../../lib/data/touristicCentres-data'; 

import TouristicCentresOptionList from './../components/touristicCentresOptionList';

class TouristicCentresOptionListContainer extends Component {

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

    navigateToTouristicCentresDetail = (touristicCentres) => {
        this.props.navigation.navigate('TuristicCentresDetail', {
            touristicCentres: touristicCentres,
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
            <TouristicCentresOptionList
                data = {this.handleFilterAdvanced()}
                refreshing={loadingState === 'cargando' ? true : false}
                onRefresh={this.handleRefresh}
                navigateToTouristicCentresDetail = {this.navigateToTouristicCentresDetail}
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
        this.loadTouristicCentresData();
    }

    loadTouristicCentresData = () => {

        this.setState({
            loadingState: 'cargando',
        });

        getTouristicCentres()
        .then((touristicCentresArray) => {

            console.log(touristicCentresArray);
            
            this.setState({
                loadingState: 'cargado',
                data: touristicCentresArray,
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
        this.loadTouristicCentresData();
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

export default TouristicCentresOptionListContainer;
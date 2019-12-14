import React, {Component} from 'react';

import {
    getHotelAndRestaurant
} from './../../../../lib/data/hotelAndRestaurant-data'; 

import HotelAndRestaurantOptionList from './../components/hotelAndRestaurantOptionList';

class HotelAndRestaurantOptionListContainer extends Component {

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

    navigateToHotelAndRestaurantDetail = (hotelAndRestaurant) => {
        this.props.navigation.navigate('HotelAndRestaurantDetail', {
            hotelAndRestaurant: hotelAndRestaurant,
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
            <HotelAndRestaurantOptionList
                data = {this.handleFilterAdvanced()}
                refreshing={loadingState === 'cargando' ? true : false}
                onRefresh={this.handleRefresh}
                navigateToHotelAndRestaurantDetail = {this.navigateToHotelAndRestaurantDetail}
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
        this.loadHotelAndRestaurantData();
    }

    loadHotelAndRestaurantData = () => {

        this.setState({
            loadingState: 'cargando',
        });

        getHotelAndRestaurant()
        .then((hotelAndRestaurantArray) => {

            console.log(hotelAndRestaurantArray);
            
            this.setState({
                loadingState: 'cargado',
                data: hotelAndRestaurantArray,
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
        this.loadHotelAndRestaurantData();
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

export default HotelAndRestaurantOptionListContainer;
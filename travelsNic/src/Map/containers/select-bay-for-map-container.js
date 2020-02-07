import React, { Component } from 'react';
import SelectBayForMap from './../components/select-bay-for-map';

import {
    getCoordinateMap,
} from './../../../lib/data/map-data';

class SelectBayForMapContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            bayListData: [],
        };
    }

    handleChangeSearch = (text) => {
        this.setState({
            search: text,
        });
    };

    render() {
        const {
            search,
            bayListData,
        } = this.state;

        const {
            onBayItemClick,
        } = this.props;

        return (
            <SelectBayForMap
                bayListData = {this.handleFilterAdvanced()}
                search={search}
                onChangeSearch={this.handleChangeSearch}
                bayListData={bayListData}
                onBayItemClick={onBayItemClick}
            /> 
        );
    }

    async componentDidMount() {
        const results = await getCoordinateMap();
        this.setState({
            bayListData: results,
        });
    }

    handleFilterAdvanced = () => {
        const {
            search,
            bayListData,
        } = this.state;

        console.log('Filtros: ', search);
        
        if(!search) return bayListData;

        let arrayFilter = bayListData;

        if(search) {
            arrayFilter = arrayFilter.filter((item) => {
                console.log('Filtros: ', item.title);
                return item.title.toLowerCase().includes(search.toLowerCase());
            });
        }

        return arrayFilter;
         
    };

}

export default SelectBayForMapContainer;
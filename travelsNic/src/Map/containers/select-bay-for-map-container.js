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

}

export default SelectBayForMapContainer;
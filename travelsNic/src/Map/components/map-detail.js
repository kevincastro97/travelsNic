import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
} from 'react-native';

const MapDetail = (props) => {
    const {
        bayData,
        ordinaryLines,
    } = props;

    const detailArray = [];
    
    ordinaryLines.map(ordinary => {
        ordinary.seasons.map(season => {
            if(bayData.id === season.id) {
                detailArray.push({
                    ordinary: ordinary,
                    season: season,
                });
            }
        });
    });

    return (
        <View>
            <Text>Detalle</Text>
            <Text>Nombre: {bayData.title}</Text>
            <FlatList
                data={detailArray}
                renderItem={({item}) => <MapDetailItem itemData={item} />}
            />
        </View>
    );
};

const MapDetailItem = (props) => {

    const {
        itemData,
    } = props;

    return (
        <View>
            <Text>{itemData.ordinary.title}</Text>
            <Text>{itemData.ordinary.line}</Text>
            <Text>{itemData.ordinary.passengers}</Text>
            <Image
                source={{uri: itemData.ordinary.image}}
            />
            <Text>{itemData.season.title}</Text>
            <Text>{itemData.season.distance}</Text>
            <Text>{itemData.season.approximateTime}</Text>
            <Text>{itemData.season.time}</Text>
            <Text>{itemData.season.rate}</Text>
        </View>
    );

};

export default MapDetail;
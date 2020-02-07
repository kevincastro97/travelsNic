import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    StyleSheet,
} from 'react-native';

const SelectBayForMap = (props) => {

    const {
        onBayItemClick,
        bayListData,
        search,
        onChangeSearch
    } = props;

    return (
        <View
            style={styles.container}
        >
            <View style = {styles.textImput}>
                <TextInput
                    style = {styles.letterImput}
                    placeholder = '¿Dónde tomarás bus?'
                    value={search}
                    onChangeText={onChangeSearch}
                />
            </View> 

            <View>

                <Text style = {styles.title}>
                    Listado de Bahías
                </Text>

                <FlatList
                    data={bayListData}
                    renderItem={
                        ({ item }) =>
                            <Item
                                onItemClick={onBayItemClick}
                                bayId={item.id}
                                bayCoor={item.coordinate}
                                bayName={item.title}
                            />
                    }
                />

            </View>
            
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textImput:{
        backgroundColor: 'white',
        height: 40,
        width:  '90%',
        borderRadius: 50,
        paddingLeft: 8,
        borderColor: '#193555',
        flexDirection: 'row',
        borderWidth: 1.5,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },

    letterImput:{
        fontSize: 16,
        padding: 8,
    },

    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#193555',
        marginTop: 15
    }
});

const Item = (props) => {
    const {
        onItemClick,
        bayId,
        bayCoor,
        bayName,
    } = props;
    return (

        <View style={stylesItem.container}>
            <View style={stylesItem.cont}>
                <TouchableOpacity
                    onPress={() => onItemClick(bayName, bayCoor, bayId)}
                    >
                    <View style={stylesItem.select}>

                        <View style={stylesItem.containerText}>
                            <Text>
                                {bayName}
                            </Text>
                        </View>

                        <View style={stylesItem.containerImage}>
                            <Image
                                source = {require('./../../assets/map/hand.png')}
                                style = {stylesItem.image}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

const stylesItem = StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '100%',
        height: 40,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },

    cont:{
        width: '100%',
        backgroundColor: '#f4f6f9',
        borderRadius: 10,
    },

    select:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },

    image: {
        width: 25,
        height: 25
    },

    containerText:{
        width: '85%',
    },

    containerImage:{
        width: '15%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
});

export default SelectBayForMap;
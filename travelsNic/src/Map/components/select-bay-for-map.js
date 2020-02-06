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
    } = props;

    return (
        <View
            style={styles.container}
        >
            <View>
                <TextInput
                    style={styles.search}
                    placeholder={'Buscar bahía...'}
                />
                <TouchableOpacity>
                    <Image />
                </TouchableOpacity>
            </View>
            <Text>Listado de Bahías</Text>
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
    );

};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingBottom: 70,
    },
    search: {
        borderColor: 'grey',
        borderWidth: 1,
    },
});

const Item = (props) => {
    const {
        onItemClick,
        bayId,
        bayCoor,
        bayName,
    } = props;
    return (
        <TouchableOpacity
            style={stylesItem.container}
            onPress={() => onItemClick(bayName, bayCoor, bayId)}
        >
            <View>
                <Image />
                <Text>
                    {bayName}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const stylesItem = StyleSheet.create({
    container: {
        padding: 6,
    },
});

export default SelectBayForMap;
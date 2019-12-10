import React from 'react';

import {
    View,
    FlatList,
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
    RefreshControl,
} from 'react-native';

import SeparatorList from './../utilities/separatorList';
import SearchForContainer from './../containers/searchForContainer';

const HotelAndRestaurantOptionList = (props) => {
    const { data } = props;

    return(
        <SafeAreaView  style = {styles.fondo}>

            <View style={styles.list}>

            <FlatList

                style={styles.list}

                ListHeaderComponent={
                    <SearchForContainer/>
                }

                data = { data }
                ListEmptyComponent = {() => <Text>Componente de texto</Text>}
                renderItem = {
                    ({item}) => <Element item = {item}/>
                }
                ItemSeparatorComponent = {() => <SeparatorList/>}
            />

            </View>

        </SafeAreaView>
    );

}

const Element = (props) => {

    const { item , onPress} = props;

    return(
        <TouchableOpacity
            onPress = {onPress}
        >

            <View style = {styles.container}>
                <View style = {styles.containerAddress}>

                    <Image
                        source = {require('./../../../assets/hotel.jpg')}
                        style = {styles.images}
                    />

                    <View style = {styles.containerText}>

                        <View>
                            <Text style = {styles.title}>
                                {item.title}
                            </Text>

                            <Text style = {styles.department}>
                                {item.department}
                            </Text>
                        </View>
                        
                        <View>
                            <Text style = {styles.department}>
                                {item.direction}
                            </Text>
                        </View>

                        <View>
                            <Text style = {styles.direction}>
                                1 noche desde:
                            </Text>

                            <Text style = {styles.department}>
                                {item.price}
                            </Text>
                        </View>

                    </View>

                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#f4f6f9',
    },
    list: {
        minHeight: '100%',
    },

    container:{
        flexDirection: 'column',
        borderRadius: 8,
        marginHorizontal: 5,
        color: 'blue',
        backgroundColor: '#FFFFFF',
        padding: 10,
        flex: 1,
        width: '95%'
    },

    containerAddress:{
        flexDirection: 'row',
        width: '90%'
    },

    
    images:{
        width: 110,
        height: 120,
        backgroundColor: '#eee',
        borderRadius: 10,
    },

    
    containerText: {
        flexDirection: 'column',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        width: '70%'
    },

    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },

    direction:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },

    department:{
        fontSize: 15,
        color: 'black'
    },

})

export default HotelAndRestaurantOptionList;
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
    const {
        data,
        refreshing,
        onRefresh,
        searchText,
        onSearch,
        originSearchText,
        onChangeOriginSearchText,
        departmentSearchText,
        onChangeDepartmentSearchText,
        //navigateToHotelAndRestaurantDetail
    } = props;

    return(
        <SafeAreaView  style = {styles.fondo}>

            <View style={styles.list}>

            <FlatList

                style={styles.list}

                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }

                ListHeaderComponent={
                    <SearchForContainer
                        searchText={searchText}
                        onSearch={onSearch}
                        originSearchText={originSearchText}
                        onChangeOriginSearchText={onChangeOriginSearchText}
                        departmentSearchText={departmentSearchText}
                        onChangeDepartmentSearchText={onChangeDepartmentSearchText}
                    />
                }

                data = { data }
                ListEmptyComponent = {() => <Text>Cargando información</Text>}
                renderItem = {
                    ({item}) => <Element item = {item}/>
                }
                ItemSeparatorComponent = {() => <SeparatorList/>}
            />

            </View>

        </SafeAreaView>
    );

}


const Element =(props) => {

    const { item, onPress, } = props;
    
    return(

        <TouchableOpacity
      //onPress = {onPress}
        >
        
            <View style = {styles.container}>

                <View>
                    <Image
                        source = {{ uri: item.image }}
                        style = {styles.image}
                    />
                </View>

                <View style = {styles.containerDireccion}>
                    
                    <View>
                        <Text style = {styles.title}>
                            {item.title}
                        </Text>

                        <View style = {styles.address}>

                            <Text style = {styles.text}>
                                {item.department}
                            </Text>

                            <Image
                                source = {{ uri: item.imageStars }}
                                style = {styles.imagesStars}
                            />

                        </View>
    
                    </View>


                    <View style = {styles.address}>

                        <Text style = {styles.direction}> 
                        {item.direction} 
                        </Text>
                        
                    </View>

                    <View style = {styles.address}>

                        <Text style = {styles.textDescription}>
                            1 noche desde: 
                        </Text>

                        <View style = {styles.fundPrice}>

                            <Text style = {styles.textPrice}>
                                C$ {item.price}
                            </Text>

                        </View>
                        
                    </View>

                </View>

            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    fondo:{
        backgroundColor: '#f4f6f9',
    },

    container:{
        flexDirection: 'row',    
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 5,
        borderRadius: 8,
        justifyContent: 'space-between',
        padding: 10,
    },

    containerDireccion: {
        flexDirection: 'column',
        color: 'blue',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 5
    },

    image:{
        width: 100,
        height: 110,
        backgroundColor: '#eee',
        borderRadius: 10,
    },

    imagesStars:{
        width: 50,
        height: 15,
    },

    address:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
        alignItems: 'center'
    },

    title:{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        width: '70%'
    },

    direction:{
        fontSize: 14,
        color: 'black',
        marginTop: 5
    },

    text:{
        fontSize: 15,
        color: 'black',
        textAlign: 'justify'
    },
    
    textDescription:{
        fontSize: 16,
        color: 'black',
        textAlign: 'justify',
        fontWeight: 'bold'
    },

    fundPrice:{
        backgroundColor: '#0c64a2',
        borderRadius: 15,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },

    textPrice:{
        fontSize: 15,
        color: 'black',
        textAlign: 'justify',
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

})

export default HotelAndRestaurantOptionList;
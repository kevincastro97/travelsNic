import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView
} from 'react-native'

import ExpressSeparatorList from '../utilities/components/expressSeparatorList';
import ExpressDetailList from './expressDetailList';
import ExpressSeasons from '../utilities/components/expressSeasons';

const ExpressBusOptionsList = (props) => { 

    const { data , headers} = props;

    return(
        
        <SafeAreaView  style = {styles.fondo}>

            <View >
                
                <FlatList
                
                    ListHeaderComponent = {
                        <View>
                            <ExpressDetailList
                                headers = {headers}
                            />
                            
                            <ExpressSeasons/>
                            
                            <ExpressSeparatorList/>
                        </View>
                        
                    }
                    data = {data}
                    ListEmptyComponent = {() => <Text>Componente de texto</Text>}
                    renderItem = {
                        ({item}) => <Element item = {item}/>
                    }
                    ItemSeparatorComponent = {() => <ExpressSeparatorList/>}
                />
               

            </View>

        </SafeAreaView>

    );

}


const Element =(props) => {

    const { item } = props;
    
    return(
        
        <View style = {styles.container}>

            <View style = {styles.key}>
                <Text style = {styles.titleKey}> 
                    {item.key}
                </Text>    
            </View>

            <View style = {styles.containerDireccion}>
                <Text style = {styles.title}>
                    {item.title}
                </Text>

            </View>

        </View>
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
        height: 40
    },

    containerDireccion: {
        flexDirection: 'column',
        color: 'blue',
        padding: 5,
        justifyContent: 'space-between',
        width: '90%'
    },

    key:{
        backgroundColor: '#069dab',
        borderRadius: 250,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:  5,
    },

    titleKey:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    address:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%'
    },

    title:{
        fontSize: 16,
        fontWeight: 'normal',
        color: 'black',
    },

    subTitle:{
        fontSize: 15,
        color: 'black',
        marginTop: 5
    }

})

export default ExpressBusOptionsList;
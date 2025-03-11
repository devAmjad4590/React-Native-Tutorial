import { Text, View, FlatList } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';


function CategoriesScreen({navigation}) {
    function pressHandler(item){
    navigation.navigate('Meals', {
        categoryId: item.id
    })
    }
    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} 
        numColumns={2}
        renderItem={(item) => 
        <CategoryGridTile onPress={pressHandler.bind(this, item.item)} title={item.item.title} color={item.item.color} />}>

        </FlatList>
    )
}

export default CategoriesScreen

import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

function MealsScreen({navigation, route}) {
  const categoryId = route.params.categoryId


  const displayedMeals = MEALS.filter(meal => {
    return meal.categoryIds.indexOf(categoryId) >= 0
  }) 

  function renderMealItem(itemData){
    const item = itemData.item

    const mealItemProps = {
        title: item.title,
        imageUrl: item.imageUrl,
        duration: item.duration,
        complexity: item.complexity,
        affordability: item.affordability
    }

    return(
        <MealItem {...mealItemProps} ></MealItem>
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16
    }
})

export default MealsScreen

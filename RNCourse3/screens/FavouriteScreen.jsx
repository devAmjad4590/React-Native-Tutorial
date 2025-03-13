import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { FavouriteContext } from '../store/context/context'

function FavouriteScreen() {
    const favouriteContext = useContext(FavouriteContext)

    const favouriteMeals = favouriteContext.ids
  return (
    <View>
        {favouriteMeals.map(mealId => {
            return <Text key={mealId}>{mealId}</Text>
        })}
    </View>
  )
}

export default FavouriteScreen

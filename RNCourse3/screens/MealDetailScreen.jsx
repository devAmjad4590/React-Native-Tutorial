import React , {useLayoutEffect, useContext} from 'react'
import { View, ScrollView, Text, Button, Image, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
import Footer from '../components/Footer'
import Subtitle from '../components/Subtitle'
import List from '../components/List'
import IconButton from '../components/IconButton'
import { FavouriteContext } from '../store/context/context'

function MealDetailScreen({ route, navigation }) {
    const favouriteContext = useContext(FavouriteContext)
    const mealId = route.params.mealId

    function toggleFunction(){
        if(favouriteContext.isFavourite(mealId)){
            favouriteContext.removeFavourite(mealId)
        } else {
            favouriteContext.addFavourite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={favouriteContext.isFavourite(mealId) ? 'star' : 'star-outline'} color="white" onPress={toggleFunction} title='Tap me'></IconButton>  
            }
        })
    }, [navigation, toggleFunction])


    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return (
        <ScrollView style={styles.root}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}></Image>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <Footer textStyle={styles.textStyle} duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}></Footer>


            <View style={styles.outerContainer}>
            <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients}></List>
            </View>
            <View style={styles.listContainer}>
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps}></List>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    root: {
        marginBottom: 32
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        margin: 8,
        color: 'white'
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 5,

        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    textStyle: {
        color: 'white'
    },
    listContainer: {
        width: '80%',
    },
    outerContainer: {
        alignItems: 'center'
    }

})

export default MealDetailScreen

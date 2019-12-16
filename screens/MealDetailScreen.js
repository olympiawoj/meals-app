import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { MEALS } from "../data/dummy-data"

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId')

    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (
        <View style={styles.screen}>
            <Text>The Meal Details Screen</Text>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go Back to Categories Screen" onPress={() => {
                props.navigation.push('Categories')
            }} /></View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    console.log('meal id', mealId)
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    console.log(selectedMeal)
    return {
        headerTitle: selectedMeal.title
    }
}


// CategoryMealsScreen.navigationOptions = (navigationData) => {
//     console.log(navigationData)
//     const catId = navigationData.navigation.getParam('categoryId')
//     console.log(catId)
//     const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
//     return {
//         headerTitle: selectedCategory.title,
//     }
// }



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailScreen
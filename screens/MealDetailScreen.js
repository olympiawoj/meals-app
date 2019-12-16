import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { MEALS } from "../data/dummy-data"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"

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
        headerTitle: selectedMeal.title,
        headerRight:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Favorite" iconName="ios-star" onPress={() => console.log('Mark as favorite')} />
                {/* <Item title="Favorite" iconName="ios-star-outline" onPress={() => console.log('Mark as favorite')} /> */}
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailScreen
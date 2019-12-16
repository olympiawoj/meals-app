import React from "react"
import { View, Text, StyleSheet, Button, FlatList } from "react-native"
import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem"

const CategoryMealsScreen = props => {

    const renderMealItem = itemData => {
        return (
            <MealItem
                affordability={itemData.item.affordability} complexity={itemData.item.complexity} duration={itemData.item.duration} image={itemData.item.imageURL} title={itemData.item.title} onSelectMeal={() => { }} />
        )
    }

    const catId = props.navigation.getParam('categoryId')

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} style={{ width: '100%' }} />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    console.log(navigationData)
    const catId = navigationData.navigation.getParam('categoryId')
    console.log(catId)
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen
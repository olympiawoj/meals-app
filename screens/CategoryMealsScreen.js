import React from "react"
import { View, StyleSheet } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import MealList from "../components/MealList"
import { useSelector } from "react-redux"
import DefaultView from "../components/DefaultText"

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId')

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.content}><DefaultView>
                No meals found, maybe check your filters?</DefaultView></View>
        )
    }

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    // console.log(navigationData)
    const catId = navigationData.navigation.getParam('categoryId')
    console.log(catId)
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return {
        headerTitle: selectedCategory.title,
    }
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CategoryMealsScreen
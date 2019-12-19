import React from "react"
import { CATEGORIES } from "../data/dummy-data"
import MealList from "../components/MealList"
import { useSelector } from "react-redux"

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId')

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)


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


export default CategoryMealsScreen
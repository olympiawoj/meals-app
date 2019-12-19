import React from "react"
import { View, FlatList, StyleSheet } from "react-native"
import MealItem from "../components/MealItem"
import { useSelector } from "react-redux"

const MealList = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const renderMealItem = itemData => {
        //can use .find or .some()
        const isFavorite = favoriteMeals.some(meal => meal.id == itemData.item.id)

        return (
            <MealItem
                affordability={itemData.item.affordability} complexity={itemData.item.complexity} duration={itemData.item.duration} image={itemData.item.imageUrl} title={itemData.item.title} onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: "MealDetail",
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFavorite
                        }
                    })
                }} />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealList;
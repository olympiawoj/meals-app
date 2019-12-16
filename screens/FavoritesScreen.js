import React from "react"
import { View, Text, StyleSheet } from "react-native"
import MealList from "../components/MealList"
import { MEALS } from "../data/dummy-data"

const FavoritesScreen = props => {

    const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2")
    return (
        <View style={styles.screen}><Text>The Favorites Screen</Text>
            <MealList listData={favMeals} navigation={props.navigation} />
        </View>
    )
}

FavoritesScreen.navigationOptions = {
    headerTitle: "Your Favorites"
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen
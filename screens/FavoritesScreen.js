import React from "react"
import { View, Text, StyleSheet } from "react-native"
import MealList from "../components/MealList"
import { MEALS } from "../data/dummy-data"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"

const FavoritesScreen = props => {

    const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2")
    return (
        <View style={styles.screen}><Text>The Favorites Screen</Text>
            <MealList listData={favMeals} navigation={props.navigation} />
        </View>
    )
}

FavoritesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: "Your Favorites",
        headerLeft:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu"
                    onPress={() => navigationData.navigation.toggleDrawer()} />
            </HeaderButtons>
    }


};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen
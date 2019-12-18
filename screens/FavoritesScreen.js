import React from "react"
import { View, Text, StyleSheet } from "react-native"
import MealList from "../components/MealList"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"
import { useSelector } from "react-redux"

const FavoritesScreen = props => {


    //state.meals select slice of state and then in this slice of state, this meals accesses meals property in initialState

    const favMeals = useSelector(state => state.meals.favoriteMeals)

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
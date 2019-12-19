import React from "react"
import { View, Text, StyleSheet } from "react-native"
import MealList from "../components/MealList"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"
import { useSelector } from "react-redux"
import DefaultText from "../components/DefaultText"

const FavoritesScreen = props => {


    //state.meals select slice of state and then in this slice of state, this meals accesses meals property in initialState

    const favMeals = useSelector(state => state.meals.favoriteMeals)
    console.log(favMeals)

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorite meals found. Start adding some!</DefaultText>
            </View>
        )
    }


    return (

        <MealList listData={favMeals} navigation={props.navigation} />

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
    content: {
        flex: 1,
        justifyContent: 'center'
        ,
        alignItems: 'center'
    }
})

export default FavoritesScreen
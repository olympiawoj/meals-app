import React, { useEffect } from "react"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"
import DefaultText from "../components/DefaultText"
import { useSelector } from "react-redux"
import { StyleSheet, ScrollView, Image, Text, View } from "react-native"


const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}
const MealDetailScreen = props => {

    const availableMeals = useSelector(state => state.meals.meals)

    const mealId = props.navigation.getParam('mealId')


    const selectedMeal = availableMeals.find(meal => meal.id === mealId)


    //merged with existing params, won't override mealId
    // useEffect(() => {
    //     props.navigation.setParams({ mealTitle: selectedMeal.title })
    // }, [selectedMeal])

    return (
        <ScrollView>
            <View style={styles.screen}>

                <Image source={{ uri: selectedMeal.imageURL }} style={styles.image} />
                <View style={styles.details}>
                    <DefaultText>{selectedMeal.duration}m</DefaultText>
                    <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
                </View>
                <Text style={styles.title}>Ingredients</Text>
                {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
                <Text style={styles.title}>Steps</Text>
                {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
            </View>
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    // console.log('meal id', mealId)
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    // const selectedMeal = MEALS.find(meal => meal.id === mealId)
    // console.log(selectedMeal)
    return {
        headerTitle: mealTitle,
        headerRight:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Favorite" iconName="ios-star" onPress={() => console.log('Mark as favorite')} />
                {/* <Item title="Favorite" iconName="ios-star-outline" onPress={() => console.log('Mark as favorite')} /> */}
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        textAlign: "center"
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default MealDetailScreen
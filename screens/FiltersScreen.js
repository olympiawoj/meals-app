import React, { useState, useEffect, useCallback } from "react"
import { View, Text, StyleSheet, Switch, Platform } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"
import Colors from "../constants/Colors"


const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch trackColor={{ true: Colors.primaryColor }} thumbColor={Platform.OS === "android" ? Colors.primaryColor : ''} value={props.state} onValueChange={props.onChange} />
        </View>
    )
}

const FiltersScreen = props => {

    const { navigation } = props

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setisLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        console.log(appliedFilters)
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        })
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters/Resitrictions</Text>
            <FilterSwitch label="Gluten-free" state={isGlutenFree} onChange={(newValue) => setIsGlutenFree(newValue)} />

            <FilterSwitch label="Lactose-free" state={isLactoseFree} onChange={(newValue) => setisLactoseFree(newValue)} />
            <FilterSwitch label="Vegan" state={isVegan} onChange={(newValue) => setIsVegan(newValue)} />
            <FilterSwitch label="Vegetarian" state={isVegetarian} onChange={(newValue) => setIsVegetarian(newValue)} />

        </View>
    )
}


FiltersScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: "Filter Meals",
        headerLeft:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu"
                    onPress={() => navigationData.navigation.toggleDrawer()} />
            </HeaderButtons>

        ,
        headerRight:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Save" iconName="ios-save"
                    onPress={navigationData.navigation.getParam('save')} />
            </HeaderButtons>
    }

}





const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        margin: 20,
        textAlign: "center"
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "80%",
        marginVertical: 15
    }
})

export default FiltersScreen
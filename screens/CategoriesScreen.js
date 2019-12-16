import React from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from "../components/CategoryGridTile"

const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        // console.log(itemData)
        return (

            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => props.navigation.navigate({
                    routeName: "CategoryMeals",
                    params: {
                        categoryId: itemData.item.id
                    }
                })}

            />

        );
    };


    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES} numColumns={2}
            renderItem={renderGridItem} />
    )
}

//same as setting up in MealsNavigator
// CategoriesScreen.navigationOptions = {
//     headerTitle: 'Meal Categories',

// };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen
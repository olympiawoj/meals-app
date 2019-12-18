import React from "react"
import { StyleSheet, FlatList, } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"
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
CategoriesScreen.navigationOptions = (navigationData) => {
    return {
        headerLeft:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu"
                    onPress={() => navigationData.navigation.toggleDrawer()} />
            </HeaderButtons>
    }

}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen
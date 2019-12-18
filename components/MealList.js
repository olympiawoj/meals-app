import React from "react"
import { View, FlatList, StyleSheet } from "react-native"
import MealItem from "../components/MealItem"

const MealList = props => {

    const renderMealItem = itemData => {
        return (
            <MealItem
                affordability={itemData.item.affordability} complexity={itemData.item.complexity} duration={itemData.item.duration} image={itemData.item.imageURL} title={itemData.item.title} onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: "MealDetail",
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title
                        }
                    })
                }} />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList data={props.listData} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} style={{ width: '100%' }} />
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
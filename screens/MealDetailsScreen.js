import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const MealDetailsScreen = props => {
    return (
        <View style={styles.screen}><Text>The Meal Details Screen</Text>
            <Button title="Go Back to Categories Screen" onPress={() => {
                props.navigation.push('Categories')
            }} /></View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailsScreen
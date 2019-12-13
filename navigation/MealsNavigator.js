import { Platform } from "react-native"

import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealDetailsScreen from "../screens/MealDetailsScreen"
import Colors from "../constants/Colors"

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: "Meal Caetegories"
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,

    },
    MealDetail: MealDetailsScreen
}, {
    initialRouteName: "MealDetail",
    mode: 'modal',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitle: "A Screen"
    }
})


export default createAppContainer(MealsNavigator)

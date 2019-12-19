import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font"
import { AppLoading } from "expo"

import MealsNavigator from "./navigation/MealsNavigator"
import mealsReducer from "./store/reducers/meals"
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { enableScreens } from "react-native-screens"
enableScreens()

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer)


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  async function fetchFonts() {
    await Font.loadAsync({
      'open-sans': require("./assets/fonts/OpenSans-Regular.ttf"),
      'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf")
    })
  }

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
    />
  }
  return <Provider store={store}><MealsNavigator /></Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold'
  }
});

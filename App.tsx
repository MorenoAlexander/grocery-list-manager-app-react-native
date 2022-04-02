import * as React from "react"
import tailwind from "tailwind-rn"
import { StyleSheet, Text, View, Button } from "react-native"
import SignUpScreen from "./pages/SignUp"
import LandingPage from "./pages/LandingPage"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={LandingPage}/>
        <Stack.Screen name="SignUp"  component={SignUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: tailwind("text-green-600"),
})

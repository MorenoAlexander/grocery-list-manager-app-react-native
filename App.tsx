import { StatusBar } from "expo-status-bar"
import React from "react"
import {} from "react-dom"
import tailwind from "tailwind-rn"
import { StyleSheet, Text, View, Button } from "react-native"
import SignUp from "pages/SignUp"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Welcome to the Grocery App</Text>
      <Button title="Log in" onPress={() => console.log("Log in!")} />
      <Button title="Sign Up" onPress={() => console.log("Sign up!")} />
      <Button
        title="Continue without registration!"
        onPress={() => console.log("Continue without registration!")}
      />
      <StatusBar style="auto" />
      <SignUp />
    </View>
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

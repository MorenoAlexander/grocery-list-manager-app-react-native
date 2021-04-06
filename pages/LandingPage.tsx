import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { StatusBar } from "expo-status-bar"
import tailwind from "tailwind-rn"

export default function LandingPage() {
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

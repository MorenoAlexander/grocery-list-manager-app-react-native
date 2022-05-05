import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import tailwind from "tailwind-rn";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import GLButton from "../components/common/GLButton";

export default function LandingPage({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Welcome to the Grocery App</Text>
      <Button title="Log in" onPress={() => console.log("Log in!")} />
      <GLButton onPress={() => navigation.push("SignUp")}>
        <Text>Register</Text>
      </GLButton>
      <Button
        title="Continue without registration!"
        onPress={() => console.log("Continue without registration!")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: tailwind("text-green-600"),
});

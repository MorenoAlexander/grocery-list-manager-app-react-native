import * as React from "react"
import { StatusBar } from "expo-status-bar"
import {} from "react-dom"
import tailwind from "tailwind-rn"
import { StyleSheet, Text, View } from "react-native"

export default function SignUpScreen() {
  return (
    <>
      <View>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    }
})

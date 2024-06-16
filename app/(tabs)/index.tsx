import React from "react";
import { Image, StyleSheet, SafeAreaView, View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.handImage}
        />
        <Text>Hi!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  handImage: {
    width: 284,
    height: 284,
    marginBottom: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  socialButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
    backgroundColor: "white",
    marginHorizontal: 16,
  },
  icon: {
    width: 54,
    height: 54,
  },
});

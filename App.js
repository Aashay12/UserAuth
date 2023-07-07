import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import AppNavigation from "./src/AppNavigation";

import { StatusBar } from "expo-status-bar"; 

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="auto" />
      <AppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

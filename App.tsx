import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Router } from "./components/router";

export default function App() {
  return <Router />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

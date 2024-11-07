import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constant";

const Title = ({ label }: { label: string }) => {
  return <Text style={styles.title}>{label}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.primary,
    marginVertical: 32,
    marginLeft: 50,
  },
});

export default Title;

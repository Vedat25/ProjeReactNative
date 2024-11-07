import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../constant";

const CButton = ({ label }: { label: string }) => {
  return (
    <TouchableOpacity style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: COLORS.secondary,
    textAlign: "center",
    paddingVertical: 12,
    borderRadius: 12,
  },
  primaryButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CButton;

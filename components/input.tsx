import { View, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { COLORS } from "../constant";

const Input = (props: TextInput["props"] & { icon?: string }) => {
  const [isSecure, setIsSecure] = useState(props.secureTextEntry);

  return (
    <View style={styles.input_wrapper}>
      <View style={styles.input_icon}>
        <Entypo
          name={(props.icon ?? "mail") as any}
          size={24}
          color={COLORS.border}
        />
      </View>
      <TextInput
        placeholder="Email"
        placeholderTextColor={COLORS.border}
        style={styles.input}
        {...props}
        secureTextEntry={isSecure}
      />
      {props.secureTextEntry && (
        <Pressable
          style={styles.input_eye}
          onPress={() => {
            setIsSecure: setIsSecure;
          }}
        >
          <Entypo name={isSecure ? "eye-with-line" : "eye"} size={18} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "transparent",
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flex: 1,
  },
  input_wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  input_icon: {
    padding: 10,
  },
  input_eye: { position: "absolute", right: 12, color: COLORS.border },
});

export default Input;

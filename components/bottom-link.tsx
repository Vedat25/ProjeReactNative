import React from "react";
import { Text } from "react-native";
import { COLORS } from "../constant";
import { useNavigation } from "@react-navigation/native";

const BottomLink = ({
  preText,
  postText,
  route,
}: {
  preText: string;
  postText: string;
  route: string;
}) => {
  const navigation = useNavigation();
  return (
    <Text
      style={{
        marginVertical: 128,
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      {preText}
      {""}{" "}
      <Text
        onPress={() => {
          navigation.navigate(route as never);
        }}
      />{" "}
      <Text style={{ color: COLORS.secondary }}>{postText}</Text>
    </Text>
  );
};

export default BottomLink;

import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  SafeAreaViewBase,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "../../constant";
import Input from "../../components/input";
import HeroImage from "../../components/hero-image";
import Title from "../../components/title";
import CButton from "../../components/button";
import BottomLink from "../../components/bottom-link";

const LoginScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={{ flex: 1 }}>
        <HeroImage ImgSrc={require("../../assets/login-hero.png")} />
        <Title label={"Login"} />
        <View
          style={{
            paddingHorizontal: 32,
            backgroundColor: "white",
            paddingVertical: 50,
            flex: 1,
          }}
        >
          <View style={{ rowGap: 12 }}>
            <Input placeholder="E Mail" />
            <Input placeholder="Password" icon="lock" secureTextEntry={true} />
          </View>
          <Text
            style={{
              color: COLORS.secondary,
              textAlign: "right",
              marginVertical: 16,
            }}
          >
            Forgot Password
          </Text>
          <CButton label="Login" />
          <BottomLink
            preText="Now to Our App ?"
            postText={"Register"}
            route={"signup"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

import React from "react";
import { View, Image, useWindowDimensions } from "react-native";

const HeroImage = ({ ImgSrc }: { ImgSrc: any }) => {
  const { height: screen_height } = useWindowDimensions();
  return (
    <View style={{ height: (screen_height * 3) / 10 }}>
      <Image
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
          position: "absolute",
        }}
        source={ImgSrc}
      ></Image>
    </View>
  );
};

export default HeroImage;

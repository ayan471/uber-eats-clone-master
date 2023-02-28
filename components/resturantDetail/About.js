import React from "react";
import { View, Text, Image } from "react-native";

const image = "https://www.paloaltoonline.com/blogs/photos/12/4219.jpg";
const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai . Comfort . $$ . 💳 . 4 ⭐ (2913+)";

export default function About() {
  return (
    <View>
      <ResturantImage image={image} />
      <ResturantTitle title={title} />
      <ResturantDescription description={description} />
    </View>
  );
}

const ResturantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);
const ResturantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);
const ResturantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);

import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/resturantDetail/About";
import MenuItems from "../components/resturantDetail/MenuItems";
import ViewCart from "../components/resturantDetail/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce,tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzler",
    price: "$19.20",
    image:
      "https://www.seema.com/wp-content/uploads/2021/08/shutterstock_1199926645-1024x683.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
    price: "$14.50",
    image:
      "https://www.saveur.com/uploads/2020/01/14/5K4HTZC7WBFUNCYR77AMTAKST4.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Health & Tasty",
    price: "$21.50",
    image:
      "https://img.taste.com.au/Wl3qdnK8/taste/2016/11/chicken-caesar-salad-83105-1.jpeg",
  },
  {
    title: "Biriyani",
    description: "Best Indian Dish ever!",
    price: "$25.69",
    image:
      "https://img.onmanorama.com/content/dam/mm/en/food/in-season/Ramzan/Images/hyderabadi-dum-biryani.jpg",
  },
];

export default function ResturantDetail({ route, navigation }) {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <About route={route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <MenuItems resturantName={route.params.name} foods={foods} />
        <ViewCart navigation={navigation} />
      </ScrollView>
    </View>
  );
}

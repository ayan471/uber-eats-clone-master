import { View, Text } from "react-native";
import React from "react";

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

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
});

export default function MenuItem() {
  return (
    <View>
      <FoodInfo food={foods[0]} />
      <FoodImage />
    </View>
  );
}

const FoodInfo = (props) => {
  <View>
    <Text>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>;
};

import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/resturantDetail/About";
import MenuItems from "../components/resturantDetail/MenuItems";

export default function ResturantDetail({ route }) {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <About route={route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <MenuItems />
      </ScrollView>
    </View>
  );
}

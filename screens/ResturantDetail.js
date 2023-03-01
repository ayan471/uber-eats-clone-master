import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/resturantDetail/About";
import MenuItems from "../components/resturantDetail/MenuItems";
import ViewCart from "../components/resturantDetail/ViewCart";

export default function ResturantDetail({ route, navigation }) {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <About route={route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <MenuItems />
        <ViewCart navigation={navigation} resturantName={route.params.name} />
      </ScrollView>
    </View>
  );
}

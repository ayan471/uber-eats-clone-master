import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function OrderCompleted() {
  const { items, resturantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <SafeAreaView>
      <Text>
        Your order at {resturantName} has been placed for {totalUSD}
      </Text>
    </SafeAreaView>
  );
}

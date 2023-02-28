import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import ResturantItems, {
  localRestaurants,
} from "../components/home/ResturantItems";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY =
  "gnHQqDe7FQkGZ6zrcGeyXRH-bqUmJ9gdCboDl5zmNEY3dIJ03eJbiPgk8YQebhCROxPNFvEdQEEyGALb7NusorjZAq3bRktEKsd8Vl64Ahmdh4j-q6SPaeUx8q38Y3Yx";

export default function Home() {
  const [resturantData, setResturantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getResturantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setResturantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getResturantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItems resturantData={resturantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

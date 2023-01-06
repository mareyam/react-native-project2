import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {  localRestaurants,}  from "../components/RestaurantItems";
import BottomTabs from "../components/BottomTabs";

const YELP_API_KEY =
  "LK9nJotDn5vcO4wzZrldrSHoZZkiavgwHMrTT2IyFDu8MjFwTOYt7c6OrnobMymgCwtRfMkVRAdk6AFqeN0A_RktPP41Ok66An2Wklgss2J1tb__vYaJ1Tv27LmvY3Yx";

export default function Home({navigation}) {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [activeTab, setActiveTab] = useState("Delivery");
    const [city, setCity] = useState("");
  
    const getRestaurantsFromYelp = async () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        };
        // .filter((business) =>
        //     business.transactions.includes(activeTab.toLowerCase())
    
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(json.businesses));
      };
      useEffect(() => {
        getRestaurantsFromYelp();
      }, [city,activeTab]);    

    return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
         <Categories/>
         <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
      </ScrollView>
      <BottomTabs/>
    </SafeAreaView>
  );
}
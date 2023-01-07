import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import Home from "./screens/Home";
import RestaurantDetails from "./components/restautantDetail/RestaurantDetails";

export default function Navigation({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="RestaurantDetails" onPress={() => navigation.navigate("RestaurantDetails")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#009988",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    elevation: 6,
  },
  textContainer: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import Home from "./screens/Home";
// import RestaurantDetails from "./components/restautantDetail/RestaurantDetails";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, View, Button } from "react-native";


// export default function RootNavigation() {
//     const Stack = createStackNavigator();
//     const screenOptions = {
//         headerShon: false,
//     }
//   return (
//     <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
//         </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function Navigation() {
//   return (
//     <View>
//       <StatusBar style="auto" />
//       <Button title="Home" onPress={() => navigation.navigate("Home")} />
//       <Button title="RestaurantDetails" onPress={() => navigation.navigate("RestaurantDetails")} />
//     </View>
//   );
// }

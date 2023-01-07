import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title="HomeScreen"
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Button
        title="RestaurantDetails"
        onPress={() => navigation.navigate("RestaurantDetails")}
      />
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

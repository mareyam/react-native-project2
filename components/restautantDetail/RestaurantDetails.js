import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import About from './About';
import MenuItem from './MenuItem';
import ViewCart from './ViewCart';

export default function RestaurantDetails({route}) {
  return (
    <View>
        <Text>helloooo</Text>
          <About route={route}/>
          {/* <MenuItem /> */}
          <MenuItem restaurantName={route.params.name}/>     
          <ViewCart navigation={navigation} />
    </View>
  );
}


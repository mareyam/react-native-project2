import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import About from './About';
import MenuItem from './MenuItem';

export default function RestaurantDetails({route}) {
  return (
    <View>
        <Text>helloooo</Text>
          <About route={route}/>
          <MenuItem />
    </View>
  );
}


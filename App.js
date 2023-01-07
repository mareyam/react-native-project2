
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';

const navigator = createStackNavigator(
{
	HomeScreen: HomeScreen,
},
{
	initialRouteName: "HomeScreen"
}

);
export default createAppContainer(navigator);



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Home from "./screens/Home";
// import Navigation from "./Navigation";
// import About from './components/restautantDetail/About';
// import MenuItem from './components/restautantDetail/MenuItem';

// export default function App() {
//   return (
//     <View>
//        <About/>
//        <MenuItem/>
//     </View>
//   );
// }

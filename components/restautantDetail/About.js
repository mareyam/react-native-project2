import React from 'react';
import {View, Text,Image} from "react-native";

const yelpRestaurantInfo = {
  name : "Farmhouse Kitchen Thai Cuisine",
  image : "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGtpdGNoZW58ZW58MHx8MHx8&w=1000&q=80",
  price: "$$",
  rating: 4.5,
  reviews: 1530,
  categories : [{
    title:"Indian",
    title:"Comfort food",
    title:"Coffee",
    title:"Thai",
    title:"Snacks"}],
}
const {name, image, price, rating, reviews, categories} = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" • ");
const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

export default function About () {
  return (
    <View>
       <RestaurantImage image={image} />
       <RestaurantName name={name} />
       <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} 
    style={{ width: "100%", height: 180 }} />
);

// import React from "react";
// import { View, Text, Image } from "react-native";

// export default function About(props) {
//   const { name, image, price, reviews, rating, categories } =
//     props.route.params;

//   const formattedCategories = categories.map((cat) => cat.title).join(" • ");

//   const description = `${formattedCategories} ${
//     price ? " • " + price : ""
//   } • 🎫 • ${rating} ⭐ (${reviews}+)`;
//   return (
//     <View>
//      
//     </View>
//   );
// }



const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
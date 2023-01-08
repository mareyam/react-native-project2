import React from "react";
import { View, Text, StyleSheet, Image,FlatList, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const food = [
    {
      title: "Beachside Barrr",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      description: "Cafe",
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      title: "Benihana",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      description: "Cafe",
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      title: "India's Grill",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      description: "Indian",
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
    {
      title: "India's Grill",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      description: "Indian",
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
    {
      title: "India's Grill",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      description: "Indian",
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
    {
      title: "India's Grill",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      description: "Indian",
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
    {
      title: "India's Grill",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      description: "Indian",
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];
export default function MenuItem({restaurantName}) {
  const dispatch = useDispatch();
  const selectItem = (item,checkboxValue) => 
  dispatch({
        type:"ADD_TO_CART",
        payload:{...item, restaurantName: restaurantName, checkboxValue:checkboxValue,},
      });

      const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
      );
    
      const isFoodInCart = (food, cartItems) =>
        Boolean(cartItems.find((item) => item.title === food.title));


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
           {food.map((food, index) => ( 
             <View key={index}>
               <View style={styles.menuItemStyle}>
                  <BouncyCheckbox
                    iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                    fillColor="green"
                    isChecked={isFoodInCart(food, cartItems)}
                    onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                  />
                 <FoodInfo food={food} />
                 <FoodImage food={food} />
             </View>
              <Text>_______________________________________________</Text>
            </View>
           ))}
            <Text>menu item</Text>
          </ScrollView>
          )}

const FoodInfo = (props) => (
        <View style={{ width: 240, justifyContent: "space-evenly" }}>
          <Text style={styles.titleStyle}>{props.food.title}</Text>
          <Text>{props.food.description}</Text>
          <Text>{props.food.price}</Text>
        </View>
      );

const FoodImage = (props) => (
        <View>
          <Image
            source={{ uri: props.food.image }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 8,
            }}/>
        </View>
      );


            

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});


 {/* <FlatList data={food}
                renderItem={({food}) => {
                return (
                    <View style={styles.menuItemStyle}> 
                      <FoodInfo food={food} />
                      <FoodImage food={food}/>
                    </View>
                )}}
            /> */}
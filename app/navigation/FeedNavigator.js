import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import colors from '../config/colors'

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
			headerStyle: {backgroundColor: colors.darkgreen},
			headerTintColor: "white",
      headerShown: false,

		}}
  >
    <Stack.Screen
      name="Feed"
      component={ListingsScreen}
      // options={{
      //   headerStyle: {backgroundColor: colors.darkgreen},
			//   headerTintColor: "white"
      // }}
    />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;

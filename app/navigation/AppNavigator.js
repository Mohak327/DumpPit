import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
				tabBarIcon: ({ size, color }) =>
					<MaterialCommunityIcons name="menu" size={25} color={color}/>
			}}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={{
				tabBarIcon: ({ size, color }) =>
					<MaterialCommunityIcons name="account" size={25} color={color}/>
			}}
    />
    <Tab.Screen
			name="Account"
			component={AccountScreen}
			options={{
				tabBarIcon: ({ size, color }) =>
					<MaterialCommunityIcons name="account" size={25} color={color}/>
			}}
		/>
  </Tab.Navigator>
);

export default AppNavigator;

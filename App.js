import React , {useState} from "react";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from "./app/screens/ListingEditScreen";

import Card from './app/components/Card';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

export default function App() {

  return (
    //  <ViewImageScreen />
    //  <WelcomeScreen />
    // <ListingDetailsScreen/>
    // <MessagesScreen />
    // <AccountScreen />
	// <ListingsScreen />
	// <LoginScreen />
	<ListingEditScreen />
  );
}

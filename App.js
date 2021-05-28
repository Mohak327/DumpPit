import React , {useState} from "react";
import { View, TextInput, Text, Switch } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';

import Card from './app/components/Card';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
	{ label: "Furniture", value: "1"},
	{ label: "Clothing", value: "2"},
	{ label: "Miscellaneous", value: "3"},
]

export default function App() {

	// const [firstName, setFirstName] = useState('');
	// const [isNew, setIsNew] = useState(false);
	const [category, setCategory] = useState(categories[0]);

  return (
    //  <ViewImageScreen />
    //  <WelcomeScreen />
    // <ListingDetailsScreen/>
    // <MessagesScreen />
    // <AccountScreen />
	// <ListingsScreen />
	<LoginScreen />

  );
}

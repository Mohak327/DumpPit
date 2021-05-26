import React , {useState} from "react";
import { View, TextInput, Text } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

import Card from './app/components/Card';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AppTextInput from './app/components/AppTextInput';


export default function App() {

	const [firstName, setFirstName] = useState('');

  return (
    //  <ViewImageScreen />
    //  <WelcomeScreen />
    // <ListingDetailsScreen/>
    // <MessagesScreen />
    // <AccountScreen />
	// <ListingsScreen />

	<AppTextInput
		placeholder='Username'
		icon='email'
	/>

    // <Screen>
	// 	{/* <Text>{firstName}</Text> */}
    //   	<TextInput
	// 		// keyboardType='numeric'
	// 		secureTextEntry = {true}	// For passwords
	// 		clearButtonMode= "always"	// iOS only
	// 	  	maxLength={20}
	// 	//   update first name when typed
	// 		onChangeText={text => setFirstName(text)}
	// 	  	placeholder="First Name"
	// 		style = {{
	// 			borderBottomColor: "#ccc",
	// 			borderBottomWidth: 1,
	// 		}}
	// 	/>
    // </Screen>
  );
}

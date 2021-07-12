import React, { useState, useEffect } from 'react'

import ViewImageScreen from './app/screens/ViewImageScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import LoginScreen from './app/screens/LoginScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import RegisterScreen from './app/screens/RegisterScreen'

import Screen from './app/components/Screen'
import colors from './app/config/colors'

import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { Button, Image, Text } from 'react-native';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import navigationTheme from "./app/navigation/navigationTheme";


import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';

const Stack = createStackNavigator();
const StackNavigator = () => (

// Stack.Screen properties are local, to apply same properties in all screens, we can apply them in the Stack.Navigator instead

	<Stack.Navigator
		screenOptions={{
			headerStyle: {backgroundColor: colors.darkgreen},
			headerTintColor: "white"
		}}
	>
		<Stack.Screen name="Tweets" component={Tweets} />
		<Stack.Screen
			name="TweetDetails"
			component={TweetDetails}
			options={({ route }) => ({ title: `Tweet Details ${route.params.id}` })}
		/>
	</Stack.Navigator>
)

const Link = () => {
	const navigation = useNavigation();
	return (
		<Button
			title="Click"
			onPress={() => navigation.navigate("TweetDetails", {id: 1})}
		/>
	)
}

const Tweets = ({ navigation }) => (
	<Screen>
		<Text>Tweets</Text>
		<Link />
	</Screen>
);

const TweetDetails = ({ route }) => (
	<Screen>
	{/* {route.params.id} return the object w passed in the onPress event of Link */}
		<Text>Tweet Details {route.params.id}</Text>
	</Screen>
)

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
	<Tab.Navigator
		tabBarOptions={{
			activeBackgroundColor: 'white',
			activeTintColor: colors.darkgreen,
			// inactiveBackgroundColor:'#eee',
			inactiveTintColor: 'black',
		}}
	>
		<Tab.Screen
			name="Feed"
			component={StackNavigator}
			options={{
				tabBarIcon: ({ size, color }) =>
					<MaterialCommunityIcons name="home" size={25} color={color}/>
			}}
		/>
		<Tab.Screen
			name="Account"
			component={Account}
			options={{
				tabBarIcon: ({ size, color }) =>
					<MaterialCommunityIcons name="account" size={25} color={color}/>
			}}
		/>
	</Tab.Navigator>
)

export default function App() {
	return (
		<NavigationContainer theme = {navigationTheme}>
			<AppNavigator />
		</NavigationContainer>

		//  <ViewImageScreen />
		//  <WelcomeScreen />
		// <ListingDetailsScreen/>
		// <MessagesScreen />
		// <AccountScreen />
		// <ListingsScreen />
		// <LoginScreen />
		// <RegisterScreen />
		// <ListingEditScreen />

	)
}

import React, { useState, useEffect } from 'react'

import ViewImageScreen from './app/screens/ViewImageScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import LoginScreen from './app/screens/LoginScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'

import Screen from './app/components/Screen'

import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { Button, Image } from 'react-native';
import ImageInput from './app/components/ImageInput';

export default function App() {
	const [imageUri, setImageUri] = useState();

	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
          	alert('Sorry, you need camera roll permissions to make upload items!');
        }
	}

// async function cannot be passed in a use hook. so we will return a function promise
// return promise function
	useEffect(() => {
		requestPermission();
	}, [])

	const selectImage= async() => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync();

			if(!result.cancelled) {
				setImageUri(result.uri);
			}

		} catch (error) {
			console.log("Error reading an image", error)
		}
	}

	return (
		<Screen>
			{/* <Button title="Image" onPress={selectImage}/>
			<Image
				source={{ uri: imageUri}}
				style={{ width: 150, height: 150 }}/> */}
			<ImageInput
				imageUri={imageUri}
				onChangeImage={(uri) => setImageUri(uri)}
			/>
		</Screen>

		//  <ViewImageScreen />
		//  <WelcomeScreen />
		// <ListingDetailsScreen/>
		// <MessagesScreen />
		// <AccountScreen />
		// <ListingsScreen />
		// <LoginScreen />
		// <ListingEditScreen />
	)
}

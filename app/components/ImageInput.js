import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {

    const handlePress = () => {
        if(!imageUri)
            selectImage();
        else
        // Alert component in React Native has 3 arguments passed in it:
            // Alert heading
            // Alert message
            // An array of alert button elements with properties
            Alert.alert('Delete', 'Are you sure you want to delete this iamge?', [
                { text: 'Yes', onPress: () => onChangeImage(null)},
                { text: 'No'},
            ]);
    };

    const selectImage = async() => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
            // specify media types
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
            // quality ranges between 0(lowest) to 1(highest) quality
                quality: 0.5
            });

			if(!result.cancelled) {
				onChangeImage(result.uri);
			}

		} catch (error) {
			console.log("Error reading an image", error)
		}
	}

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri &&
                    <MaterialCommunityIcons
                        name="camera"
                        size={40}
                        color={colors.medium}
                    />
                }

                {imageUri &&
                    <Image
                        source={{uri: imageUri}}
                        style={styles.image}
                    />
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 120,
        width: 120,
        justifyContent: 'center',
        overflow: "hidden"
    },
    image: {
        height: '100%',
        width: '100%',
    }
})

export default ImageInput;
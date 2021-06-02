import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from '../AppText';
import colors from '../../config/colors';


function ListItem({
	title,
	subTitle,
	image,
	IconComponent,
	onPress,
	renderRightActions
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight
				// Adds a black background when View is clicked
				onPress={onPress}
				// Adds a lighter underlay colour as black is too dark.
				underlayColor={colors.light}
			>
				<View style={styles.container}>

					{IconComponent}
				{/* The image is rendered only if we  have an image prop */}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title} numberOfLines={1}>{title}</AppText>
						{subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
					</View>

					<MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25}/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		backgroundColor: colors.white
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: 'center',
		flex: 1
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10
	},
	subTitle: {
		color: colors.medium
	},
	title: {
		fontWeight: '500'
	}
})

export default ListItem

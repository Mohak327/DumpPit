import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from '../AppText'
import colors from '../../config/colors'


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
						<AppText style={styles.title}>{title}</AppText>
						{subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
					</View>
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

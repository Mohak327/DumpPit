import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from '../components/AppText'

import colors from '../config/colors'
import { ListItem } from '../components/lists'

function ListingDetailsScreen(props) {
	return (
		<View>
			<Image style={styles.image} source={require('../assets/jacket.jpg')} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Nanotech Helmet</AppText>
				<AppText style={styles.price}>1000 Blooms</AppText>
				<View style={styles.userContainer}>
					<ListItem image={require('../assets/groot.png')} title='Groot' subTitle='Level 3' />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20
	},
	image: {
		width: '100%',
		height: 300
	},
	price: {
		color: colors.secondary,
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 5
	},
	title: {
		fontSize: 24,
		fontWeight: '500'
	},
	userContainer: {
		marginVertical: 20
	}
})

export default ListingDetailsScreen

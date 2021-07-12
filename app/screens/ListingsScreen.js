import React from 'react';
import Screen from '../components/Screen';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';

import colors from "../config/colors";

const listings = [
    {
        id: 1,
        title: "Nanotech Helmet",
        price: 300,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: "Orb Of Osuvox",
        price: 1000,
        image: require('../assets/orb.jpg')
    },
]

function ListingsScreen({ navigation}) {
    return (
        <Screen style={styles.container}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={item.price + " Blooms"}
                        image={item.image}
                        onPress={() => navigation.navigate("ListingDetails")}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        // paddingLeft: 20,
        backgroundColor: colors.light,
    }
})

export default ListingsScreen;
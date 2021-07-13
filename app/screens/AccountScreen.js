import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { ListItem, ListItemSeparator } from '../components/lists';
import colors from '../config/colors';
import Icon from '../components/Icon';
import routes from '../navigation/routes';
import Screen from '../components/Screen';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
        // targetScreen: routes.LISTING_EDIT,
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: routes.MESSAGES,
    },
];

function AccountScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Groot"
                    subTitle="Level 3"
                    image={require('../assets/groot.png')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}

                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon
                        name="logout"
                        backgroundColor={colors.danger}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light,
    }
})

export default AccountScreen;
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Constants from 'expo-constants';

import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon}
                    />
            }
            <TextInput style={defaultStyles.text} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: Constants.statusBarHeight,
        alignItems: "center"

    },
    icon: {
        marginRight: 10,
    },
});

export default AppTextInput;
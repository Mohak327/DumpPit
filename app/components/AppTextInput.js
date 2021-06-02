import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Constants from 'expo-constants';

import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({icon, width = "100%", righticon, ...otherProps}) {
    return (
        <View style={[styles.container, {width}]}>
            {icon &&
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={defaultStyles.colors.medium}
                    style={styles.icon}
                />
            }
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={defaultStyles.text} {...otherProps}
            />
            {righticon &&
                <MaterialCommunityIcons
                    name={righticon}
                    size={20}
                    color={defaultStyles.colors.medium}
                    style={styles.righticon}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        // marginVertical: Constants.statusBarHeight,
        marginVertical: 10,
        alignItems: "center",
    },
    icon: {
        marginRight: 10,
    },
    righticon: {
        position: "absolute",
        right: 20,
    },
    text: {
        flex: 1
    },
});

export default AppTextInput;
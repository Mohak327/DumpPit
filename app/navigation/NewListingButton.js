import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

import { MaterialCommunityIcons } from "@expo/vector-icons";

function NewListingButton({onPress}) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="plus-circle"
                color={colors.white}
                size={45}
            />
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        borderWidth: 8,
        borderColor: colors. white,
        backgroundColor: colors.primary,
        borderRadius: 45,
        height: 90,
        width: 90,
        bottom: 45
    }
})

export default NewListingButton;
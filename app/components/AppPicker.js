import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Modal,
    Button,
    FlatList
} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

// import Constants from 'expo-constants';

import AppText from './AppText';
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import PickerItem from './PickerItem';

function AppPicker({
    icon,
    items,
    numberOfCloumns = 1,
    onSelectItem,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem,
    width = "100%"
}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
    // React.Fragment is uded to wrap multiple components in a return(). It can also be written as <> </>.
      <React.Fragment>
        {/* Component-1 */}
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

        {/* Component-2 */}
        <Modal visible={modalVisible} animationType="slide">
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList
                data={items}
                keyExtractor={item => item.value.toString()}
                numColumns={numberOfCloumns}
                renderItem={({ item }) => (
                    // <PickerItemComponent
                    <PickerItem
                        item={item}
                        label={item.label}
                        onPress={() => {
                        // Close modal on selecting category
                            setModalVisible(false);
                        // Update category
                            onSelectItem(item);
                        }}
                    />
                )}
            />
        </Modal>
      </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 20,
        marginVertical: 10,
        alignItems: "center"
    },
    icon: {
        marginRight: 10,
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    },
    text: {
        flex: 1
    },
});

export default AppPicker;
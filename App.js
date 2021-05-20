import React from "react";
import { View } from "react-native";

// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";

import Card from './app/components/Card'

export default function App() {
  return (
    //  <ViewImageScreen />
    //  <WelcomeScreen />
    // <ListingDetailsScreen/>

    <View style={{
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100,
    }}>
      <Card
        title="Red Jacket For Sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}

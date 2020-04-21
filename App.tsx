import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "./components/Menu";
import Develop from "./components/DevelopPages/Develop";
import Algorithm from "./components/DevelopPages/Algorithm";
import Communication from "./components/DevelopPages/Communication";
import GPS from "./components/DevelopPages/GPS";
import Navigation from "./components/pages/Navigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Menu}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Dev" component={Develop} />
          <Stack.Screen name="Dev - Algorithm" component={Algorithm} />
          <Stack.Screen name="Dev - GPS" component={GPS} />
          <Stack.Screen name="Dev - Communication" component={Communication} />
          <Stack.Screen name="Nav - page" component={Navigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

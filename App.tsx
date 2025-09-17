import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen.tsx";
import RegisterScreen from "../screens/RegisterScreen.tsx";
import DashboardScreen from "../screens/DashboardScreen.tsx";
import AddProductScreen from "../screens/AddProductScreen.tsx";
import MarketScreen from "../screens/MarketScreen.tsx";
import ProfileScreen from "../screens/ProfileScreen.tsx";
import OrdersScreen from "../screens/OrdersScreen.tsx";
import NotificationsScreen from "../screens/NotificationsScreen.tsx";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Add Product" component={AddProductScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

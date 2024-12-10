import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "@/navigation/MainNavigator";
// Create a bottom tab navigator

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Home screen commponent here new
const HomeScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>propcut</Text>
    {/* Add more UI components as needed */}
  </View>
);

// Settings screen component
const SettingsScreen: React.FC = () => (
  <View style={styles.container}>
    <Text>Settings</Text>
  </View>
);

// Main App component with navigation
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default App;

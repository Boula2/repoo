import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header section with logo and icons */}
      <View style={styles.header}>
        <Text style={styles.logo}>propcut</Text>
        <View style={styles.icons}>{/* propcut icon  */}</View>
      </View>

      {/* Search input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search apart, property, etc..."
      />

      {/* Filter buttons */}
      <View style={styles.filterButtons}>
        <Button title="All" color="#4CAF50" onPress={() => {}} />
        <Button title="Available" onPress={() => {}} />
        <Button title="Sold out" onPress={() => {}} />
      </View>

      {/* Section header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best for you</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>

      {/* Property card example */}
      <View style={styles.card}>
        <Text style={styles.price}>75,000 AED</Text>
        <Text>Tranquil Haven in the Woods</Text>
      </View>
    </ScrollView>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  icons: {
    flexDirection: "row",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
  },
  filterButtons: {
    color: "#818181",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAll: {
    color: "#818181",
  },
  card: {
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  price: {
    color: "#4CAF50",
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 5,
  },
});

export default HomeScreen;

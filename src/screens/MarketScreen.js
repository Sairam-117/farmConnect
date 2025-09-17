import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const sampleProducts = [
  { id: "1", name: "Tomatoes", price: "₹40/kg" },
  { id: "2", name: "Onions", price: "₹30/kg" },
  { id: "3", name: "Wheat", price: "₹25/kg" },
];

export default function MarketScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Market</Text>
      <FlatList
        data={sampleProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - {item.price}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: "#ddd" },
});

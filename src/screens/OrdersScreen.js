import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const orders = [
  { id: "1", product: "Tomatoes", quantity: "20kg", buyer: "Rahul" },
  { id: "2", product: "Onions", quantity: "50kg", buyer: "Anita" },
];

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.product} ({item.quantity}) - Buyer: {item.buyer}
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

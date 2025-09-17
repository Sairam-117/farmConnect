import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const notifications = [
  { id: "1", message: "Your product Tomatoes has been purchased." },
  { id: "2", message: "New buyer registered in your area." },
  { id: "3", message: "Reminder: Update your stock." },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.message}</Text>
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

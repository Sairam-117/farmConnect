import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function ProfileScreen() {
  const [name, setName] = useState("Ravi Kumar");
  const [email, setEmail] = useState("farmer@example.com");
  const [location, setLocation] = useState("Andhra Pradesh");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} value={location} onChangeText={setLocation} />
      <Button title="Update Profile" onPress={() => alert("Profile Updated")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 5 },
});

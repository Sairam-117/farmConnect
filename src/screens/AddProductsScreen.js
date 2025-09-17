import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddProductScreen() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Product</Text>
      <TextInput style={styles.input} placeholder="Product Name" value={product} onChangeText={setProduct} />
      <TextInput style={styles.input} placeholder="Price" keyboardType="numeric" value={price} onChangeText={setPrice} />
      <TextInput style={styles.input} placeholder="Quantity" keyboardType="numeric" value={quantity} onChangeText={setQuantity} />
      <Button title="Submit" onPress={() => alert("Product Added")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 5 },
});

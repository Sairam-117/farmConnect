import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const handleMerchantPress = () => {
    console.log("Merchant button pressed");
    // navigation.navigate("MerchantLogin");
  };

  const handleCustomerPress = () => {
    console.log("Customer button pressed");
    // navigation.navigate("CustomerLogin");
  };

  return (
    <View style={styles.container}>
      {/* Logo & Title */}
      <Image
        source={require("./assets/logo.png")} // replace with your logo
        style={styles.logo}
      />
      <Text style={styles.title}>
        <Text style={styles.green}>FARM</Text> CONNECT
      </Text>
      <Text style={styles.subtitle}>~ Bridging Farms And Markets</Text>

      {/* Buttons Section */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={handleMerchantPress}>
          <Image
            source={require("./assets/merchant.png")} // replace with your merchant img
            style={styles.image}
          />
          <Text style={styles.label}>MERCHANT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleCustomerPress}>
          <Image
            source={require("./assets/customer.png")} // replace with your customer img
            style={styles.image}
          />
          <Text style={styles.label}>CUSTOMER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  green: {
    color: "green",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 30,
  },
  card: {
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
});


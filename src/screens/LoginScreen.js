import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// The navigation prop is passed in automatically by React Navigation
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FarmConnect</Text>
      <Button
        title="Go to Home (Temporary)"
        onPress={() => navigation.navigate('Home')}
      />
      {/* Your Google Sign-In button will go here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LoginScreen;
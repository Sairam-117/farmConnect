import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const LoginScreen = ({ navigation }) => {
  // This configures the Google Sign-In helper
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '770026673525-t6e9sen7usbvr1le6j5kvvfnl912tlmc.apps.googleusercontent.com', // <-- We need to replace this
    });
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      
      console.log('Login successful!');
      navigation.navigate('Home');

    } catch (error) {
      console.error(error);
      Alert.alert('Login Failed', 'Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FarmConnect</Text>
      <Button
        title="Sign in with Google"
        onPress={onGoogleButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
});

export default LoginScreen;
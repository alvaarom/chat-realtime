import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

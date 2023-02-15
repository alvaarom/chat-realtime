import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NativeBaseProvider, Container, extendTheme} from 'native-base';
import ChatScreen from './src/screens/Chat';
import LoginScreen from './src/screens/Login';

export default function App() {
  const [userName, setUserName] = useState(null);

  return (
    <Container style={styles.container}>
      {!userName ? <LoginScreen /> : <ChatScreen />}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#16202b'},
});

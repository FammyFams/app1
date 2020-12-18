import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  Dimensions,
  View,
} from 'react-native';

export default function App() {
  console.log(Dimensions.get('screen'));

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgeblue',
          width: '100%',
          height: '40%',
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

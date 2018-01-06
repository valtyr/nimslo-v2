import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import Navigator from './Navigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

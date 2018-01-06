import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    marginTop: 'auto',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: 'rgb(244, 207, 99)',
    borderWidth: 5,
    borderColor: 'rgb(189, 162, 86)',
    borderRadius: 40,
    shadowColor: 'black',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
});

const CaptureButton = ({onCapture}) => (
  <View style={styles.root}>
    <TouchableOpacity onPress={onCapture}>
      <View style={styles.button} />
    </TouchableOpacity>
  </View>
);

export default CaptureButton;

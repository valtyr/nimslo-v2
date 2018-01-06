import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Camera, Permissions} from 'expo';

import {Ionicons} from '@expo/vector-icons';
import {iOSUIKit} from 'react-native-typography';

import StandardScreen from '../../components/StandardScreen';
import CaptureButton from './components/CaptureButton';

const styles = StyleSheet.create({
  flipButton: {
    alignSelf: 'flex-start',
    marginLeft: 'auto',
    marginRight: 15,
    marginTop: 15,
    shadowColor: 'black',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.05,
    shadowRadius: 5,
    opacity: 0.8,
  },
  header: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  heading: {
    color: 'white',
    padding: 16,
    shadowColor: 'black',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.05,
  },
});

class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  flipCamera = () => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back,
    });
  };

  onCapture = () => {};

  render() {
    const {hasCameraPermission} = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <StandardScreen style={{flex: 1}}>
          <Camera style={{flex: 1}} type={this.state.type}>
            <View style={styles.header}>
              <Text style={[iOSUIKit.title3Emphasized, styles.heading]}>Take a picture!</Text>
              <TouchableOpacity style={styles.flipButton} onPress={this.flipCamera}>
                <Ionicons name="md-reverse-camera" color="white" size={32} />
              </TouchableOpacity>
            </View>
            <CaptureButton onCapture={this.onCapture} />
          </Camera>
        </StandardScreen>
      );
    }
  }
}

export default CameraScreen;

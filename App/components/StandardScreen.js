import React from 'react';
import {View, SafeAreaView} from 'react-native';

const StandardScreen = ({children}) => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: 'black',
    }}
  >
    <View
      style={{
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
      }}
    >
      {children}
    </View>
  </SafeAreaView>
);

export default StandardScreen;

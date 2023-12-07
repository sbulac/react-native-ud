import React from 'react';
import {Text, View} from 'react-native';

const HelloWorldScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 40, textAlign: 'center'}}>Hello World!</Text>
    </View>
  );
};

export default HelloWorldScreen;

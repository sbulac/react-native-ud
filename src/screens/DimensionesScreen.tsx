import React from 'react';
import {StyleSheet, View} from 'react-native';

const DimensionesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.redBox} />
      <View style={styles.purpleBox} />
    </View>
  );
};

export default DimensionesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greenBox: {
    backgroundColor: 'green',
    ...StyleSheet.absoluteFillObject,
  },
  purpleBox: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: '#eee',
    borderRadius: 5,
    backgroundColor: '#5856d6',
    position: 'absolute',
    right: 0,
  },
  redBox: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: '#eee',
    borderRadius: 5,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

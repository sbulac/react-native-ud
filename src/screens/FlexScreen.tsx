import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

export default FlexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  caja1: {
    borderWidth: 2,
    borderColor: '#eee',
  },
  caja2: {
    borderWidth: 2,
    borderColor: '#eee',
  },
  caja3: {
    borderWidth: 2,
    borderColor: '#eee',
  },
});

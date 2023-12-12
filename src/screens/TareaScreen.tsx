import React from 'react';
import {StyleSheet, View} from 'react-native';

const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.caja, styles.cajaMorada]} />
      <View style={[styles.caja, styles.cajaNaranja]} />
      <View style={[styles.caja, styles.cajaAzul]} />
    </View>
  );
};

export default TareaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c505d',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  caja: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: '#eee',
  },
  cajaMorada: {
    backgroundColor: '#c026d3',
  },
  cajaNaranja: {
    backgroundColor: '#d97706',
  },
  cajaAzul: {
    backgroundColor: '#0284c7',
  },
});

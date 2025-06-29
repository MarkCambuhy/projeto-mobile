import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Relatorio = () => {
  return (
    <View style={styles.view}>
      <Image source={require('../components/images/grafico.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#372775',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 250,
    height: 250,
  },
});

export default Relatorio;
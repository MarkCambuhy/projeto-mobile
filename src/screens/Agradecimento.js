import React, {useEffect} from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function Agradecimento(props) {
//Temporizador
    useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate('Drawer');
    }, 3000);}, [props]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#372775" barStyle="light-content" />
      <Text style={styles.textoPrincipal}>Obrigado por participar da pesquisa!</Text>
      <Text style={styles.textoSecundario}>Aguardamos você no próximo ano!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textoPrincipal: {
    fontSize: 26,
    color: '#ffffff',
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    marginBottom: 30,
  },
  textoSecundario: {
    fontSize: 26,
    color: '#ffffff',
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
  },
});
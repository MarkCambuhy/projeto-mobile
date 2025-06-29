import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Botao from '../components/Botoes';

const RecuperarSenha = (props) => {
  const [email, setEmail] = useState('');
  const [txtErro, setErro] = useState('');

  const recSenha = () => {
    if (!email.includes('@')) {
      setErro('E-mail parece ser inválido!');
      setEmail('');
      return;
    }
    setErro('');
    setEmail('');
    props.navigation.navigate('Login');
  };

  return (
    <View style={estilos.view}>
      <View style={estilos.cInput}>
        <Text style={estilos.texto}>E-mail</Text>
        <TextInput
          style={estilos.textInput}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {txtErro ? <Text style={estilos.textoErro}>{txtErro}</Text> : null}
      </View>

      <View style={estilos.cBotao}>
        <Botao texto="RECUPERAR" funcao={recSenha} />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#372775',
    flexDirection: 'column',
  },

  texto: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    color: '#ffffff',
    marginTop: 10,
  },

  textInput: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    backgroundColor: '#ffffff',
    height: 40,
    paddingHorizontal: 8,
    borderRadius: 5,
  },

  textoErro: {
    fontSize: 11,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
  },

  cInput: {
    flex: 0.5,
    flexDirection: 'column',
    padding: 30,
    paddingTop: 60,
    justifyContent: 'center',
    alignContent: 'center',
  },

  cBotao: {
    flex: 0.5,
    flexDirection: 'column',
  },
});

export default RecuperarSenha;
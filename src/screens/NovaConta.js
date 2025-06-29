import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setEmail, setSenha, setError } from '../../redux/loginSlice';
import Botao from '../components/Botoes';
import { useState } from 'react';

const NovaConta = (props) => {
  const [txtEmail, setEmailLocal] = useState('');
  const [txtSenha, setSenhaLocal] = useState('');
  const [txtSenhab, setSenhabLocal] = useState('');
  const [txtErro, setErroLocal] = useState('');
  const dispatch = useDispatch();

  const registro = () => {
    if (!txtEmail.includes('@')) {
      setErroLocal('O e-mail deve conter um domínio válido');
      setEmailLocal('');
      return;
    }
    if (txtSenha !== txtSenhab) {
      setErroLocal('O campo repetir senha difere da senha');
      setSenhaLocal('');
      setSenhabLocal('');
      return;
    }
    setErroLocal('');
    dispatch(setEmail(txtEmail));
    dispatch(setSenha(txtSenha));
    props.navigation.navigate('Login');
  };

  return (
    <View style={estilos.view}>
      <View style={estilos.cInput}>
        <Text style={estilos.texto}>E-mail</Text>
        <TextInput
          style={estilos.textInput}
          value={txtEmail}
          onChangeText={setEmailLocal}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={estilos.texto}>Senha</Text>
        <TextInput
          style={estilos.textInput}
          value={txtSenha}
          onChangeText={setSenhaLocal}
          secureTextEntry
        />

        <Text style={estilos.texto}>Repetir senha</Text>
        <TextInput
          style={estilos.textInput}
          value={txtSenhab}
          onChangeText={setSenhabLocal}
          secureTextEntry
        />

        {txtErro ? <Text style={estilos.textoErro}>{txtErro}</Text> : null}
      </View>

      <View style={estilos.cBotao}>
        <Botao texto="CADASTRAR" funcao={registro} />
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
    marginBottom: 10,
  },

  textoErro: {
    fontSize: 11,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
  },

  cInput: {
    flex: 0.75,
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

export default NovaConta;
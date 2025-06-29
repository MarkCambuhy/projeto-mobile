import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Botao from '../components/Botoes';
import BotaoAzul from '../components/Botaosec';
import BotaoCinza from '../components/Botaoterc';
import { setEmail, setSenha, setLogin, setError } from '../../redux/loginSlice';

const Login = (props) => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.login.email);
  const senha = useSelector((state) => state.login.senha);
  const error = useSelector((state) => state.login.error);

  const irNovaconta = () => {
    props.navigation.navigate('Nova Conta');
  };

  const irRecuperarSenha = () => {
    props.navigation.navigate('Recuperar senha');
  };

  const entrar = () => {
    if (!email.includes('@') || senha.length < 1) {
      dispatch(setError('Email e/ou Senha Inválidos!'));
      return;
    }
    dispatch(setLogin({ email, senha }));
    props.navigation.navigate('Drawer');
  };

  return (
    <View style={estilos.view}>
      <View style={estilos.cTitle}>
        <Text style={estilos.titulo}>Satisfying.you</Text>
        <Icon name="emoticon-happy-outline" size={60} color="#ffffff" />
      </View>

      <View style={estilos.cInput}>
        <Text style={estilos.texto}>E-mail</Text>
        <TextInput
          style={estilos.textInput}
          value={email}
          placeholder="jurandir@hotmail.com"
          onChangeText={(text) => dispatch(setEmail(text))}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={estilos.texto}>Senha</Text>
        <TextInput
          style={estilos.textInput}
          value={senha}
          placeholder="*****"
          onChangeText={(text) => dispatch(setSenha(text))}
          secureTextEntry
        />

        {error ? <Text style={estilos.textoErro}>{error}</Text> : null}
      </View>

      <View style={estilos.cBotao}>
        <Botao texto="Entrar" funcao={entrar} />
        <BotaoAzul texto="Criar minha conta" funcao={irNovaconta} />
        <BotaoCinza texto="Esqueci minha senha" funcao={irRecuperarSenha} />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#372775',
    flexDirection: 'column',
    padding: 10,
  },
  texto: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    color: '#ffffff',
    marginTop: 10,
  },
  titulo: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 36,
    color: '#fff',
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
    flex: 0.4,
    flexDirection: 'column',
    marginHorizontal: 30,
    justifyContent: 'center',
    alignContent: 'center',
  },
  cBotao: {
    flex: 0.4,
    flexDirection: 'column',
    marginTop: 20,
  },
  cTitle: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
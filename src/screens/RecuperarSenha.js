import { View, Text, TextInput, StyleSheet, Alert } from 'react-native' // 1. Adicionar Alert
import { useState } from 'react'
import Botao from '../components/Botoes'


import auth from '@react-native-firebase/auth';

const RecuperarSenha = (props) => {
  const [email, setEmail] = useState('');
  const [txtErro, setErro] = useState('');

 
  const recSenha = () => {
    if (!email) {
      setErro('Por favor, digite seu endereço de e-mail.');
      return;
    }

    setErro('');

    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        // Sucesso!
        Alert.alert(
          'Verifique seu E-mail',
          'Um link para redefinição de senha foi enviado para o seu endereço de e-mail.',
          [{ text: 'OK', onPress: () => props.navigation.navigate('Login') }]
        );
      })
      .catch(error => {
        // Falha!
        console.error(error.code);

        if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
          setErro('Nenhum usuário encontrado com este e-mail.');
        } else if (error.code === 'auth/invalid-email') {
          setErro('O formato do e-mail é inválido.');
        } else {
          setErro('Ocorreu um erro ao tentar enviar o e-mail. Tente novamente.');
        }
      });
  }

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
        <Botao texto="RECUPERAR" funcao={recSenha}/>
      </View>
    </View>
  )
}


const estilos = StyleSheet.create({
  view:{
    flex:1,
    backgroundColor: '#372775',
    flexDirection: 'column'
  },
  texto: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    color:'#ffffff',
    marginTop:10
  },
  textInput: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    backgroundColor: '#ffffff',
    height:'auto'
  },
  textoErro: {
    fontSize: 11,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979'
  },
  cInput:{
    flex:0.5,
    flexDirection:'column',
    padding:30,
    paddingTop: 60,
    justifyContent:'center',
    alignContent:'center',
  },
  cBotao:{
    flex:0.5,
    flexDirection:'column'
  }
})

export default RecuperarSenha;
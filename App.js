import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  StatusBar,
  ScrollView,
  useWindowDimensions
} from 'react-native';
import Botao from './src/components/Botao';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(false);
  const { width, height } = useWindowDimensions();

  const isLandscape = width > height;

  const handleLogin = () => {
    if (email === 'jurandir.pereira@hotmail.com' && senha === '12345678') {
      Alert.alert('Login realizado com sucesso!');
      setErro(false);
    } else {
      setErro(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.scrollContainer]}
                keyboardShouldPersistTaps="handled"
    >
      <View style={[
        styles.container,
        isLandscape && styles.containerLandscape
      ]}>
        <StatusBar backgroundColor="#321C82" barStyle="light-content" />

        <Text style={[styles.titulo, isLandscape && { fontSize: 36 }]}>
          Satisfying.you <Text style={styles.emoji}>☺︎</Text>
        </Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite sua senha"
          secureTextEntry
          placeholderTextColor="#aaa"
        />

        {erro && (
          <Text style={styles.erroTexto}>E-mail e/ou senha inválidos.</Text>
        )}

        <Botao
          titulo="Entrar"
          onPress={handleLogin}
          corFundo="#37BD6D"
          margemTop={30}
        />

        <Botao
          titulo="Criar minha conta"
          onPress={() => Alert.alert('Cadastro')}
          corFundo="#419ED7"
        />

        <Botao
          titulo="Esqueci minha senha"
          onPress={() => Alert.alert('Recuperar senha')}
          corFundo="#B0CCDE"
          corTexto="#ffffff"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#372775',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  containerLandscape: {
    flexDirection: 'column',
    paddingHorizontal: 60,
    paddingVertical: 20,
  },
  titulo: {
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 40,
    fontFamily: 'AveriaLibre-Bold',
    textAlign: 'center',
  },
  emoji: {
    fontSize: 56,
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 4,
    marginTop: 15,
    fontFamily: 'AveriaLibre-Regular',
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 4,
    color: '#3F92C5',
    fontFamily: 'AveriaLibre-Regular',
  },
  erroTexto: {
    color: '#FD7979',
    marginTop: 5,
    alignSelf: 'flex-start',
    fontFamily: 'AveriaLibre-Regular',
  },
});
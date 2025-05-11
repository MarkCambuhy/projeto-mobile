import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useState} from 'react';
import InputItem from '../components/InputItem';

const RecuperarSenha = props => {
  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState('');

  const isValidEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const recuperarSenha = () => {
    if (!isValidEmail(email)) {
      setErroEmail('E-mail parece ser inválido');
      return;
    } else {
      setErroEmail('');
    }
    props.navigation.navigate('Nova pesquisa');
  };

  return (
    <View style={styles.body}>
      <InputItem
        value={email}
        label="E-mail"
        error={erroEmail}
        setValue={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={recuperarSenha}>
        <Text style={styles.buttonText}>Recuperar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  label: {
    color: '#fff',
    fontSize: 28,
  },
  input: {
    backgroundColor: '#fff',
    padding: 9,
    color: '#3F92C5',
  },
  button: {
    backgroundColor: '#37BD6D',
    padding: 8,
    marginTop: 25,
  },
  buttonText: {
    fontWeight: '400',
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },
  msnError: {
    color: '#FD7979',
    fontWeight: '400',
    fontSize: 24,
    display: 'none',
  },
});

export default RecuperarSenha;

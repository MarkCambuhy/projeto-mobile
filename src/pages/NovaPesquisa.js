import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import InputItem from '../components/InputItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NovaPesquisa = props => {
  const [nomePesquisa, setNomePesquisa] = useState('');
  const [data, setData] = useState('');

  const [erroNome, setErroNome] = useState('');
  const [erroData, setErroData] = useState('');

  const cadastrar = () => {
    let erro = false;
    if (nomePesquisa == '') {
      setErroNome('Preencha no nome da pesquisa');
      erro = true;
    } else {
      setErroNome('');
    }
    if (data == '') {
      setErroData('Preencha a data');
      erro = true;
    } else {
      setErroData('');
    }
    if (!erro) props.navigation.navigate('Recuperação de senha');
  };

  return (
    <View style={styles.body}>
      <InputItem
        value={nomePesquisa}
        label="Nome"
        error={erroNome}
        setValue={setNomePesquisa}
      />
      <View>
        <Icon
          style={styles.icone}
          name="calendar-month"
          size={35}
          color="#000"
        />
        <InputItem
          value={data}
          label="Data"
          error={erroData}
          setValue={setData}
        />
      </View>
      <Text style={styles.label}>Imagem</Text>

      <TouchableOpacity style={styles.inputPhoto}>
        <Text style={styles.inputPhotoText}>Câmera/Galeria de imagens</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={cadastrar}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
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
  container: {},
  button: {
    backgroundColor: '#37BD6D',
    padding: 8,
    marginTop: 45,
  },
  label: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
  },
  buttonText: {
    fontWeight: '400',
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },
  inputPhoto: {
    maxHeight: 94,
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 335,
  },
  inputPhotoText: {
    color: '#939393',
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
  },
  icone: {
    position: 'absolute',
    zIndex: 9,
    right: 5,
    bottom: 20,
    opacity: 0.5,
  },
});

export default NovaPesquisa;

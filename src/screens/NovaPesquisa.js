import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Botao from '../components/Botoes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputItem from '../components/InputItem';
import { setNome, setData } from '../../redux/pesquisaSlice';

const NovaPesquisa = (props) => {
  const dispatch = useDispatch();
  const nomePesquisa = useSelector((state) => state.pesquisa.nome);
  const data = useSelector((state) => state.pesquisa.data);

  const [erroNome, setErroNome] = React.useState('');
  const [erroData, setErroData] = React.useState('');

  const cadastrar = () => {
    let erro = false;
    if (nomePesquisa === '') {
      setErroNome('Preencha o nome da pesquisa');
      erro = true;
    } else {
      setErroNome('');
    }
    if (data === '') {
      setErroData('Preencha a data');
      erro = true;
    } else {
      setErroData('');
    }
    if (!erro) props.navigation.navigate('Drawer');
  };

  return (
    <View style={styles.body}>
      <InputItem value={nomePesquisa} label="Nome" error={erroNome} setValue={(text) => dispatch(setNome(text))} />
      <View>
        <Icon style={styles.icone} name="calendar-month" size={25} color="#000" />
        <InputItem value={data} label="Data" error={erroData} setValue={(text) => dispatch(setData(text))} />
      </View>
      <Text style={styles.label}>Imagem</Text>

      <TouchableOpacity style={styles.inputPhoto}>
        <Text style={styles.inputPhotoText}>Câmera/Galeria de imagens</Text>
      </TouchableOpacity>

      <View style={styles.cBotao}>
        <Botao texto="CADASTRAR" funcao={cadastrar} />
      </View>
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
  cBotao: {
    flex: 0.5,
    flexDirection: 'column',
  },
  label: {
    color: '#fff',
    fontSize: 15,
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
    fontSize: 15,
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
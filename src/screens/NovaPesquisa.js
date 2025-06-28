import {View, Text, StyleSheet, TouchableOpacity, Alert, Image} from 'react-native';
import {useState} from 'react';
import InputItem from '../components/InputItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Botao from '../components/Botoes';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { addDoc, collection, initializeFirestore } from 'firebase/firestore';
import app from '../config/firebase'

const NovaPesquisa = props => {
  const [nomePesquisa, setNomePesquisa] = useState('');
  const [data, setData] = useState('');
  const [imagem, setImagem] = useState(null); 

  const [erroNome, setErroNome] = useState('');
  const [erroData, setErroData] = useState('');

  const db = initializeFirestore(app, {experimentalForceLongPolling: true});
  const pesquisaCollection = collection(db, "pesquisas");

  // Escolhe a imagem
  const escolherImagem = () => {
    Alert.alert('Selecionar imagem', 'Escolha a fonte da imagem:', [
      {
        text: 'Câmera',
        onPress: () => {
          launchCamera({ mediaType: 'photo', quality: 1 }, response => {
            if (!response.didCancel && !response.errorCode) {
              setImagem(response.assets[0].uri);
            }
          });
        },
      },
      {
        text: 'Galeria',
        onPress: () => {
          launchImageLibrary({ mediaType: 'photo', quality: 1 }, response => {
            if (!response.didCancel && !response.errorCode) {
              setImagem(response.assets[0].uri);
            }
          });
        },
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  };

  // Cadastra
  const cadastrar = () => {
    
    if (!verificarCampos()) {
      const docPesquisa = {
        nome: nomePesquisa,
        data: data,
        imagem: imagem,
        dados: {
          pessimo: 0,
          ruim: 0,
          neutro: 0,
          bom: 0,
          excelente: 0
        }
      }
      addDoc(pesquisaCollection, docPesquisa)
        .then((docRef) => {console.log("Documento inserido com sucesso: " + docRef.id)})
        .catch((erro) => {console.log(erro)});
      props.navigation.navigate('Drawer');
    }
  };

  const verificarCampos = () => {
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
    return erro;
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
          size={25}
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

      <TouchableOpacity style={styles.inputPhoto} onPress={escolherImagem}>
        {imagem ? (
          <Image source={{ uri: imagem }} style={styles.imagePreview} />
        ) : (
          <Text style={styles.inputPhotoText}>Câmera/Galeria de imagens</Text>
        )}
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
    maxHeight: 150,
    height: 120,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 335,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 20,
  },
  inputPhotoText: {
    color: '#939393',
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
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
// Importações
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Alert,
  Image,
} from 'react-native';
import {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import Botao from '../components/Botoes';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {
  doc,
  initializeFirestore,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import app from '../config/firebase';
import {useSelector} from 'react-redux';

// Tema personalizado
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#372775',
    secondary: '#FFFFFF',
  },
};

const ModificarPesquisa = props => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [imagem, setImagem] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const id = useSelector(state => state.pesquisa.id);
  const nomeAlterar = useSelector(state => state.pesquisa.nome);
  const dataAlterar = useSelector(state => state.pesquisa.data);
  const imagemAlterar = useSelector(state => state.pesquisa.imagem);

  useEffect(() => {
    setNome(nomeAlterar);
    setData(dataAlterar);
  }, []);

  const db = initializeFirestore(app, {experimentalForceLongPolling: true});

  const salvar = () => {
    const pesquisaRef = doc(db, 'pesquisas', id);
    updateDoc(pesquisaRef, {
      nome: nome,
      data: data,
      imagem: imagem,
    });
    irHome();
  };

  // Abre opções: câmera ou galeriaAdd commentMore actions
  const escolherImagem = () => {
    Alert.alert('Selecionar imagem', 'Escolha a fonte da imagem:', [
      {
        text: 'Câmera',
        onPress: () => {
          launchCamera({mediaType: 'photo', quality: 1}, response => {
            if (!response.didCancel && !response.errorCode) {
              setImagem(response.assets[0].uri);
            }
          });
        },
      },
      {
        text: 'Galeria',
        onPress: () => {
          launchImageLibrary({mediaType: 'photo', quality: 1}, response => {
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

  //Navegacao
  const irHome = () => {
    props.navigation.navigate('Drawer');
  };

  const apagar = () => {
    setMostrarModal(true);
  };

  const confirmarApagar = () => {
    deleteDoc(doc(db, 'pesquisas', id));
    irHome();
  };

  const cancelarApagar = () => {
    setMostrarModal(false);
  };

  return (
    <PaperProvider theme={theme}>
      <ScrollView
        contentContainerStyle={estilos.container}
        keyboardShouldPersistTaps="handled">
        <Text style={estilos.label}>Nome</Text>
        <TextInput
          style={estilos.input}
          value={nome}
          placeholder="Carnaval 2024"
          onChangeText={setNome}
        />

        <Text style={estilos.label}>Data</Text>
        <View style={estilos.inputComIcone}>
          <TextInput
            style={[estilos.input, {flex: 1}]}
            value={data}
            placeholder="16/02/2024"
            onChangeText={setData}
          />
          <Icon name="calendar-month-outline" size={28} color="#FFFFFF" />
        </View>

        <Text style={estilos.label}>Imagem</Text>
        <TouchableOpacity onPress={escolherImagem} style={estilos.caixaImagem}>
          {imagem ? (
            <Image
              source={{uri: imagem}}
              style={{width: 100, height: 100, borderRadius: 10}}
            />
          ) : (
            <Icon name="camera-plus" size={50} color="#D400FF" />
          )}
        </TouchableOpacity>

        <View style={estilos.cBotao}>
          <Botao texto={'SALVAR'} funcao={salvar} />
        </View>

        <TouchableOpacity style={estilos.apagar} onPress={apagar}>
          <Icon name="trash-can-outline" size={28} color="#FFFFFF" />
          <Text style={estilos.txtApagar}>Apagar</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal de confirmação */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={mostrarModal}
        onRequestClose={cancelarApagar}>
        <View style={estilos.modalFundo}>
          <View style={estilos.modalContainer}>
            <Text style={estilos.modalTexto}>
              Tem certeza de apagar essa pesquisa?
            </Text>
            <View style={estilos.modalBotoes}>
              <TouchableOpacity
                style={estilos.botaoSim}
                onPress={confirmarApagar}>
                <Text style={estilos.textoBotaoModal}>SIM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={estilos.botaoCancelar}
                onPress={cancelarApagar}>
                <Text style={estilos.textoBotaoModal}>CANCELAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </PaperProvider>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    padding: 20,
  },
  label: {
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: 10,
    fontFamily: 'AveriaLibre-Regular',
  },
  input: {
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
    fontFamily: 'AveriaLibre-Regular',
  },
  inputComIcone: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  caixaImagem: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 10,
  },
  cBotao: {
    flex: 1,
    flexDirection: 'column',
  },
  apagar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  txtApagar: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 5,
    fontFamily: 'AveriaLibre-Regular',
  },
  modalFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#2B1F5C',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'AveriaLibre-Regular',
  },
  modalBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  botaoSim: {
    backgroundColor: '#FF8A80',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  botaoCancelar: {
    backgroundColor: '#42A5F5',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  textoBotaoModal: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default ModificarPesquisa;

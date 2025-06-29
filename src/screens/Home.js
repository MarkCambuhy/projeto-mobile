import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useEffect, useState} from 'react';
import Botao from '../components/Botoes';
import Botaohome from '../components/Botaohome';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  collection,
  initializeFirestore,
  onSnapshot,
  query,
} from 'firebase/firestore';
import app from '../config/firebase';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {reducerSetPesquisa} from '../redux/pesquisaSlice';

const Home = props => {
  const [pesquisar, setPesquisar] = useState('');
  const [listaPesquisas, setListaPesquisas] = useState('');
  const [listaFiltrada, setListaFiltrada] = useState([]);

  const db = initializeFirestore(app, {experimentalForceLongPolling: true});
  const pesquisaCollection = collection(db, 'pesquisas');

  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(pesquisaCollection);

    onSnapshot(q, snapshot => {
      const pesquisas = [];
      snapshot.forEach(doc => {
        pesquisas.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setListaPesquisas(pesquisas);
      setListaFiltrada(pesquisas);
    });
  }, []);

  useEffect(() => {
    realizarBusca();
  }, [pesquisar]);

  const realizarBusca = () => {
    if (pesquisar.trim() === '') {
      setListaFiltrada(listaPesquisas);
    } else {
      const resultado = listaPesquisas.filter(item =>
        item.nome.toLowerCase().includes(pesquisar.toLowerCase()),
      );
      setListaFiltrada(resultado);
    }
  };

  //Navg
  const irAcoesPesquisa = (id, nome, data, imagem) => {
    dispatch(
      reducerSetPesquisa({
        id: id,
        nome: nome,
        data: data,
        imagem: imagem,
      }),
    );
    props.navigation.navigate('Carnaval');
  };

  const irNovaPesquisa = () => {
    props.navigation.navigate('Nova Pesquisa');
  };

  return (
    <View style={estilos.view}>
      <View style={estilos.cInput}>
        <TouchableOpacity onPress={realizarBusca}>
          <Icon
            name="search"
            size={36.5}
            color="gray"
            backgroundColor="white"
          />
        </TouchableOpacity>
        <TextInput
          style={estilos.textInput}
          value={pesquisar}
          placeholder="Insira o termo de busca..."
          onChangeText={setPesquisar}
        />
      </View>

      <FlatList
        data={listaFiltrada}
        renderItem={({item}) => (
          <Botaohome
            imagem={item.imagem}
            nome={item.nome}
            data={item.data}
            funcao={() =>
              irAcoesPesquisa(item.id, item.nome, item.data, item.imagem)
            }
          />
        )}
        keyExtractor={pesquisa => pesquisa.id}
        horizontal={true}
        style={estilos.buttonsContainer}
      />

      <View style={estilos.cBotao}>
        <Botao texto="NOVA PESQUISA" funcao={irNovaPesquisa} />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  view: {
    flex: 3,
    backgroundColor: '#372775',
    flexDirection: 'column',
  },

  textInput: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    backgroundColor: '#ffffff',
    width: '60%',
  },

  cBotao: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 40,
  },

  buttonsContainer: {
    flex: 0.1,
    flexDirection: 'row',
    margin: 5,
    marginBottom: 30,
    alignContent: 'center',
  },

  cInput: {
    flex: 0,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  textoo: {
    flex: 10,
    color: 'red',
  },
});

export default Home;

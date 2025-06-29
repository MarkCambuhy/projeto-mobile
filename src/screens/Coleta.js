//Importação
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';

import {
  doc,
  collection,
  initializeFirestore,
  updateDoc,
  increment,
} from 'firebase/firestore';
import app from '../config/firebase';

//Tema personalizado
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2D1A81',
    secondary: '#FFFFFF',
  },
};

//Definição
const Coleta = props => {
  const [resposta, setResposta] = useState('');

  const id = useSelector(state => state.pesquisa.id);
  const nome = useSelector(state => state.pesquisa.nome);

  const db = initializeFirestore(app, {experimentalForceLongPolling: true});

  const opcoes = [
    {label: 'Péssimo', icon: 'emoticon-dead-outline', cor: '#FF0000'},
    {label: 'Ruim', icon: 'emoticon-sad-outline', cor: '#FF4500'},
    {label: 'Neutro', icon: 'emoticon-neutral-outline', cor: '#FFD700'},
    {label: 'Bom', icon: 'emoticon-happy-outline', cor: '#32CD32'},
    {label: 'Excelente', icon: 'emoticon-excited-outline', cor: '#00FF00'},
  ];

  // Salvar resposta
  const salvarResposta = opcao => {
    const campoMap = {
      Péssimo: 'pessimo',
      Ruim: 'ruim',
      Neutro: 'neutro',
      Bom: 'bom',
      Excelente: 'excelente',
    };

    const tipo = campoMap[opcao];
    const campo = `dados.${tipo}`;

    const pesquisaRef = doc(db, 'pesquisas', id);
    updateDoc(pesquisaRef, {
      [campo]: increment(1),
    });
    irAgrad();
  };

  //Navegacao
  const irAgrad = () => {
    props.navigation.navigate('Agradecimento');
  };

  return (
    <PaperProvider theme={theme}>
      <View style={estilos.container}>
        <Text style={estilos.titulo}>O que você achou do {nome}?</Text>

        <View style={estilos.opcoes}>
          {opcoes.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={estilos.botao}
              onPress={() => {
                salvarResposta(item.label);
              }}>
              <Icon name={item.icon} size={40} color={item.cor} />
              <Text style={estilos.legenda}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </PaperProvider>
  );
};

//Estilos
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'AveriaLibre-Regular',
  },
  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
  },
  botao: {
    alignItems: 'center',
    margin: 10,
  },
  legenda: {
    color: 'white',
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'AveriaLibre-Regular',
  },
  resposta: {
    color: '#FFD700',
    fontSize: 18,
    marginTop: 40,
  },
});

//Exportação
export default Coleta;

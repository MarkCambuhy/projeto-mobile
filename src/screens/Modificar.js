import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Botao from '../components/Botoes';
import { setNome, setData } from '../../redux/pesquisaSlice';

const ModificarPesquisa = (props) => {
  const dispatch = useDispatch();
  const nome = useSelector((state) => state.pesquisa.nome);
  const data = useSelector((state) => state.pesquisa.data);
  const [mostrarModal, setMostrarModal] = React.useState(false);

  const irHome = () => {
    setMostrarModal(false);
    props.navigation.navigate('Drawer');
  };

  const apagar = () => {
    setMostrarModal(true);
  };

  const cancelarApagar = () => {
    setMostrarModal(false);
  };

  return (
    <ScrollView contentContainerStyle={estilos.container} keyboardShouldPersistTaps="handled">
      <Text style={estilos.label}>Nome</Text>
      <TextInput
        style={estilos.input}
        value={nome}
        placeholder="Carnaval 2024"
        onChangeText={(text) => dispatch(setNome(text))}
        color="#3F92C5"
      />

      <Text style={estilos.label}>Data</Text>
      <View style={estilos.inputComIcone}>
        <TextInput
          style={[estilos.input, { flex: 1 }]}
          value={data}
          placeholder="16/02/2024"
          onChangeText={(text) => dispatch(setData(text))}
          color="#3F92C5"
        />
        <Icon name="calendar-month-outline" size={28} color="#FFFFFF" />
      </View>

      <Text style={estilos.label}>Imagem</Text>
      <View style={estilos.caixaImagem}>
        <Icon name="party-popper" size={50} color="#D400FF" />
      </View>

      <View style={estilos.cBotao}>
        <Botao texto="SALVAR" funcao={irHome} />
      </View>

      <TouchableOpacity style={estilos.apagar} onPress={apagar}>
        <Icon name="trash-can-outline" size={28} color="#FFFFFF" />
        <Text style={estilos.txtApagar}>Apagar</Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent visible={mostrarModal} onRequestClose={cancelarApagar}>
        <View style={estilos.modalFundo}>
          <View style={estilos.modalContainer}>
            <Text style={estilos.modalTexto}>Tem certeza de apagar essa pesquisa?</Text>
            <View style={estilos.modalBotoes}>
              <TouchableOpacity style={estilos.botaoSim} onPress={irHome}>
                <Text style={estilos.textoBotaoModal}>SIM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={estilos.botaoCancelar} onPress={cancelarApagar}>
                <Text style={estilos.textoBotaoModal}>CANCELAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
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
    height: 100,
    marginTop: 5,
    marginBottom: 20,
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
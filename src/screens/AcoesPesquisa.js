import {useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

 const AcoesPesquisa = (props) => {

  const id = props.route.params.id;
  const nome = props.route.params.nome;
  const data = props.route.params.data;
  const imagem = props.route.params.imagem;
  
  console.log(id);

// muda o nome do título
useLayoutEffect(() => {
    props.navigation.setOptions({
      title: nome,
    });
  }, [props.navigation, nome]);



  const irModificar = (id, nome, data, imagem) => {
    props.navigation.navigate('Modificar Pesquisa', {id: id, nome: nome, data: data, imagem: imagem})

  }

  const irColeta = () => {
    props.navigation.navigate('Coleta')

  }

  const irRelatorio = () => {
    props.navigation.navigate('Relatorio')
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => irModificar(id, nome, data, imagem)}>
          <Icon name="file-document-edit-outline" size={60} color="#fff" />
          <Text style={styles.buttonText}>Modificar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={irColeta}>
          <Icon name="checkbox-marked-outline" size={60} color="#fff" />
          <Text style={styles.buttonText}>Coletar dados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={irRelatorio}>
          <Icon name="chart-donut" size={60} color="#fff" />
          <Text style={styles.buttonText}>Relatório</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#372775",
    alignItems: "center",
  },

  buttonsContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 80, 
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#312464", 
    borderRadius: 5, 
    width: 150, 
    height: 140, 
    marginHorizontal: 8, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5, 
  },
  buttonText: {
    marginTop: 8,
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "400", 
    fontFamily: "AveriaLibre-Regular", 
    lineHeight: 14, 
  },
});

export default AcoesPesquisa
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const DrawerCustom = (props) => {
  const irHome = () => {
    props.navigation.navigate("Home");
  };

  const irLogin = () => {
    props.navigation.navigate("Login");
  };

  const email = props.email || "Usuário Desconhecido";

  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <Text style={estilos.email}>{email}</Text>
        <View style={estilos.divisor} />
      </View>

      <View style={estilos.botoes}>
        <TouchableOpacity onPress={irHome}>
          <View style={estilos.icones}>
            <Icon name="description" size={24} color="#FFFFFF" />
            <Text style={estilos.texto}>Pesquisas</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={irLogin}>
          <View style={estilos.icones}>
            <Icon name="logout" size={24} color="#FFFFFF" />
            <Text style={estilos.texto}>Sair</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B1D62",
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: "center",
  },
  email: {
    fontFamily: "AveriaLibre-Regular",
    fontSize: 18,
    color: "#FFFFFF",
  },
  divisor: {
    width: "100%",
    borderBottomWidth: 0.5,
    borderColor: "#ffffff",
    marginTop: 30,
  },
  botoes: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
  texto: {
    fontFamily: "AveriaLibre-Regular",
    fontSize: 20,
    color: "#FFFFFF",
    marginLeft: 10,
  },
  icones: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
});

export default DrawerCustom;
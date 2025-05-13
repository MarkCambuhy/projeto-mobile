import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function AcoesDePesquisa() {
  return (
    <View style={styles.container}>
      {}
      <View style={styles.header}>
        <Icon name="arrow-left" size={30} color="#573FBA" style={styles.backArrow} />
        <Text style={styles.headerTitle}>Carnaval</Text>
      </View>

      {}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="file-document-edit-outline" size={60} color="#fff" />
          <Text style={styles.buttonText}>Modificar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="checkbox-marked-outline" size={60} color="#fff" />
          <Text style={styles.buttonText}>Coletar dados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#2B1D62",
    zIndex: 1,
  },
  backArrow: {
    marginRight: 8, 
  },
  headerTitle: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "400", 
    fontFamily: "AveriaLibre-Regular", 
    lineHeight: 18, 
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 60, 
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
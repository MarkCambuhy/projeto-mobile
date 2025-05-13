import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao({
  onPress,
  titulo,
  corFundo = '#36B47F',
  corTexto = '#fff',
  margemTop = 20,
}) {
  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: corFundo, marginTop: margemTop }]}
      onPress={onPress}
    >
      <Text style={[styles.texto, { color: corTexto }]}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 12,
    width: '100%',
    borderRadius: 4,
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
  },
});
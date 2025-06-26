import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";

const Botaohome = (props) => {
    const imagem = props.imagem;
    const nome = props.nome;
    const data = props.data;

    return (
        <TouchableOpacity style={estilos.botao} onPress={props.funcao}>
            <View style={estilos.imageContainer}>
        <Image
          source={{
            uri: imagem
          }}
          style={estilos.image}
          resizeMode="contain"         />
      </View>
            <Text style={estilos.texto}>{nome}</Text>
            <Text style={estilos.data}>{data}</Text>
        </TouchableOpacity>
    );
};

const estilos = StyleSheet.create({
    botao: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 5,
        width: 200,
        height: 200,
        marginHorizontal: 1,
        elevation: 1,
        marginLeft: 10
    },
    texto: {
        color: '#3F92C5',
        fontSize: 15,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center'
    },
    data: {
        color: '#8B8B8B',
        fontSize: 10,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center'
    },
    imagem: {
        width: 100,
        height: 100,
        marginBottom: 5,
        resizeMode: 'contain'
    },

    imageContainer: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%", 
    height: "100%", 
  },
});

export default Botaohome;

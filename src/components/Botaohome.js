//importação
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

//dev

const Botaohome = (props) => {

    const texto = props.texto
    const nome = props.nome
    const cor = props.cor
    const data = props.data

    return (
        <TouchableOpacity style={estilos.botao} onPress={props.funcao}>
            <Icon name={nome} size={45} color={cor} />
            <Text style={estilos.texto}>{texto}</Text>
            <Text style={estilos.data}>{data}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({

    botao:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff", 
    borderRadius: 5, 
    width: 120, 
    height: 110, 
    marginHorizontal: 1, 
    elevation: 1,
    marginLeft:10
    },

    texto:{
        color: '#3F92C5',
        fontSize: 15,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center'

    },

    data:{
        color: '#8B8B8B',
        fontSize: 10,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center'

    },

    
})

//exportação

export default Botaohome
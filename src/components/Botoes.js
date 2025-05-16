//importação
import { TouchableOpacity, Text, StyleSheet } from "react-native";

//dev

const Botao = (props) => {

    const texto = props.texto

    return (
        <TouchableOpacity style={estilos.botao} onPress={props.funcao}>
            <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({

    botao:{
        backgroundColor: '#37BD6D',
        marginInline: 30,
        margin: 30,
        padding:5
    },

    texto:{
        color: '#ffffff',
        fontSize: 15,
        fontFamily: 'Averia Libre',
        textAlign: 'center'

    }
})

//exportação

export default Botao
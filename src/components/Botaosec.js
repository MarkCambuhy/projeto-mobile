//importação
import { TouchableOpacity, Text, StyleSheet } from "react-native";

//dev

const BotaoAzul = (props) => {

    const texto = props.texto

    return (
        <TouchableOpacity style={estilos.botao} onPress={props.funcao}>
            <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({

    botao:{
        
        backgroundColor:'#419ED7',
        marginInline: 30,
        marginBottom:5,
        padding: 5
    },

    texto:{
        color: '#ffffff',
        fontSize: 15,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center'

    }
})

//exportação

export default BotaoAzul
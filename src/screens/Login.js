import { View, Text, TextInput, StyleSheet} from 'react-native'
import { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Botao from '../components/Botoes'
import BotaoAzul from "../components/Botaosec";
import BotaoCinza from "../components/Botaoterc"


const Login = (props) => {
    const [email, setEmail] =useState('')
    const [senha, setSenha] = useState('')
    const [txtErro, setErro] = useState('')
//Navg
    const irNovaconta = () => {
        props.navigation.navigate('Nova Conta')
    }

    const irRecuperarSenha = () => {
        props.navigation.navigate('Recuperar senha')
    }
//teste entrada   
    const entrar = () => {
        if (email !== '@' || senha !== 'A') {
          setErro('Email e/ou Senha Inválidos!')
          setEmail('')
          setSenha('')
          return
        }
    
        else {
          setErro('')
          setEmail('')
          setSenha('')
          props.navigation.navigate('Drawer')
        }
      }
    
      return (
       
        <View style={estilos.view}>
            
            <View style={estilos.cTitle}>
                <Text style={estilos.titulo}>Satisfying.com</Text>
                <Icon name='emoticon-happy-outline' size={60} color='#ffffff'/>
            </View>
    
            <View style={estilos.cInput}>
            
                <Text style={estilos.texto}>E-mail</Text>
                <TextInput style={estilos.textInput} value={email} placeholder='jurandir@hotmail.com' onChangeText={setEmail}/>
                
                <Text style={estilos.texto}>Senha</Text>
                <TextInput style={estilos.textInput} value={senha} placeholder='*****' onChangeText={setSenha} secureTextEntry/>
                {txtErro? <Text style={estilos.textoErro}>{txtErro}</Text> : null}
                
            </View>
            <View stile={estilos.cBotao}>
                <Botao texto='Entrar' funcao={entrar}/>
                <BotaoAzul texto='Criar minha conta' funcao={irNovaconta}/>
                <BotaoCinza texto='Esqueci minha senha' funcao={irRecuperarSenha}/>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
view:{
    flex:1,
    backgroundColor: '#372775',
    flexDirection: 'column',
    padding:1
},


 texto: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    color:'#ffffff',
    marginTop:10
  },

  titulo:{
    fontFamily:"AveriaLibre-Regular",
    fontSize: 36,
    color: '#fff',
  },

  textInput: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    backgroundColor: '#ffffff',
    height:'auto'
  },

  textoErro: {
    fontSize: 11,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979'
  },

  cInput:{
    flex:0.25,
    flexDirection:'column',
    marginInline: 30,
    justifyContent:'center',
    alignContent:'center',

  },

  cBotao:{
    flex:0.5,
    flexDirection:'column',
  },
  
  cTitle:{
    flex:0.15,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',

  },

  textoErro: {
    fontSize: 11,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979'
  }

})

export default Login
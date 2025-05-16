import { View, Text, TextInput, StyleSheet} from 'react-native'
import { useState } from 'react'
import Botao from '../components/Botoes'



const NovaConta = (props) => {
  const [txtEmail, setEmail] = useState('')
  const [txtSenha, setSenha] = useState('')
  const [txtSenhab, setSenhab] = useState('')
  const [txtErro, setErro] = useState('')

  const registro = () => {
    if (!txtEmail.includes('@')) {
      setErro('O e-mail deve conter um domínio válido')
      setEmail('')
      return
    }

    if (txtSenha !== txtSenhab) {
      setErro('O campo repetir senha difere da senha')
      setSenha('')
      setSenhab('')
      return
    }

    else {
      setErro('')
      props.navigation.navigate('Login')

      
    }
  }

  return (
   
    <View style={estilos.view}>

      <View style={estilos.cInput}>
        
        <Text style={estilos.texto}>E-mail</Text>
        <TextInput style={estilos.textInput} value={txtEmail} onChangeText={setEmail}/>
        
        <Text style={estilos.texto}>Senha</Text>
        <TextInput style={estilos.textInput} value={txtSenha} onChangeText={setSenha} secureTextEntry/>

        <Text style={estilos.texto}>Repetir senha</Text>
        <TextInput  style={estilos.textInput} value={txtSenhab} onChangeText={setSenhab} secureTextEntry/>

        {txtErro? <Text style={estilos.textoErro}>{txtErro}</Text> : null}
      </View>

      <View stile={estilos.cBotao}>
        <Botao texto = "CADASTRAR" funcao={registro}/>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  view:{
    flex:1,
    backgroundColor: '#372775',
    flexDirection: 'column'
  },

  texto: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    color:'#ffffff',
    marginTop:10
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
    flex:0.75,
    flexDirection:'column',
    padding:30,
    paddingTop: 60,
    justifyContent:'center',
    alignContent:'center',
  },

  cBotao:{
    flex:0.15,
    flexDirection:'column'
  }
 
})

export default NovaConta

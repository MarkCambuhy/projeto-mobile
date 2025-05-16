import { View, TextInput, StyleSheet,TouchableOpacity} from 'react-native'
import { useState } from 'react'
import Botao from '../components/Botoes'
import Botaohome from '../components/Botaohome';
import Icon from 'react-native-vector-icons/MaterialIcons';



const Home = (props) => {
  const [pesquisar, setPesquisar] = useState('')
  

//Navg
    const irAcoesPesquisa = () => {
        props.navigation.navigate('Carnaval')
    }

    const irNovaPesquisa = () => {
      props.navigation.navigate('Nova Pesquisa')
    }

  return (
   
    <View style={estilos.view}>

      <View style={estilos.cInput}>
          <TouchableOpacity>
                <Icon name="search" size={36.5} color="gray" backgroundColor='white'/>
          </TouchableOpacity>
          <TextInput style={estilos.textInput} value={pesquisar} placeholder='Insira o termo de busca...' onChangeText={setPesquisar}/>
      </View>

      <View style={estilos.buttonsContainer}>
            <Botaohome nome={'devices'} cor='#704141' data='10/10/23' texto='SECOMP 2023' funcao={irAcoesPesquisa}/>
            <Botaohome nome={'diversity-3'} cor='#000000' data='05/06/22' texto='UBUNTU 2022' funcao={irAcoesPesquisa}/>
            <Botaohome nome={'woman'} cor='#D71616' data='01/04/2022' texto='MENINAS CPU' funcao={irAcoesPesquisa}/>
      </View>

      <View style={estilos.cBotao}>
          <Botao texto = "NOVA PESQUISA" funcao={irNovaPesquisa}/>
      </View>

    </View>
  )}


const estilos = StyleSheet.create({
  view:{
    flex:3,
    backgroundColor: '#372775',
    flexDirection: 'column',
 },

  textInput: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    backgroundColor: '#ffffff',
    width:'60%'
},

  cBotao:{
    flex:1,
    flexDirection:'column',
    marginTop:40
  },

  buttonsContainer: {
    flex: 0.1,
    flexDirection: "row",
    margin: 5,
    marginBottom: 30,
    alignContent:'center'
  },

    cInput:{
    flex:0,
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    margin:10
   
  },
 
})

export default Home
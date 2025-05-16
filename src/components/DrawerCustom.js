import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerCustom = (props) => {

    const irHome = () => {
        props.navigation.navigate('Home')
    }

    const irLogin = ()=> {
        props.navigation.navigate('Login')
    }

    return(
        <View>
       
       
        <View style={estilos.header}>
            <Text style={estilos.texto}>usuario@dominio.com</Text>
            <View style={estilos.divisor}/>
        </View>
        
        <View style={estilos.botao}>
            
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
    )
}

const estilos = StyleSheet.create({
      header:{
        backgroundColor: '#2B1D62',
        padding: 30,
        alignItems:'center',
        flexDirection: 'column'
       
    },
       texto:{
         fontFamily: 'AveriaLibre-Regular',
         fontSize:20,
         justifyContent: 'center',
         color: '#ffffff',
         marginLeft:5

        },

     divisor:{
        width:'100%',
        borderBottomWidth:1,
        borderColor:'#ffffff',
        marginTop: 30
     },
    botao:{
        flexDirection:'column',
  },
  icones:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:30
  }

})

export default DrawerCustom
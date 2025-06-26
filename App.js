
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NovaPesquisa from './src/screens/NovaPesquisa';
import RecuperarSenha from './src/screens/RecuperarSenha';
import NovaConta from './src/screens/NovaConta';
import Login from './src/screens/Login';
import Coleta from './src/screens/Coleta';
import ModificarPesquisa from './src/screens/Modificar';
import Home from './src/screens/Home';
import Drawer from './src/screens/Drawer';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import Agradecimento from './src/screens/Agradecimento';
import Relatorio from './src/screens/Relatorio';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2B1D62',
          },
          headerTintColor: '#573FBA',
          headerTitleStyle: {
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 26,
            color: '#fff',
          },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Drawer' component={Drawer} options={{headerShown: false}}/>
        <Stack.Screen name="Nova Conta" component={NovaConta}/>
        <Stack.Screen name="Recuperar senha" component={RecuperarSenha} />
        <Stack.Screen name="Nova Pesquisa" component={NovaPesquisa} />
        <Stack.Screen name='Agradecimento' component={Agradecimento} options={{headerShown: false}}/>
        <Stack.Screen name='Carnaval' component={AcoesPesquisa}/>
        <Stack.Screen name='Modificar Pesquisa' component={ModificarPesquisa}/>
        <Stack.Screen name='Coleta' component={Coleta}/>
        <Stack.Screen name='Relatorio' component={Relatorio}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

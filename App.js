import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NovaPesquisa from './src/pages/NovaPesquisa';
import RecuperarSenha from './src/pages/RecuperarSenha';

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
        <Stack.Screen name="Recuperação de senha" component={RecuperarSenha} />
        <Stack.Screen name="Nova pesquisa" component={NovaPesquisa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

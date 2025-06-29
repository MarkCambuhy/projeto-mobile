import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import DrawerCustom from '../components/DrawerCustom';
import { useSelector } from 'react-redux';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
    
  const email = useSelector(state => state?.login?.email || '');

  return (
    <DrawerNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#2B1D62' },
        drawerStyle: { backgroundColor: '#2B1D62' },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontFamily: 'AveriaLibre-Regular',
          fontSize: 26
        }
      }}
      drawerContent={(props) => <DrawerCustom {...props} email={email} />}
    >
      <DrawerNavigator.Screen name="Home" component={Home} />
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;

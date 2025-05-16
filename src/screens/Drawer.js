import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import DrawerCustom from '../components/DrawerCustom'

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {

    return(

        <DrawerNavigator.Navigator
            screenOptions={{
                headerStyle: {backgroundColor:'#2B1D62'}, 
                drawerStyle:{backgroundColor:'#2b1d62'},
                headerTintColor:'#ffffff',
                headerTitleStyle: {
                    fontFamily:'AveriaLibre-Regular',
                    fontSize:26
                 }
            }}
            drawerContent={(props) => <DrawerCustom {...props}/>} >

            <DrawerNavigator.Screen name="Home" component={Home}/>
        </DrawerNavigator.Navigator>
    )
}

export default Drawer
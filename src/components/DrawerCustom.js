import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import auth from '@react-native-firebase/auth';

const DrawerCustom = (props) => {
    const [userEmail, setUserEmail] = useState('Carregando...');
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(user => {
            if (user) {
                setUserEmail(user.email);
            }
        });
        return subscriber; 
    }, []);


    const irHome = () => {
        props.navigation.navigate('Home')
    }

    const handleLogout = () => {
        auth()
            .signOut()
            .then(() => {
                console.log('Utilizador deslogado!');
            })
            .catch(error => {
                console.error("Erro ao fazer logout:", error);
            });
    }

    return (
        <View>
            <View style={estilos.header}>
                <Text style={estilos.texto}>{userEmail}</Text>
                <View style={estilos.divisor} />
            </View>

            <View style={estilos.botao}>

                <TouchableOpacity onPress={irHome}>
                    <View style={estilos.icones}>
                        <Icon name="description" size={24} color="#FFFFFF" />
                        <Text style={estilos.texto}>Pesquisas</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogout}>
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
    header: {
        backgroundColor: '#2B1D62',
        padding: 30,
        alignItems: 'center',
        flexDirection: 'column'
    },
    texto: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 20,
        justifyContent: 'center',
        color: '#ffffff',
        marginLeft: 5
    },
    divisor: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#ffffff',
        marginTop: 30
    },
    botao: {
        flexDirection: 'column',
    },
    icones: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
})

export default DrawerCustom;

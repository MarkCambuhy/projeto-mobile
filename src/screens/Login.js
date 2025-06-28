import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Botao from '../components/Botoes'
import BotaoAzul from "../components/Botaosec";
import BotaoCinza from "../components/Botaoterc"

import auth from '@react-native-firebase/auth';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [txtErro, setErro] = useState('')


    const irNovaconta = () => {
        props.navigation.navigate('Nova Conta')
    }

    const irRecuperarSenha = () => {
        props.navigation.navigate('Recuperar senha')
    }

    const entrar = () => {
        if (!email || !senha) {
            setErro('Por favor, preencha o e-mail e a senha.');
            return;
        }

        auth()
            .signInWithEmailAndPassword(email, senha)
            .then(() => {
                setErro('');
                setEmail('');
                setSenha('');
                props.navigation.navigate('Drawer');
            })
            .catch(error => {
                console.error("Erro no login:", error.code);
                if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                    setErro('E-mail ou senha inválidos.');
                } else if (error.code === 'auth/invalid-email') {
                    setErro('O formato do e-mail é inválido.');
                } else {
                    setErro('Ocorreu um erro. Tente novamente.');
                }
            });
    }

    return (
        <View style={estilos.view}>
            <View style={estilos.cTitle}>
                <Text style={estilos.titulo}>Satisfying.com</Text>
                <Icon name='emoticon-happy-outline' size={60} color='#ffffff' />
            </View>

            <View style={estilos.cInput}>
                <Text style={estilos.texto}>E-mail</Text>
                <TextInput
                    style={estilos.textInput}
                    value={email}
                    placeholder='jurandir@hotmail.com'
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />

                <Text style={estilos.texto}>Senha</Text>
                <TextInput
                    style={estilos.textInput}
                    value={senha}
                    placeholder='*****'
                    onChangeText={setSenha}
                    secureTextEntry
                />
                {txtErro ? <Text style={estilos.textoErro}>{txtErro}</Text> : null}
            </View>


            <View style={estilos.cBotao}> 
                <Botao texto='Entrar' funcao={entrar} />
                <BotaoAzul texto='Criar minha conta' funcao={irNovaconta} />
                <BotaoCinza texto='Esqueci minha senha' funcao={irRecuperarSenha} />
            </View>
        </View>
    )
}


const estilos = StyleSheet.create({
    view:{ flex:1, backgroundColor: '#372775', flexDirection: 'column', padding:1 },
    texto: { fontSize: 15, fontFamily: 'AveriaLibre-Regular', color:'#ffffff', marginTop:10 },
    titulo:{ fontFamily:"AveriaLibre-Regular", fontSize: 36, color: '#fff' },
    textInput: { fontSize: 15, fontFamily: 'AveriaLibre-Regular', color: '#3F92C5', backgroundColor: '#ffffff', height:'auto' },
    textoErro: { fontSize: 11, fontFamily: 'AveriaLibre-Regular', color: '#FD7979' },
    cInput:{ flex:0.25, flexDirection:'column', marginInline: 30, justifyContent:'center', alignContent:'center' },
    cBotao:{ flex:0.5, flexDirection:'column' },
    cTitle:{ flex:0.15, flexDirection: 'row', justifyContent:'center', alignItems:'center' },
})

export default Login;


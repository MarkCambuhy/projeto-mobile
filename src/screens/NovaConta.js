import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useState } from "react";
import Botao from '../components/Botoes'; 

import auth from '@react-native-firebase/auth';

const NovaConta = (props) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repetirSenha, setRepetirSenha] = useState('');
    const [txtErro, setErro] = useState('');

    const irParaLogin = () => {
        props.navigation.goBack(); 
    }

    const cadastrar = () => {
        if (!email || !senha || !repetirSenha) {
            setErro('Preencha todos os campos.');
            return;
        }

        if (senha !== repetirSenha) {
            setErro('As senhas não são iguais.');
            return;
        }

        auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(() => {
                auth().signOut().then(() => {
                    Alert.alert('Sucesso!', 'Sua conta foi criada. Faça o login para continuar.');
                });
            })
            .catch(error => {
                console.error("Erro no cadastro:", error.code);
                if (error.code === 'auth/email-already-in-use') {
                    setErro('Este e-mail já está em uso.');
                } else if (error.code === 'auth/invalid-email') {
                    setErro('O formato do e-mail é inválido.');
                } else if (error.code === 'auth/weak-password') {
                    setErro('A senha é muito fraca. Tente uma senha com pelo menos 6 caracteres.');
                } else {
                    setErro('Ocorreu um erro ao criar a conta.');
                }
            });
    }

    return (
        <View style={estilos.view}>
            <View style={estilos.cInput}>
                <Text style={estilos.texto}>E-mail</Text>
                <TextInput style={estilos.textInput} value={email} onChangeText={setEmail} keyboardType="email-address" />
                
                <Text style={estilos.texto}>Senha</Text>
                <TextInput style={estilos.textInput} value={senha} onChangeText={setSenha} secureTextEntry />

                <Text style={estilos.texto}>Repetir Senha</Text>
                <TextInput style={estilos.textInput} value={repetirSenha} onChangeText={setRepetirSenha} secureTextEntry />
                
                {txtErro ? <Text style={estilos.textoErro}>{txtErro}</Text> : null}
            </View>
            <View style={estilos.cBotao}>
                <Botao texto='Cadastrar' funcao={cadastrar} />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    view:{ flex:1, backgroundColor: '#372775', flexDirection: 'column', padding:1, justifyContent: 'center' },
    texto: { fontSize: 15, fontFamily: 'AveriaLibre-Regular', color:'#ffffff', marginTop:10, marginLeft: 30 },
    textInput: { fontSize: 15, fontFamily: 'AveriaLibre-Regular', color: '#3F92C5', backgroundColor: '#ffffff', marginHorizontal: 30 },
    textoErro: { fontSize: 11, fontFamily: 'AveriaLibre-Regular', color: '#FD7979', textAlign: 'center', marginTop: 5 },
    cInput:{ flex:0.4, justifyContent:'center' },
    cBotao:{ flex:0.3 },
});

export default NovaConta;

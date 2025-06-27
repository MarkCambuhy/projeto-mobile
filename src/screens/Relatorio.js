import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { doc, getDoc, initializeFirestore } from 'firebase/firestore';
import app from '../config/firebase';

const Relatorio = (props) => {
  const [series, setSeries] = useState([]);
  const [temVotos, setTemVotos] = useState(false);

  const db = initializeFirestore(app, { experimentalForceLongPolling: true });
  const id = props.route.params.id;

  useEffect(() => {
    const carregar = async () => {
      try {
        const pesquisaRef = doc(db, 'pesquisas', id);
        const docSnap = await getDoc(pesquisaRef);

        if (docSnap.exists()) {
          const dados = docSnap.data().dados || {};
          const ordem = ['pessimo', 'ruim', 'neutro', 'bom', 'excelente'];
          const cores = ['#FF0000', '#FF4500', '#FFD700', '#32CD32', '#00FF00'];

          const votos = ordem.map((chave, index) => ({
            value: dados[chave],
            color: cores[index],
          }));

          let soma = 0;
          votos.forEach((item) => {
            soma += item.value;
          });

          setTemVotos(soma > 0);
          setSeries(votos);
        }
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      }
    };

    carregar();
  }, []);

  return (
    <View style={styles.view}>
      {temVotos ? (
        <PieChart widthAndHeight={300} series={series} />
      ) : (
        <Text style={styles.texto}>Nenhum voto registrado ainda</Text>
      )}

      
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#372775',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 30,
  },
  texto: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Relatorio;

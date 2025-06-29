import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {doc, getDoc, initializeFirestore} from 'firebase/firestore';
import app from '../config/firebase';
import {useSelector} from 'react-redux';

const Relatorio = props => {
  const [series, setSeries] = useState([]);
  const [temVotos, setTemVotos] = useState(false);

  const db = initializeFirestore(app, {experimentalForceLongPolling: true});
  const id = useSelector(state => state.pesquisa.id);

  const ordem = ['pessimo', 'ruim', 'neutro', 'bom', 'excelente'];
  const cores = ['#FF0000', '#FF4500', '#FFD700', '#32CD32', '#00FF00'];

  useEffect(() => {
    const carregar = async () => {
      try {
        const pesquisaRef = doc(db, 'pesquisas', id);
        const docSnap = await getDoc(pesquisaRef);

        if (docSnap.exists()) {
          const dados = docSnap.data().dados;

          const votos = ordem.map((chave, index) => ({
            value: dados[chave],
            color: cores[index],
          }));

          let soma = 0;
          votos.forEach(item => {
            soma += item.value;
          });

          setTemVotos(soma > 0);
          setSeries(votos);
        }
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
      }
    };

    carregar();
  }, []);

  return (
    <View style={styles.view}>
      {temVotos ? (
        <>
          <PieChart
            style={{marginTop: -100}}
            widthAndHeight={250}
            series={series}
          />
          <View>
            <View style={styles.label}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#00FF00',
                }}></View>
              <Text style={styles.texto}>Excelente</Text>
            </View>
            <View style={styles.label}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#32CD32',
                }}></View>
              <Text style={styles.texto}>Bom</Text>
            </View>
            <View style={styles.label}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#FFD700',
                }}></View>
              <Text style={styles.texto}>Neutro</Text>
            </View>
            <View style={styles.label}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#FF4500',
                }}></View>
              <Text style={styles.texto}>Ruim</Text>
            </View>
            <View style={styles.label}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#FF0000',
                }}></View>
              <Text style={styles.texto}>Péssimo</Text>
            </View>
          </View>
        </>
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
    fontFamily: 'AveriaLibre-Regular',
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});

export default Relatorio;

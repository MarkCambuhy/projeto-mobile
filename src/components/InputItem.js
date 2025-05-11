import {View, Text, TextInput, StyleSheet} from 'react-native';

const InputItem = props => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        value={props.value}
        style={styles.input}
        onChangeText={props.setValue}
      />
      <Text style={styles.msnError}>{props.error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
  },
  input: {
    backgroundColor: '#fff',
    padding: 9,
    color: '#3F92C5',
    fontFamily: 'AveriaLibre-Regular',
  },
  msnError: {
    color: '#FD7979',
    fontWeight: '400',
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default InputItem;

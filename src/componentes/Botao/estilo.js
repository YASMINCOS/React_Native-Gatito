import { StyleSheet } from 'react-native';

export default (pequeno, invertido) => StyleSheet.create({
  botao: {
    width: 140,
    paddingVertical: pequeno ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: invertido ? '#FABE50' : '#A050BE',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  valor: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: invertido ?'#A050BE': '#FABE50',
  }
});
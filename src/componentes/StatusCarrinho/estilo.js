import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  conteudo: {
    backgroundColor: '#A050BE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24,
  },
  total: {
    alignItems: 'center',
  },
  descricao: {
    fontSize: 16,
    color:  '#fff',
    fontWeight: 'bold',
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    color:  '#FABE50',
  },
  botao: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
});
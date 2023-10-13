import react from "react";
import { TouchableOpacity, Text } from "react-native";
import funcaoEstiloPadrao from "./estilo";
export default function Botao({
  pequeno = false,
  invertido = false,
  valor,
  acao,
  estilos
}) {
  const estiloPadrao = funcaoEstiloPadrao(pequeno, invertido);

  return (
    <TouchableOpacity onPress={acao} style={[estiloPadrao.Botao, estilos]}>
      <Text style={estiloPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
  );
}

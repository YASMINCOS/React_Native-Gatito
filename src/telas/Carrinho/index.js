import React from "react";
import { FlatList } from "react-native";
import Item from "./item";
import TelaPadrao from "../../componentes/TelaPadrao";
import StatusCarrinho from "../../componentes/StatusCarrinho";

const servicoes = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Nao de banho no seu gato! Mas se precisar nos damos.",
    quantidade: 1,
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Vacina v4",
    quantidade: 2,
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Uma dose da vacica, seu gato precisa de uma por ano!",
    quantidade: 3,
  },
];

export default function Carrinho() {
  const total = servicoes.reduce(
    (soma, { preco, quantidade }) => soma + preco * quantidade,
    0
  );
  return (
    <>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicoes}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );
}

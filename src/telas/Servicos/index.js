import React from "react";
import {FlatList} from "react-native";
import Item from "./item";

const servicoes = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Nao de banho no seu gato! Mas se precisar nos damos.",
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Vacina v4",
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Uma dose da vacica, seu gato precisa de uma por ano!",
  },
];

export default function Servicos() {
  return (
    <>
      <FlatList
        data={servicoes}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
      </>
  );
}

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Servicos from "./telas/Servicos";
import Carrinho from "./telas/Carrinho";

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#A050BE",
          inactiveTintColor: "#fff",
          activeBackgroundColor:'#A050BE',
          inactiveBackgroundColor:'#FABE50',
          style:{
             height:70,
          },
          labelStyle: {
            width:'100%',
            flex:1,
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 21,
            marginTop:3,
            paddingTop:21,
            backgroundColor: '#FABE50'
          },
          keyboardHidesTabBar: true
        }}
      >
        <Tab.Screen name="Serviços" component={Servicos} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

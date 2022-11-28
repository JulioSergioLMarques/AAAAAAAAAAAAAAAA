import React from "react";
import { Component } from "react";
import { View,TouchableOpacity,StyleSheet,Text } from "react-native";

export default class Pesquisa extends Component{

render(){
 return(
<View style={Style.fundo}>
    <Text>
        Tela de Pesquisa
    </Text>
</View>
 )

}
}

const Style = StyleSheet.create({
 fundo: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"gold"

 }
});
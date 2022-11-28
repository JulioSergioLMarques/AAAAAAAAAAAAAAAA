import React from "react";
import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pesquisa from './Telas/Teladepesquisa';
import Transacao from './Telas/Teladetransacao';
import Botao from "./Telas/Botao.js"
import *as Font from "expo-font" 
import {Rajdhani_600SemiBold} from "@expo-google-fonts/rajdhani"


export default class App extends Component {
  
  constructor(){
    super()
    this.state={
      FontLoad:false,
    }
  }
  
  async LoadFont(){
    await Font.loadAsync({Rajdhani_600SemiBold:Rajdhani_600SemiBold})
    this.setState({FontLoad:true})
  }

  componentDidMount(){
    this.LoadFont()
  }

  render(){
    const{FontLoad}=this.state
    if(FontLoad){
      return (
        <View style={styles.container}>
          <Botao>
            
          </Botao>
    
        </View>
      );
    }
  return null
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from "react";
import { Component } from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Pesquisa from "./Teladepesquisa";
import Transacao from "./Teladetransacao";
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator()

export default class Botao extends Component{
    render(){
        return(
            <SafeAreaProvider>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions = {({route}) => ({
                            tabBarIcon:({focused, horizontal, tintColor})=> {
                                var nameIcon
                                if (route.name == "Transacao"){
                                    nameIcon = "book"
                                }
                                if (route.name == "Pesquisa"){
                                    nameIcon = "search"
                                }
                                return(
                                    <Ionicons
                                    name={nameIcon} size={size} color={color} size={size}
                                    >

                                    </Ionicons>
                                )
                            }
                        })}
                        tabBarOptions = {{
                            activeTintColor:"purple",
                            inactiveTintColor:"orange",
                            style:{
                                height:130,
                                borderTopWidth:0,
                                backgroundColor:"pink"
                            
                            },
                            labelStyle:{
                                fontSize:20,
                                fontFamily:"Rajdhani_600SemiBold"
                            },
                            labelPosition:"beside-icon",
                            tabStyle:{
                                marginTop:25,
                                marginLeft:10,
                                marginRight:10,
                                borderRadius:30,
                                borderWidth:2,
                                alignItems:"center",
                                justifyContent:"center",
                                backgroundColor:"black"
                            }
                        }}>
                        <Tab.Screen name = "Pesquisa" component = {Pesquisa}>
                            
                        </Tab.Screen>
                        <Tab.Screen name = "Transação" component = {Transacao}>

                        </Tab.Screen>
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }
}
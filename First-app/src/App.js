import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/multi'

export default class App extends Component  {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.f20}>
            Hello World 3 !!!
        </Text>
        <Simples texto='Flexível !!!'></Simples>
        <ParImpar numero={30}></ParImpar>
        <ParImpar numero={29}></ParImpar>
        <Inverter texto="! Eu sou legal"></Inverter>
        <MegaSena numeros={6}></MegaSena>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    f20: {
        fontSize: 40
    }
});

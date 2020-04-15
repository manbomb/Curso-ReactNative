import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/padrao'

export default class Evento extends Component {

    state = {
        text: ''
    }

    alterarTexto = text => {
        this.setState({ text /* === text: text*/ })
    }

    render() {
        return (
            <View style={{marginTop:100,alignItems:"center",paddingTop:20,marginHorizontal:5,borderWidth:2,borderColor:'#000',borderRadius:20}}>
                <Text style={Padrao.fonte40}>
                    {this.state.text}
                </Text>
                <TextInput
                    style={Padrao.input}
                    onChangeText={this.alterarTexto}
                />
            </View>
        )
    }
}
import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/padrao'

export const Entrada = props =>
    <View>
        <TextInput 
            value={props.texto} 
            style={Padrao.input} 
            onChangeText={props.changeCallBack} />
    </View>

export class TextoSincronizado extends Component {
    
    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>
                    {this.state.texto}
                </Text>
                <Entrada texto={this.state.texto} changeCallBack={this.alterarTexto} />
            </View>
        )
    }

}
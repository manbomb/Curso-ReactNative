import React, {Component} from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {

    state = {
        numero: 0
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    limpar = () => {
        this.setState({ numero: 0 })
    }

    render() {
        return (
            <View style={{flex:1, alignItems:"center",paddingVertical:100}}>
                <Text style={{fontSize:40}}>
                    {this.state.numero}
                </Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}
                    style={{width:200,height:60,borderColor:"#000",borderRadius:20,borderWidth:2,alignItems:"center",paddingTop:15,marginTop:30}}
                >
                    <Text>
                        Incrementar/Zerar
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}
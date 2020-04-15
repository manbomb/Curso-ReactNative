import React from 'react'
import { View, StyleSheet } from   'react-native'

const estilo = StyleSheet.create({
    container: {
        height: '100%',
    },
    norte: {
        flex: 1,
        backgroundColor: '#bdf9ed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    centro: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor:'#f2f9bd',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems:'center'
    },
    sul: {
        backgroundColor:'#bdf9c4',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circulo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#f47f61'
    }
})

const Circulo = props => {
    return <View style={estilo.circulo}></View>
}

export default props => {
    return (
        <View style={estilo.container}>
            <View style={estilo.norte}>
                <Circulo />
            </View>
            <View style={estilo.centro}>
                <Circulo />
                <Circulo />
                <Circulo />
            </View>
            <View style={estilo.sul}>
                <Circulo />
            </View>
        </View>
    )
}
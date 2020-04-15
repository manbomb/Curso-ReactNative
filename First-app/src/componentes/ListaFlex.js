import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.9},
    { id: 2, nome: 'Paulo', nota: 8.0},
    { id: 3, nome: 'Guilherme', nota: 8.2},
    { id: 4, nome: 'Rebeca', nota: 9.1},
    { id: 5, nome: 'Sara', nota: 10},
    { id: 6, nome: 'Pedro', nota: 3.0},
    { id: 7, nome: 'Zaye', nota: 4.5},
    { id: 8, nome: 'Mya', nota: 7.0},
    { id: 9, nome: 'Tobias', nota: 10},
    { id: 10, nome: 'Kauane', nota: 10},
    { id: 11, nome: 'João', nota: 7.9},
    { id: 12, nome: 'Paulo', nota: 8.0},
    { id: 13, nome: 'Guilherme', nota: 8.2},
    { id: 14, nome: 'Rebeca', nota: 9.1},
    { id: 15, nome: 'Sara', nota: 10},
    { id: 16, nome: 'Pedro', nota: 3.0},
    { id: 17, nome: 'Zaye', nota: 4.5},
    { id: 18, nome: 'Mya', nota: 7.0},
    { id: 19, nome: 'Tobias', nota: 10},
]

const itemStyle = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#ddd',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    alignIntems: 'center',
}

export const Aluno = props =>
    <View style={itemStyle}>
        <Text> Nome: {props.nome}</Text>
        <Text style={{fontWeight:'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} 
                keyExtractor={(_, index) => index.toString()}/>
        </ScrollView>
    )
}
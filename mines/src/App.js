import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import params from './params'
import MineField from './components/MinedField'
import Header from './components/Header'
import { 
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
    } from './functions'
import LevelSelection from './screens/LevelSelection'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perdeeeu!', 'Que burro!')
    }

    if (won){
      Alert.alert('Parabéns', 'Você Venceu!')
    }
    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won){
      Alert.alert('Parabéns', 'Você Venceu!')
    }
    this.setState({ board, won })
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    let msg = ''
    if (level == 0.1) msg = 'Nível Fácil Selecionado'
    if (level == 0.2) msg = 'Nível Normal Selecionado'
    if (level == 0.3) msg = 'Nível Difícil Selecionado'
    Alert.alert(msg)
    this.setState(this.createState)
  }

  render() {
    return (
      <View style={styles.container}>
        <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection:false })} />
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState)}
          onFlagPress={() => this.setState({ showLevelSelection:true })}></Header>
        <View style={styles.board}>
          <MineField board={this.state.board} 
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}></MineField>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    //paddingBottom: 50,
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#aaa',
  }
});

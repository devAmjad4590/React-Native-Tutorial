import React from 'react'
import { Text, View, StyleSheet, Alert, FlatList } from 'react-native'
import Title from '../components/Title'
import { useState, useEffect } from 'react'
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import { Feather } from '@expo/vector-icons';
import GuessLogItem from '../components/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1
let maxBoundary = 100


function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  function nextGuessHandler(direction) {

    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
      Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }])
      return
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess
    }
    else {
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRndNumber)
    setGuessRounds((currentRounds) => [newRndNumber, ...currentRounds])
  }

  const guessRoundsListLength = guessRounds.length


  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText} >Higher or Lower</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>

            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Feather name="minus" size={24} /></PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>

            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}><Feather name="plus" size={24} /></PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guess) => {
          return <Text key={guess}>{guess}</Text>
        })} */}
        <FlatList
        data={guessRounds}
        renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}></GuessLogItem>}
        keyExtractor={(item) => item}
        ></FlatList>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 24
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
})

export default GameScreen

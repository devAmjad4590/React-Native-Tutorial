import React from 'react'
import {Text, Image, View, StyleSheet} from 'react-native'
import Title from '../components/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/PrimaryButton'

function GameOverScreen({rounds, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/success.png')} ></Image>
    </View>
    <Text style={styles.summaryText}>
      Your phone needed <Text style={styles.highLight}>{rounds}</Text> rounds to guess the number <Text style={styles.highLight}>{userNumber}</Text>
    </Text>

    <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
  )
}

const styles = StyleSheet.create({
  imageContainer:{
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image:{
    width: '100%',
    height: '100%'
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  summaryText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highLight: {
    fontFamily: 'OpenSans-Bold',
    color: Colors.primary500
  }
})

export default GameOverScreen

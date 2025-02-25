import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
    console.log(pickedNumber)
  }

  let screen = <StartGameScreen numberPicked={pickedNumberHandler} />

  if(userNumber){
    screen = <GameScreen/>
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/background.png')} 
      resizeMode='cover' 
      imageStyle={{opacity: 0.15}}
      style={styles.rootScreen} >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
});

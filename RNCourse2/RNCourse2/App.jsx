import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [isGameOver, setIsGameOver] = useState(true)

  const [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
    setIsGameOver(false)
  }
  function gameOverHandler(){
    setIsGameOver(true)
  }

  let screen = <StartGameScreen numberPicked={pickedNumberHandler} />

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(isGameOver && userNumber){
    screen = <GameOverScreen></GameOverScreen>
  }

  

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/background.png')} 
      resizeMode='cover' 
      imageStyle={{opacity: 0.15}}
      style={styles.rootScreen} >
        <SafeAreaView style={styles.rootScreen}>

        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
});

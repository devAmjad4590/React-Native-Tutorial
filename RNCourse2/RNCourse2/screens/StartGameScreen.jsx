import { Text, View, TextInput, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Title from '../components/Title'
import Card from '../components/Card'
import InstructionText from '../components/InstructionText'

function StartGameScreen({ numberPicked }) {
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler(){
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return
        }

        numberPicked(chosenNumber)
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
        <Card>
            {/* always string type input */}
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
                maxLength={2}
                style={styles.numberInput}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            ></TextInput>

            <View style={styles.buttonsContainer}>

                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
                </View>

                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>

            </View>
        </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    
    numberInput: {
        height: 60,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 1,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },

})

export default StartGameScreen

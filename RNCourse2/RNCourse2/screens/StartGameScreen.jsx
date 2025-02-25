import { Text, View, TextInput, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'

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
        <View style={styles.inputContainer}>
            {/* always string type input */}
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
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center', //vertically center
        alignItems: 'center', // horizontally center
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4, // android only property for shadow
        shadowColor: 'black', // ios only property for shadow
        shadowOffset: { width: 0, height: 2 }, // ios only property for shadow
        shadowRadius: 6, // ios only property for shadow
        shadowOpacity: 0.26, // ios only property for shadow
    },
    numberInput: {
        height: 60,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 1,
        color: '#ddb52f',
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
    }
})

export default StartGameScreen

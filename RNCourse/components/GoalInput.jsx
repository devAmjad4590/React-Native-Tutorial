import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState("");
    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoal) // pointing back to the parent function
        setEnteredGoal("")
    }

    return (
        <Modal
            visible={props.visible}
            animationType='slide'
        >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/goal.png')} />
                <TextInput
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                    style={styles.textInput}
                    placeholder="Your course goal!"
                ></TextInput>
                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button onPress={props.onCancelModal} color="#f31382" title='Cancel'></Button>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title="Add Goal" color="#5e0acc"></Button>
                    </View>


                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },

    textInput: {
        borderWidth: 1,
        borderColor: "black",
        width: "100%",
        padding: 10,
        backgroundColor: "white",
        borderRadius: 5,
        color: '#120438'
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        width: '30%',
        marginHorizontal: 10,
        marginTop: 10,
    },
    image:{
        width: 100,
        height: 100,
        margin: 20
    }
})

export default GoalInput

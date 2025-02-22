import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState("");
    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoal) // pointing back to the parent function
        setEnteredGoal("")
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={goalInputHandler}
                value={enteredGoal}
                style={styles.textInput}
                placeholder="Your course goal!"
            ></TextInput>
            <Button onPress={addGoalHandler} title="Add Goal"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },

    textInput: {
        borderWidth: 1,
        borderColor: "black",
        width: "70%",
        marginRight: 10,
        padding: 10,
    },
})

export default GoalInput

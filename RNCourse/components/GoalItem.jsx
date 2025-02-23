import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    function deleteGoalHandler(){
        props.onDelete(props.id)
    }

    return (
        <View style={styles.goalItem}>
                <Pressable android_ripple={{color: '#dddddd'}} onPress={deleteGoalHandler} style={({pressed}) => pressed && styles.pressedItem} >
                <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
            </View>
    )

}

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: "purple",
        borderWidth: 1,
        borderColor: "#ccc",
        width: "100%",
    },
    goalText: {
        padding: 10,
    },
    pressedItem: {
        opacity: 0.5,
    }
})

export default GoalItem;
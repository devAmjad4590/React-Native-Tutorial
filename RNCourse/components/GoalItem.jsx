import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text>{props.text}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#f0f0f0",
        borderWidth: 1,
        borderColor: "#ccc",
        width: "70%",
      }
})

export default GoalItem;
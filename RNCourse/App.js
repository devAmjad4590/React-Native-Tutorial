import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  
      function addGoalHandler(enteredGoalText) {
          setCourseGoals((currentGoals) => [...currentGoals, { text: enteredGoalText, key: Math.random().toString() }]); // ...currentGoals is to access the existing array and then add the new goal 'enteredGoal'
      }

  
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}></GoalInput>

      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text} />
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalContainer: {
    flex: 11,
  },
  
});

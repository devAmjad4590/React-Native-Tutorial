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
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisiable, setModalIsVisible] = useState(false);

  
      function addGoalHandler(enteredGoalText) {
          setCourseGoals((currentGoals) => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() }]); // ...currentGoals is to access the existing array and then add the new goal 'enteredGoal'
          setModalIsVisible(false)
      }

      function startAddGoalHandler(){
        setModalIsVisible(true)
      }

      function cancelGoalAdditionHandler(){
        setModalIsVisible(false)
      }

      function deleteGoalHandler(id){
        setCourseGoals((currentGoals) => {
          return currentGoals.filter((goal) => goal.id !== id)
        })
      }

  
  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="purple" onPress={startAddGoalHandler} ></Button>
      <GoalInput visible={modalIsVisiable} onAddGoal={addGoalHandler} onCancelModal={cancelGoalAdditionHandler} ></GoalInput>

      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text} id={itemData.item.id}  onDelete={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a"
  },
  goalContainer: {
    flex: 11,
  },
  
});

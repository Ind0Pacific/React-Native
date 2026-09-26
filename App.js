import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [Goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoals((currentGoal) => [
      ...currentGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goals" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={Goals}
          renderItem={(iteamData) => {
            return (
              <View style={styles.goalText}>
                <Text style={styles.goalText}>{iteamData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item , index) => {
            return item.id;
          } }
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#9a1414",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 10,
  },

  goalText: {
    marginVertical: 4,
    padding: 8,
    backgroundColor: "#e2e2e2",
    borderRadius: 6,
  },
});

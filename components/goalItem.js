import { StyleSheet, View, Text , Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem}>
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 4,
    padding: 8,
    backgroundColor: "#e2e2e2",
    borderRadius: 6,
  },
  goalText: {
    color: "#000000",
  },
});
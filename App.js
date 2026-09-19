import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.dummyText}>
          Open up App.js to start working on your app!
          </Text>
      </View>
      <Text style = {styles.dummyText}> 
        hey
        </Text >
      <Button title="HEY" onPress={() => console.log("hey")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 10,
    borderColor: "red",
    padding: 10,
  },
});

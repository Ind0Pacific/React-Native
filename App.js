import { StyleSheet, Text, View, Button , TextInput } from "react-native";

export default function App() {
  return (
    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput style= {styles.textInpt} placeholder=' your Goals' />
        <Button title="Add Goals "/>
      </View>
      <View>
        <Text>List of goals </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInpt: {
    borderWidth: 1,
    borderColor: '#cccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }, 
  },
);

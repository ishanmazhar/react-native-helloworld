import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState(""); 
  const [placeList, setPlaceList] = useState(""); 
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput 
          style={{
            width: "80%",
            borderBottomWidth: 1,
            borderColor: "green",
            padding: 7
          }}
          placeholder="Add a Place.."
          value={inputValue}
          onChangeText={text => setInputValue(text)} 
        />
        <Button 
          title="Add"
          onPress={() => {
            if(inputValue !== "") {
              setPlaceList([...placeList, inputValue]);
            }
          }}
        />
      </View>
      {/* <Text>Hello World!</Text>
      <Text>Hello World!</Text>
      <Text>Hello World!</Text> */}
      {/* <Text>My First React Native App</Text>
      <TextInput 
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        placeholder="I am a placeholder"
        onChangeText={text => handleInputChange(text)}
      />
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    justifyContent: 'flex-start',
    flexDirection: 'column'
    // flexDirection: 'column-reverse'
    // flexDirection: 'row'

  },
  inputView: {
    padding: 20,
    width: "100%", 
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  }
});

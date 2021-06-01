import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const handleInputChange = text => {
    alert(text)
  }
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>Hello World!</Text>
      <Text>Hello World!</Text>
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
    justifyContent: 'center',
    // justifyContent: 'space-between',
    // justifyContent: 'flex-start',
    flexDirection: 'column'
    // flexDirection: 'column-reverse'
    // flexDirection: 'row'

  },
  textStyle: {
    color: "blue", 
  }
});

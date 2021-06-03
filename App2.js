import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';
import ListItem from './components/ListItem/ListItem'; 

export default function App() {
  const [inputValue, setInputValue] = useState(""); 
  const [placeList, setPlaceList] = useState([]); 

  const list = placeList.map((item, index) => {
    return (
      <ListItem placeName={item} key={index} onItemPressed={() => alert(item)} />
    )
  })
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
      <ScrollView style={{
        width: "100%"
      }}>
        {list}
      </ScrollView>
      {/* <StatusBar style="auto" />  */}
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

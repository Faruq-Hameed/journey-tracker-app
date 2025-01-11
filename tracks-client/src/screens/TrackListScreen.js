import React from "react";

import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from "react-native";
import { useMyNavigation } from "../hooks/useMyNavigation";


const data = [
  {title: 'Track 1', id: 1},
  {title: 'Track 2', id: 2},
  {title: 'Track 3', id: 3},
  {title: 'Track 4', id: 4},
]
const TrackListScreen = ({ navigation }) => {
  const navigation = useMyNavigation()
  return (
    <View>
      <FlatList data={data} keyExtractor={(item)=> item.id } 
      renderItem={({item})=>{
        return <TouchableOpacity  onPress={()=>navigation('TrackDetail', {id: item.id})}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      }}
        />
      <Text style={styles.header}>Track List Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default TrackListScreen;
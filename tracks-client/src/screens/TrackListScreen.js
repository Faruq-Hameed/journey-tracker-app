import React, { useContext } from "react";

import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from "react-native";
import { useMyNavigation } from "../hooks/useMyNavigation";
import { data } from "../data";
import { Context } from "../contexts/tokenContext";



const TrackListScreen = () => {
  const navigation = useMyNavigation()
    const {state : tokenState, setToken} = useContext(Context)
  return (
    <View>
      <FlatList data={data} keyExtractor={(item)=> item.id } 
      renderItem={({item})=>{
        return <TouchableOpacity  onPress={()=>navigation({screen: 'Detail',params: {id: item.id}})}>
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
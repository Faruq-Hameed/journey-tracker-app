import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { data } from "../data";

const TrackDetailScreen = ({route}) =>{
    const item = data.find((item) => item.id === route.params.id)
    if (!item) {
        return <Text>Track not founded</Text>
    }

    
    return (
        <View>
        <Text style={styles.header}>{ item.title  } ____  #{ item.id  }</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default TrackDetailScreen;
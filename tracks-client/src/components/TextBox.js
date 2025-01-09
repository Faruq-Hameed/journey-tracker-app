import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const TextBox = ({ label, value, onChangeText, secureTextEntry = false}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    //    padding: 10,
    },
    input: {
        // margin: 15,
        marginTop:10,
        marginBottom: 20,
        paddingVertical: 10,
        borderColor: "black",
        borderWidth: 1,
    },
    label: {
        fontWeight: "bold",
        fontSize: 20,
    },
    Text: {
        color: "rgb(55, 113, 230)"
    }

});

export default TextBox;
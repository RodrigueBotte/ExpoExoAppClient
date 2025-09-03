import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Hobbies() {
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setHobbies([...hobbies, input.trim()]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quels sont vos hobbies?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
        placeholder="Ajouter votre Hobby"
        placeholderTextColor="white"
      />
      <Button title="Submit" onPress={handleSubmit} />
      <FlatList
        data={hobbies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
      borderColor: "white",
    color:'white'
  },
  text: {
    color: "white",
  },
});

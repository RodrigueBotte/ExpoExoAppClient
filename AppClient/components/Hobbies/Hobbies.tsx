import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Hobbies() {
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return;
    setHobbies([...hobbies, input.trim()]);
    setInput("");
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Quels sont vos hobbies ?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ajouter votre hobby"
          placeholderTextColor="#A1CEDC"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
          <Text style={styles.addButtonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>

      {hobbies.length > 0 && (
        <FlatList
          data={hobbies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.hobbyItem}>
              <Text style={styles.hobbyText}>{item}</Text>
            </View>
          )}
          scrollEnabled={false} // éviter les problèmes de ScrollView imbriqués
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1D3D47",
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: "center",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  title: {
    fontSize: 18,
    color: "#A1CEDC",
    fontWeight: "600",
    marginBottom: 15,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#A1CEDC",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "white",
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  hobbyItem: {
    backgroundColor: "#285a6b",
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    width: "100%",
  },
  hobbyText: {
    color: "#fff",
    fontSize: 14,
  },
});

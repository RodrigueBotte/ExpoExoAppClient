import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CounterExp() {
  const [exp, setExp] = useState(10);

  function increaseExp() {
    setExp(exp + 1);
  }

  function decreaseExp() {
    setExp(exp - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.ageText}>
        Vous avez {exp} ans d'expérience dans le métier de développeur
      </Text>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonUp} onPress={increaseExp}>
          <Text style={styles.buttonText}>
            Ajouter des années d'expériences
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDown} onPress={decreaseExp}>
          <Text style={styles.buttonText}>
            Retirer des années d'expériences
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    display: "flex",
    gap: 15,
  },
  buttonUp: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonDown: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  ageText: {
    fontSize: 18,
    color: "#fff",
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

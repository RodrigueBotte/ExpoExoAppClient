import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CounterExp() {
  const [exp, setExp] = useState(10);

  const increaseExp = () => setExp(exp + 1);
  const decreaseExp = () => setExp(exp - 1);

  return (
    <View style={styles.card}>
      <Text style={styles.expText}>
        Vous avez {exp} ans d'expérience dans le métier de développeur
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonUp]}
          onPress={increaseExp}
        >
          <Text style={styles.buttonText}>Ajouter des années</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonDown]}
          onPress={decreaseExp}
        >
          <Text style={styles.buttonText}>Retirer des années</Text>
        </TouchableOpacity>
      </View>
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  expText: {
    fontSize: 18,
    color: "#A1CEDC",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  buttonUp: {
    backgroundColor: "#4CAF50", // vert
  },
  buttonDown: {
    backgroundColor: "#F44336", // rouge
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

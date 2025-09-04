import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface ProfilProps {
  name: string;
  email: string;
  age: string;
  image: string;
}

export default function Profil({ name, email, age, image }: ProfilProps) {
  return (
    <View style={styles.card}>
      <Image style={styles.avatar} source={{ uri: image }} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoText}>{email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Âge:</Text>
        <Text style={styles.infoText}>{age}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1D3D47", // fond sombre élégant
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // pour Android
    marginVertical: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#A1CEDC",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#A1CEDC",
    marginBottom: 15,
  },
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: "#B0C4C9",
    fontWeight: "600",
  },
  infoText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

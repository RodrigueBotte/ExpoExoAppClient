import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function Formulaire({ profile, setProfile }: any) {
  const { control, handleSubmit } = useForm({
    defaultValues: profile,
  });

  const onSubmit = (data: any) => setProfile(data);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Modifier vos informations</Text>

      {["name", "email", "age", "image"].map((field) => (
        <Controller
          key={field}
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder={value || `Votre ${field}`}
              value={value}
              onChangeText={onChange}
              style={styles.input}
              placeholderTextColor="#A1CEDC"
            />
          )}
          name={field}
        />
      ))}

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.submitText}>Valider les changements</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1D3D47",
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#A1CEDC",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: "#A1CEDC",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 12,
    color: "white",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

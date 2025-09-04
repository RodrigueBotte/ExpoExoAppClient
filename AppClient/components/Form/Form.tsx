import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, TextInput, View } from "react-native";
import Profil from "../Profil/Profil";
import {  } from "../Profil/Profil";

export default function Formulaire({profile, setProfile}: any) {

    const { control, handleSubmit } = useForm({
        defaultValues: profile,
    });

    const onSubmit = (data: any) => setProfile(data);
        
    
    
    return (
      <View style={styles.container}>
        <Controller
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder={value}
              onChangeText={onChange}
              style={styles.input}
              placeholderTextColor="white"
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder={value}
              onChangeText={onChange}
              style={styles.input}
              placeholderTextColor="white"
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder={value}
              onChangeText={onChange}
              style={styles.input}
              placeholderTextColor="white"
            />
          )}
          name="age"
        />
        <Controller
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder={value}
              onChangeText={onChange}
              style={styles.input}
              placeholderTextColor="white"
            />
          )}
          name="image"
        />
        <Button title="Valider les changements" onPress={handleSubmit(onSubmit)} />
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
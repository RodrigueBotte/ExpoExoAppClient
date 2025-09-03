import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface ProfilProps{
    name: string,
    email: string,
    age: number,
    image: string
}

export default function Profil({name, email, age, image}: ProfilProps) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
            Bienvenue {name}
            Voici vos informations: Email: {email}
            Age: {age}
            <Image style={{height:200, width:200}} source={{uri: image}} />
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center'
    },
    text: {
        color: "white"
    }
})
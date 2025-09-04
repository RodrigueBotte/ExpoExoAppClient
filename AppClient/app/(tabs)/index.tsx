import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Profil from '@/components/Profil/Profil';
import CounterExp from '@/components/CounterExp/CounterExp';
import Hobbies from '@/components/Hobbies/Hobbies';
import Formulaire from '@/components/Form/Form';
import { useState } from 'react';

export default function HomeScreen() {

  const [profile, setProfile] = useState({
    name: "Rodrigue",
    email: "rodrigue.botte@gmail.com",
    age: '35',
    image:
      "https://image.spreadshirtmedia.net/image-server/v1/compositions/T1310A2PA6156PT32X127Y125D188529612W6184H7531/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/barbe-banane-cheveux-chauves-coiffure-rigolo-t-shirt-sport-homme.jpg",
  });
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Votre App Client</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Profil {...profile}
        />
        <CounterExp />
        <Hobbies />
        <Formulaire profile={profile} setProfile={setProfile} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textView: {
    color: "white"
  }
});

import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import Profil from '@/components/Profil/Profil';
import { useState } from 'react';

export default function TabTwoScreen() {
  const [profile, setProfile] = useState({
      name: "Rodrigue",
      email: "rodrigue.botte@gmail.com",
      age: '35',
      image:
        "https://image.spreadshirtmedia.net/image-server/v1/compositions/T1310A2PA6156PT32X127Y125D188529612W6184H7531/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/barbe-banane-cheveux-chauves-coiffure-rigolo-t-shirt-sport-homme.jpg",
    });
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
              <ThemedText type="title">Votre App Client</ThemedText>
            </ThemedView>
      
            <ThemedView style={styles.stepContainer}>
              <Profil {...profile}
              />
            </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});

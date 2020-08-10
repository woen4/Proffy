import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./styles";

import backgroundImg from "../../assets/images/give-classes-background.png";

export default function Teacher({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        style={styles.background}
        source={backgroundImg}
      >
        <Text style={styles.title}>Quer ser{"\n"}um Proffy?</Text>
        <Text style={styles.subtitle}>
          Para começar, você precisa{"\n"}
          se cadastrar como professor{"\n"}
          na nossa plataforma web.
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.button}
        >
          <Text style={styles.textButton}>Tudo bem</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

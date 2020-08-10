import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

import landingImg from "../../assets/images/landing.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import studyIcon from "../../assets/images/icons/study.png";
import heartIcon from "../../assets/images/icons/heart.png";
import api from "../../services/api";

export default function Landing({ navigation }) {
  const [totalConnections, setTotalConnections] = useState(0);

  async function getTotalConnections() {
    const { data } = await api.get("/connections");
    setTotalConnections(data.total);
  }

  useEffect(() => {
    getTotalConnections();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.landingImage} source={landingImg}></Image>
      <Text style={styles.apresentation}>
        Seja bem-vindo.
        <Text style={styles.strong}>{"\n"}O que deseja fazer?</Text>
      </Text>
      <View style={styles.containerOptions}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BottomTabs");
          }}
          style={styles.option1}
        >
          <Image style={styles.iconOption} source={studyIcon}></Image>
          <Text style={styles.titleOption}>Estudar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Teacher");
          }}
          style={styles.option2}
        >
          <Image style={styles.iconOption} source={giveClassesIcon}></Image>
          <Text style={styles.titleOption}>Dar aulas</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.connections}>
        Total de {totalConnections} conexões{"\n"}já realizadas{" "}
        <Image source={heartIcon}></Image>{" "}
      </Text>
    </View>
  );
}

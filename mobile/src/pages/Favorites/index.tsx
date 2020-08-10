import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import PageHeader from "../Components/PageHeader";
import AsyncStorage from "@react-native-community/async-storage";
import TeacherItem from "../Components/TeacherItem";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./styles";

interface Teacher {
  id: number;
  name: string;
  subject: string;
  bio: string;
  avatar: string;
  cost: number;
  whatsapp: number;
  favorited: boolean;
}

export default function Favorites({ navigation }) {
  const [favorites, setFavorites] = useState([]);
  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoriteTeachers = JSON.parse(response);

        setFavorites(favoriteTeachers);
      }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffy's favoritos" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
        style={styles.teacherList}
      >
        {favorites.map((teacher) => (
          <TeacherItem teacher={teacher} favorited={true}></TeacherItem>
        ))}
      </ScrollView>
    </View>
  );
}

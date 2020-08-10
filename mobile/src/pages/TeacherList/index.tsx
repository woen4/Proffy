import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import PageHeader from "../Components/PageHeader";
import TeacherItem from "../Components/TeacherItem";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

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

export default function TeacherList({ navigation }) {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeek_Day] = useState("");
  const [time, setTime] = useState("");
  const [proffys, setProffys] = useState<Teacher[]>([]);

  async function submitForm() {
    loadFavorites();
    const params = {
      subject,
      week_day,
      time,
    };
    const response = await api.get("/classes", { params });
    setProffys(response.data.classes);
  }

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoriteTeachers = JSON.parse(response);
        const favoriteTeachersIds = favoriteTeachers.map((teacher: Teacher) => {
          return teacher.id;
        });
        setFavorites(favoriteTeachersIds);
      }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <View>
      <PageHeader
        title="Proffy's disponíveis"
        headerRight={
          <BorderlessButton
            onPress={() => {
              setIsFiltersVisible(!isFiltersVisible);
            }}
          >
            <Feather name="filter" size={28} color="#fff"></Feather>
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              value={subject}
              onChangeText={setSubject}
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Qual a matéria"
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  value={week_day}
                  onChangeText={setWeek_Day}
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual o dia"
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={setTime}
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual o horário"
                />
              </View>
            </View>
            <RectButton
              onPress={() => {
                submitForm();
              }}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {proffys.map((teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

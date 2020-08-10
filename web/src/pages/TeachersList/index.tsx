import React, { useState, useEffect, FormEvent } from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

interface Teacher {
  id: number;
  subject: string;
  cost: number;
  user_id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

const TeachersForm = () => {
  const [selectedSubject, setSelectedSubject] = useState("Física");
  const [selectedWeek_day, setSelectedWeek_day] = useState(1);
  const [selectedTime, setSelectedTime] = useState("19:00");
  const [teachers, setTeachers] = useState([]);

  function searchTeachers(e: FormEvent){
    e.preventDefault();

  }

  useEffect(() => {
    async function getTeachers() {
      const params = {
        subject: selectedSubject,
        week_day: selectedWeek_day,
        time: selectedTime,
      };
      const { data } = await api.get("/classes", { params });
      setTeachers(data.classes);
    }
    getTeachers();
  });

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
            }}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
            ]}
          />
          <Select
            value={selectedWeek_day}
            onChange={(e) => {
              setSelectedWeek_day(Number(e.target.value));
            }}
            name="weekday"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />

          <Input
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            type="time"
            name="time"
            label="Hora"
          />
          <button id="button-search" type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
};

export default TeachersForm;

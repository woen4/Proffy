import React, { useState, FormEvent } from "react";
import PageHeader from "../../components/PageHeader";
import "./styles.css";
import { useHistory } from "react-router-dom";
import warningIcon from "../../assets/images/icons/warning.svg";
import Input from "../../components/Input";
import Textarea from "../../components/TextArea";
import Select from "../../components/Select";
import api from "../../services/api";

const TeachersForm = () => {
  const history = useHistory();
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 1, from: "18:00", to: "20:00" },
  ]);

  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  async function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    const data = {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule: scheduleItems,
    };
    const response = await api.post("classes", data);
    if (response.status === 201) {
      alert("Aulas criadas");
      history.push("/");
    } else {
      alert("Não foi possível criar as aulas");
    }
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
              label="Nome completo"
            />
            <Input
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
              name="avatar"
              label="Avatar"
            />
            <Input
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
              name="whatsapp"
              label="Whatsapp"
            />
            <Textarea
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
              name="bio"
              label="Biografia"
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
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
            <Input
              value={cost}
              onChange={(e) => {
                setCost(Number(e.target.value));
              }}
              name="cost"
              label="Custo da hora por aula"
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    value={scheduleItem.week_day}
                    onChange={(e) => {
                      setScheduleItemValue(index, "week_day", e.target.value);
                    }}
                    name="week_day"
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
                    value={scheduleItem.from}
                    onChange={(e) => {
                      setScheduleItemValue(index, "from", e.target.value);
                    }}
                    name="from"
                    label="Das"
                    type="time"
                  />
                  <Input
                    value={scheduleItem.to}
                    onChange={(e) => {
                      setScheduleItemValue(index, "to", e.target.value);
                    }}
                    name="to"
                    label="Até"
                    type="time"
                  />
                </div>
              );
            })}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeachersForm;

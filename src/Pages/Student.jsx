import {
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";

const Student = () => {
  const [studyForm, setStudyForm] = useState("");
  const [faculty, setFaculty] = useState("");
  const [kafedra, setKafedra] = useState("");
  const [payForm, setPayForm] = useState("");
  return (
    <Container maxWidth="lg">
      <Grid container direction="row" rowSpacing={3}>
        <Grid item md={4} direction="column">
          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="name">ФИО</InputLabel>
            <Input id="name" />
          </FormControl>
          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="birthday">Дата рождения</InputLabel>
            <Input id="birthday" />
          </FormControl>
          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="enrollYear">Год поступления</InputLabel>
            <Input id="enrollYear" />
          </FormControl>
          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="studyForm">Форма обучения</InputLabel>
            <Select
              labelId="studyForm"
              label="studyForm"
              value={studyForm}
              onChange={(e) => {
                setStudyForm(e.target.value);
              }}
            >
              <MenuItem value="contract">Контрактная</MenuItem>
              <MenuItem value="budget">Бюджетная</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="faculty">Факультет</InputLabel>
            <Select
              id="faculty"
              value={faculty}
              onChange={(e) => {
                setFaculty(e.target.value);
              }}
            >
              <MenuItem value="faculty1">Факультет 1</MenuItem>
              <MenuItem value="faculty2">Факультет 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="kafedra">Кафедра</InputLabel>
            <Select
              id="kafedra"
              value={kafedra}
              onChange={(e) => {
                setKafedra(e.target.value);
              }}
            >
              <MenuItem value="kaf1">Кафедра 1</MenuItem>
              <MenuItem value="kaf2">Кафедра 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4}>
          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="payForm">Форма оплаты</InputLabel>
            <Select
              id="payForm"
              value={payForm}
              onChange={(e) => {
                setPayForm(e.target.value);
              }}
            >
              <MenuItem value="form1">Форма оплаты 1</MenuItem>
              <MenuItem value="form2">Форма оплаты 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="enrollInfo">Данные о зачислении</InputLabel>
            <Input id="enrollInfo" />
          </FormControl>
          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="disserttationTheme">
              Тема диссертации
            </InputLabel>
            <Input id="disserttationTheme" />
          </FormControl>
          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="mentorName">ФИО руководителя</InputLabel>
            <Input id="mentorName" />
          </FormControl>
          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="examsInfo">
              Данные о вступительных экзаменах
            </InputLabel>
            <Input id="examsInfo" />
          </FormControl>
        </Grid>
        <Grid item md={4}>
          <FormControl variant="filled" margin="normal" fullWidth>
            <Input
              id="passFace"
              type="file"
              placeholder="Фото паспорта(лицевая сторона)"
            />
          </FormControl>

          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="passBack">
              Фото паспорта(обратная сторона)
            </InputLabel>
            <Input id="passBack" />
          </FormControl>

          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="diplomaFoto">Фото диплома</InputLabel>
            <Input id="diplomaFoto" />
          </FormControl>

          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel htmlFor="">фото трудовой книжки</InputLabel>
            <Input />
          </FormControl>

          <FormControl variant="filled" margin="normal" fullWidth>
            <InputLabel>Фото справки для ин. граждан</InputLabel>
            <Input />
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Student;

"use client";
import { Divider } from "@chakra-ui/react";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import * as S from "./styles";

export default function HowWeWork() {
  const List = [
    {
      number: 1,
      title: "Agendamento",
      text: "Entre em contato conosco e agende uma consulta online.",
    },
    {
      number: 2,
      title: "Atendimento",
      text: "Nossa equipe de psicólogos irá avaliar suas necessidades e propor um plano de trabalho personalizado.",
    },
    {
      number: 3,
      title: "Terapia",
      text: "Utilizaremos abordagens terapêuticas para ajudar a lidar com seus problemas emocionais e comportamentais.",
    },
    {
      number: 4,
      title: "Resultados",
      text: "Acompanhe sua evolução com o suporte contínuo da nossa equipe, ajustando o plano conforme necessário.",
    },
  ];

  return (
    <S.Wrapper id="how-we-work">
      <S.Title>Como Funciona Nosso Trabalho</S.Title>
      <S.HowWeWorkWrapper>
        {List.map((item) => (
          <S.Step key={item.number}>
            <S.StepButton>{item.number}</S.StepButton>
            <S.StepTitle>{item.title}</S.StepTitle>
            <S.StepText>{item.text}</S.StepText>
            <Divider orientation="horizontal" width={"75%"} />
          </S.Step>
        ))}
        <ScheduleButton />
      </S.HowWeWorkWrapper>
    </S.Wrapper>
  );
}

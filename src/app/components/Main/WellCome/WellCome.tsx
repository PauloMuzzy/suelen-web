"use client";

import perfil from "@/app/assets/images/perfil.jpeg";
import * as S from "./styles";
import ScheduleButton from "../ScheduleButton/ScheduleButton";

export default function WellCome() {
  return (
    <S.Wrapper id="wellcome">
      <S.ImageStyled src={perfil} alt="Dan Abramov" />
      <S.Title>
        Suelen Muzzy,
        <br /> Psicóloga clínica
      </S.Title>
      <S.Text>
        Sou psicóloga formada e especialista em Terapia Cognitivo-Comportamental
        (TCC), um tipo de terapia prática que te ajuda a mudar pensamentos e
        comportamentos para viver melhor. Quero te ajudar a lidar com problemas
        como ansiedade, estresse, baixa autoestima ou dificuldades em
        relacionamentos, usando estratégias feitas especialmente para você.
      </S.Text>
      <ScheduleButton />
    </S.Wrapper>
  );
}

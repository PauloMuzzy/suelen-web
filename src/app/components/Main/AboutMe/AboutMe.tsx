"use client";

import perfil2 from "@/app/assets/images/perfil2.png";
import * as S from "./styles";
import ScheduleButton from "../ScheduleButton/ScheduleButton";

export default function AboutMe() {
  return (
    <S.Wrapper id="about-me">
      <S.Title>Sobre mim</S.Title>
      <S.AboutMeWrapper>
        <S.ImageStyled src={perfil2} alt="Dan Abramov" />
        <S.SubtitleWrapper>
          <S.Name>Suelen Dos Santos Muzzy</S.Name>
          <S.CRP>CRP 00/00000000</S.CRP>
        </S.SubtitleWrapper>
        <S.Text>
          Seja bem-vindo(a) ao meu espaço! Sou psicóloga formada e especializada
          em Terapia Cognitivo-Comportamental (TCC), uma abordagem prática e
          baseada em evidências que ajuda a transformar pensamentos e
          comportamentos para uma vida mais equilibrada. Meu objetivo é te
          apoiar no enfrentamento de desafios como ansiedade, estresse, baixa
          autoestima ou dificuldades nos relacionamentos, com estratégias
          personalizadas e focadas em resultados. Vamos juntos construir um
          caminho para o seu bem-estar? Seja bem-vindo(a) ao meu espaço! Sou
          psicóloga formada e especializada em Terapia Cognitivo-Comportamental
          (TCC), uma abordagem prática e baseada em evidências que ajuda a
          transformar pensamentos e comportamentos para uma vida mais
          equilibrada. Meu objetivo é te apoiar no enfrentamento de desafios
          como ansiedade, estresse, baixa autoestima ou dificuldades nos
          relacionamentos, com estratégias personalizadas e focadas em
          resultados. Vamos juntos construir um caminho para o seu bem-estar?
        </S.Text>
        <ScheduleButton />
      </S.AboutMeWrapper>
    </S.Wrapper>
  );
}

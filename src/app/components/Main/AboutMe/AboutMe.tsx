"use client";

import perfil2 from "@/app/assets/images/perfil2.png";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import * as S from "./styles";

export default function AboutMe() {
  return (
    <S.Wrapper id="about-me">
      <S.Title>Sobre mim</S.Title>
      <S.AboutMeWrapper>
        <S.ImageStyled src={perfil2} alt="Dan Abramov" />
        <S.SubtitleWrapper>
          <S.Name>Prazer, sou Suelen Muzzy</S.Name>
          <S.CRP>CRP 06/161124</S.CRP>
        </S.SubtitleWrapper>
        <S.Text>
          Com uma trajetória marcada por mais de 100 vidas impactadas através da psicoterapia, atuo com foco no tratamento de <b>Transtornos de Ansiedade, Transtornos de Humor, Depressão e também em demandas sem diagnóstico clínico, como procrastinação, desregulação emocional, dificuldades nos relacionamentos</b>, entre outros processos desadaptativos que interferem no bem-estar e na qualidade de vida.
          <br />
          <br />
          Meu propósito é ajudar você a encontrar um estado de <b>equilíbrio emocional, autenticidade e leveza</b>. Entendo que a psicoterapia vai muito além do alívio de sintomas: é um processo profundo de <b>autoconhecimento, fortalecimento emocional e reconexão com uma vida que faça sentido para você.</b>
          <br />
          <br />
          Atuo com a <b>Terapia Cognitivo-Comportamental (TCC)</b>, abordagem baseada em evidências científicas, reconhecida pela eficácia no tratamento de diversas condições emocionais e comportamentais. Isso significa que cada intervenção utilizada é fundamentada em estudos que comprovam sua efetividade.
          <br />
          <br />
          Meu olhar clínico é sempre <b>individualizado</b>, respeitando a singularidade de cada pessoa que chega até mim. Cada <b>plano terapêutico é construído de forma personalizada</b>, levando em consideração suas necessidades, objetivos e contexto de vida.
          <br />
          <br />
          Se você sente que é o momento de buscar ajuda, estou aqui para caminhar ao seu lado nesse processo.
        </S.Text>
        <ScheduleButton />
      </S.AboutMeWrapper>
    </S.Wrapper>
  );
}

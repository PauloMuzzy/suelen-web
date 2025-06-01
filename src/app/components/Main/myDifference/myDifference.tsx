"use client";
import { Divider } from "@chakra-ui/react";
import * as S from "./styles";
import ScheduleButton from "../ScheduleButton/ScheduleButton";

export default function Instagram() {
  return (
    <S.Wrapper id="my-difference">
      <S.Title>Meu diferencial</S.Title>
      <S.DifferenceWrapper>
        <S.DifferenceTitle>Empatia e vínculo autêntico</S.DifferenceTitle>
        <S.DifferenceText>
          Ofereço um ambiente acolhedor e seguro onde você se sentirá
          genuinamente escutado e compreendido. Acredito que um vínculo
          verdadeiro é essencial para uma experiência terapêutica significativa
          e transformadora.
        </S.DifferenceText>
        <Divider orientation="horizontal" width={"75%"} />
        <S.DifferenceTitle>
          Prioridade no seu equilíbrio emocional
        </S.DifferenceTitle>
        <S.DifferenceText>
          Minhas sessões são personalizadas, focadas em suas metas e
          necessidades individuais. Utilizo técnicas terapêuticas comprovadas
          para apoiar sua jornada rumo ao bem-estar, autenticidade e harmonia
          emocional, mesmo em momentos desafiadores.
        </S.DifferenceText>
        <Divider orientation="horizontal" width={"75%"} />
        <S.DifferenceTitle>
          Atendimento online com toque humano
        </S.DifferenceTitle>
        <S.DifferenceText>
          As sessões são realizadas online, permitindo que você receba apoio em
          um ambiente confortável, com flexibilidade de horários. Meu objetivo é
          criar um espaço de cuidado que respeite seu ritmo, promovendo
          confiança, serenidade e esperança.
        </S.DifferenceText>
        <Divider orientation="horizontal" width={"75%"} />
        <ScheduleButton />
      </S.DifferenceWrapper>
    </S.Wrapper>
  );
}

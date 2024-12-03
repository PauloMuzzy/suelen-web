"use client";

import { Button } from "@chakra-ui/react";
import * as S from "./styles";

export default function AboutMe() {
  return (
    <S.Wrapper>
      <S.Title>Prazer sou</S.Title>
      <S.SubtitleWrapper>
        <S.Name>Seu nome</S.Name>
        <S.CRP>CRM 00/00000000</S.CRP>
      </S.SubtitleWrapper>
      <S.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        sagittis nibh tellus, in mollis nunc consectetur sed. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Etiam eros nisl, imperdiet id elementum suscipit, blandit ut
        sem. Quisque convallis mattis nunc, sit amet dictum nibh finibus id.
        Mauris imperdiet diam nunc, ac sagittis lectus vehicula mattis. Sed eget
        massa at nunc dignissim congue. Vivamus sit amet vulputate nunc. Morbi
        commodo congue enim id sagittis. Nullam et sagittis augue. Aliquam
        auctor ultrices lectus ut tempus.
      </S.Text>
      <S.ButtonWrapper>
        <Button
          style={{
            background: "#D9D9D9",
            color: "#010E21",
            fontWeight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "normal",
            width: "auto",
            height: "48px",
            borderRadius: "100px 100px 100px 0",
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
            padding: "16px",
          }}
        >
          Quero agendar uma consulta
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

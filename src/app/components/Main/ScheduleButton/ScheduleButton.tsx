"use client";
import { Button } from "@chakra-ui/react";
import * as S from "./styles";

export default function ScheduleButton() {
  return (
    <S.ButtonWrapper>
      <Button
        style={{
          background: "#D9D9D9",
          fontWeight: "400",
          fontStyle: "normal",
          fontSize: "16px",
          lineHeight: "normal",
          width: "auto",
          height: "48px",
          borderRadius: "48px",
          boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
          padding: "16px",
        }}
      >
        Quero agendar uma consulta
      </Button>
    </S.ButtonWrapper>
  );
}

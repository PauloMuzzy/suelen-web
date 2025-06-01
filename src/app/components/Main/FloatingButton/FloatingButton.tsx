"use client";
import { Button } from "@chakra-ui/react";
import * as S from "./styles";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButton() {
  return (
    <S.ButtonWrapper>
      <Button
        style={{
          background: "#D7B5AE",
          color: "#010E21",
          fontWeight: "400",
          fontStyle: "normal",
          fontSize: "16px",
          lineHeight: "normal",
          width: "48px",
          height: "48px",
          borderRadius: "100px",
          boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
          padding: "12px",
        }}
      >
        <FaWhatsapp style={{ width: "36px", height: "36px" }} />
      </Button>
    </S.ButtonWrapper>
  );
}

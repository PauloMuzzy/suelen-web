"use client";
import { Button } from "@chakra-ui/react";
import * as S from "./styles";

export default function ScheduleButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5519984242412";
    const message = "Olá, gostaria de mais informações!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <S.ButtonWrapper>
      <Button
        onClick={handleWhatsAppClick}
        style={{
          background: "#D7B5AE",
          fontWeight: "500",
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
        Entre em contato
      </Button>
    </S.ButtonWrapper>
  );
}

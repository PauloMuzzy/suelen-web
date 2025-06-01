"use client";
import { Button } from "@chakra-ui/react";
import * as S from "./styles";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButton() {
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

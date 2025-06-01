"use client";

import { Button } from "@chakra-ui/react";
import * as S from "./styles";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const handleInstagramClick = () => {
    const instagramUrl = "https://www.instagram.com/psicosuelenmuzzy";
    window.open(instagramUrl, "_blank");
  };

  const handleEmailClick = () => {
    const emailUrl = `mailto:suelen.muzzy@gmail.com?subject=Agendamento%20de%20Consulta&body=${encodeURIComponent(
      `Por favor, preencha as informações abaixo:\n\n` +
        `Nome: \n` +
        `Idade: \n` +
        `Gênero: \n` +
        `Motivo do contato: \n` +
        `( )Dúvida sobre a terapia \n` +
        `( )Agendamento de primeiro contato \n\n` +
        `Caso seja agendamento de primeiro contato, preencha as informações abaixo: \n` +
        `Motivo de buscar uma psicoterapia: \n` +
        `Já teve algum contato com psicólogos? \n` +
        `( )Sim \n` +
        `( )Nao \n` +
        `Se sim, qual foi o motivo: \n` +
        `Fico feliz pelo seu contato, assim que puder, irei entrar em contato com vocé. \n\n` +
        `Obrigada! \n\n` +
        `Atenciosamente, \n` +
        `Suelen Muzzy`
    )}`;
    window.open(emailUrl, "_blank");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5519984242412";
    const message = "Olá, gostaria de agendar uma consulta!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <S.Wrapper>
      <p>Entre em contato e agende uma consulta</p>
      <S.SocialMediasWrapper>
        <Button
          onClick={handleInstagramClick}
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Abrir Instagram"
        >
          <FaInstagram style={{ width: "36px", height: "36px" }} />
        </Button>
        <Button
          onClick={handleEmailClick}
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Enviar e-mail"
        >
          <MdOutlineMail style={{ width: "36px", height: "36px" }} />
        </Button>
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Abrir WhatsApp"
        >
          <FaWhatsapp style={{ width: "36px", height: "36px" }} />
        </Button>
      </S.SocialMediasWrapper>
      <p>© Todos os direitos reservados</p>
    </S.Wrapper>
  );
}

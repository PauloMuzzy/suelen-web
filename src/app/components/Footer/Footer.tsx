"use client";

import * as S from "./styles";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <S.Wrapper>
      <p>Entre em contato e agende uma consulta</p>
      <S.SocialMediasWrapper>
        <FaInstagram style={{ width: "36px", height: "36px" }} />
        <MdOutlineMail style={{ width: "36px", height: "36px" }} />
        <FaWhatsapp style={{ width: "36px", height: "36px" }} />
      </S.SocialMediasWrapper>
      <p>© Todos os direitos reservados</p>
    </S.Wrapper>
  );
}

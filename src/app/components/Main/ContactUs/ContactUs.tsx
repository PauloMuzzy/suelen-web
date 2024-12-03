"use client";

import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import * as S from "./styles";
import { Button } from "@chakra-ui/react";

export default function ContactUs() {
  return (
    <S.Wrapper>
      <S.Title>Entre em contato</S.Title>
      <S.ButtonWrapper>
        <Button
          style={{
            background: "#d9d9d9",
            color: "#010E21",
            justifyContent: "start",
            fontWeight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "normal",
            width: "100%",
            height: "64px",
            borderRadius: "100px 100px 100px 0",
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
            padding: "16px",
            gap: "8px",
          }}
        >
          <FaWhatsapp
            style={{ width: "36px", height: "36px", color: "gray" }}
          />
          (19) 98849-3931
        </Button>
        <Button
          style={{
            background: "#d9d9d9",
            color: "#010E21",
            justifyContent: "start",
            fontWeight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "normal",
            width: "100%",
            height: "64px",
            borderRadius: "100px 100px 100px 0",
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
            padding: "16px",
            gap: "8px",
          }}
        >
          <MdOutlineMailOutline
            style={{ width: "36px", height: "36px", color: "gray" }}
          />
          suelem.muzzy@gmail.com
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

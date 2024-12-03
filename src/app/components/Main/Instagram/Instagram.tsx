"use client";
import img2 from "@/app/assets/images/img2.jpg";
import img3 from "@/app/assets/images/img3.jpg";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import * as S from "./styles";

export default function Instagram() {
  return (
    <S.Wrapper>
      <S.Title>Conheça meu instagram</S.Title>
      <Carousel fade>
        {[img2, img3, img2].map((img, index) => (
          <Carousel.Item key={index}>
            <Image
              src={img}
              alt="First slide"
              style={{ borderRadius: "32px" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <S.ButtonWrapper>
        <Button
          style={{
            background: "#D7B5AE",
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
            gap: "8px",
          }}
        >
          <FaInstagram />
          Instagram
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

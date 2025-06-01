"use client";
import logo from "@/app/assets/images/logoheader.png";
import Dropdown from "@/app/components/Header/Dropdown/Dropdown";
import Image from "next/image";
import * as S from "./styles";

export default function Header() {
  return (
    <S.Wrapper>
      <Image src={logo} alt="logo" width={200} />
      <Dropdown />
    </S.Wrapper>
  );
}

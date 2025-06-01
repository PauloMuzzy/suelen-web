"use client";

import AboutMe from "@/app/components/Main/AboutMe/AboutMe";
import PatientReviews from "@/app/components/Main/PatientReviews/PatientReviews";
import WellCome from "@/app/components/Main/WellCome/WellCome";
import OurServices from "./OurServices/OurServices";
import * as S from "./styles";
import MyDifference from "./myDifference/myDifference";
import HowWeWork from "./HowWeWork/HowWeWork";
import FloatingButton from "./FloatingButton/FloatingButton";

export default function Main() {
  return (
    <S.Wrapper>
      <WellCome />
      <MyDifference />
      <AboutMe />
      <OurServices />
      <HowWeWork />
      <PatientReviews />
      <FloatingButton />
    </S.Wrapper>
  );
}

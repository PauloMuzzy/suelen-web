"use client";

import AboutMe from "@/app/components/Main/AboutMe/AboutMe";
import DoYouNeedTherapy from "@/app/components/Main/DoYouNeedTherapy/DoYouNeedTherapy";
import FrequentlyQuestions from "@/app/components/Main/FrequentlyQuestions/FrequentlyQuestions";
import Instagram from "@/app/components/Main/Instagram/Instagram";
// import OurServices from "@/app/components/Main/OurServices/OurServices";
import PatientReviews from "@/app/components/Main/PatientReviews/PatientReviews";
import WellCome from "@/app/components/Main/WellCome/WellCome";
import * as S from "./styles";
import ContactUs from "./ContactUs/ContactUs";

export default function Main() {
  return (
    <S.Wrapper>
      <WellCome />
      <AboutMe />
      <DoYouNeedTherapy />
      {/* <OurServices /> */}
      <Instagram />
      <PatientReviews />
      <FrequentlyQuestions />
      <ContactUs />
    </S.Wrapper>
  );
}

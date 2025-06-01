"use client";

import img1 from "@/app/assets/images/img1.jpg";
import img2 from "@/app/assets/images/img1.jpg";
import img3 from "@/app/assets/images/img1.jpg";
import img4 from "@/app/assets/images/img1.jpg";
import img5 from "@/app/assets/images/img1.jpg";
import * as S from "./styles";
import ScheduleButton from "../ScheduleButton/ScheduleButton";

export default function OurServices() {
  const list = [
    {
      image: img1,
      title: "Psicoterapia para Adultos",
      textService:
        "A psicoterapia para adultos oferece um espaço seguro e acolhedor para explorar emoções, pensamentos e comportamentos. Por meio de técnicas baseadas em evidências, ajudamos a enfrentar desafios como ansiedade, depressão, estresse e questões relacionais, promovendo autoconhecimento e bem-estar.",
    },
    {
      image: img2,
      title: "Psicoterapia Infantil",
      textService:
        "A psicoterapia para crianças utiliza abordagens lúdicas, como brincadeiras e desenhos, para ajudar os pequenos a expressar sentimentos e lidar com dificuldades emocionais ou comportamentais. Nosso objetivo é apoiar o desenvolvimento saudável e fortalecer a autoestima em um ambiente empático.",
    },
    {
      image: img3,
      title: "Terapia de Casal",
      textService:
        "A terapia de casal é voltada para melhorar a comunicação, resolver conflitos e fortalecer os laços entre parceiros. Com sessões personalizadas, trabalhamos para promover entendimento mútuo e construir relacionamentos mais saudáveis e harmoniosos.",
    },
    {
      image: img4,
      title: "Aconselhamento Familiar",
      textService:
        "O aconselhamento familiar ajuda a resolver conflitos e melhorar a dinâmica entre membros da família. Por meio de diálogos mediados, buscamos fortalecer os vínculos, promover a compreensão e criar um ambiente familiar mais equilibrado e acolhedor.",
    },
    {
      image: img5,
      title: "Psicoterapia para Adolescentes",
      textService:
        "A psicoterapia para adolescentes oferece suporte para enfrentar os desafios típicos dessa fase, como questões de identidade, pressões sociais e emocionais. Com uma abordagem empática, ajudamos jovens a desenvolverem resiliência e habilidades para lidar com suas emoções.",
    },
  ];

  return (
    <S.Wrapper id="our-services">
      <S.Title>Serviços</S.Title>
      <S.ServiceWrapper>
        <S.Text>
          Ofereço opções de terapia adaptadas às suas necessidades e objetivos.
          Juntos, podemos trabalhar em prol do seu bem-estar por meio da
          psicoterapia online.
        </S.Text>
        {list.map((item, index) => (
          <S.Card key={index}>
            <S.CardImage src={item.image} alt={item.title} />
            <S.CardTitle>{item.title}</S.CardTitle>
            <S.CardText>{item.textService}</S.CardText>
          </S.Card>
        ))}
        <ScheduleButton />
      </S.ServiceWrapper>
    </S.Wrapper>
  );
}

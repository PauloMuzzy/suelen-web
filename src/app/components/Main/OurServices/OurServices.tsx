"use client";

import { default as img1, default as img2, default as img3, default as img4 } from "@/app/assets/images/img1.jpg";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import * as S from "./styles";

export default function OurServices() {
  const list = [
    {
      image: img1,
      title: "Psicoterapia para Adultos e Adolescentes",
      textService:
        "A psicoterapia é um espaço especializado para cuidar da sua saúde emocional, desenvolver novas formas de lidar com desafios e promover o autoconhecimento. Atendo adolescentes e adultos com demandas diversas, desde o manejo de transtornos específicos até dificuldades emocionais e comportamentais sem diagnóstico formal."
    },
    {
      image: img2,
      title: "Psicoterapia para Ansiedade, Depressão e Transtornos do Humor",
      textService:
       "Se você enfrenta sintomas como preocupação excessiva, crises de ansiedade, desânimo persistente ou oscilações de humor, a psicoterapia pode ajudar a entender os fatores que mantêm esses quadros e a desenvolver estratégias para o manejo emocional."
    },
    {
      image: img3,
      title: "Psicoterapia para Demandas Sem Diagnóstico (Processos Desadaptativos)",
      textService:
       "Mesmo sem um diagnóstico específico, muitas pessoas buscam terapia para lidar com dificuldades que impactam a qualidade de vida, como procrastinação, dificuldades de regulação emocional, baixa autoestima, conflitos interpessoais, tomada de decisões e autocrítica excessiva. O foco é desenvolver habilidades de enfrentamento e promover mudanças concretas no dia a dia."
    },
    {
      image: img4,
      title: "Psicoterapia para Adolescentes",
      textService:
       "O período da adolescência traz inúmeros desafios emocionais, sociais e comportamentais. Trabalho com adolescentes de forma cuidadosa, respeitando o desenvolvimento dessa fase, com foco em ansiedade escolar e social, dificuldades de relacionamento familiar e com pares, questões de identidade e autoestima, e regulação emocional."
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
        <S.CardWrapper>
          {list.map((item, index) => (
            <S.Card key={index}>
              <S.CardImage src={item.image} alt={item.title} />
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardText>{item.textService}</S.CardText>
            </S.Card>
          ))}
        </S.CardWrapper>
        <ScheduleButton />
      </S.ServiceWrapper>
    </S.Wrapper>
  );
}

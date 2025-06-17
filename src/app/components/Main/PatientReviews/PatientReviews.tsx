"use client";

import { Divider } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa6";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import * as S from "./styles";
export default function PatientReviews() {
  const reviews = [
    {
      name: "R.A.P",
      reviewText:
        "“Suelen excelente profissional, muito prestativa, calma, um amor de pessoa, está me ajudando muito, só tenho que agradecer.”",
      stars: 5,
    },
    {
      name: "C.L.A",
      reviewText:
        "“Suelen é uma psicóloga muito atenciosa e dinâmica, possuindo tato para aplicar as técnicas da Terapia Cognitivo Comportamental de acordo com o perfil do paciente, deixando a sessão leve e harmônica. Pessoalmente, tenho uma história de anos com ela e a mesma sempre soube conduzir de maneira tranquila e ética toda a situação comigo, o que colaborou para o desenvolvimento do meu processo terapêutico!”",
      stars: 5,
    },
    {
      name: "A.C.T",
      reviewText:
        "“Uma profissional incrível! Minha experiência com a Suelen tem sido maravilhosa. Ela é atenciosa, acolhedora, muito ética e sempre me faz sentir ouvida e respeitada. As sessões são transformadoras e me ajudaram a evoluir emocionalmente de uma forma que eu nem imaginava. Recomendo de coração!”",
      stars: 5,
    },
    {
      name: "C.C",
      reviewText:
        "“A Dr.Suelen é uma profissional incrível! Atenciosa, dedicada, sempre pronta para nos ouvir e nos direcionar, que não mede esforços, estratégias e conhecimento para ajudar. Estou muito satisfeita e grata a Deus por ter colocado essa pessoa maravilhosa em nossas vidas. Nos ajudando a vencer a cada dia de uma forma mais leve e feliz.”",
      stars: 5,
    },
    {
      name: "J.G",
      reviewText:
        "“Excelente profissional, super atenciosa e acolhedora! Minha experiência tem sido a melhor, as sessões com a Suelen me ajudaram muito em todas as áreas da minha vida.”",
      stars: 5,
    },
    {
      name: "B.G",
      reviewText:
        "“Atendimento direcionado, acolhedor e profissional que fez e faz toda diferença! O mundo precisa de mais psicólogos dedicados assim!”",
      stars: 5,
    },
    {
      name: "Q.B",
      reviewText:
        "“Suelen é uma excelente profissional! Tem me ajudado muito no meu processo de autoconhecimento e também na minha organização pessoal. É uma pessoa paciente, acolhedora e consegue explicar com clareza e eloquência os processos da TCC. Além de ser extremamente organizada, ela também fornece materiais de apoio, como planilhas e tarefas semanais, o que me ajuda a manter o foco e a sentir que há um propósito claro em cada etapa do nosso trabalho. Sua escuta humana e sensível faz toda a diferença no meu acompanhamento terapêutico.”",
      stars: 5,
    },
    {
      name: "B.T",
      reviewText:
        "“Quero deixar aqui meu agradecimento. Esse processo tem feito muita diferença na minha vida. A cada sessão percebo o quanto venho evoluindo, entendendo mais sobre mim e sobre as situações do dia a dia. Tenho aprendido a olhar as coisas de forma mais leve, mais clara e a mudar pensamentos e atitudes que antes me faziam mal. Coisas que eu nem percebia antes, hoje fazem total sentido. Sou muito grata por tudo que estou vivendo e aprendendo nesse processo, que tem sido muito especial pra mim.”",
      stars: 5,
    },
    {
      name: "A.C.C",
      reviewText:
        "“Só tenho gratidão a melhor psicóloga da minha vida, me ajudou muito, é maravilhosa e a terapia cognitiva comportamental é vida, recomendo a todos que precisarem fazer terapia fazer com a Suelen Muzzy.”",
      stars: 5,
    },
    {
      name: "E.B",
      reviewText:
        "“Excelente profissional! Suelen demonstra carinho e atenção com seus atendimentos, sempre trazendo uma abordagem humanizada. Além disso, compreende e acolhe cada necessidade abordada, o que reflete em sua dedicação e sensibilidade profissional.”",
      stars: 5,
    },
    {
      name: "G.C",
      reviewText:
        "“Eu aprendo algo novo em toda sessão. Quando saio dos atendimentos, tenho uma sensação de liberdade, pois com muita paciência ela me ensina a entender os meus comportamentos, a questionar os meus pensamentos, a realmente sair de uma prisão que a gente só consegue com ajuda de uma profissional como ela. Ela faz isso de uma forma muito didática e leve. O seu grande diferencial é que ela não vai apenas te ouvir, não é um lugar que você vai para desabafar e tudo continuará como antes. Pelo contrário, tem muita intervenção, tem muita aprendizagem e muitas mudanças. Sou muito grata!”",
      stars: 5,
    },
    {
      name: "E.I",
      reviewText:
        "“Uma excelente profissional, tem me ajudado muito. Pela primeira vez estou vendo uma evolução na minha vida. Ela é pontual, sempre disposta a nos ajudar. Sou muito grata!”",
      stars: 5,
    },
    {
      name: "J.A",
      reviewText:
        "“Suelen tem sido meu apoio em todos os pilares da vida. Ela tem feito um trabalho de excelência, me trazendo clareza e conforto nas decisões. As técnicas são incríveis! Eu já passei por psicólogos e psicanalistas, mas ela eu não troco por nada!”",
      stars: 5,
    },
    {
      name: "E.R",
      reviewText:
        "“Pra mim, foi, e continua sendo muito bom e satisfatório ser paciente da Dra Suelen, ela consegue trabalhar de uma maneira diferente e especial, que faz com que eu consiga enxergar e entender o que se passa com o meu emocional e assim estou conseguindo tomar controle da minha vida, sem sentir culpa, e ser eu mesma. Pra mim, ela é uma das melhores psicólogas que já consultei. Muito obrigada Dra. Suelen, parabéns pelo seu ótimo trabalho.”",
      stars: 5,
    },
    {
      name: "A.F",
      reviewText:
        "“Excelente profissional com um vasto conhecimento e experiência. Me senti muito acolhida desde o primeiro contato. Já tive experiência com outros profissionais, e pela primeira vez estou a mais de um ano em consulta sem desistir, além de enxergar um grande progresso no meu processo. Recomendo muito e agradeço a Suelen por toda a ajuda.”",
      stars: 5,
    },
  ];

  return (
    <S.Wrapper id="patient-reviews">
      <S.Title>Avaliação dos nossos pacientes</S.Title>
      <S.ReviewWrapper>
        {reviews.map((item, index) => (
          <S.Review key={index}>
            <FaQuoteLeft color="#8C7E74" />
            <S.Name>{item.name}</S.Name>
            <S.Text>{item.reviewText}</S.Text>
            <S.Stars>
              {Array(item.stars)
                .fill(0)
                .map((_, index) => (
                  <FaStar key={index} color="#D3B379" />
                ))}
            </S.Stars>
            <FaQuoteRight color="#8C7E74" />
            <Divider
              orientation="horizontal"
              width={"75%"}
              margin={"12px auto"}
            />
          </S.Review>
        ))}
        <ScheduleButton />
      </S.ReviewWrapper>
    </S.Wrapper>
  );
}

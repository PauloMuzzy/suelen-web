import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon } from "@chakra-ui/react";
import * as S from "./styles";

interface AccordionItemProps {
  title: string;
  content: string;
}

function AccordionList({ items }: { items: AccordionItemProps[] }) {
  return (
    <Accordion allowMultiple
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'fit-content',
        gap: '16px',
      }}
    >
      {items.map((item, index) => (
        <AccordionItem key={index}
          style={{
            width: '100%',
          }}
        >
          <h2>
            <AccordionButton 
              style={{
                background: '#D7B5AE',
                color: '#010E21',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: 'normal',
                width: '100%',
                height: '48px',
                borderRadius: '24px 24px 24px 0px',
                boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
              }}
              >
              <Box as="span" flex="1" textAlign="left">
                {item.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}
            style={{
              background: 'transparent',
              color: '#000',
              fontWeight: '400',
              fontStyle: 'normal',
              fontSize: '14px',
              lineHeight: 'normal',
              width: '100%',
              height: 'fit-content',
            }}
          >
            {item.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function FrequentlyQuestions() {
  const data: AccordionItemProps[] = [
    { title: "Section 1 title", content: "Lorem ipsum dolor sit amet..." },
    { title: "Section 2 title", content: "Lorem ipsum dolor sit amet..." },
  ];

  return (
    <S.Wrapper>
      <S.Title>Dúvidas frequentes</S.Title>
      <S.Text>As principais dúvidas relacionadas à consulta, agendamento e muito mais.</S.Text>
      <AccordionList items={data} />
    </S.Wrapper>
  );
}
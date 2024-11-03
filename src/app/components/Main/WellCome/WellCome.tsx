'use client';
import perfil from "@/app/assets/images/perfil.jpeg";
import { Button } from '@chakra-ui/react';
import * as S from './styles';

export default function WellCome() {
  return (
    <S.Wrapper>
      <S.ImageStyled src={perfil} alt='Dan Abramov' />
      <S.Title>Bem - vindo!</S.Title>
      <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nibh tellus, in mollis nunc consectetur sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</S.Text>
      <S.ButtonWrapper>
        <Button
          style={{
            background: '#D7B5AE',
            color: '#010E21',
            fontWeight: '400',
            fontStyle: 'normal',
            fontSize: '16px',
            lineHeight: 'normal',
            width: 'auto',
            height: '48px',
            borderRadius: '100px 100px 100px 0',
            boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
            padding: '16px',
          }}
        >
          Quero agendar uma consulta
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
import Image from 'next/image';
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 48px 24px 24px 24px;
  gap: 22px;
  background-color: #B49D8B;
`

export const Title = styled.h1`
  color: #010E21;
  text-align: center;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  gap: 48px;
`

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  gap: 8px;
`

export const TextService = styled.p`
  color: #010E21;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const ServiceImage = styled(Image)`
  max-width: 160px;
  max-height: 160px;
  width: 100%;
  height: 160px; /* Garante a altura definida */
  object-fit: cover; /* Corta e ajusta a imagem para cobrir todo o espaço */
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden; /* Garante que o conteúdo extra seja escondido */
  display: block;
  cursor: pointer;

  &hover {
    max-width: 170px;
    max-height: 170px;
    width: 100%;
    height: 170px; 
  }
`
import Image from 'next/image';
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  gap: 16px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "title image"
      "text image"
      "button image";
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto auto auto;
    grid-row-gap: 32px;
    grid-column-gap: 16px;
    padding: 32px 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 400px;
    max-width: 1024px;
  }
`

export const ImageStyled = styled(Image)`
  max-width: 240px;
  width: 100%;
  border-radius: 0 148px 0 148px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    grid-area: image;
    margin: auto;
  }

  @media (min-width: 1024px) {
    max-width: 400px;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color : #8C7E74;

  @media (min-width: 768px) {
    grid-area: title;
    font-size: 36px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`

export const Text = styled.p`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 768px) {
    grid-area: text;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    padding: 0 32px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  justify-content: center;

  @media (min-width: 768px) {
    grid-area: button;
  }
`
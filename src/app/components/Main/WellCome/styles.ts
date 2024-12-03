import background from "@/app/assets/svgs/background.svg";
import Image from 'next/image';
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  background-image: url(${background.src});
  padding: 80px 24px 24px 24px;
  gap: 16px;

  /* @media screen and (min-width: 768px) {
    background-color: red;
  }*/
`

export const ImageStyled = styled(Image)`
  max-width: 240px;
  width: 100%;
  border-radius: 0 148px 0 148px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Title = styled.h1`
  color: #010E21;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const Text = styled.p`
  color: #010E21;
  text-align: justify;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
`
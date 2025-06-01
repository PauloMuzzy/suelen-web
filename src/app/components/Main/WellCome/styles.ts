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

  @media screen and (min-width: 768px) {
    padding: 80px 24px 24px 24px;
  }
`

export const ImageStyled = styled(Image)`
  max-width: 240px;
  width: 100%;
  border-radius: 0 148px 0 148px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

export const Title = styled.h1`
  
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const Text = styled.p`
  text-align: center;
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
  justify-content: center;
`
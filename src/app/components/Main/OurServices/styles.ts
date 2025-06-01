import Image from 'next/image';
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  border-radius: 32px;
  gap: 16px;

    @media (min-width: 1024px) {
     max-width: 1024px;
  }
`

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color : #8C7E74;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`

export const Text = styled.p`
  text-align: justify;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  border-radius:  32px;
  padding: 32px 24px;
  gap: 24px;
  background-color: rgba(180, 157, 139, 0.15);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    @media (min-width: 1024px) {
     padding: 48px 32px;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  gap: 16px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: 32px;
    grid-column-gap: 32px;
  }


`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  background-color: #edeae6;
  padding: 0px;
  border-radius: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
` 

export const CardImage = styled(Image)`
  max-height: 160px;
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 32px 32px 0 0;
  opacity: 0.75;
`

export const CardTitle = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding:  32px;
`

export const CardText = styled.p`
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 32px 32px 32px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  justify-content: center;
`
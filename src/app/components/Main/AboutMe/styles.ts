import styled from "styled-components";
import Image from 'next/image';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  border-radius:  32px;
`

export const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  border-radius:  32px;
  padding: 32px 24px;
  gap: 16px;
  background-color: rgba(180, 157, 139, 0.15);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
    "subtitle image"
    "text image"
    "button image";
    grid-template-columns: 1fr 240px;
    grid-template-rows: auto auto auto;
    grid-row-gap: 24px;
    grid-column-gap: 24px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 400px;
    max-width: 1024px;
    padding: 48px 32px;
  }
`

export const ImageStyled = styled(Image)`
  width: 240px;
  height: 360px;
  border-radius: 0 148px 0 148px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  object-fit: cover;

  @media (min-width: 768px) {
    grid-area: image;
    margin: 0 0 auto 0;
  }

  @media (min-width: 1024px) {
    width: 400px;
    height: 600px;
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
    grid-area: title;
    font-size: 36px;
  }
`

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin-bottom: auto;

  @media (min-width: 768px) {
    display: subtitle;
  }
`

export const Name = styled.p`
  width: 100%;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const CRP = styled.p`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const Text = styled.p`
  width: 100%;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  @media (min-width: 768px) {
    grid-area: text;
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
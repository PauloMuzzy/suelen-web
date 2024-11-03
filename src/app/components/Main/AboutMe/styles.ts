import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 48px 24px 24px 24px;
  background-color: #B49D8B;
  gap: 20px;

  /* @media screen and (min-width: 768px) {
    background-color: red;
  }*/
`

export const Title = styled.h1`
  width: 100%;
  color: #010E21;
  font-family: Merriweather;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
`

export const Name = styled.p`
  width: 100%;
  color: #010E21;
  font-family: Arsenal;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
`

export const CRP = styled.p`
  width: 100%;
  color: #010E21;
  font-family: Arsenal;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
`

export const Text = styled.p`
  width: 100%;
  color: #010E21;
  text-align: justify;
  font-family: Arsenal;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  justify-content: start;
`
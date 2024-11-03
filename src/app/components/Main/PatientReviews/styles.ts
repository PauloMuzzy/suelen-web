import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding: 48px 24px 24px 24px;
  gap: 22px;
  display: grid;
  grid-template-areas:
    "title"
    "reviewWrapper"
  ;
`

export const Title = styled.h1`
  color: #010E21;
  font-family: Merriweather;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  gap: 8px;
`

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: fit-content;
  gap: 8px;
`

export const Name = styled.h3`
  width: 100%;
  height: fit-content;
  color: #010E21;
  font-family: Arsenal;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const Text = styled.p`
  width: 100%;
  height: fit-content;
  color: #010E21;
  font-family: Arsenal;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const Stars = styled.div`
  display: flex;
  gap: 4px;
`
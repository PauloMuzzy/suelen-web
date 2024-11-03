import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 48px 24px 24px 24px;
  gap: 16px;
`

export const Title = styled.h1`
  width: 100%;
  color: #010E21;
  font-family: Merriweather;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
`

export const Text = styled.p`
  color: #010E21;
  text-align: justify;
  font-family: Arsenal;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  gap: 8px;
  color: #010E21;
  font-family: Arsenal;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
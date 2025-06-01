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

export const ImageStyled = styled(Image)`
  width: 240px;
  height: 360px;
  border-radius: 0 148px 0 148px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  object-fit: cover;
`

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
  background-color: rgba(180, 157, 139, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin-bottom: auto;
`

export const Name = styled.p`
  width: 100%;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`

export const CRP = styled.p`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`

export const Text = styled.p`
  width: 100%;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  justify-content: center;
`
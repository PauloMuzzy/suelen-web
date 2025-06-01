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
`

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const Text = styled.p`
  text-align: justify;
  font-size: 14px;
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
  border-radius:  32px;
  padding: 32px 24px;
  gap: 16px;
  background-color: rgba(180, 157, 139, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  justify-content: center;
`
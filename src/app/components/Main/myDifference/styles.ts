import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
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

export const DifferenceWrapper = styled.div`
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

  @media (min-width: 1024px) {
    padding: 48px 32px;
  }
`

export const DifferenceTitle = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const DifferenceText = styled.p`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (min-width: 1024px) {
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
`
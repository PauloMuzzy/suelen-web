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

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  border-radius:  32px;
  padding: 32px 24px;
  background-color: rgba(180, 157, 139, 0.15);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  @media (min-width: 1024px) {
    padding: 48px 32px;
    button {
        margin-top : 32px;
    }
  }
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
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`

export const Text = styled.p`
  width: 100%;
  height: fit-content;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`

export const Stars = styled.div`
  display: flex;
  gap: 4px;
`
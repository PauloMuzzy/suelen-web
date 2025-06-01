import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
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

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  border-radius:  32px;
  padding: 32px 24px;
  background-color: rgba(180, 157, 139, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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
`

export const Text = styled.p`
  width: 100%;
  height: fit-content;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const Stars = styled.div`
  display: flex;
  gap: 4px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  justify-content: center;
`
import styled from "styled-components";
import background from '@/app/assets/svgs/background.svg'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  background-color: #edeae6;
  padding: 80px 16px 32px 16px;
  gap: 64px;
  background-image: url(${background.src});
  background-size: 1920px auto;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    padding: 96px 32px 32px 32px;
    background-image: none;
  }

  @media (min-width: 1024px) {
    gap: 128px;
    background-image: url(${background.src});
  }
`
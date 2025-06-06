import styled from "styled-components"

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  background: #8C7E74;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 0 0 0 24px;
  position: fixed;
  z-index: 9999;

  @media (min-width: 768px) {
    height: 56px;
  }

  @media (min-width: 1024px) {
    height: 64px;
  }
`
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
        font-size: 36px;
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

    @media (min-width: 1024px) {
        font-size: 36px;
    }
`

export const HowWeWorkWrapper = styled.div`
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

export const Step = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    gap: 16px;
`

export const StepButton = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(180, 157, 139, 0.5);
    font-size: 24px;
    font-weight: 500;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

export const StepTitle = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const StepText = styled.p`
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`
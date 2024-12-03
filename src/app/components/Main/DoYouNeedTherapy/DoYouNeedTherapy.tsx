"use client";
import { CheckIcon } from "@chakra-ui/icons";
import * as S from "./styles";

export default function DoYouNeedTherapy() {
  const list = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Vestibulum sagittis nibh tellus, in mollis nunc consectetur sed.",
    "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    "Etiam eros nisl, imperdiet id elementum suscipit, blandit ut sem.",
    "Quisque convallis mattis nunc, sit amet dictum nibh finibus id.",
  ];
  return (
    <S.Wrapper>
      <S.Title>Você precisa de terapia?</S.Title>
      <S.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        sagittis nibh tellus, in mollis nunc consectetur sed. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Etiam eros nisl, imperdiet id elementum suscipit, blandit ut
        sem. Quisque convallis mattis nunc, sit amet dictum nibh finibus id.
        Mauris imperdiet diam nunc, ac sagittis lectus vehicula mattis. Sed eget
        massa at nunc dignissim congue. Vivamus sit amet vulputate nunc. Morbi
        commodo congue enim id sagittis. Nullam et sagittis augue. Aliquam
        auctor ultrices lectus ut tempus.
      </S.Text>
      <S.List>
        {list.map((item, index) => (
          <S.Item key={index}>
            <CheckIcon color="#D7B5AE" />
            {item}
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
}

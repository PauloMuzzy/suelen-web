'use client'

import { Divider } from '@chakra-ui/react';
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa6";
import * as S from './styles';
export default function PatientReviews() {

  const reviews = [
    {
      name: 'J.P',
      reviewText: '“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce mollis odio in massa mollis, nec vulputate nunc imperdiet. Morbi ullamcorper consectetur semper. Duis suscipit mauris neque, a blandit nisi blandit nec. Integer quis egestas velit, sed interdum risus.Morbi et ultrices diam. Aliquam sollicitudin dui aliquam malesuada laoreet. ”',
      stars: 5
    },
    {
      name: 'A.C',
      reviewText: '“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce mollis odio in massa mollis, nec vulputate nunc imperdiet. Morbi ullamcorper consectetur semper. Duis suscipit mauris neque, a blandit nisi blandit nec. Integer quis egestas velit, sed interdum risus.Morbi et ultrices diam. Aliquam sollicitudin dui aliquam malesuada laoreet. ”',
      stars: 5
    }
  ]

  return (
    <S.Wrapper>
      <S.Title>Avaliação dos nossos pacientes</S.Title>
      <S.ReviewWrapper>
        {reviews.map((item, index) => (
          <S.Review key={index}>
            <FaQuoteLeft color="#8C7E74" />
            <S.Name>{item.name}</S.Name>
            <S.Text>{item.reviewText}</S.Text>
            <S.Stars>
              {Array(item.stars).fill(0).map((_, index) => <FaStar key={index} color="#D3B379" />)}
            </S.Stars>
            <FaQuoteRight color="#8C7E74" />
            {index !== reviews.length - 1 && <Divider />}
          </S.Review>
        ))}
      </S.ReviewWrapper>
    </S.Wrapper>
  )
}
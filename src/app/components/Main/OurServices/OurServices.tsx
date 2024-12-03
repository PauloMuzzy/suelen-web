"use client";
import img1 from "@/app/assets/images/img1.jpg";
import img2 from "@/app/assets/images/img2.jpg";
import img3 from "@/app/assets/images/img3.jpg";
import img4 from "@/app/assets/images/img4.jpg";
import img5 from "@/app/assets/images/img5.jpg";
import * as S from "./styles";

export default function OurServices() {
  const list = [
    {
      image: img1,
      textService: "Loren ipsum",
    },
    {
      image: img2,
      textService: "Loren ipsum",
    },
    {
      image: img3,
      textService: "Loren ipsum",
    },
    {
      image: img4,
      textService: "Loren ipsum",
    },
    {
      image: img5,
      textService: "Loren ipsum",
    },
  ];

  return (
    <S.Wrapper>
      <S.Title>Nossos serviços</S.Title>
      <S.ServiceWrapper>
        {list.map((item, index) => (
          <S.ServiceItem key={index}>
            <S.ServiceImage src={item.image} alt="Dan Abramov" />
            <S.TextService>{item.textService}</S.TextService>
          </S.ServiceItem>
        ))}
      </S.ServiceWrapper>
    </S.Wrapper>
  );
}

'use client'
import logo from '@/app/assets/svgs/logo.svg';
import Dropdown from '@/app/components/Header/Dropdown/Dropdown';
import Image from 'next/image';
import * as S from './styles';

export default function Header() {
  return (
    <S.Wrapper>
      <Image src={logo} alt="logo" width={116} height={100} />
      <Dropdown />
    </S.Wrapper>
  );
}
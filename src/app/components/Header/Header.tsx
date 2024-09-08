'use client'
import Dropdown from '@/app/components/Header/Dropdown/Dropdown';
import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      header
      <Dropdown />
    </S.Container>
  );
}
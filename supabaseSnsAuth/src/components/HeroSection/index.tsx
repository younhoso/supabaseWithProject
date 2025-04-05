import React from 'react';

import Image from 'next/image';

import AutoSizeImage from '@/components/AutoSizeImage';

import { HeroSectionStyled } from './styled';

const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <AutoSizeImage>
        <Image src="/hero-section.jpg" alt="Hero background" fill />
      </AutoSizeImage>
      <div className="">
        Nextjs + Supabase + Cursor AI를 조합한 풀스택 개발 코스
        <div className="">당신이 AI 툴과 함께 원하는 아이디어를 직접 만들어보세요.</div>
        <div className="">
          <div className="">34% OFF</div>
          <span className="">150,000</span>
        </div>
        <div className="">자세히 보기</div>
      </div>
    </HeroSectionStyled>
  );
};

export default HeroSection;

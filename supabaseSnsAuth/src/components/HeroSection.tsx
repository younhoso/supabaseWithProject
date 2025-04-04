import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden border-0">
      <Image
        src="/hero-section.jpg"
        alt="Hero background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        Nextjs + Supabase + Cursor AI를 조합한 풀스택 개발 코스
        <div className="text-lg md:text-xl mb-6 text-center max-w-2xl text-gray-200">
          당신이 AI 툴과 함께 원하는 아이디어를 직접 만들어보세요.
        </div>
        <div className="flex items-center gap-2">
          <div className="text-lg">34% OFF</div>
          <span className="line-through text-gray-400">150,000</span>
        </div>
        <button className="bg-primary hover:bg-primary/90 mt-4">
          자세히 보기
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

'use client';

import HeroSection from '@/components/HeroSection';
import KakaoLoginButton from '@/components/KakaoLoginButton';
import NavigationTabs from '@/components/NavigationTabs';
import UserProfile from '@/components/UserProfile';

import CourseDetails from '../../constants/CourseDetails';

export default function Home() {
  return (
    <main className="flex flex-col gap-2 lg:gap-8 row-start-2 items-center w-full lg:max-w-3xl mx-auto lg:px-8 px-2 pt-2">
      <UserProfile />
      <div className="sticky top-0 z-10 bg-white w-full">
        <NavigationTabs />
      </div>

      {/* 히어로 섹션 */}
      <HeroSection />
      {/* Kakao Login Button */}
      <div className="mt-4">
        <KakaoLoginButton />
      </div>

      {/* 상세 내용 섹션 */}
      <div className="w-full lg:max-w-3xl mx-auto mt-8">
        <CourseDetails />
      </div>
    </main>
  );
}

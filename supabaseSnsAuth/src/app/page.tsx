"use client";
import NavigationTabs from "@/components/NavigationTabs";
import HeroSection from "@/components/HeroSection";
import CourseDetails from "../../constants/CourseDetails";
import KakaoLoginButton from "@/components/KakaoLoginButton";
import UserProfile from "@/components/UserProfile";

export default function Home() {
  return (
    <main className="">
      <UserProfile />
      <div className="">
        <NavigationTabs />
      </div>

      {/* 히어로 섹션 */}
      {/* <HeroSection /> */}
      {/* Kakao Login Button */}
      <div className="">
        <KakaoLoginButton />
      </div>

      {/* 상세 내용 섹션 */}
      <div className="">
        <CourseDetails />
      </div>
    </main>
  );
}

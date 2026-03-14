import classNames from "classnames";
import { InferGetStaticPropsType } from "next";
import React, { useEffect, useRef, useState } from "react";

import SectionCode from "@/components/SectionCode";
import SectionDivination from "@/components/SectionDivination";
import SectionGame from "@/components/SectionGame";
import SectionIdentity from "@/components/SectionIdentity";
import SectionIntroduction from "@/components/SectionIntroduction";
import SectionLocation from "@/components/SectionLocation";
import SectionMe from "@/components/SectionMe";
import SectionOccupation from "@/components/SectionOccupation";
import SectionPersonality from "@/components/SectionPersonality";
import SectionPicture from "@/components/SectionPicture";
import SectionWord from "@/components/SectionWord";
import useAsyncEffect from "@/hooks/useAsyncEffect";
import { fetchChickenSoup } from "@/lib/backend";
import { getRoutePrefix } from "@/utils/route";

/**
 * 关于自己
 *
 * @returns
 */
export default function Index({
  chickenSoup,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // 是否模糊Banner图片
  const [blurBanner, setBlurBanner] = useState<boolean>(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useAsyncEffect(async () => {
    let observer: IntersectionObserver;

    if (typeof window !== "undefined") {
      // 客户端特有的逻辑
      async function getTitleBoundingClientRect(): Promise<DOMRect | null> {
        return new Promise((resolve) => {
          function loopGetBoundingClientRect() {
            // 添加空值检查
            if (!titleRef.current) {
              setTimeout(loopGetBoundingClientRect, 500);
              return;
            }

            const titleRect = titleRef.current.getBoundingClientRect();
            const titleTop = titleRect.top;

            if (titleTop > 0) {
              resolve(titleRect);
              return;
            }

            setTimeout(loopGetBoundingClientRect, 500);
          }

          // 动画展开有3秒；在这个过程中字体会挤压，高度会变大，延迟3秒
          setTimeout(loopGetBoundingClientRect, 3000);
        });
      }

      const titleRect = await getTitleBoundingClientRect();

      // 如果获取不到 titleRect，直接返回
      if (!titleRect) {
        return;
      }

      const titleHeight = titleRect.height;
      const titleTop = titleRect.top;

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.boundingClientRect.top <= titleHeight + titleTop + 30) {
              setBlurBanner(true);
            } else {
              setBlurBanner(false);
            }
          }
        },
        {
          threshold: Array.from({ length: 21 }, (_, index) => 0.05 * index),
        }
      );

      // 添加空值检查
      if (contentRef.current) {
        observer.observe(contentRef.current);
      }
    }

    return () => {
      observer && observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-dark-bg text-white/80">
      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-1/2 -top-1/2 h-full w-full animate-blob bg-gradient-conic from-accent-cyan/20 via-transparent to-accent-purple/20 opacity-30" />
        <div className="animation-delay-2000 absolute -bottom-1/2 -right-1/2 h-full w-full animate-blob bg-gradient-conic from-accent-pink/20 via-transparent to-accent-cyan/20 opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-accent-purple/10 to-transparent opacity-50" />
      </div>

      {/* Banner with glass effect */}
      <header
        className={classNames(
          "fixed inset-0 z-10 flex items-center justify-center px-[48px]",
          "transition-all duration-700 ease-out",
          {
            "scale-105 blur-[3px] brightness-50": blurBanner,
          }
        )}
      >
        {/* Banner background image with overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${getRoutePrefix()}/images/index/banner.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Floating decorative orbs */}
        <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-float rounded-full bg-accent-cyan/20 blur-[100px]" />
        <div className="animation-delay-2000 absolute bottom-1/4 right-1/4 h-80 w-80 animate-float rounded-full bg-accent-purple/20 blur-[120px]" />

        <h2
          className={classNames(
            "relative z-20 max-w-3xl text-center",
            "font-[about-title] text-3xl md:text-4xl lg:text-5xl",
            "leading-relaxed text-white/90",
            "transition-all duration-700",
            "drop-shadow-lg"
          )}
        >
          <span className="gradient-text">
            “在这个瞬息万变的世界里，能够与你相遇，是我最美好的幸运。”
          </span>
        </h2>
      </header>

      {/* Main content */}
      <div className="relative z-20 mx-auto mt-[85vh] w-full max-w-[1920px] px-[24px] pb-[64px] md:px-[48px]">
        <div className="flex flex-wrap gap-[24px]" ref={contentRef}>
          {/* 简介: 带有渐变背景色的盒子 - 保留原有动效 */}
          <div className="gradient-card group flex min-h-[260px] w-full cursor-pointer flex-col content-between justify-between gap-[24px] rounded-2xl p-[24px] md:w-[calc(33.33%-16px)]">
            <SectionMe />
          </div>

          {/* 玄学: 薄荷绿渐变卡片 */}
          <div className="gradient-card-mint group flex min-h-[260px] w-full cursor-pointer flex-col content-between justify-between gap-[24px] rounded-2xl p-[24px] md:w-[calc(33.33%-16px)]">
            <SectionDivination />
          </div>

          {/* 身份: 柠檬黄渐变卡片 */}
          <div className="gradient-card-yellow group flex min-h-[260px] w-full cursor-pointer flex-col content-between justify-between gap-[24px] rounded-2xl p-[24px] md:w-[calc(33.33%-16px)]">
            <SectionIdentity />
          </div>

          {/* 事业: 红色渐变卡片 - 红红火火 */}
          <div className="gradient-card-red group flex min-h-[260px] w-full cursor-pointer flex-col content-between justify-between gap-[24px] rounded-2xl p-[24px] md:w-[calc(33.33%-12px)]">
            <SectionOccupation />
          </div>

          {/* 休闲: 毛玻璃卡片 - 更宽 */}
          <div className="glass-card card-shine group relative flex min-h-[260px] w-full cursor-pointer flex-col content-between justify-between overflow-hidden rounded-2xl p-[24px] transition-all duration-300 hover:scale-[1.02] md:w-[calc(66.66%-16px)]">
            <SectionGame />
          </div>

          {/* 技术栈: 毛玻璃卡片 */}
          <div className="glass-card card-shine group relative flex min-h-[260px] w-full cursor-pointer flex-col content-between justify-between gap-[24px] rounded-2xl p-[24px] transition-all duration-300 hover:scale-[1.02]">
            <SectionCode />
          </div>

          {/* 简介: 毛玻璃卡片 */}
          <div className="glass-card card-shine group relative flex min-h-[260px] w-full cursor-pointer flex-col content-between justify-between gap-[24px] rounded-2xl p-[24px] transition-all duration-300 hover:scale-[1.02]">
            <SectionIntroduction />
          </div>

          {/* 性格测试: 毛玻璃卡片 */}
          <div className="glass-card card-shine group relative flex min-h-[260px] w-full cursor-pointer flex-col content-between justify-between gap-[24px] rounded-2xl p-[24px] transition-all duration-300 hover:scale-[1.02]">
            <SectionPersonality />
          </div>

          {/* 每日毒鸡汤: 毛玻璃卡片 */}
          <div className="glass-card card-shine flex min-h-[260px] w-full cursor-pointer flex-col content-between justify-between gap-[24px] rounded-2xl p-[24px] transition-all duration-300 hover:scale-[1.02] md:w-[calc(50%-12px)]">
            <SectionWord chickenSoup={chickenSoup} />
          </div>

          {/* 每日一图: 毛玻璃卡片 */}
          <div className="glass-card card-shine group relative flex min-h-[260px] w-full cursor-pointer flex-col content-between justify-between gap-[24px] rounded-2xl p-[24px] transition-all duration-300 hover:scale-[1.02] md:w-[calc(50%-12px)]">
            <SectionPicture />
          </div>

          {/* 位置: 毛玻璃卡片 - 更大 */}
          <div className="glass-card china-map-wrapper group relative flex min-h-[340px] w-full cursor-pointer flex-col content-between justify-between gap-[24px] rounded-2xl p-[24px] transition-all duration-300 hover:scale-[1.02]">
            <SectionLocation />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const content = await fetchChickenSoup();

  return {
    props: {
      chickenSoup: content,
    },
  };
}

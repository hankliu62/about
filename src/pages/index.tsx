import AOS from "aos";
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
  // useLazyLoadAnimate(".info-card", "fadeInUp");
  // 是否模糊Banner图片
  const [blurBanner, setBlurBanner] = useState<boolean>(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useAsyncEffect(async () => {
    let observer: IntersectionObserver;

    if (typeof window !== "undefined") {
      // 客户端特有的逻辑
      async function getTitleBoundingClientRect(): Promise<DOMRect> {
        return new Promise((resolve) => {
          function loopGetBoundingClientRect() {
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

      observer.observe(contentRef.current);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative w-full bg-black text-white/75">
      <header
        className={classNames(
          "fixed inset-0 mx-auto flex h-[100vh] w-[100vw] animate-[about-banner_3s_cubic-bezier(.6,_.2,_.25,_1),_about-opacity_1.5s_cubic-bezier(.6,_.2,_.25,_1)] px-[48px] transition-all",
          {
            "scale-[1.12] blur-[10px] brightness-75": blurBanner,
          }
        )}
      >
        <div
          className="absolute left-0 top-0 z-0 h-full w-full bg-[#4d5e8f] bg-current bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${getRoutePrefix()}/images/index/banner.jpg)`,
          }}
        ></div>
        <h2 className="text-shadow-[0_1px_5px_rgb(0_0_0_/_30%)] relative z-10 flex w-[472px] animate-[about-opacity_1.5s_cubic-bezier(.6,_.2,_.25,_1)_3s_backwards] items-center justify-center font-[about-title] text-[34px] font-normal text-white/70  mix-blend-color-dodge">
          <p ref={titleRef}>
            “在这个瞬息万变的世界里，能够与你相遇，是我最美好的幸运。”
          </p>
        </h2>
      </header>

      <div className="relative z-20 mx-auto mt-[92vh] w-full max-w-[1920px] px-[24px] pb-[64px] md:px-[48px]">
        <div className="flex flex-wrap gap-[24px]" ref={contentRef}>
          {/* 简介: 带有渐变背景色的盒子 */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card flex min-h-[240px] w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] bg-gradient-to-br from-[rgb(255_255_255_/_10%)] to-[rgb(77_224_238_/_50%)] bg-[length:200%_200%] bg-center p-[24px] shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_10%)] !transition-[all,box-shadow,opacity,transform] !duration-[1s,0.5s,0.5s,0.5s] ease-in hover:bg-[200%_200%] hover:shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_3%),_0_0_0_2px_rgb(255_255_255_/_40%)] md:w-[calc(33.33%-16px)]"
          >
            <SectionMe />
          </div>

          {/* 玄学: 不带有渐变背景色的盒子 */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card flex min-h-[240px] w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] bg-gradient-to-br from-[rgb(255_255_255_/_10%)] to-[rgb(255_255_255_/_10%)] bg-[length:200%_200%] bg-center p-[24px] shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_10%)] transition-[all,box-shadow] duration-[1s,0.5s] ease-in hover:bg-[200%_200%] hover:shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_3%),_0_0_0_2px_rgb(255_255_255_/_40%)] md:w-[calc(33.33%-16px)]"
          >
            <SectionDivination />
          </div>

          {/* 身份: 带有渐变背景色的盒子 */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card flex min-h-[240px] w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] bg-gradient-to-br from-[rgb(255_255_255_/_10%)] to-[rgb(77_224_238_/_50%)] bg-[length:200%_200%] bg-center p-[24px] shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_10%)] !transition-[all,box-shadow,opacity,transform] !duration-[1s,0.5s,0.5s,0.5s] ease-in hover:bg-[200%_200%] hover:shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_3%),_0_0_0_2px_rgb(255_255_255_/_40%)] md:w-[calc(33.33%-16px)]"
          >
            <SectionIdentity />
          </div>

          {/* 事业: 不带有渐变背景色的盒子 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card flex min-h-[240px] w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] bg-gradient-to-br from-[rgb(255_255_255_/_10%)] to-[rgb(255_255_255_/_10%)] bg-[length:200%_200%] bg-center p-[24px] shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_10%)] transition-[all,box-shadow] duration-[1s,0.5s] ease-in hover:bg-[200%_200%] hover:shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_3%),_0_0_0_2px_rgb(255_255_255_/_40%)] md:w-[calc(33.33%-12px)]"
          >
            <SectionOccupation />
          </div>

          {/* 休闲: 不带有渐变背景色的盒子 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card game-card group relative flex min-h-[240px] w-full flex-col content-between justify-between overflow-hidden rounded-[4px] bg-gradient-to-br from-[rgb(0_0_0_/_30%)] to-[rgb(0_0_0_/_30%)] bg-[length:200%_200%] bg-center p-[24px] shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_10%)] transition-[all,box-shadow] duration-[1s,0.5s] ease-in hover:bg-[200%_200%] hover:shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_3%),_0_0_0_2px_rgb(255_255_255_/_40%)] md:w-[calc(66.66%-16px)]"
          >
            <SectionGame />
          </div>

          {/* 技术栈: 不带有渐变背景色的盒子 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card group relative flex min-h-[240px] w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] bg-gradient-to-br from-[rgb(255_255_255_/_10%)] to-[rgb(255_255_255_/_10%)] bg-[length:200%_200%] bg-center p-[24px] shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_10%)] transition-[all,box-shadow] duration-[1s,0.5s] ease-in hover:bg-[200%_200%] hover:shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_3%),_0_0_0_2px_rgb(255_255_255_/_40%)]"
          >
            <SectionCode />
          </div>

          {/* 简介: 不带有渐变背景色的盒子 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card group relative flex min-h-[240px] w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] bg-[rgb(66_73_102_/_75%)] p-[24px] shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_10%)] transition-[all,box-shadow] duration-[1s,0.5s] ease-in hover:shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_3%),_0_0_0_2px_rgb(255_255_255_/_40%)]"
          >
            <SectionIntroduction />
          </div>

          {/* 性格测试: 不带有渐变背景色的盒子 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card group relative flex min-h-[240px] w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] bg-gradient-to-br from-[rgb(77_224_238_/_20%)] to-[rgb(77_224_238_/_20%)] bg-[length:200%_200%] bg-center p-[24px] shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_10%)] transition-[all,box-shadow] duration-[1s,0.5s] ease-in hover:bg-[200%_200%] hover:shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_3%),_0_0_0_2px_rgb(255_255_255_/_40%)]"
          >
            <SectionPersonality />
          </div>

          {/* 每日毒鸡汤: 不带有渐变背景色的盒子 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card flex min-h-[240px] w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] bg-gradient-to-br from-[rgb(255_255_255_/_10%)] to-[rgb(255_255_255_/_10%)] bg-[length:200%_200%] bg-center p-[24px] shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_10%)] transition-[all,box-shadow] duration-[1s,0.5s] ease-in hover:bg-[200%_200%] hover:shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_3%),_0_0_0_2px_rgb(255_255_255_/_40%)] md:w-[calc(50%-12px)]"
          >
            <SectionWord chickenSoup={chickenSoup} />
          </div>

          {/* 每日一图: 不带有渐变背景色的盒子 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card group relative flex min-h-[240px] w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] bg-gradient-to-br from-[rgb(255_255_255_/_10%)] to-[rgb(255_255_255_/_10%)] bg-[length:200%_200%] bg-center p-[24px] shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_10%)] transition-[all,box-shadow] duration-[1s,0.5s] ease-in hover:bg-[200%_200%] hover:shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_3%),_0_0_0_2px_rgb(255_255_255_/_40%)] md:w-[calc(50%-12px)]"
          >
            <SectionPicture />
          </div>

          {/* 位置: 不带有渐变背景色的盒子 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card china-map-wrapper group relative flex min-h-[320px] w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] bg-[rgb(66_73_102_/_70%)] p-[24px] shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_10%)] transition-[all,box-shadow] duration-[1s,0.5s] ease-in hover:shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_3%),_0_0_0_2px_rgb(255_255_255_/_40%)]"
          >
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

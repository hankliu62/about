import {
  EnvironmentOutlined,
  PlusCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { message } from "antd";
import AOS from "aos";
import classNames from "classnames";
import { InferGetStaticPropsType } from "next";
import router from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SVG from "react-inlinesvg";

import useAsyncEffect from "@/hooks/useAsyncEffect";
import { fetchChickenSoup } from "@/lib/backend";
import { getRoutePrefix } from "@/utils/route";

interface IMapProps {
  className?: string;
}

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

  // 随机图片
  const pictureIndex = useRef<number>((new Date().getDay() % 2) + 1);

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
    <div className="w-full text-white/75 bg-black relative">
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
            className="info-card flex min-h-[240px] w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] bg-gradient-to-br from-[rgb(255_255_255_/_10%)] to-[rgb(77_224_238_/_50%)] bg-[length:200%_200%] bg-center p-[24px] shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_10%)] transition-[all,box-shadow] duration-[1s,0.5s] ease-in hover:bg-[200%_200%] hover:shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_3%),_0_0_0_2px_rgb(255_255_255_/_40%)] md:w-[calc(33.33%-16px)]"
          >
            <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
              <div>您好</div>
              <div className="opacity-50">me</div>
            </h5>

            <div className="word-break max-w-full text-[13px]">
              关于刘小聪，是一名前端程序员、React陪伴大师、Vue使用达人、Python轻度爱好者、Golang微度使用者、Github提交达人、微信阅读神作研习生、电影观阅人、前爱奇艺会员、最佳熬夜冠军提名。其实它仅仅只是一个名字。
            </div>

            <div className="flex h-[48px] items-end justify-between gap-4">
              <a
                className="flex cursor-pointer flex-col items-center justify-between gap-2 bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat transition-all hover:bg-[length:100%_1px]"
                href="mailto:hankliu62@163.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  width={20}
                  height={20}
                  fill="currentColor"
                >
                  <path d="M188.49 259.44l305.48 268.6c10.31 9.07 25.75 9.07 36.06 0l305.48-268.6c18.92-16.63 7.16-47.81-18.02-47.81H206.52c-25.17 0-36.94 31.18-18.03 47.81z"></path>
                  <path d="M876.26 296.33l-328.2 288.58c-20.63 18.14-51.51 18.14-72.13 0L147.74 296.33c-17.64-15.53-45.34-2.99-45.34 20.5v440.92c0 30.16 24.45 54.61 54.61 54.61h709.97c30.16 0 54.61-24.45 54.61-54.61V316.84c0.01-23.5-27.69-36.02-45.33-20.51z"></path>
                </svg>
                <span className="leading-[18px]">me@163.com</span>
              </a>

              <a
                className="flex cursor-pointer flex-col items-center justify-between gap-2 bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat transition-all hover:bg-[length:100%_1px]"
                href="tencent://AddContact/?fromId=45&amp;fromSubId=1&amp;subcmd=all&amp;uin=397694072"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  width={20}
                  height={20}
                  fill="currentColor"
                >
                  <path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"></path>
                </svg>
                <span className="leading-[18px]">397694072</span>
              </a>

              <CopyToClipboard
                text="HankLxc"
                onCopy={() => message.success("复制成功")}
              >
                <a
                  className="flex cursor-pointer flex-col items-center justify-between gap-2 bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat transition-all hover:bg-[length:100%_1px]"
                  data-fancybox=""
                  data-src="#wechat"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    width={20}
                    height={20}
                    fill="currentColor"
                  >
                    <path d="M1024 659.2c0-147.2-147.2-262.4-307.2-262.4-172.8 0-307.2 115.2-307.2 262.4 0 147.2 134.4 262.4 307.2 262.4 38.4 0 70.4-6.4 108.8-19.2l102.4 51.2L896 870.4C972.8 812.8 1024 742.4 1024 659.2zM614.4 614.4c-19.2 0-38.4-19.2-38.4-38.4 0-19.2 19.2-38.4 38.4-38.4 25.6 0 44.8 19.2 44.8 38.4C659.2 595.2 646.4 614.4 614.4 614.4zM812.8 614.4c-19.2 0-38.4-19.2-38.4-38.4 0-19.2 19.2-38.4 38.4-38.4 25.6 0 44.8 19.2 44.8 38.4C864 595.2 844.8 614.4 812.8 614.4z"></path>
                    <path d="M364.8 128C166.4 128 0 262.4 0 435.2c0 102.4 51.2 179.2 147.2 243.2l-38.4 108.8 128-64c44.8 6.4 83.2 19.2 128 19.2 12.8 0 25.6 0 32 0C390.4 716.8 384 691.2 384 665.6c0-160 134.4-288 307.2-288 12.8 0 25.6 0 32 0C697.6 236.8 537.6 128 364.8 128zM243.2 371.2C217.6 371.2 192 352 192 326.4c0-25.6 25.6-44.8 57.6-44.8s44.8 19.2 44.8 44.8C288 352 268.8 371.2 243.2 371.2zM499.2 371.2c-25.6 0-57.6-19.2-57.6-44.8 0-25.6 25.6-44.8 57.6-44.8 25.6 0 44.8 19.2 44.8 44.8C544 352 524.8 371.2 499.2 371.2z"></path>
                  </svg>
                  <span className="leading-[18px]">HankLxc</span>
                </a>
              </CopyToClipboard>
            </div>
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
            <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
              <div>玄学</div>
              <div className="opacity-50">divination</div>
            </h5>

            <div className="word-break max-w-full text-[13px]">
              一个炙热的灵魂，一个旅行者，一个有极强能力热烈而赤诚的灵魂，有极高的语言能力，言之有物，善于分析决策，常常扮演咨询师的角色，能作用他人的决定。
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col justify-between gap-1">
                <div className="text-[14px]">星座</div>
                <div className="text-[18px]">双子座</div>
              </div>

              <div className="flex flex-col justify-between gap-1">
                <div className="text-[14px]">生肖</div>
                <div className="text-[18px]">猴</div>
              </div>

              <div className="flex flex-col justify-between gap-1">
                <div className="text-[14px]">生日塔罗</div>
                <div className="text-[18px]">倒悬者</div>
              </div>
            </div>
          </div>

          {/* 身份: 带有渐变背景色的盒子 */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card flex min-h-[240px] w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] bg-gradient-to-br from-[rgb(255_255_255_/_10%)] to-[rgb(77_224_238_/_50%)] bg-[length:200%_200%] bg-center p-[24px] shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_10%)] transition-[all,box-shadow] duration-[1s,0.5s] ease-in hover:bg-[200%_200%] hover:shadow-[0_5px_24px_0_hsl(0deg_0%_15%_/_3%),_0_0_0_2px_rgb(255_255_255_/_40%)] md:w-[calc(33.33%-16px)]"
          >
            <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
              <div>身份</div>
              <div className="opacity-50">identity</div>
            </h5>

            <div className="word-break max-w-full text-[13px]">
              就像是一本未完的小说，每一章节都充满了未知与转折。它不仅仅是个人在社会中的定位，更是一种情感、一种历史、一种文化的交织与碰撞。它反映了人的多重面貌，时而明亮如阳光，时而深沉如黑夜。
            </div>

            <div className="flex items-center justify-between gap-2 truncate">
              <div className="flex flex-col justify-between gap-1 truncate">
                <div className="text-[14px]">生活角色</div>
                <div className="truncate text-[18px]">父母的孩子</div>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-1 truncate md:flex-none">
                <div className="text-[14px]">社会角色</div>
                <div className="truncate text-[18px]">
                  程序员 摄影爱好者 Citywalk
                </div>
              </div>
            </div>
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
            <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
              <div>事业</div>
              <div className="opacity-50">occupation</div>
            </h5>

            <div className="word-break max-w-full text-[13px]">
              事业不仅是一种职业或工作，更是一种对人生价值的探索与实现。在追求事业的过程中，我们不仅可以找到自我、实现价值，还可以感受到生命的魅力和意义。
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col justify-between gap-1">
                <div className="text-[14px]">行业</div>
                <div className="text-[18px]">互联网</div>
              </div>

              <div className="flex flex-col justify-between gap-1">
                <div className="text-[14px]">职业</div>
                <div className="text-[18px]">前端开发工程师</div>
              </div>
            </div>
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
            <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
              <div>休闲</div>
              <div className="opacity-50">game</div>
            </h5>

            <div className="z-10 flex flex-1 items-center justify-between gap-2">
              <div className="-ml-[25px] -mr-[25px] w-full flex-1 transition-all group-hover:scale-[1.01]">
                <SVG
                  className="h-auto w-full"
                  src={`${getRoutePrefix()}/images/index/snake.svg`}
                />
              </div>
            </div>

            <div className="z-10 flex items-center justify-between gap-2">
              <p className="word-break mb-0 max-w-full text-[13px]">
                娱乐艺术是人类创造力的一种表现形式，可以为我们带来无限的灵感和欢乐。
              </p>
            </div>
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
            <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
              <div>技术栈</div>
              <div className="opacity-50">code</div>
            </h5>

            <div className="flex flex-col items-center justify-between space-x-[0] space-y-[10px] overflow-auto md:flex-row md:items-stretch md:space-x-[24px] md:space-y-[0]">
              <div className="order-1 text-[0] md:order-1">
                <img
                  className="h-[200px] object-contain transition-all"
                  alt="技能"
                  src="https://camo.githubusercontent.com/21872ed7850e89df789706113922336145a1a99f6f8915f0c12782a90759f169/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d68616e6b6c69753632267468656d653d746f6b796f6e69676874"
                />
              </div>

              <div className="order-2 text-[0] md:order-2">
                <SVG
                  className="h-[200px] rounded-[4px] object-contain transition-all"
                  src={`${getRoutePrefix()}/images/index/leetcode.svg`}
                />
              </div>

              <div className="order-3 text-[0] md:order-3">
                <img
                  className="h-[200px] w-auto object-contain transition-all"
                  alt="提交量"
                  src="https://camo.githubusercontent.com/72241e49a73f615327a534577c4127a3a59fe4a12fb0f68d7cee3d5baab8e5db/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d68616e6b6c697536322673686f775f69636f6e733d74727565267468656d653d746f6b796f6e69676874"
                />
              </div>
            </div>

            <div className="z-10 flex items-center justify-between gap-2">
              <a
                className="group/more flex cursor-pointer items-center justify-between gap-2 opacity-70"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/hankliu62"
                aria-hidden
              >
                <span className="bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat text-[12px] leading-[18px] transition-all group-hover/more:bg-[length:100%_1px]">
                  查看更多
                </span>
                <RightCircleOutlined rev={undefined} />
              </a>
            </div>
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
            <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
              <div>简介</div>
              <div className="opacity-50">introduction</div>
            </h5>

            <div className="word-break z-10 w-[min(100%,_700px)] max-w-full text-[16px] leading-[1.7]">
              <p className="mb-[8px]">
                我，一名前端程序员，一个在这个数字世界里默默耕耘的匠人，一个在代码之海中不断探索的旅人。
              </p>

              <p className="mb-[8px]">
                我最初被编程吸引，是因为它那无比强大的创造力。就像作家用文字塑造世界，我用代码和算法塑造着数字空间。每一个像素、每一个交互，都是我精心雕琢的艺术品。
              </p>

              <p className="mb-[8px]">
                我喜欢挑战，喜欢不断尝试新的技术和方法。在这个过程中，我发现了前端的魅力所在----它既是艺术的舞台，又是技术的战场。我热爱前端，因为它让我有机会将技术与艺术完美结合，创造出令人赞叹的用户体验。
              </p>

              <p className="mb-[8px]">
                我也有自己的生活。我喜欢阅读，特别是那些能触动心灵的文字。它们让我思考人生，也让我更加珍视生活中的每一个瞬间。我也喜欢旅行，因为那能让我看到更广阔的世界，从中汲取灵感。
              </p>

              <p className="mb-[8px]">
                我将在未来的日子里继续前行，在前端的世界里不断探索和创新。我希望能够用我的技术和热情，为这个世界创造更多的美好。同时，我也期待着与更多志同道合的人相遇，共同前行在这条充满挑战和机遇的道路上。
              </p>
            </div>

            <div className="z-10 flex items-center justify-between gap-2">
              <a
                className="group/more flex cursor-pointer items-center justify-between gap-2 opacity-70"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat text-[12px] leading-[18px] transition-all group-hover/more:bg-[length:100%_1px]">
                  更多故事
                </span>
                <PlusCircleOutlined rev={undefined} />
              </a>
            </div>

            {/* 右侧的球 */}
            <div className="earth absolute inset-[auto_auto_0_0] z-[1] aspect-[1_/_1] h-[62px] w-full rounded-[50%_50%_0_0] bg-white/10 shadow-[0_5px_24px_0-hsl(0deg_0%_15%_/_10%)] backdrop-blur-[5px] transition-all duration-500 ease-[cubic-bezier(.5,_0,_0,_1)] group-hover:right-[-45%] group-hover:top-[15%] group-hover:w-[110%] md:inset-[20%_-40%_auto_auto] md:h-auto" />
            {/* 流星 */}
            <div className="stars-wrapper absolute left-0 top-0 h-full w-full -rotate-[135deg]">
              <div className="flex h-full w-full animate-[about-starts_10s_linear_infinite] flex-col justify-around">
                <div className="before:contents-[''] before:rounded-1/2 flex h-[2px] w-[120px] items-center bg-gradient-to-r from-[rgb(255_255_255_/_30%)] to-[rgb(255_255_255_/_0%)] before:h-[2px] before:w-[2px] before:bg-white" />
                <div className="before:contents-[''] before:rounded-1/2 ml-[100%] flex h-[2px] w-[120px] items-center bg-gradient-to-r from-[rgb(255_255_255_/_30%)] to-[rgb(255_255_255_/_0%)] before:h-[2px] before:w-[2px] before:bg-white" />
                <div className="before:contents-[''] before:rounded-1/2 ml-[-5%] flex h-[2px] w-[120px] items-center bg-gradient-to-r from-[rgb(255_255_255_/_30%)] to-[rgb(255_255_255_/_0%)] before:h-[2px] before:w-[2px] before:bg-white" />
                <div className="before:contents-[''] before:rounded-1/2 ml-[35%] flex h-[2px] w-[120px] items-center bg-gradient-to-r from-[rgb(255_255_255_/_30%)] to-[rgb(255_255_255_/_0%)] before:h-[2px] before:w-[2px] before:bg-white" />
              </div>
            </div>
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
            <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
              <div>每日毒鸡汤</div>
              <div className="opacity-50">word</div>
            </h5>

            <div className="word-break max-w-full text-[16px]">
              {chickenSoup}
            </div>

            <div className="z-10 flex items-center justify-between gap-2">
              <a
                className="group/more flex cursor-pointer items-center justify-between gap-2 opacity-70"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  router.push({
                    pathname: `/articles/649`,
                  });
                }}
                aria-hidden
              >
                <span className="bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat text-[12px] leading-[18px] transition-all group-hover/more:bg-[length:100%_1px]">
                  查看更多
                </span>
                <RightCircleOutlined rev={undefined} />
              </a>
            </div>
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
            <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
              <div>每日一图</div>
              <div className="opacity-50">picture</div>
            </h5>

            <img
              className="absolute inset-0 z-0 h-full w-full object-cover blur-[0] brightness-75 transition-all group-hover:scale-125 group-hover:blur-none group-hover:brightness-100"
              alt="每日一图"
              src={`${getRoutePrefix()}/images/index/picture${
                pictureIndex.current
              }.jpg`}
            />

            <div className="z-10 flex items-center justify-between gap-2">
              <a
                className="group/more flex cursor-pointer items-center justify-between gap-2 opacity-70"
                target="_blank"
                rel="noreferrer"
                href="https://500px.com.cn/hankliu"
                aria-hidden
              >
                <span className="bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat text-[12px] leading-[18px] transition-all group-hover/more:bg-[length:100%_1px]">
                  查看更多
                </span>
                <RightCircleOutlined rev={undefined} />
              </a>
            </div>
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
            <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
              <div>位置</div>
              <div className="opacity-50">occupation</div>
            </h5>

            <SVG
              className="china-map w-[min(100%, 600px)] absolute inset-0 z-0 m-auto aspect-[1] translate-x-0 translate-y-0 fill-none stroke-white stroke-[2px] opacity-30 transition-[opacity,scale,translate] delay-[0s,.5s,0s] duration-[1s,1s,1s] ease-[cubic-bezier(.6,_.1,_0,_1),cubic-bezier(.5,_0,_0,_1),cubic-bezier(.5,_0,_0,_1)] group-hover:translate-x-[-6%] group-hover:translate-y-[-5%] group-hover:opacity-70 group-hover:delay-[0s,0s,.5s] group-hover:ease-[cubic-bezier(.6,_.1,_0,_1),cubic-bezier(.5,_0,_0,_1),cubic-bezier(.6,_.1,_0,_1)]"
              src={`${getRoutePrefix()}/images/index/map.svg`}
            />

            <div className="opacity-1 group-hover:opacity-1 flex items-center justify-between gap-2 transition-opacity delay-[1s]">
              <div className="flex flex-col justify-between gap-1">
                <div className="text-[18px]">湖南省</div>
                <div className="text-[18px]">
                  <a
                    className="group/more flex cursor-pointer items-center justify-between gap-2"
                    target="_blank"
                    rel="noreferrer"
                    href="https://map.baidu.com/search/%E5%A8%84%E5%BA%95%E5%B8%82/@12468086,3191561.2500000005,13z?querytype=s&da_src=shareurl&wd=%E5%A8%84%E5%BA%95&c=221&src=0&pn=0&sug=0&l=14&b=(12460869.421294013,3187750.310880837;12475551.877860459,3195256.742613471)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2"
                    aria-hidden
                  >
                    <span className="bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat text-[18px] leading-[24px] transition-all group-hover/more:bg-[length:100%_1px]">
                      娄底市
                    </span>
                    <EnvironmentOutlined rev={undefined} />
                  </a>
                </div>
              </div>
            </div>
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

import { RightCircleOutlined } from "@ant-design/icons";
import { useRef } from "react";

import { getRoutePrefix } from "@/utils/route";

/**
 * 每日一图模块
 */
const SectionPicture = () => {
  // 随机图片
  const pictureIndex = useRef<number>((new Date().getDay() % 2) + 1);

  return (
    <>
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
    </>
  );
};

export default SectionPicture;

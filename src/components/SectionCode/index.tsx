import { RightCircleOutlined } from "@ant-design/icons";
import SVG from "react-inlinesvg";

import { getRoutePrefix } from "@/utils/route";

/**
 * 技术模块
 */
const SectionCode = () => {
  return (
    <>
      <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
        <div>技术栈</div>
        <div className="opacity-50">code</div>
      </h5>

      <div className="flex flex-col items-center justify-between space-x-[0] space-y-[10px] overflow-auto md:flex-row md:items-stretch md:space-x-[24px] md:space-y-[0]">
        <div className="order-1 text-[0] md:order-1">
          <img
            className="h-[200px] object-contain transition-all"
            alt="技能"
            src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=hankliu62&theme=tokyonight"
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
            src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=hankliu62&theme=tokyonight"
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
    </>
  );
};

export default SectionCode;

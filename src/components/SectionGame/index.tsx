import SVG from "react-inlinesvg";

import { getRoutePrefix } from "@/utils/route";

/**
 * 休闲模块
 */
const SectionGame = () => {
  return (
    <>
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
    </>
  );
};

export default SectionGame;

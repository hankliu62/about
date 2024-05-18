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
    </>
  );
};

export default SectionCode;

/**
 * 玄学模块
 */
const SectionDivination = () => {
  return (
    <>
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
    </>
  );
};

export default SectionDivination;

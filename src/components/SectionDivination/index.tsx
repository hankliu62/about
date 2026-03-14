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

      <div className="fle-start flex flex-1 flex-col">
        {/* 标签 */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            炙热灵魂
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            语言天赋
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            分析决策
          </span>
        </div>

        <div className="word-break z-10 w-full max-w-full">
          {/* 描述 */}
          <div className="mb-3 space-y-1 text-[13px] leading-relaxed text-white/70">
            <div>一个旅行者，一个热烈而赤诚的灵魂</div>
            <div>有极高的语言能力，言之有物</div>
            <div>善于分析决策，常扮演咨询师角色</div>
            <div>能影响他人的决定</div>
          </div>
        </div>
      </div>

      {/* 详细信息 */}
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/10 pt-3">
        <div className="flex flex-col justify-between gap-1">
          <div className="text-[11px] uppercase tracking-wider text-white/40">
            星座
          </div>
          <div className="text-[14px] text-white">双子座</div>
        </div>

        <div className="flex flex-col justify-between gap-1">
          <div className="text-[11px] uppercase tracking-wider text-white/40">
            生肖
          </div>
          <div className="text-[14px] text-white">猴</div>
        </div>

        <div className="flex flex-col justify-between gap-1">
          <div className="text-[11px] uppercase tracking-wider text-white/40">
            塔罗
          </div>
          <div className="text-[14px] text-white">倒悬者</div>
        </div>
      </div>
    </>
  );
};

export default SectionDivination;

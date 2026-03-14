/**
 * 事业模块
 */
const SectionOccupation = () => {
  return (
    <>
      <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
        <div>事业</div>
        <div className="opacity-50">occupation</div>
      </h5>

      <div className="fle-start flex flex-1 flex-col">
        {/* 标签 */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            代码诗人
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            体验匠人
          </span>
        </div>

        <div className="word-break z-10 w-full max-w-full">
          {/* 描述 */}
          <div className="mb-3 space-y-1 text-[13px] leading-relaxed text-white/70">
            <div>不仅是职业，更是对人生价值的探索</div>
            <div>在追求中找到自我，实现价值</div>
            <div>感受生命的魅力和意义</div>
          </div>
        </div>
      </div>

      {/* 详细信息 */}
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/10 pt-3">
        <div className="flex flex-col justify-between gap-1">
          <div className="text-[11px] uppercase tracking-wider text-white/40">
            行业
          </div>
          <div className="text-[14px] text-white">互联网</div>
        </div>

        <div className="flex flex-col justify-between gap-1">
          <div className="text-[11px] uppercase tracking-wider text-white/40">
            职业
          </div>
          <div className="text-[14px] text-white">前端工程师</div>
        </div>

        <div className="flex flex-col justify-between gap-1">
          <div className="text-[11px] uppercase tracking-wider text-white/40">
            状态
          </div>
          <div className="text-[14px] text-white">红红火火</div>
        </div>
      </div>
    </>
  );
};

export default SectionOccupation;

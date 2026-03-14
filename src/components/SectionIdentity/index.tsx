/**
 * 身份模块
 */
const SectionIdentity = () => {
  return (
    <>
      <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
        <div>身份</div>
        <div className="opacity-50">identity</div>
      </h5>

      <div className="fle-start flex flex-1 flex-col">
        {/* 标签 */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            多重面貌
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            斜杠青年
          </span>
        </div>

        <div className="word-break z-10 w-full max-w-full">
          {/* 描述 */}
          <div className="mb-3 space-y-1 text-[13px] leading-relaxed text-white/70">
            <div>像一本未完的小说</div>
            <div>每一章节都充满未知与转折</div>
            <div>不仅仅是社会定位，更是情感与文化的交织</div>
            <div>时而明亮如阳光，时而深沉如黑夜</div>
          </div>
        </div>
      </div>

      {/* 详细信息 */}
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/10 pt-3">
        <div className="flex flex-col justify-between gap-1">
          <div className="text-[11px] uppercase tracking-wider text-white/40">
            生活角色
          </div>
          <div className="text-[14px] text-white">父母的孩子</div>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-1 md:flex-none">
          <div className="text-[11px] uppercase tracking-wider text-white/40">
            社会角色
          </div>
          <div className="truncate text-[14px] text-white">
            程序员 · 摄影 · Citywalk
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionIdentity;

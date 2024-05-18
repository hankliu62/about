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
          <div className="truncate text-[18px]">程序员 摄影爱好者 Citywalk</div>
        </div>
      </div>
    </>
  );
};

export default SectionIdentity;

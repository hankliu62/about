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
    </>
  );
};

export default SectionOccupation;

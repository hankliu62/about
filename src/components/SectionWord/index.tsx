import { RightCircleOutlined } from "@ant-design/icons";

/**
 * 每日毒鸡汤模块
 */
const SectionWord = ({ chickenSoup }: { chickenSoup: string }) => {
  return (
    <>
      <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
        <div>每日毒鸡汤</div>
        <div className="opacity-50">word</div>
      </h5>

      <div className="word-break max-w-full text-[16px]">{chickenSoup}</div>

      <div className="z-10 flex items-center justify-between gap-2">
        <a
          className="group/more flex cursor-pointer items-center justify-between gap-2 opacity-70"
          target="_blank"
          rel="noreferrer"
          href="https://hankliu62.github.io/frontend/articles/649"
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

export default SectionWord;

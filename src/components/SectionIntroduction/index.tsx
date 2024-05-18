import { PlusCircleOutlined } from "@ant-design/icons";

/**
 * 个人简介
 * @returns
 */
const SectionIntroduction = () => {
  return (
    <>
      <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
        <div>简介</div>
        <div className="opacity-50">introduction</div>
      </h5>

      <div className="word-break z-10 w-[min(100%,_700px)] max-w-full text-[16px] leading-[1.7]">
        <p className="mb-[8px]">
          我，一名前端程序员，一个在这个数字世界里默默耕耘的匠人，一个在代码之海中不断探索的旅人。
        </p>

        <p className="mb-[8px]">
          我最初被编程吸引，是因为它那无比强大的创造力。就像作家用文字塑造世界，我用代码和算法塑造着数字空间。每一个像素、每一个交互，都是我精心雕琢的艺术品。
        </p>

        <p className="mb-[8px]">
          我喜欢挑战，喜欢不断尝试新的技术和方法。在这个过程中，我发现了前端的魅力所在----它既是艺术的舞台，又是技术的战场。我热爱前端，因为它让我有机会将技术与艺术完美结合，创造出令人赞叹的用户体验。
        </p>

        <p className="mb-[8px]">
          我也有自己的生活。我喜欢阅读，特别是那些能触动心灵的文字。它们让我思考人生，也让我更加珍视生活中的每一个瞬间。我也喜欢旅行，因为那能让我看到更广阔的世界，从中汲取灵感。
        </p>

        <p className="mb-[8px]">
          我将在未来的日子里继续前行，在前端的世界里不断探索和创新。我希望能够用我的技术和热情，为这个世界创造更多的美好。同时，我也期待着与更多志同道合的人相遇，共同前行在这条充满挑战和机遇的道路上。
        </p>
      </div>

      <div className="z-10 flex items-center justify-between gap-2">
        <a
          className="group/more flex cursor-pointer items-center justify-between gap-2 opacity-70"
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat text-[12px] leading-[18px] transition-all group-hover/more:bg-[length:100%_1px]">
            更多故事
          </span>
          <PlusCircleOutlined rev={undefined} />
        </a>
      </div>

      {/* 右侧的球 */}
      <div className="earth absolute inset-[auto_auto_0_0] z-[1] aspect-[1_/_1] h-[62px] w-full rounded-[50%_50%_0_0] bg-white/10 shadow-[0_5px_24px_0-hsl(0deg_0%_15%_/_10%)] backdrop-blur-[5px] transition-all duration-500 ease-[cubic-bezier(.5,_0,_0,_1)] group-hover:right-[-45%] group-hover:top-[15%] group-hover:w-[110%] md:inset-[20%_-40%_auto_auto] md:h-auto" />
      {/* 流星 */}
      <div className="stars-wrapper absolute left-0 top-0 h-full w-full -rotate-[135deg]">
        <div className="flex h-full w-full animate-[about-starts_10s_linear_infinite] flex-col justify-around">
          <div className="before:contents-[''] before:rounded-1/2 flex h-[2px] w-[120px] items-center bg-gradient-to-r from-[rgb(255_255_255_/_30%)] to-[rgb(255_255_255_/_0%)] before:h-[2px] before:w-[2px] before:bg-white" />
          <div className="before:contents-[''] before:rounded-1/2 ml-[100%] flex h-[2px] w-[120px] items-center bg-gradient-to-r from-[rgb(255_255_255_/_30%)] to-[rgb(255_255_255_/_0%)] before:h-[2px] before:w-[2px] before:bg-white" />
          <div className="before:contents-[''] before:rounded-1/2 ml-[-5%] flex h-[2px] w-[120px] items-center bg-gradient-to-r from-[rgb(255_255_255_/_30%)] to-[rgb(255_255_255_/_0%)] before:h-[2px] before:w-[2px] before:bg-white" />
          <div className="before:contents-[''] before:rounded-1/2 ml-[35%] flex h-[2px] w-[120px] items-center bg-gradient-to-r from-[rgb(255_255_255_/_30%)] to-[rgb(255_255_255_/_0%)] before:h-[2px] before:w-[2px] before:bg-white" />
        </div>
      </div>
    </>
  );
};

export default SectionIntroduction;

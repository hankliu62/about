import { RightCircleOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { useMemo, useState } from "react";
import SVG from "react-inlinesvg";

import { getRoutePrefix } from "@/utils/route";

/**
 * 性格测试模块
 */
const SectionPersonality = () => {
  // 精力: 外向 | 内向
  const [energy, setEnergy] = useState<number>(71);
  // 精神: 远见 | 现实
  const [mind, setMind] = useState<number>(61);
  // 判断方式: 理性 | 感受
  const [nature, setNature] = useState<number>(71);
  // 应对方式: 评判 | 展望
  const [tactics, setTactics] = useState<number>(65);
  // 身份特征: 坚决 | 起伏
  const [identity, setIdentity] = useState<number>(51);

  const personalities = useMemo(() => {
    const enEnergyContent = "Introverted";
    const enMindContent = "Observant";
    const enNatureContent = "Feeling";
    const enTacticsContent = "Judging";
    const enIdentityContent = "Assertive";

    return [
      {
        type: "energy",
        title: "精力",
        enOptions: ["Extraverted", "Introverted"],
        options: ["外向", "内向"],
        enContent: enEnergyContent,
        zhContent: ["外向", "内向"][
          ["Extraverted", "Introverted"].findIndex(
            (item) => item === enEnergyContent
          )
        ],
        value: energy,
        percent: `${energy}%`,
        color: "#4298B4",
        image: `${getRoutePrefix()}/images/personalities/16personalities_trait_${enEnergyContent.toLocaleLowerCase()}.svg`,
        desc: "内向型的人往往更喜欢较少但深入和有意义的社交互动，通常更喜欢安静的环境。",
        link: "https://www.16personalities.com/articles/energy-introverted-vs-extraverted",
      },
      {
        type: "mind",
        title: "精神",
        enOptions: ["Intuitive", "Observant"],
        options: ["远见", "现实"],
        enContent: enMindContent,
        zhContent: ["远见", "现实"][
          ["Intuitive", "Observant"].findIndex((item) => item === enMindContent)
        ],
        value: mind,
        percent: `${mind}%`,
        color: "#E4AE3A",
        image: `${getRoutePrefix()}/images/personalities/16personalities_trait_${enMindContent.toLocaleLowerCase()}.svg`,
        desc: "现实型的人务实，脚踏实地。他们往往高度关注正在发生或非常可能发生的事情。",
        link: "https://www.16personalities.com/articles/mind-intuitive-vs-observant",
      },
      {
        type: "nature",
        title: "判断方式",
        enOptions: ["Thinking", "Feeling"],
        options: ["理性", "感受"],
        enContent: enNatureContent,
        zhContent: ["理性", "感受"][
          ["Thinking", "Feeling"].findIndex((item) => item === enNatureContent)
        ],
        value: nature,
        percent: `${nature}%`,
        color: "#33A474", // rbg(51, 164, 116)
        image: `${getRoutePrefix()}/images/personalities/16personalities_trait_${enNatureContent.toLocaleLowerCase()}.svg`,
        desc: "感受型的人重视情感表达和敏感性。他们非常重视同理心、社会和谐及合作。",
        link: "https://www.16personalities.com/articles/nature-thinking-vs-feeling",
      },
      {
        type: "tactics",
        title: "应对方式",
        enOptions: ["Judging", "Prospecting"],
        options: ["评判", "展望"],
        enContent: enTacticsContent,
        zhContent: ["评判", "展望"][
          ["Judging", "Prospecting"].findIndex(
            (item) => item === enTacticsContent
          )
        ],
        value: tactics,
        percent: `${tactics}%`,
        color: "#88619A", // rbg(136, 97, 154)
        image: `${getRoutePrefix()}/images/personalities/16personalities_trait_${enTacticsContent.toLocaleLowerCase()}.svg`,
        desc: "评判型的人果断、周到，很有条理。他们重视清晰度、可预测性和封闭性，更喜欢结构和计划，而不是自发性。",
        link: "https://www.16personalities.com/articles/tactics-judging-vs-prospecting",
      },
      {
        type: "identity",
        title: "身份特征",
        enOptions: ["Assertive", "Turbulent"],
        options: ["坚决", "起伏"],
        enContent: enIdentityContent,
        zhContent: ["坚决", "起伏"][
          ["Assertive", "Turbulent"].findIndex(
            (item) => item === enIdentityContent
          )
        ],
        value: identity,
        percent: `${identity}%`,
        color: "#F25E62", // rbg(242, 94, 98)
        image: `${getRoutePrefix()}/images/personalities/16personalities_trait_${enIdentityContent.toLocaleLowerCase()}.svg`,
        desc: "坚决型的人自信、性情平和，能抵抗压力。他们拒绝过度担心，在努力实现目标时往往会自信面对。",
        link: "https://www.16personalities.com/articles/identity-assertive-vs-turbulent",
      },
    ];
  }, [energy, mind, nature, tactics, identity]);

  // hover展示的类型
  const [selectType, setSelectType] =
    useState<(typeof personalities)[number]["type"]>("energy");

  const typeData = useMemo(() => {
    const data: Record<
      (typeof personalities)[number]["type"],
      (typeof personalities)[number]
    > = personalities.reduce((acc, cur) => ((acc[cur.type] = cur), acc), {});
    // 默认为：energy
    return data[selectType] || data.energy;
  }, [selectType, personalities]);

  return (
    <>
      <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
        <div>性格</div>
        <div className="opacity-50">personality</div>
      </h5>

      <div className="flex flex-col items-center justify-between space-x-[0] space-y-[10px] overflow-auto text-[#343c4b] md:flex-row md:items-stretch md:space-x-[24px] md:space-y-[0]">
        {/* 性格统计 */}
        <div className="order-1 text-[0] md:order-1">
          <div className="relative w-[400px] overflow-hidden rounded-md bg-white px-[30px] py-[20px] before:absolute before:left-0 before:right-0 before:top-0 before:z-[2] before:h-[5px] before:bg-[#4298b4] before:content-[''] hover:shadow-md">
            <div className="relative z-[2] flex flex-col items-center justify-center">
              <header className="flex flex-col items-center justify-center">
                <h3 className="mb-2 text-base font-normal opacity-70">
                  性格类型：
                </h3>
                <h4 className="mb-3 text-xl font-semibold">
                  <a
                    className="group/more flex cursor-pointer items-center justify-between"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.16personalities.com/ch/isfj-%E4%BA%BA%E6%A0%BC"
                    aria-hidden
                  >
                    守卫者<span className="ml-1">(ISFJ-A)</span>
                  </a>
                </h4>
              </header>
              <div className="mb-5">
                <div aria-label="ISFJ的头像">
                  <SVG
                    className="h-[200px] w-[200px] rounded-[4px] object-contain transition-all"
                    src={`${getRoutePrefix()}/images/personalities/defender.svg`}
                  />
                </div>
              </div>
              <div className="mb-0">
                <p className="mb-1 text-base">
                  守卫者是非常敬业和热情的保护者，随时准备保护他们所爱的人。
                </p>
                <p className="mb-0 line-clamp-3 text-base">
                  守卫者以谦逊，低调的方式帮助世界发展。这种性格类型的人勤奋敬业，对周围的人深感责任感。可以指望守卫者在截止日期前完成任务，记住生日和特殊场合，坚持传统，并为他们的亲人送去关怀和支持。但是他们很少要求认可他们所做的一切，而是更喜欢在幕后默默奉献。
                </p>
              </div>
            </div>
            <div className="absolute -left-[1px] -right-[1px] top-0 z-[1] rounded-t-sm bg-[#ecf4f7] pt-[155px]">
              <svg
                height="30"
                viewBox="0 0 399 30"
                width="399"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-[33px] w-full bg-white"
              >
                <path
                  data-v-415a60a8=""
                  d="M400 0v16L326.316 5 94.736 20 0 0z"
                  fill="#ecf4f7"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* 性格详情 */}
        <div className="order-2 flex-1 text-[0] md:order-2">
          <div className="flex h-full flex-col rounded-md bg-white py-[15px] hover:shadow-md">
            <h3 className="relative mb-6 px-[25px] text-lg font-semibold after:absolute after:-bottom-3 after:left-0 after:right-0 after:h-[1px] after:bg-[#eee] after:content-['']">
              <span>性格特征：</span>
            </h3>
            <div className="mb-auto flex flex-1 justify-between gap-x-0 pl-[17px] pr-[25px]">
              {/* 性格类型列表 */}
              <div className="grid flex-1 grid-rows-5 gap-y-2 rounded-lg">
                {personalities.map((personality) => (
                  <div
                    className={classNames(
                      "flex flex-col items-start justify-between gap-y-1 rounded-l-md p-[8px] pr-[25px] hover:bg-[#F6F6F7]",
                      {
                        "bg-[#F6F6F7]": selectType === personality.type,
                      }
                    )}
                    key={personality.type}
                    onMouseOver={() => setSelectType(personality.type)}
                  >
                    <div className="flex items-center justify-start">
                      <span className="text-sm">{personality.title}：</span>
                      <h4 className="text-sm font-semibold">
                        <span style={{ color: personality.color }}>
                          {personality.percent}
                        </span>{" "}
                        {personality.zhContent}
                      </h4>
                    </div>
                    <div className="flex w-full flex-1 items-center justify-between gap-x-5">
                      <div
                        className={classNames(
                          "flex w-[80px] items-center justify-start gap-x-1 whitespace-nowrap text-base",
                          {
                            "font-medium":
                              personality.enOptions[0] ===
                              personality.enContent,
                            "opacity-50":
                              personality.enOptions[0] !==
                              personality.enContent,
                          }
                        )}
                      >
                        <span>{personality.options[0]}</span>
                        <span>
                          {personality.enOptions[0] === personality.enContent
                            ? personality.value
                            : 100 - personality.value}
                          %
                        </span>
                      </div>
                      <span className="relative h-[14px] flex-1 rounded-md bg-black/10">
                        <i
                          className={classNames(
                            "absolute top-0 h-full rounded-md",
                            {
                              "left-0":
                                personality.enOptions[0] ===
                                personality.enContent,
                              "right-0":
                                personality.enOptions[1] ===
                                personality.enContent,
                            }
                          )}
                          style={{
                            width: `${personality.value}%`,
                            backgroundColor: personality.color,
                          }}
                        ></i>
                      </span>
                      <div
                        className={classNames(
                          "flex w-[80px] items-center justify-end gap-x-1 whitespace-nowrap text-base",
                          {
                            "font-medium":
                              personality.enOptions[1] ===
                              personality.enContent,
                            "opacity-50":
                              personality.enOptions[1] !==
                              personality.enContent,
                          }
                        )}
                      >
                        <span>{personality.options[1]}</span>
                        <span>
                          {personality.enOptions[1] === personality.enContent
                            ? personality.value
                            : 100 - personality.value}
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 性格类型描述 */}
              <div
                className={classNames(
                  "flex w-[228px] flex-col items-center justify-start rounded-lg bg-[#F6F6F7] p-[20px]",
                  {
                    "rounded-tl-none": typeData.type === personalities[0].type,
                    "rounded-bl-none":
                      typeData.type ===
                      personalities[personalities.length - 1].type,
                  }
                )}
              >
                <header className="mb-5">
                  <p className="mb-1 text-center text-sm">{typeData.title}</p>
                  <h4 className="text-center text-xl font-semibold">
                    <a
                      className="inline-flex cursor-pointer items-center justify-between gap-x-2"
                      target="_blank"
                      rel="noreferrer"
                      href={typeData.link}
                      aria-hidden
                    >
                      <span style={{ color: typeData.color }}>
                        {typeData.percent}
                      </span>
                      <span>{typeData.zhContent}</span>
                    </a>
                  </h4>
                </header>
                <div className="mb-5 flex flex-col items-center justify-start">
                  <img
                    src={typeData.image}
                    alt={typeData.desc}
                    className="h-[120px] w-[160px]"
                  />
                </div>
                <p className="text-left text-base">{typeData.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-start gap-2">
        <a
          className="group/more flex cursor-pointer items-center justify-between gap-2 opacity-70"
          target="_blank"
          rel="noreferrer"
          href="https://www.16personalities.com/"
          aria-hidden
        >
          <SVG
            className="h-[24px] w-[120px] rounded-[4px] object-contain transition-all"
            src={`${getRoutePrefix()}/images/index/16personalities.svg`}
          />
        </a>

        <a
          className="group/more flex cursor-pointer items-center justify-between gap-2 opacity-70"
          target="_blank"
          rel="noreferrer"
          href="https://www.16personalities.com/profiles/b0ba8dad73f80"
          aria-hidden
        >
          <span className="bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat text-[12px] leading-[18px] transition-all group-hover/more:bg-[length:100%_1px]">
            查看详细信息
          </span>
          <RightCircleOutlined rev={undefined} />
        </a>
      </div>
    </>
  );
};

export default SectionPersonality;

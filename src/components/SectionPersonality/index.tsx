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
  // 心智: 天马行空 | 求真务实
  const [mind, setMind] = useState<number>(53);
  // 天性: 理性思考 | 情感细腻
  const [nature, setNature] = useState<number>(89);
  // 应对方式: 运筹帷幄 | 随机应变
  const [tactics, setTactics] = useState<number>(68);
  // 身份特征: 自信果断 | 情绪易波动
  const [identity, setIdentity] = useState<number>(79);

  const personalities = useMemo(() => {
    const enEnergyContent = "Introverted";
    const enMindContent = "Intuitive";
    const enNatureContent = "Feeling";
    const enTacticsContent = "Prospecting";
    const enIdentityContent = "Turbulent";

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
        image: `${getRoutePrefix()}/images/personalities/infp/16personalities_trait_${enEnergyContent.toLocaleLowerCase()}.svg`,
        desc: "内向型的人往往更喜欢较少但深入和有意义的社交互动，通常更喜欢安静的环境。",
        link: "https://www.16personalities.com/articles/energy-introverted-vs-extraverted",
      },
      {
        type: "mind",
        title: "心智",
        enOptions: ["Intuitive", "Observant"],
        options: ["天马行空", "求真务实"],
        enContent: enMindContent,
        zhContent: ["天马行空", "求真务实"][
          ["Intuitive", "Observant"].findIndex((item) => item === enMindContent)
        ],
        value: mind,
        percent: `${mind}%`,
        color: "#E4AE3A",
        image: `${getRoutePrefix()}/images/personalities/infp/16personalities_trait_${enMindContent.toLocaleLowerCase()}.svg`,
        desc: "天马行空型的人非常富有想象力、胸怀海纳百川，对世界始终求知若渴。他们将独创性视若珍宝，热衷于探寻那些隐藏在表象之下的深层含义，以及看似遥远却充满希望的可能性。",
        link: "https://www.16personalities.com/articles/mind-intuitive-vs-observant",
      },
      {
        type: "nature",
        title: "天性",
        enOptions: ["Thinking", "Feeling"],
        options: ["理性思考", "情感细腻"],
        enContent: enNatureContent,
        zhContent: ["理性思考", "情感细腻"][
          ["Thinking", "Feeling"].findIndex((item) => item === enNatureContent)
        ],
        value: nature,
        percent: `${nature}%`,
        color: "#33A474", // rbg(51, 164, 116)
        image: `${getRoutePrefix()}/images/personalities/infp/16personalities_trait_${enNatureContent.toLocaleLowerCase()}.svg`,
        desc: "情感细腻型的人对情感的表达与内心的敏感度珍视有加，他们乐于袒露自己的情感，细腻感知周遭的一切。他们将同理心、社会的和谐融洽以及人们之间的和衷共济奉为至宝，认为这些是人际交往和社会生活中不可或缺的重要元素。",
        link: "https://www.16personalities.com/articles/nature-thinking-vs-feeling",
      },
      {
        type: "tactics",
        title: "应对方式",
        enOptions: ["Judging", "Prospecting"],
        options: ["运筹帷幄", "随机应变"],
        enContent: enTacticsContent,
        zhContent: ["运筹帷幄", "随机应变"][
          ["Judging", "Prospecting"].findIndex(
            (item) => item === enTacticsContent
          )
        ],
        value: tactics,
        percent: `${tactics}%`,
        color: "#88619A", // rbg(136, 97, 154)
        image: `${getRoutePrefix()}/images/personalities/infp/16personalities_trait_${enTacticsContent.toLocaleLowerCase()}.svg`,
        desc: "随机应变型的人极善见机行事，能够敏锐地捕捉并适应各类机会。他们大多个性灵活，特立独行，相较于安稳的状态，他们对新奇独特的事物更为青睐，甚至达到标新立异的程度。",
        link: "https://www.16personalities.com/articles/tactics-judging-vs-prospecting",
      },
      {
        type: "identity",
        title: "身份特征",
        enOptions: ["Assertive", "Turbulent"],
        options: ["自信果断", "情绪易波动"],
        enContent: enIdentityContent,
        zhContent: ["自信果断", "情绪易波动"][
          ["Assertive", "Turbulent"].findIndex(
            (item) => item === enIdentityContent
          )
        ],
        value: identity,
        percent: `${identity}%`,
        color: "#F25E62", // rbg(242, 94, 98)
        image: `${getRoutePrefix()}/images/personalities/infp/16personalities_trait_${enIdentityContent.toLocaleLowerCase()}.svg`,
        desc: "情绪易波动型自我意识强，对压力敏感。他们在情绪上有一种紧迫感，往往以成功为导向，追求完美，渴望进步。",
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
          <div className="relative w-[400px] overflow-hidden rounded-md bg-white px-[30px] py-[20px] before:absolute before:left-0 before:right-0 before:top-0 before:z-[2] before:h-[5px] before:bg-[#56A278] before:content-[''] hover:shadow-md">
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
                    href="https://www.16personalities.com/ch/infp-%E4%BA%BA%E6%A0%BC"
                    aria-hidden
                  >
                    调停者<span className="ml-1">(INFP-T)</span>
                  </a>
                </h4>
              </header>
              <div className="mb-5">
                <div aria-label="INFP的头像">
                  <SVG
                    className="h-[200px] w-[200px] rounded-[4px] object-contain transition-all"
                    src={`${getRoutePrefix()}/images/personalities/infp/defender.svg`}
                  />
                </div>
              </div>
              <div className="mb-0">
                <p className="mb-1 text-base">
                  调停者是富有诗意、善良且无私的人，总是热衷于帮助正义事业。
                </p>
                <p className="mb-0 line-clamp-3 text-base">
                  调停者外表或许文静谦逊，但内心世界却如熊熊烈火，充满着蓬勃的活力与炽热的激情。他们想象力丰富，创造力非凡，时常沉浸在如梦如幻的白日遐想之中，于脑海里编织出琳琅满目的故事与对话。INFP
                  型人格以其敏感多思而闻名，无论是音乐的动人旋律、艺术的独特魅力、自然的旖旎风光，还是身边人的喜怒哀乐，都能在他们心中激起层层情感涟漪。他们情感丰富细腻，念旧怀古之情浓烈，常常精心留存那些意义非凡的纪念品，这些物品如同一束束温暖的光，照亮他们的生活，让他们的内心盈满喜悦。
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
                  fillRule="evenodd"
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
                          "flex w-[100px] items-center justify-start gap-x-1 whitespace-nowrap text-base",
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
                          "flex w-[100px] items-center justify-end gap-x-1 whitespace-nowrap text-base",
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

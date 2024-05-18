import { EnvironmentOutlined } from "@ant-design/icons";
import SVG from "react-inlinesvg";

import { getRoutePrefix } from "@/utils/route";

/**
 * 地理位置
 */
const SectionLocation = () => {
  return (
    <>
      <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
        <div>位置</div>
        <div className="opacity-50">location</div>
      </h5>

      <SVG
        className="china-map w-[min(100%, 600px)] absolute inset-0 z-0 m-auto aspect-[1] translate-x-0 translate-y-0 fill-none stroke-white stroke-[2px] opacity-30 transition-[opacity,scale,translate] delay-[0s,.5s,0s] duration-[1s,1s,1s] ease-[cubic-bezier(.6,_.1,_0,_1),cubic-bezier(.5,_0,_0,_1),cubic-bezier(.5,_0,_0,_1)] group-hover:translate-x-[-6%] group-hover:translate-y-[-5%] group-hover:opacity-70 group-hover:delay-[0s,0s,.5s] group-hover:ease-[cubic-bezier(.6,_.1,_0,_1),cubic-bezier(.5,_0,_0,_1),cubic-bezier(.6,_.1,_0,_1)]"
        src={`${getRoutePrefix()}/images/index/map.svg`}
      />

      <div className="opacity-1 group-hover:opacity-1 flex items-center justify-between gap-2 transition-opacity delay-[1s]">
        <div className="flex flex-col justify-between gap-1">
          <div className="text-[18px]">湖南省</div>
          <div className="text-[18px]">
            <a
              className="group/more flex cursor-pointer items-center justify-between gap-2"
              target="_blank"
              rel="noreferrer"
              href="https://map.baidu.com/search/%E5%A8%84%E5%BA%95%E5%B8%82/@12468086,3191561.2500000005,13z?querytype=s&da_src=shareurl&wd=%E5%A8%84%E5%BA%95&c=221&src=0&pn=0&sug=0&l=14&b=(12460869.421294013,3187750.310880837;12475551.877860459,3195256.742613471)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2"
              aria-hidden
            >
              <span className="bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat text-[18px] leading-[24px] transition-all group-hover/more:bg-[length:100%_1px]">
                娄底市
              </span>
              <EnvironmentOutlined rev={undefined} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionLocation;

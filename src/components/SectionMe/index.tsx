import { message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";

/**
 * 我模块
 */
const SectionMe = () => {
  return (
    <>
      <h5 className="z-10 flex w-full justify-between text-[14px] font-semibold uppercase">
        <div>您好</div>
        <div className="opacity-50">me</div>
      </h5>

      <div className="word-break max-w-full text-[13px]">
        关于刘小聪，是一名前端程序员、React陪伴大师、Vue使用达人、Python轻度爱好者、Golang微度使用者、Github提交达人、微信阅读神作研习生、电影观阅人、前爱奇艺会员、最佳熬夜冠军提名。其实它仅仅只是一个名字。
      </div>

      <div className="flex h-[48px] items-end justify-between gap-4">
        <a
          className="flex cursor-pointer flex-col items-center justify-between gap-2 bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat transition-all hover:bg-[length:100%_1px]"
          href="mailto:hankliu62@163.com"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            viewBox="0 0 1024 1024"
            width={20}
            height={20}
            fill="currentColor"
          >
            <path d="M188.49 259.44l305.48 268.6c10.31 9.07 25.75 9.07 36.06 0l305.48-268.6c18.92-16.63 7.16-47.81-18.02-47.81H206.52c-25.17 0-36.94 31.18-18.03 47.81z"></path>
            <path d="M876.26 296.33l-328.2 288.58c-20.63 18.14-51.51 18.14-72.13 0L147.74 296.33c-17.64-15.53-45.34-2.99-45.34 20.5v440.92c0 30.16 24.45 54.61 54.61 54.61h709.97c30.16 0 54.61-24.45 54.61-54.61V316.84c0.01-23.5-27.69-36.02-45.33-20.51z"></path>
          </svg>
          <span className="leading-[18px]">me@163.com</span>
        </a>

        <a
          className="flex cursor-pointer flex-col items-center justify-between gap-2 bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat transition-all hover:bg-[length:100%_1px]"
          href="tencent://AddContact/?fromId=45&amp;fromSubId=1&amp;subcmd=all&amp;uin=397694072"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            viewBox="0 0 1024 1024"
            width={20}
            height={20}
            fill="currentColor"
          >
            <path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"></path>
          </svg>
          <span className="leading-[18px]">397694072</span>
        </a>

        <CopyToClipboard
          text="HankLxc"
          onCopy={() => message.success("复制成功")}
        >
          <a
            className="flex cursor-pointer flex-col items-center justify-between gap-2 bg-gradient-to-r from-[rgb(255_255_255_/_50%)] to-[rgb(255_255_255_/_50%)] bg-[length:0_1px] bg-[left_100%] bg-no-repeat transition-all hover:bg-[length:100%_1px]"
            data-fancybox=""
            data-src="#wechat"
          >
            <svg
              viewBox="0 0 1024 1024"
              width={20}
              height={20}
              fill="currentColor"
            >
              <path d="M1024 659.2c0-147.2-147.2-262.4-307.2-262.4-172.8 0-307.2 115.2-307.2 262.4 0 147.2 134.4 262.4 307.2 262.4 38.4 0 70.4-6.4 108.8-19.2l102.4 51.2L896 870.4C972.8 812.8 1024 742.4 1024 659.2zM614.4 614.4c-19.2 0-38.4-19.2-38.4-38.4 0-19.2 19.2-38.4 38.4-38.4 25.6 0 44.8 19.2 44.8 38.4C659.2 595.2 646.4 614.4 614.4 614.4zM812.8 614.4c-19.2 0-38.4-19.2-38.4-38.4 0-19.2 19.2-38.4 38.4-38.4 25.6 0 44.8 19.2 44.8 38.4C864 595.2 844.8 614.4 812.8 614.4z"></path>
              <path d="M364.8 128C166.4 128 0 262.4 0 435.2c0 102.4 51.2 179.2 147.2 243.2l-38.4 108.8 128-64c44.8 6.4 83.2 19.2 128 19.2 12.8 0 25.6 0 32 0C390.4 716.8 384 691.2 384 665.6c0-160 134.4-288 307.2-288 12.8 0 25.6 0 32 0C697.6 236.8 537.6 128 364.8 128zM243.2 371.2C217.6 371.2 192 352 192 326.4c0-25.6 25.6-44.8 57.6-44.8s44.8 19.2 44.8 44.8C288 352 268.8 371.2 243.2 371.2zM499.2 371.2c-25.6 0-57.6-19.2-57.6-44.8 0-25.6 25.6-44.8 57.6-44.8 25.6 0 44.8 19.2 44.8 44.8C544 352 524.8 371.2 499.2 371.2z"></path>
            </svg>
            <span className="leading-[18px]">HankLxc</span>
          </a>
        </CopyToClipboard>
      </div>
    </>
  );
};

export default SectionMe;

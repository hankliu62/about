import "@/styles/globals.css";
import "dayjs/locale/zh-cn";
// 页面滚动元素动画
import "aos/dist/aos.css";

import { ConfigProvider, Watermark } from "antd";
import dayjs from "dayjs";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";

import useTopWindow from "@/hooks/useTopWindow";
import DefaultLayout from "@/layouts/index";
import theme from "@/theme/themeConfig";
import { getRoutePrefix } from "@/utils/route";

dayjs.locale("zh_CN");

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

/**
 * 网站入口APP类
 * @param param0
 * @returns
 */
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  const isTop = useTopWindow();

  return (
    <>
      <Head>
        <title>刘小聪 - 个人简介</title>
        <link rel="icon" href={`${getRoutePrefix()}/favicon.ico`} />
        <meta
          name="description"
          content="刘小聪，一名前端程序员、React陪伴大师、Vue使用达人、Python轻度爱好者、Golang微度使用者、Github提交达人、微信阅读神作研习生、电影观阅人、前爱奇艺会员、最佳熬夜冠军提名。仅仅只是一个名字。"
        />
        <meta
          name="keywords"
          content="刘小聪,前端开发,前端开发工程师,frontend,卡鲁秋,Hank,HankLiu"
        />
        <meta name="author" content="Hank.Liu" />
      </Head>

      {getLayout(
        <ConfigProvider theme={theme}>
          <Watermark
            content={isTop ? "刘小聪" : ""}
            font={{ color: "rgba(0, 0, 0, 0.1)" }}
            className="flex h-full flex-1 flex-col"
          >
            <Component {...pageProps} />
          </Watermark>
        </ConfigProvider>
      )}
    </>
  );
}

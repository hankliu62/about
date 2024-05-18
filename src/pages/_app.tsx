import "@/styles/globals.css";
import "dayjs/locale/zh-cn";
// 页面滚动元素动画
import "aos/dist/aos.css";
// footer组件
import "@hankliu/rc-footer/assets/index.css";
// exception组件
import "@hankliu/rc-exception/assets/index.css";

import { ConfigProvider, Watermark } from "antd";
import dayjs from "dayjs";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";

import { PageDescription, PageKeywords, PageTitle } from "@/constants";
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
        <title>{PageTitle.split(" - ").reverse().join(" - ")}</title>
        <link rel="icon" href={`${getRoutePrefix()}/favicon.ico`} />
        <meta name="description" content={PageDescription} />
        <meta name="keywords" content={PageKeywords.join(",")} />
        <meta name="author" content="Hank.Liu" />
        <meta name="copyright" content="卡鲁秋" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
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

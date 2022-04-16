import { AppProps } from "next/app";
import { ComponentType, ReactNode } from "react";
import { EmotionCache } from "@emotion/react";

export type ComponentWithLayoutProps = AppProps & {
	Component: AppProps["Component"] & {
		PageLayout?: ComponentType;
	};
	emotionCache?: EmotionCache;
};

export interface IAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export interface AdminLayoutProps {
	children: ReactNode;
	window?: () => Window;
}

export interface FrontLayoutProps {
	children: ReactNode;
}

import type { NextComponentType, NextPageContext, NextLayoutComponentType } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

declare module "next" {
	type NextLayoutComponentType<P = Record<string, unknown>> = NextComponentType<NextPageContext, any, P> & {
		PageLayout?: (page: any) => any;
	};
}

declare module "next/app" {
	type AppLayoutProps<P = Record<string, unknown>> = AppProps & {
		Component: NextLayoutComponentType;
	};
}

declare module "*.svg" {
	const content: any;
	export const ReactComponent: any;
	export default content;
}

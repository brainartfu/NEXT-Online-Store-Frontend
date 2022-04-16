import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../theme/createEmotionCache";
import { Children } from "react";
import { appTheme } from "../theme/theme";

export default class MyDocument extends Document {
	public render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta name="theme-color" content={appTheme.palette.primary.main} />
					<link rel="shortcut icon" href="/static/favicon.ico" />

					{/* fonts start */}

					<link href="https://fonts.cdnfonts.com/css/euclid-circular-a" rel="stylesheet" />
					<link href="https://fonts.cdnfonts.com/css/sedan" rel="stylesheet" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,400&family=Oswald:wght@300;400;500&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
						rel="stylesheet"
					/>

					<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />

					{/* fonts end */}

					{(this.props as any).emotionStyleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	const view = ctx.renderPage;
	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () =>
		view({
			enhanceApp: (App: any) => (props) => <App emotionCache={cache} {...props} />,
		});

	const initialProps = await Document.getInitialProps(ctx);
	// This is important. It prevents emotion to render invalid HTML.
	// See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(" ")}`}
			key={style.key}
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps, // Styles fragment is rendered after the app and page rendering finish.
		styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
	};
};

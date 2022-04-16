import type { NextPage } from "next";
import Head from "next/head";
import { Banner, SearchFaqs } from "../components/faqs";

const FAQs: NextPage = () => {
	return (
		<div>
			<Head>
				<title>faqs</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Banner />
			<SearchFaqs />
		</div>
	);
};

export default FAQs;

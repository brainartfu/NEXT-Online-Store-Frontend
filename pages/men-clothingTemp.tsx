import type { NextPage } from "next";
import Head from "next/head";
import { Banner, Clothing } from "../components/menClothing";

const MenClothing: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Banner />
			<Clothing />
		</div>
	);
};

export default MenClothing;

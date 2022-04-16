import type { NextPage } from "next";
import Head from "next/head";
import { SearchProduct } from "../components/searchResults";

const SearchResults: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<SearchProduct />
		</div>
	);
};

export default SearchResults;

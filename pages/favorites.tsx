import type { NextPage } from "next";
import Head from "next/head";
import { FavoritesProduct } from "../components/favorites";

const Favorites: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Favorites</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<FavoritesProduct />
		</div>
	);
};

export default Favorites;

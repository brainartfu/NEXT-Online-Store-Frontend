import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Banner, Clothing } from "../../../components/menClothing";

const Collection: NextPage = () => {
	const router = useRouter();
	const collection = router.query.collection;

	console.log(collection);

	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{collection === "clothing" ? (
				<div>
					<Banner />
					<Clothing />
				</div>
			) : collection === "discounts" ? (
				<div>discount</div>
			) : null}
		</div>
	);
};

export default Collection;

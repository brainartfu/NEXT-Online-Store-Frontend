import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Banner as MenBanner, Collections as MenCollections } from "../../components/men";
import { Banner as WomenBanner, Collections as WomenCollections } from "../../components/women";
import { Banner as KidsBanner, Collections as KidsCollections } from "../../components/kids";

const Category: NextPage = () => {
	const router = useRouter();
	const category = router.query.cat;

	console.log(category);

	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{category === "men" ? (
				<>
					<MenBanner />
					<MenCollections />
				</>
			) : category === "women" ? (
				<>
					<WomenBanner />
					<WomenCollections />
				</>
			) : category === "kids" ? (
				<>
					<KidsBanner />
					<KidsCollections />
				</>
			) : null}
		</div>
	);
};

export default Category;

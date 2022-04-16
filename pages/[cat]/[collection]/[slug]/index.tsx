import { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
	ProductView,
	ProductDetails,
	RelatedProducts,
	AlsoLikeProducts,
	RatingsAndReviews,
	FloatingAdvertise,
} from "../../../../components/product";

const Category: NextPage = () => {
	const router = useRouter();
	const productId = router.query.cat;

	console.log(productId);

	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<>
				<ProductView />
				<ProductDetails />
				<RatingsAndReviews />
				<RelatedProducts />
				<AlsoLikeProducts />
				<FloatingAdvertise />
			</>
		</div>
	);
};

export default Category;

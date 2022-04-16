import type { NextPage } from "next";
import Head from "next/head";

// components
import {
	AlsoLikeProducts,
	ProductDetails,
	ProductView,
	RatingsAndReviews,
	RelatedProducts,
	FloatingAdvertise,
} from "../../components/product";

const Product: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ProductView />
			<ProductDetails />
			<RatingsAndReviews />
			<RelatedProducts />
			<AlsoLikeProducts />
			<FloatingAdvertise />
		</div>
	);
};

export default Product;

import type { NextPage } from "next";
import Head from "next/head";
import { AlsoLikeProducts, ShoppingCart } from "../components/cart";

const Cart: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ShoppingCart />
			<AlsoLikeProducts />
		</div>
	);
};

export default Cart;

import type { NextPage } from "next";
import Head from "next/head";
import { OrderDetails, ThanksOrder } from "../components/orderPlaced";

const OrderPlaced: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ThanksOrder />
			<OrderDetails />
		</div>
	);
};

export default OrderPlaced;

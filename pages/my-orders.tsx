import type { NextPage } from "next";
import Head from "next/head";
import { Orders } from "../components/myOrders";

const MyOrders: NextPage = () => {
	return (
		<div>
			<Head>
				<title>My Orders</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Orders />
		</div>
	);
};

export default MyOrders;

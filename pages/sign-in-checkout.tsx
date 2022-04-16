import type { NextPage } from "next";
import Head from "next/head";
import { ContinueCheckout } from "../components/signInCheckout";

const SignInCheckout: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ContinueCheckout />
		</div>
	);
};

export default SignInCheckout;

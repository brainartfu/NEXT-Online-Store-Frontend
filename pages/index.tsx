import type { NextLayoutComponentType } from "next";
import Head from "next/head";
import { Hero, ForFemale, ForMen, ForKids, LatestProducts, ProvideQuality, Collections } from "../components/home";
import FrontLayout from "../Layout/FrontLayout";

const Home: NextLayoutComponentType = () => {
	return (
		<div>
			<Head>
				<title>Welcome Hoomey</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Toastify severity="info" /> - kept here for testing purpose */}
			<main>
				<Hero />
				<ForFemale />
				<ForMen />
				<ForKids />
				<LatestProducts />
				<ProvideQuality />
				<Collections />
			</main>

			{/* popup & others section area*/}
			{/* <SignUp /> */}
			{/* <SignIn /> */}
			{/* <PasswordChange /> */}
			{/* <AbondonCart /> */}

			{/*EMAIL TEMPLATE*/}
			{/* <AdminEmail /> */}
			{/* <NewsletterEmail /> */}
			{/* <UserAdminEmail /> */}
			{/* <NewUserEmail /> */}
			{/* <OrderPlacedEmail /> */}
			{/* <AbondonCartEmail /> */}
			{/* <OfferEmail /> */}
			{/* <PurchasedEmail /> */}
		</div>
	);
};

Home.PageLayout = FrontLayout;

export default Home;

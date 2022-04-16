import { useRouter } from "next/router";
import React, { FC } from "react";
import AppBreadcrumb from "../components/common/AppBreadcrumb";
import Commitment from "../components/common/Commitment";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";
import NewsLetter from "../components/common/newsLetter";
import { FrontLayoutProps } from "../types/page";
import { CTAPopup, NewsLetterPopup } from "../components/common";

const FrontLayout: FC<FrontLayoutProps> = ({ children }) => {
	const router = useRouter();

	return (
		<div>
			<nav>
				<Navbar />
			</nav>

			<main>
				{router.pathname === "/" ? null : <AppBreadcrumb />}
				{children}
				{/* popup - they are showing itself any time & any where on the whole applications*/}
				<NewsLetterPopup />
				<CTAPopup />
				<NewsLetter />
				<Commitment />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default FrontLayout;

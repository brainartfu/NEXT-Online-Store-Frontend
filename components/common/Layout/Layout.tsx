import { useRouter } from "next/router";
import React, { FC } from "react";
import AppBreadcrumb from "../AppBreadcrumb";
import Commitment from "../Commitment";
import Footer from "../footer";
import Navbar from "../navbar";
import NewsLetter from "../newsLetter";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
	const router = useRouter();

	return (
		<div>
			<nav>
				<Navbar />
			</nav>

			<main>
				{router.pathname === "/" ? null : <AppBreadcrumb />}
				{children}
				<NewsLetter />
				<Commitment />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;

import { Box, Typography, Button } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "../../../ui";
import Footer from "./footer";
import Header from "./header";

const EmailLayout = ({ children }: { children: ReactNode }) => {
	return (
		// <Container maxWidth="md">
		<Box sx={{ bgcolor: "background.paper" }}>
			<Header />
			<Box py={3.5} px={5}>
				{/* body-content */}
				{children}

				{/* going to faqs, returns, privacy-policy & terms-of-service */}
				<Typography component="div" sx={{ mt: 3 }}>
					<Box sx={{ lineHeight: 1, my: -0.5 }}>
						Questions or FAQs? Check out our{" "}
						<Link href="/faqs">
							<Button sx={{ textDecoration: "underline" }}>Frequently Asked Questions.</Button>
						</Link>
					</Box>
					<Box sx={{ lineHeight: 1, my: -0.5 }}>
						In case of any refund or return visit
						<Link href="/return">
							<Button sx={{ textDecoration: "underline" }}>Returns.</Button>
						</Link>
					</Box>
					<Box sx={{ lineHeight: 1, my: -0.5 }}>
						Visit{" "}
						<Link href="/privacy-policy">
							<Button sx={{ textDecoration: "underline" }}>Privacy Policy</Button>
						</Link>{" "}
						and
						<Link href="/terms-of-service">
							<Button sx={{ textDecoration: "underline" }}> Terms of Service</Button>
						</Link>{" "}
						for our policies & terms
					</Box>
				</Typography>
			</Box>
			<Footer />
		</Box>
		// </Container>
	);
};

export default EmailLayout;

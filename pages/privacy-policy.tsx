import { Box, Container, List, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { HeadingText } from "../components/styledComponents";
import { BulletListItem, Link } from "../components/ui";
import { COLORS } from "../theme/colors";

const PrivacyPolicy: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box mb={9.1}>
				<Container>
					<Typography variant="h6" fontWeight="medium" textAlign="center">
						Privacy Policy
					</Typography>
					<Typography sx={{ color: COLORS.GRANITE_GREY, my: 2.5 }}>
						{`This Privacy Policy describes how hoomey.myshopify.com (the “Site” or “we”) collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.`}
					</Typography>

					<HeadingText sx={{ my: 2.5 }}>Collecting Personal Information</HeadingText>
					<Typography sx={{ color: COLORS.GRANITE_GREY }}>
						{`When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual (including the information below) as “Personal Information”. See the list below for more information about what Personal Information we collect and why.`}
					</Typography>

					{/*  */}
					<HeadingText sx={{ my: 2.5, textDecoration: "underline" }}>Device information</HeadingText>
					<List>
						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								<Typography component="span" fontWeight="medium">
									Examples of Personal Information collected:
								</Typography>{" "}
								version of web browser, IP address, time zone, cookie information, what sites or
								products you view, search terms, and how you interact with the Site.
							</Typography>
						</BulletListItem>

						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								<Typography component="span" fontWeight="medium">
									Purpose of collection:
								</Typography>{" "}
								to load the Site accurately for you, and to perform analytics on Site usage to optimize
								our Site.
							</Typography>
						</BulletListItem>

						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								<Typography component="span" fontWeight="medium">
									Source of collection:
								</Typography>{" "}
								Collected automatically when you access our Site using cookies, log files, web beacons,
								tags, or pixels{" "}
								<Typography component="span" sx={{ fontStyle: "italic" }}>
									[ADD OR SUBTRACT ANY OTHER TRACKING TECHNOLOGIES USED].
								</Typography>
							</Typography>
						</BulletListItem>

						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								<Typography component="span" fontWeight="medium">
									Disclosure for a business purpose:
								</Typography>{" "}
								shared with our processor Shopify
								<Typography component="span" sx={{ fontStyle: "italic" }}>
									[ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS INFORMATION].
								</Typography>
							</Typography>
						</BulletListItem>
					</List>

					{/*  */}
					<HeadingText sx={{ my: 2.5, textDecoration: "underline" }}>Order information</HeadingText>
					<List>
						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								<Typography component="span" fontWeight="medium">
									Examples of Personal Information collected:
								</Typography>{" "}
								name, billing address, shipping address, payment information (including credit card
								numbers , number.
								<Typography component="span" sx={{ fontStyle: "italic" }}>
									[INSERT ANY OTHER PAYMENT TYPES ACCEPTED])
								</Typography>{" "}
								email address, and phone
							</Typography>
						</BulletListItem>

						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								<Typography component="span" fontWeight="medium">
									Purpose of collection:
								</Typography>{" "}
								to provide products or services to you to fulfill our contract, to process your payment
								information, arrange for shipping, and provide you with invoices and/or order
								confirmations, communicate with you, screen our orders for potential risk or fraud, and
								when in line with the preferences you have shared with us, provide you with information
								or advertising relating to our products or services.
							</Typography>
						</BulletListItem>

						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								<Typography component="span" fontWeight="medium">
									Source of collection:
								</Typography>{" "}
								collected from you.
							</Typography>
						</BulletListItem>

						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								<Typography component="span" fontWeight="medium">
									Disclosure for a business purpose:
								</Typography>{" "}
								shared with our processor Shopify
								<Typography component="span" sx={{ fontStyle: "italic" }}>
									{" "}
									[ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS INFORMATION. FOR EXAMPLE, SALES
									CHANNELS, PAYMENT GATEWAYS, SHIPPING AND FULFILLMENT APPS].
								</Typography>{" "}
							</Typography>
						</BulletListItem>
					</List>

					<HeadingText sx={{ my: 2.5, textDecoration: "underline" }}>
						Customer support information
					</HeadingText>
					<List>
						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								<Typography component="span" fontWeight="medium">
									Examples of Personal Information collected:
								</Typography>{" "}
								<Typography component="span" sx={{ fontStyle: "italic" }}>
									[MODIFICATIONS TO THE INFORMATION LISTED ABOVE OR ADDITIONAL INFORMATION AS NEEDED]
								</Typography>
							</Typography>
						</BulletListItem>

						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								<Typography component="span" fontWeight="medium">
									Purpose of collection:
								</Typography>{" "}
								to provide customer support.
							</Typography>
						</BulletListItem>

						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								<Typography component="span" fontWeight="medium">
									Disclosure for a business purpose:
								</Typography>{" "}
								<Typography component="span" sx={{ fontStyle: "italic" }}>
									{" "}
									[ADD ANY VENDORS USED TO PROVIDE CUSTOMER SUPPORT]
								</Typography>
							</Typography>
						</BulletListItem>

						<Typography sx={{ color: COLORS.GRANITE_GREY }}>
							<Typography component="span" sx={{ fontStyle: "italic" }}>
								[INSERT ANY OTHER INFORMATION YOU COLLECT: OFFLINE DATA, PURCHASED MARKETING DATA/LISTS]
								[INSERT FOLLOWING SECTION IF AGE RESTRICTION IS REQUIRED]
							</Typography>
						</Typography>
					</List>

					{/*  */}
					<HeadingText sx={{ my: 2.5 }}>Minors</HeadingText>
					<Typography
						sx={{ color: COLORS.GRANITE_GREY }}
					>{`The Site is not intended for individuals under the age of [INSERT AGE]. We do not intentionally collect Personal Information from children. If you are the parent or guardian and believe your child has provided us with Personal Information, please contact us at the address below to request deletion.`}</Typography>

					{/*  */}
					<HeadingText sx={{ my: 2.5 }}>Sharing Personal Information</HeadingText>
					<Typography
						sx={{ color: COLORS.GRANITE_GREY }}
					>{`We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:`}</Typography>
					<List>
						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								We use Shopify to power our online store. You can read more about how Shopify uses your
								Personal Information here:{" "}
								<Link href="https://www.shopify.com/legal/privacy.">
									https://www.shopify.com/legal/privacy.
								</Link>
							</Typography>
						</BulletListItem>
						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								We may share your Personal Information to comply with applicable laws and regulations,
								to respond to a subpoena, search warrant or other lawful request for information we
								receive, or to otherwise protect our rights.
							</Typography>
						</BulletListItem>
						<BulletListItem>
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								<Typography component="span" sx={{ fontStyle: "italic" }}>
									[INSERT INFORMATION ABOUT OTHER SERVICE PROVIDERS]
								</Typography>
							</Typography>
						</BulletListItem>
						<Typography sx={{ color: COLORS.GRANITE_GREY }}>
							<Typography component="span" sx={{ fontStyle: "italic" }}>
								[INCLUDE FOLLOWING SECTION IF USING REMARKETING OR TARGETED ADVERTISING]
							</Typography>
						</Typography>
					</List>

					{/*  */}

					{/* <HeadingText sx={{ my: 2.5 }}></HeadingText>
						<Typography sx={{ color: COLORS.GRANITE_GREY }}>{``}</Typography> */}
				</Container>
			</Box>
		</div>
	);
};

export default PrivacyPolicy;

import { Box, Container, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { IMAGES } from "../uiElements";

const AboutUs: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box mb={9.1}>
				<Container>
					{/* banner */}
					<Box mb={5}>
						<Image
							src={IMAGES.AboutBanner}
							alt="banner"
							layout="responsive"
							objectFit="cover"
							placeholder="blur"
						/>
					</Box>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={3} md={2}>
							<Typography variant="h6">About Us</Typography>
						</Grid>
						<Grid item xs={12} sm={9} md={10}>
							<Typography color="text.secondary" sx={{ lineHeight: "28px" }}>
								Welcome to Hoomey, your number one source for all exquisite products. We&apos;re
								dedicated to providing you the best of high quality products, with a focus on
								dependability, customer service and affordable prices. <br /> We&apos;re working to turn
								our passion into a booming online store. We hope you enjoy our products as much as we
								enjoy offering them to you. If you have any questions or comments, please don&apos;t
								hesitate to contact us.
							</Typography>

							<br />
							<Typography color="text.secondary">
								Sincerely,
								<br /> Hoomey.co
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</div>
	);
};

export default AboutUs;

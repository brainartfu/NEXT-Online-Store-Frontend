import { Box, Container, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Return: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* content */}
			<Box mb={9.1}>
				<Container>
					{/* banner */}
					<Box my={5}>
						<Grid container spacing={{ xs: 2, md: 5 }}>
							<Grid item xs={12} md={3}>
								<Typography variant="h6">Rufund Policy</Typography>
							</Grid>
							<Grid item xs={12} md={9}>
								<Typography color="text.secondary">
									We have a 30-day return policy, which means you have 30 days after receiving your
									item to request a return. To be eligible for a return, your item must be in the same
									condition that you received it, unworn or unused, with tags, and in its original
									packaging. You&apos;ll also need the receipt or proof of purchase. If your return is
									accepted, we&apos;ll send you a return shipping label, as well as instructions on
									how and where to send your package. Items sent back to us without first requesting a
									return will not be accepted.
								</Typography>
							</Grid>
						</Grid>
					</Box>
					<Box my={5}>
						<Grid container spacing={{ xs: 2, md: 5 }}>
							<Grid item xs={12} md={3}>
								<Typography variant="h6">Damages and issues</Typography>
							</Grid>
							<Grid item xs={12} md={9}>
								<Typography color="text.secondary">
									Please inspect your order upon reception and contact us immediately if the item is
									defective, damaged or if you receive the wrong item, so that we can evaluate the
									issue and make it right.
								</Typography>
							</Grid>
						</Grid>
					</Box>
					<Box my={5}>
						<Grid container spacing={{ xs: 2, md: 5 }}>
							<Grid item xs={12} md={3}>
								<Typography variant="h6">Exceptions / non-returnable items</Typography>
							</Grid>
							<Grid item xs={12} md={9}>
								<Typography color="text.secondary">
									Certain types of items cannot be returned, like perishable goods (such as food,
									flowers, or plants), custom products (such as special orders or personalized items),
									and personal care goods (such as beauty products). We also do not accept returns for
									hazardous materials, flammable liquids, or gases. Please get in touch if you have
									questions or concerns about your specific item. Unfortunately, we cannot accept
									returns on sale items or gift cards.
								</Typography>
							</Grid>
						</Grid>
					</Box>
					<Box my={5}>
						<Grid container spacing={{ xs: 2, md: 5 }}>
							<Grid item xs={12} md={3}>
								<Typography variant="h6">Exchanges</Typography>
							</Grid>
							<Grid item xs={12} md={9}>
								<Typography color="text.secondary">
									The fastest way to ensure you get what you want is to return the item you have, and
									once the return is accepted, make a separate purchase for the new item.
								</Typography>
							</Grid>
						</Grid>
					</Box>
					<Box my={5}>
						<Grid container spacing={{ xs: 2, md: 5 }}>
							<Grid item xs={12} md={3}>
								<Typography variant="h6">Refunds</Typography>
							</Grid>
							<Grid item xs={12} md={9}>
								<Typography color="text.secondary">
									We will notify you once we’ve received and inspected your return, and let you know
									if the refund was approved or not. If approved, you’ll be automatically refunded on
									your original payment method. Please remember it can take some time for your bank or
									credit card company to process and post the refund too.
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</div>
	);
};

export default Return;

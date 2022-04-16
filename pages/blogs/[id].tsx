import { Container, Typography, Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../../components/common";
import { IMAGES } from "../../uiElements";

const BlogDetails: NextPage = () => {
	return (
		<div>
			<Head>
				<title>blog-detials</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Box mb={9.1}>
					<Container>
						<Typography sx={{ mb: 5 }} variant="h6" fontWeight="medium" textAlign="center">
							Blogs
						</Typography>
						<Box my={3}>
							<Box sx={{ position: "relative", mb: 3 }}>
								<Image
									src={IMAGES.BlogBanner1}
									alt="banner-hero"
									layout="responsive"
									placeholder="blur"
								/>
							</Box>
							<Typography variant="h6" fontWeight="medium">
								Monthly Phone Wallpaper
							</Typography>
							<Typography variant="subtitle2" fontWeight="light" sx={{ my: 1.3, color: "#ABABAB" }}>
								by Hoomey on April 26, 2022
							</Typography>
							<Typography color="text.secondary">
								Wallpaper for your phone every month Spring has sprung, and we&apos;ve got a free phone
								wallpaper for you! With this beautiful phone wallpaper, you can celebrate nature&apos;s
								serenity! Enchanted gardens, violet blossoms, and vintage spells inspired this
								collection! You may use it online on your phone or print it out and paste it into your
								favourite bullet journal page for a beautiful look! Wallpaper for your phone every month
								Spring has sprung, and we&apos;ve got a free phone wallpaper for you! With this
								beautiful phone wallpaper, you can celebrate nature&apos;s serenity! Enchanted gardens,
								violet blossoms, and vintage spells inspired this collection! You may use it online on
								your phone or print it out and paste it into your favourite bullet journal page for a
								beautiful look! Wallpaper for your phone every month Spring has sprung, and we&apos;ve
								got a free phone wallpaper for you! With this beautiful phone wallpaper, you can
								celebrate nature&apos;s serenity! Enchanted gardens, violet blossoms, and vintage spells
								inspired this collection! You may use it online on your phone or print it out and paste
								it into your favourite bullet journal page for a beautiful look! Wallpaper for your
								phone every month Spring has sprung, and we&apos;ve got a free phone wallpaper for you!
								With this beautiful phone wallpaper, you can celebrate nature&apos;s serenity! Enchanted
								gardens, violet blossoms, and vintage spells inspired this collection! You may use it
								online on your phone or print it out and paste it into your favourite bullet journal
								page for a beautiful look!
							</Typography>
						</Box>
					</Container>
				</Box>
			</Layout>
		</div>
	);
};

export default BlogDetails;

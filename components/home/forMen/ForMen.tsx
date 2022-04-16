import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { FC, useState } from "react";
import Image from "next/image";

import Heading from "../../ui/Heading";
import ShopForButton from "../../ui/ShopForButton";
import { IMAGES } from "../../../uiElements";
import { ROUTING_TREE } from "../../../constants/siteUrls";
import { Link } from "../../ui";

const ForMen: FC = () => {
	const [isLoading, setIsLoading] = useState(true);

	// kept it just for checking loading sign
	setTimeout(() => {
		setIsLoading(false);
	}, 3000);

	return (
		<Box my={9.1}>
			<Container maxWidth="lg">
				<Grid container spacing={5} alignItems="center">
					<Grid item xs={12} md={5} sx={{ order: { xs: 2, md: 1 } }}>
						{isLoading ? (
							<div>
								<Skeleton variant="text" sx={{ fontSize: "2.5rem", mb: 3 }} />
								<Skeleton />
								<Skeleton />
								<Skeleton />
								<Skeleton width="60%" />
								<Skeleton sx={{ mt: 2, width: 160, height: 65 }} />
							</div>
						) : (
							<div>
								<Heading text="Wearables & Accessories For Men" />
								<Typography sx={{ fontSize: 12 }} color="text.secondary">
									Whatever the weather brings this season, we&apos;ve got a variety of trendy outfits
									for you to choose from. We have everything you need, from casual tops, t-shirts, and
									jeans for lazy days to shorts and swimsuits for your next vacation. Our clothing may
									simply be matched with our newest trainers to change up your gym style. Stock up on
									essentials like undergarments in a variety of styles, or relax in our comfortable
									loungewear.
								</Typography>
								<Link href={ROUTING_TREE.MEN}>
									<ShopForButton btnText="Shop For Men" />
								</Link>
							</div>
						)}
					</Grid>
					<Grid item xs={12} md={7} sx={{ order: { xs: 1, md: 2 } }}>
						{isLoading ? (
							<Skeleton
								variant="rectangular"
								sx={{ width: "100%", height: { xs: 250, sm: 300, md: 400 } }}
							/>
						) : (
							<Image
								src={IMAGES.ManImg}
								alt={"Female"}
								// height={650}
								objectFit="cover"
								layout="responsive"
								placeholder="blur"
							/>
						)}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ForMen;

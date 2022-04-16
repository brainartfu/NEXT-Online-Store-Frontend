import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { FC, useState } from "react";
import Image from "next/image";

import Heading from "../../ui/Heading";
import ShopForButton from "../../ui/ShopForButton";
import { IMAGES } from "../../../uiElements";
import { ROUTING_TREE } from "../../../constants/siteUrls";
import { Link } from "../../ui";

const ForKids: FC = () => {
	const [isLoading, setIsLoading] = useState(true);

	// kept it just for checking loading sign
	setTimeout(() => {
		setIsLoading(false);
	}, 5000);
	return (
		<Box my={9.1}>
			<Container maxWidth="lg">
				<Grid container spacing={5} alignItems="center">
					<Grid item xs={12} md={7}>
						{isLoading ? (
							<Skeleton
								variant="rectangular"
								sx={{ width: "100%", height: { xs: 250, sm: 300, md: 400 } }}
							/>
						) : (
							<Image
								src={IMAGES.KidsSowImg}
								alt={"Female"}
								// height={458}
								objectFit="cover"
								layout="responsive"
								placeholder="blur"
							/>
						)}
					</Grid>
					<Grid item xs={12} md={5}>
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
								<Heading text="Wearables & Accessories For Kids" />
								<Typography sx={{ fontSize: 12 }} color="text.secondary">
									Our kid&apos;s apparel collection was created with him in mind, so he may look
									stylish and comfortable at all times. Refresh his wardrobe with the latest trends,
									from essential jeans, hoodies, and t-shirts for playtime to suits and shirts for
									more formal events. Shorts and swimwear are essentials for your next vacation, while
									our footwear and accessories properly complete his ensemble.
								</Typography>
								<Link href={ROUTING_TREE.KIDS}>
									<ShopForButton btnText="Shop For Kids" />
								</Link>
							</div>
						)}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ForKids;

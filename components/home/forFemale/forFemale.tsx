import { FC, useState } from "react";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import Image from "next/image";

import Heading from "../../ui/Heading";
import ShopForButton from "../../ui/ShopForButton";
import { IMAGES } from "../../../uiElements";
import { ROUTING_TREE } from "../../../constants/siteUrls";
import Link from "../../ui/Link";

const ForFemale: FC = () => {
	const [isLoading, setIsLoading] = useState(true);

	// kept it just for checking loading sign
	setTimeout(() => {
		setIsLoading(false);
	}, 2000);

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
								src={IMAGES.FemaleImg}
								alt={"Female"}
								// height={471}
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
								<Heading text="Wearables & Accessories For Woman" />
								<Typography sx={{ fontSize: 12 }} color="text.secondary">
									Our women&apos;s collection has crucial seasonal pieces to refresh your wardrobe. We
									have everything you need, from sophisticated casual jumpsuits, dresses, and heels to
									swim and beachwear for your next vacation. Tops in seasonal stripes and vivid
									prints, as well as jeans in a variety of sizes, are available. Complete your
									ensemble with a variety of purses, shoes, and accessories.
								</Typography>
								<Link href={ROUTING_TREE.WOMEN}>
									<ShopForButton btnText="Shop For Woman" />
								</Link>
							</div>
						)}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ForFemale;

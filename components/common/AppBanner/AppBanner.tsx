import Image, { StaticImageData } from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { useStyles } from "./styled";

const AppBanner = ({ image }: { image: StaticImageData | string }) => {
	const classes = useStyles();

	return (
		<Box mb={9.1}>
			<Box sx={{ height: 597, position: "relative" }}>
				<Box className={classes.banner}>
					<Image src={image} alt="banner-hero" layout="fill" objectFit="cover" placeholder="blur" />
				</Box>
				<Box className={classes.content}>
					<Typography variant="h5" sx={{ fontFamily: "Sedan" }}>
						Discover the new you
					</Typography>
					<Button variant="contained">Shop Now</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default AppBanner;

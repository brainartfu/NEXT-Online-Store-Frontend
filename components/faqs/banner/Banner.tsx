import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useGlobalJSStyles } from "../../../styles/styled";
import { IMAGES } from "../../../uiElements";

const Banner = () => {
	const classes = useGlobalJSStyles();

	return (
		<Box mb={9.1}>
			<Container>
				<Box sx={{ height: 343, position: "relative" }}>
					<Box className={classes.darkBanner}>
						<Image
							src={IMAGES.FAQSBanner}
							alt="banner-hero"
							layout="fill"
							objectFit="cover"
							placeholder="blur"
						/>
					</Box>
					<Box className={classes.darkBannerContent}>
						<Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
							How Can We Help?
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Banner;

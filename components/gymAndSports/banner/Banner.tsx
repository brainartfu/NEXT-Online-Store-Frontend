import { FC } from "react";
import { Box } from "@mui/material";
import { IMAGES } from "../../../uiElements";
import AppBanner from "../../common/AppBanner";

const Banner: FC = () => {
	return (
		<Box mb={9.1}>
			<AppBanner image={IMAGES.GymHeroHeroImg} />
		</Box>
	);
};

export default Banner;

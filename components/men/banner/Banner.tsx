import { FC } from "react";
import { Box } from "@mui/material";
import AppBanner from "../../common/AppBanner";
import { IMAGES } from "../../../uiElements";

const Banner: FC = () => {
	return (
		<Box mb={9.1}>
			<AppBanner image={IMAGES.MenHeroImg} />
		</Box>
	);
};

export default Banner;

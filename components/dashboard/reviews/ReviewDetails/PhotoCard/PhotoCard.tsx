import { Box, CardContent, Typography } from "@mui/material";

import Rating from "@mui/material/Rating";
import Image from "next/image";
import { IMAGES } from "../../../../../uiElements";
import { StyledCard } from "../../../components/styledComponents";

const PhotoCard = () => {
	return (
		<StyledCard>
			<CardContent>
				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25 }}>
					<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="Medium">
						Tshirt Levis
					</Typography>
					<Box sx={{ display: "flex" }}>
						<Rating name="customized-10" defaultValue={1} max={1} />
						<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="Medium">
							4.5/5
						</Typography>
					</Box>
				</Box>
				<Box>
					{" "}
					<Image src={IMAGES.TshirtLevisImg} height={200} width={350} objectFit="cover" placeholder="blur" />
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default PhotoCard;

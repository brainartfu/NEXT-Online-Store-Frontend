import { Box, CardContent, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { IMAGES } from "../../../../../uiElements";
import { StatusText, StyledCard } from "../../../components/styledComponents";

const TitleCard = () => {
	return (
		<StyledCard>
			<CardContent>
				<Box>
					<Stack direction="row" spacing={3}>
						<Image
							src={IMAGES.TshirtLevisImg}
							height={85}
							width={85}
							objectFit="cover"
							placeholder="blur"
						/>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-around",
							}}
						>
							<Typography sx={{ fontSize: 16 }} fontWeight="medium">
								Lorem Ipsum
							</Typography>
							<StatusText fw={500} status="Active">
								Active
							</StatusText>
							<Typography sx={{ fontSize: 16 }} fontWeight="medium">
								4 variant
							</Typography>
						</Box>
					</Stack>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default TitleCard;

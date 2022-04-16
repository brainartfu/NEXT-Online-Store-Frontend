import { Box, CardContent, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { IMAGES } from "../../../../../uiElements";
import { StyledCard } from "../../../components/styledComponents";

const CurrentVariants = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 2.25 }} fontWeight="medium">
					Current Variants
				</Typography>

				<Box sx={{ mb: 2.25, minWidth: "26%" }}>
					<Stack direction="row" spacing={1}>
						<Image
							src={IMAGES.TshirtLevisImg}
							height={65}
							width={65}
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
							<Typography sx={{ fontWeight: "400", fontSize: 14 }}>Lorem Ipsum</Typography>
						</Box>
					</Stack>
				</Box>

				<Box sx={{ mb: 2.25, minWidth: "26%" }}>
					<Stack direction="row" spacing={1}>
						<Image
							src={IMAGES.JeansJacketImg}
							height={65}
							width={65}
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
							<Typography sx={{ fontWeight: "400", fontSize: 14 }}>Lorem Ipsum</Typography>
						</Box>
					</Stack>
				</Box>

				<Box sx={{ mb: 2.25, minWidth: "26%" }}>
					<Stack direction="row" spacing={1}>
						<Image
							src={IMAGES.TshirtLevisImg}
							height={65}
							width={65}
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
							<Typography sx={{ fontWeight: "400", fontSize: 14 }}>Lorem Ipsum</Typography>
						</Box>
					</Stack>
				</Box>

				<Box sx={{ mb: 2.25, minWidth: "26%" }}>
					<Stack direction="row" spacing={1}>
						<Image
							src={IMAGES.JeansJacketImg}
							height={65}
							width={65}
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
							<Typography sx={{ fontWeight: "400", fontSize: 14 }}>Lorem Ipsum</Typography>
						</Box>
					</Stack>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default CurrentVariants;

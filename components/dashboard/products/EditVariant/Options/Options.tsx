import { Box, CardContent, IconButton, Typography } from "@mui/material";
import { DeleteRedSvg } from "../../../../icons";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const Media = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Options
				</Typography>
				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="medium">
					Color
				</Typography>
				<Box
					component="form"
					sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mt: 1.25, mb: 1.25 }}
				>
					<StyledTextField size="small" placeholder="Pink" fullWidth required />
					<IconButton>
						<DeleteRedSvg />
					</IconButton>
				</Box>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Media
				</Typography>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: 1.25,
						border: "2px solid rgba(34,47,62, .1)",
						borderRadius: "5px",
						height: "120px",
					}}
				>
					<Box
						sx={{
							display: "flex",

							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<IconButton color="primary" aria-label="upload picture" component="label">
							<input hidden accept="image/*,video/*" type="file" />
							<Typography sx={{ color: "#E2BC82", fontWeight: "500", fontSize: "16px", mt: 2 }}>
								Add file
							</Typography>
						</IconButton>

						<Typography sx={{ color: "#E2BC82", fontWeight: "500", fontSize: "16px", mt: 2, ml: 2, mr: 2 }}>
							|
						</Typography>
						<IconButton color="primary" aria-label="upload picture" component="label">
							<input hidden accept="url*" type="url" />
							<Typography sx={{ color: "#E2BC82", fontWeight: "500", fontSize: "16px", mt: 2 }}>
								Add from URL
							</Typography>
						</IconButton>
					</Box>

					<Typography
						sx={{ color: "#8B8B8B", fontWeight: "500", fontSize: "16px", mb: 1.25 }}
						fontWeight="light"
					>
						Add images, videos or 3D models
					</Typography>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Media;

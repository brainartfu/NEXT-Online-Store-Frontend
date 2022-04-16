import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Button, DialogActions, DialogContent, IconButton, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { IMAGES } from "../../../../../uiElements";
import { PopupDivider, RoundButton } from "../../../../styledComponents";
import { StyledTextField } from "../../../components/styledComponents";

const EditReview = ({ handleTogglePopup }: { handleTogglePopup: (toggle: boolean) => void }) => {
	return (
		<>
			<DialogContent>
				<Typography textAlign="center" variant="h6" fontFamily="Poppins" fontWeight={600}>
					Edit Review
				</Typography>
				<PopupDivider />
				<Box
					sx={{
						display: "flex",

						gap: 2.5,
						justifyContent: "space-between",
						flexWrap: "wrap",
					}}
				>
					<Typography sx={{ fontSize: "18px" }} fontWeight="medium">
						Ratings
					</Typography>

					<RoundButton color="error" variant="contained">
						Delete
					</RoundButton>
				</Box>
				<Rating name="size-large" defaultValue={3} size="large" />
				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25 }}>
					<Typography sx={{ fontSize: 16, mb: 1.25 }} fontWeight="medium">
						Review
					</Typography>
					<Typography sx={{ color: "#8B8B8B", fontWeight: "600", fontSize: "12px" }} fontWeight="medium">
						200 chracters
					</Typography>
				</Box>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25, minWidth: "620px" }}>
					<StyledTextField
						size="medium"
						placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos amet neque dolore maxime
								eaque debitis quae, temporibus voluptates minus voluptatem. Deleniti aspernatur rerum
								sit, minima optio blanditiis fugit? Vero, iure!"
						fullWidth
						required
						multiline
					/>
				</Box>
				<Typography sx={{ fontSize: 14, mb: 1.25, mt: 1.25 }} fontWeight="medium">
					Attachments
				</Typography>
				<Box
					sx={{
						display: "flex",
						maxHeight: "116px",
						maxWidth: "180px",
						gap: 1.25,
						justifyContent: "flex-start",
						flexWrap: "wrap",
					}}
				>
					{" "}
					<Image src={IMAGES.HoodieCrossImg} height={"116px"} width={"84px"} placeholder="blur" />
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",

							padding: 2,
							gap: 1.25,
							border: "2px solid rgba(34,47,62, .1)",

							height: "116px",
							width: "84px",
						}}
					>
						<IconButton>
							<AddCircleIcon />
						</IconButton>
					</Box>
				</Box>
			</DialogContent>

			<DialogActions>
				<Button fullWidth color="secondary" variant="contained" onClick={() => handleTogglePopup(false)}>
					Cancel
				</Button>
				<Button fullWidth color="secondary" variant="outlined" onClick={() => handleTogglePopup(false)}>
					Update
				</Button>
			</DialogActions>
		</>
	);
};

export default EditReview;

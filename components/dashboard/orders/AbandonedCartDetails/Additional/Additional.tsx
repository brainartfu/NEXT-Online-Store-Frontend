import { CardContent, Box, Typography, InputLabel } from "@mui/material";
import { RoundButton } from "../../../../styledComponents";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const Additional = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ mb: 2.5 }} fontWeight={600} fontSize={18}>
					Additional Details
				</Typography>
				<Box component="form" autoComplete="off">
					<Box>
						<InputLabel sx={{ color: "secondary.main", mb: 1.25 }}>Tags</InputLabel>
						<StyledTextField size="small" placeholder="Add a note this checkout" fullWidth required />
					</Box>

					<Box sx={{ textAlign: "center" }}>
						<RoundButton
							sx={{ mt: 3.75, maxWidth: 300 }}
							fullWidth
							type="submit"
							color="secondary"
							size="large"
							variant="contained"
						>
							Save
						</RoundButton>
					</Box>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Additional;

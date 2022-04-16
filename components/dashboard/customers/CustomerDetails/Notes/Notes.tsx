import { CardContent, Box, Typography } from "@mui/material";
import { RoundButton } from "../../../../styledComponents";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const Notes = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography fontWeight={600} fontSize={18} gutterBottom>
					Notes
				</Typography>
				<Typography color="text.secondary" variant="body2">
					No notes about this customer
				</Typography>

				<Box sx={{ mt: 1.25 }} component="form" autoComplete="off">
					<StyledTextField fullWidth multiline rows={5} placeholder="Write note..." />

					<Box sx={{ textAlign: "center" }}>
						<RoundButton
							sx={{ mt: 2.5, minWidth: 120 }}
							type="submit"
							variant="contained"
							color="secondary"
						>
							Add
						</RoundButton>
					</Box>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Notes;

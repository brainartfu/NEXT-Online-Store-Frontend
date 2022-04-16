import { CardContent, Typography, Box } from "@mui/material";
import { StyledCard, StyledLabel, StyledTextField } from "../../../components/styledComponents";

const Notes = () => {
	return (
		<StyledCard sx={{ height: "100%" }}>
			<CardContent>
				<Box textAlign="center">
					<Typography gutterBottom fontWeight="medium" fontSize={18}>
						Notes
					</Typography>
					<Typography color="text.secondary" variant="body2">
						Add notes about your customer
					</Typography>
				</Box>

				<Box>
					<StyledLabel fw="500">Note</StyledLabel>
					<StyledTextField size="small" fullWidth />
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Notes;

import { Typography, CardContent, Box } from "@mui/material";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const Notes = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="bold">
					Notes
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
					<StyledTextField size="small" fullWidth required />
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Notes;

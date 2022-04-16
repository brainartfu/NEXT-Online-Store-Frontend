import { Typography, CardContent, Box } from "@mui/material";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const Tags = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="bold">
					Tags
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
					<StyledTextField size="small" placeholder="Find Tags" fullWidth required />
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Tags;

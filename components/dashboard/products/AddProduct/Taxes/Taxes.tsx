import { Box, CardContent, Typography } from "@mui/material";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const Taxes = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Taxes
				</Typography>
				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="medium">
					Tax (%)
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
					<StyledTextField size="small" placeholder="10" fullWidth required />
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Taxes;

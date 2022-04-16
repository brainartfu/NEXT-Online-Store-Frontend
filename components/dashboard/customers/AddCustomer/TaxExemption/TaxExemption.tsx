import { CardContent, Typography, Box, FormControlLabel, Checkbox } from "@mui/material";
import { StyledCard } from "../../../components/styledComponents";

const TaxExemption = () => {
	return (
		<StyledCard sx={{ height: "100%" }}>
			<CardContent>
				<Box textAlign="center">
					<Typography gutterBottom fontWeight="medium" fontSize={18}>
						Tax Exemption
					</Typography>
				</Box>

				<FormControlLabel control={<Checkbox defaultChecked />} label="Collect tax" />
			</CardContent>
		</StyledCard>
	);
};

export default TaxExemption;

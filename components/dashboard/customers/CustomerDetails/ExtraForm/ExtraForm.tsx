import { CardContent, FormControlLabel, Box, Typography, Checkbox } from "@mui/material";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const ExtraForm = () => {
	return (
		<>
			{/* Tax Exemptions */}
			<Box my={2.5}>
				<StyledCard>
					<CardContent>
						<Typography fontWeight="medium" gutterBottom>
							Tax Exemptions
						</Typography>
						<FormControlLabel label="Collect Tax" control={<Checkbox defaultChecked />} />
					</CardContent>
				</StyledCard>
			</Box>

			{/* Marketing Status */}
			<Box my={2.5}>
				<StyledCard>
					<CardContent>
						<Typography fontWeight="medium" gutterBottom>
							Marketing Status
						</Typography>
						<FormControlLabel label="Email subscription" control={<Checkbox defaultChecked />} />
						<br />
						<FormControlLabel label="SMS subscription" control={<Checkbox />} />
					</CardContent>
				</StyledCard>
			</Box>

			{/* Tags */}
			<Box my={2.5}>
				<StyledCard>
					<CardContent>
						<Typography fontWeight="medium" sx={{ mb: 2.5 }}>
							Tags
						</Typography>
						<StyledTextField size="small" fullWidth placeholder="Find Tags" />
					</CardContent>
				</StyledCard>
			</Box>
		</>
	);
};

export default ExtraForm;

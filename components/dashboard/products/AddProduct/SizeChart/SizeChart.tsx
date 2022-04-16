import { Box, CardContent, Typography } from "@mui/material";
import { StyledButton, StyledCard, StyledTextField } from "../../../components/styledComponents";

const SizeChart = () => {
	return (
		<StyledCard>
			<CardContent>
				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mb: 1.25 }}>
					<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
						Size Chart
					</Typography>
					<StyledButton sx={{ px: 2 }} type="submit" variant="contained" color="secondary">
						Upload Image
					</StyledButton>
				</Box>
				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="medium">
					Upload Image
				</Typography>

				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25 }}>
					<StyledTextField size="small" placeholder="Image title png" fullWidth required />
					<StyledButton
						sx={{ px: 2, minWidth: "132px", maxHeight: "40px" }}
						type="submit"
						variant="contained"
						color="secondary"
					>
						Upload Image
					</StyledButton>
				</Box>
				<Typography sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "12px", mt: 1.25 }} fontWeight="light">
					Upload the image of size chart of the product so user can check the size before ordering the
					product.
				</Typography>
			</CardContent>
		</StyledCard>
	);
};

export default SizeChart;

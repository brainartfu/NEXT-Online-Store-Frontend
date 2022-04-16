import { Box, CardContent, Typography } from "@mui/material";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const Category = () => {
	return (
		<StyledCard>
			<CardContent>
				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mb: 1.25 }}>
					<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
						Category
					</Typography>
					<Typography sx={{ color: "#E2BC82", fontWeight: "600", fontSize: "14px" }} fontWeight="medium">
						Add Category
					</Typography>
				</Box>

				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="medium">
					Select Category
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
					<StyledTextField size="small" placeholder="Search types" fullWidth required />
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Category;

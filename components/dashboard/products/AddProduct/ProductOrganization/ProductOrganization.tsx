import { Box, CardContent, Typography } from "@mui/material";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const ProductOrganization = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Product organization
				</Typography>
				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="medium">
					Types
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.25 }}>
					<StyledTextField size="small" placeholder="Search types" fullWidth required />
				</Box>
				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="medium">
					Vendor
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.25 }}>
					<StyledTextField size="small" fullWidth required />
				</Box>
				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="medium">
					Collections
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.25 }}>
					<StyledTextField size="small" fullWidth required />
				</Box>
				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="medium">
					Tags
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.25 }}>
					<StyledTextField size="small" placeholder="Search tags" fullWidth required />
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default ProductOrganization;

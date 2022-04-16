import { Box, CardContent, Typography } from "@mui/material";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const MetaFields = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Metafields
				</Typography>

				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography sx={{ fontSize: 14, mb: 1.25, minWidth: "30%", mt: 1 }} fontWeight="semibold">
						Product rating count
					</Typography>
					<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25, minWidth: "60%" }}>
						<StyledTextField size="small" fullWidth required />
					</Box>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
					<Typography sx={{ fontSize: 14, mb: 1.25, minWidth: "30%", mt: 1 }} fontWeight="semibold">
						Product rating
					</Typography>
					<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25, minWidth: "60%" }}>
						<StyledTextField size="small" fullWidth required />
					</Box>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default MetaFields;

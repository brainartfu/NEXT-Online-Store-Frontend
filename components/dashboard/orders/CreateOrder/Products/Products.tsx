import { Typography, CardContent, Box } from "@mui/material";
import { SearchIcon } from "../../../../icons";
import { StyledButton, StyledCard, StyledTextField } from "../../../components/styledComponents";

const Products = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="bold">
					Products
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
					<StyledTextField size="small" placeholder="Search products" fullWidth required />
					<StyledButton
						sx={{ px: 4 }}
						type="submit"
						variant="contained"
						color="secondary"
						startIcon={<SearchIcon />}
					>
						Search
					</StyledButton>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Products;

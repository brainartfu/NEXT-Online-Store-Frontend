import { Box, Typography } from "@mui/material";
import { ROUTING_TREE } from "../../../../constants/siteUrls";
import { RoundButton } from "../../../styledComponents";
import ProductsTable from "./ProductsTable";
import { Link } from "../../../ui";

const Products = () => {
	return (
		<div>
			<Box
				sx={{
					mb: 4,
					mt: 2,
					display: "flex",
					alignItems: "center",
					gap: 2.5,
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
			>
				<Typography variant="h6" fontWeight={600}>
					Products
				</Typography>

				<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
					<Link
						href={`${ROUTING_TREE.DASHBOARD.PRODUCTS.ROOT}/${ROUTING_TREE.DASHBOARD.PRODUCTS.CATEGORY.ROOT}`}
					>
						<RoundButton variant="contained">Categories</RoundButton>
					</Link>

					<Link href={`${ROUTING_TREE.DASHBOARD.PRODUCTS.ROOT}/${ROUTING_TREE.DASHBOARD.PRODUCTS.ADD.ROOT}`}>
						<RoundButton variant="contained" color="secondary">
							Add Product
						</RoundButton>
					</Link>
				</Box>
			</Box>

			{/* table section */}
			<Box my={2.5}>
				<ProductsTable />
			</Box>
		</div>
	);
};
export default Products;

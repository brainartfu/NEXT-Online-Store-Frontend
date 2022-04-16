import React from "react";
import ShippingTable from "./ShippingTable";
import { Box, Typography } from "@mui/material";
import { RoundButton } from "../../../styledComponents";
import { Link } from "../../../ui";
import { ROUTING_TREE } from "../../../../constants/siteUrls";

const Shipping = () => {
	return (
		<div>
			{/* top part of shipping */}
			<Box
				sx={{
					mb: 4,
					mt: 2,
					gap: 2.5,
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Typography variant="h6" fontWeight={600}>
					Shipping
				</Typography>

				<Link
					href={`${ROUTING_TREE.DASHBOARD.ROOT}/${ROUTING_TREE.DASHBOARD.SHIPPING.ROOT}/${ROUTING_TREE.DASHBOARD.SHIPPING.ADD_NEW}`}
				>
					<RoundButton color="secondary" variant="contained">
						Add New
					</RoundButton>
				</Link>
			</Box>

			{/* table section */}
			<Box my={2.5}>
				<ShippingTable />
			</Box>
		</div>
	);
};

export default Shipping;

import { Typography, Box } from "@mui/material";
import React from "react";
import CustomersTable from "./CustomersTable";
import { RoundButton } from "../../../styledComponents";
import { Link } from "../../../ui";
import { ROUTING_TREE } from "../../../../constants/siteUrls";

const Customers = () => {
	return (
		<div>
			{/* top part of orders */}
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
					Customers
				</Typography>

				<Link href={`${ROUTING_TREE.DASHBOARD.CUSTOMERS.ROOT}/${ROUTING_TREE.DASHBOARD.CUSTOMERS.ADD}`}>
					<RoundButton color="secondary" variant="contained">
						Add Customer
					</RoundButton>
				</Link>
			</Box>

			{/* table section */}
			<Box my={2.5}>
				<CustomersTable />
			</Box>
		</div>
	);
};

export default Customers;

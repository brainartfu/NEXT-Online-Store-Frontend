import { CardContent, Typography, IconButton, Stack, Box, Grid } from "@mui/material";

import { CartText } from "../../styledComponents";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	BarIndicatorIcon,
	DollarCartIcon,
	NoteIcon,
	PeopleIcon,
} from "../components/icons";
import { StyledCard } from "../components/styledComponents";
import EarningRevenueChart from "./EarningRevenueChart";
import OrdersTable from "./OrdersTable";
import TopSalesChart from "./TopSalesChart";
import TopSellingProductsTable from "./TopSellingProductsTable";
import UsersTable from "./UsersTable";

const historyItems = [
	{
		largeIcon: <PeopleIcon fontSize="large" />,
		samallIcon: <ArrowUpIcon />,
		title: "10",
		dec: "Customers",
		subtitle: "+20% Inc",
		color: "#04AF00",
	},
	{
		largeIcon: <NoteIcon fontSize="large" />,
		samallIcon: <ArrowDownIcon />,
		title: "7",
		dec: "Orders",
		subtitle: "-20% Dec",
		color: "#FF0303",
	},
	{
		largeIcon: <BarIndicatorIcon fontSize="large" />,
		samallIcon: <ArrowUpIcon />,
		title: "$2500",
		dec: "Revenue",
		subtitle: "-20% Inc",
		color: "#04AF00",
	},
	{
		largeIcon: <DollarCartIcon fontSize="large" />,
		samallIcon: <ArrowDownIcon />,
		title: "$7",
		dec: "AVG Order Value",
		subtitle: "-20% Dec",
		color: "#FF0303",
	},
];

const Dashboard = () => {
	return (
		<div>
			<Typography sx={{ mb: 4, mt: 2 }} variant="h6" fontWeight={600}>
				Dashboard
			</Typography>

			{/* dashboar top history */}

			<Grid container spacing={2.5}>
				{historyItems.map((item, idx) => (
					<Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
						<StyledCard>
							<CardContent>
								<Stack direction="row" alignItems="center" spacing={1}>
									<Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 2.5 }}>
										<IconButton
											sx={{ height: 75, width: 75, backgroundColor: "rgba(0, 0, 0, 0.04)" }}
										>
											{item.largeIcon}
										</IconButton>
										<Stack spacing={1}>
											<Typography variant="h5" fontWeight="bold" sx={{ opacity: 0.7 }}>
												{item.title}
											</Typography>
											<Typography variant="body2" sx={{ opacity: 0.7 }}>
												{item.dec}
											</Typography>
										</Stack>
									</Box>
									<Stack alignItems="center" spacing={1}>
										{item.samallIcon}
										<CartText color={item.color}>{item.subtitle}</CartText>
									</Stack>
								</Stack>
							</CardContent>
						</StyledCard>
					</Grid>
				))}
			</Grid>

			<Box my={3.8}>
				{/* Earning Revenue, Top Sales & Users table */}
				<Box my={3.5} component="section">
					<Grid container spacing={2.5}>
						{/* Earning Revenue */}
						<Grid item xs={12} md={6} lg={5} xl={6}>
							<EarningRevenueChart />
						</Grid>

						{/* Top Sales */}
						<Grid item xs={12} md={6} lg={4} xl={3}>
							<TopSalesChart />
						</Grid>

						{/* Users table */}
						<Grid item xs={12} lg={3}>
							<UsersTable />
						</Grid>
					</Grid>
				</Box>

				{/* orders & top sellings products => Twice table*/}
				<Box my={3.5} component="section">
					<Grid container spacing={2.5}>
						<Grid item xs={12} lg={6}>
							<OrdersTable />
						</Grid>
						<Grid item xs={12} lg={6}>
							<TopSellingProductsTable />
						</Grid>
					</Grid>
				</Box>
			</Box>
		</div>
	);
};

export default Dashboard;

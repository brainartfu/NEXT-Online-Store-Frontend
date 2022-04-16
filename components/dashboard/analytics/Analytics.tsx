import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { ROUTING_TREE } from "../../../constants/siteUrls";
import { CircleIconButton, RoundButton } from "../../styledComponents";
import { Link } from "../../ui";
import { ArrowDownIcon, ArrowUpIcon } from "../components/icons";
import AvgOrderValueChart from "./AvgOrderValueChart";
import CustomerRateChart from "./CustomerRateChart";
import DayComparedToFilter from "./DayComparedToFilter";
import OnlineStoreConversionRateChart from "./OnlineStoreConversionRateChart";
import Reportings from "./Reportings";
import TopCard from "./TopCard";
import TotalOnlineStoreVisitsChart from "./TotalOnlineStoreVisitsChart";
import TotalOrdersChart from "./TotalOrdersChart";
import TotalSalesChart from "./TotalSalesChart";

const analyticsData = {
	Visitors: {
		value: "212",
		title: "Visitors",
		text1: "162 yesterday’s total",
		text2: "",
	},
	Conversion: {
		value: "3.42%",
		title: "Conversion",
		text1: "2.47% yesterday’s total",
		text2: "",
	},
	Orders: {
		value: "7",
		title: "Orders",
		text1: "3 yesterday at this time",
		text2: "4 yesterday’s total",
	},
	Revenue: {
		value: "$312.06",
		title: "Revenue",
		text1: "$160.93 yesterday at this time",
		text2: "$230.92 yesterday’s total",
	},
};
const graphData = {
	TotalSales: {
		smallIcon: <ArrowUpIcon />,
		title: "$50",
		titleColor: "#E2BC82",
		dec: "Customers",
		subtitle: "+20% Inc",
		color: "#04AF00",
	},
	TotalOnlineStoreVisits: {
		smallIcon: <ArrowDownIcon />,
		title: "89",
		titleColor: "#45BABD",
		dec: "Orders",
		subtitle: "-20% Dec",
		color: "#FF0303",
	},
	CustomerRate: {
		smallIcon: <ArrowUpIcon />,
		title1: "60.00%",
		title1Sub: "New customers",
		title1Color: "#8A34FF",
		title2: "40.00%",
		title2Sub: "Repeat customers",
		title2Color: "#00ADD3",
		dec: "Revenue",
		subtitle: "-20% Inc",
		color: "#04AF00",
	},
	OnlineStoreConversionRate: {
		smallIcon: <ArrowDownIcon />,
		title: "3.37%",
		titleColor: "#20C997",
		dec: "AVG Order Value",
		subtitle: "-20% Dec",
		color: "#FF0303",
	},
	AvgOrderValue: {
		smallIcon: <ArrowUpIcon />,
		title: "$31.16",
		titleColor: "#FF7049",
		dec: "Customers",
		subtitle: "+20% Inc",
		color: "#04AF00",
	},
	TotalOrders: {
		smallIcon: <ArrowDownIcon />,
		title: "3",
		titleColor: "#FF0303",
		dec: "AVG Order Value",
		subtitle: "-20% Dec",
		color: "#FF0303",
	},
};

const Analytics = () => {
	const [state, setState] = useState("analytics");
	return (
		<div>
			{/* top part of Analytics */}
			{state === "analytics" && (
				<>
					<Box
						sx={{
							mb: 2,
							mt: 2,
							display: "flex",
							alignItems: "center",
							gap: 2.5,
							justifyContent: "space-between",
							flexWrap: "wrap",
						}}
					>
						<Typography variant="h6" fontWeight={600}>
							Analytics
						</Typography>

						<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
							<Link
								href={`${ROUTING_TREE.DASHBOARD.ANALYTICS.ROOT}/${ROUTING_TREE.DASHBOARD.ANALYTICS.REPORTINGS}`}
							>
								<RoundButton variant="contained">Reportings</RoundButton>
							</Link>
						</Box>
					</Box>

					{/* Day filter */}
					<Box
						sx={{
							mb: 4,
							display: "flex",
							alignItems: "start",
							gap: 2.5,
							justifyContent: "flex-start",
							flexWrap: "wrap",
						}}
					>
						<DayComparedToFilter />
					</Box>

					{/* Analyticts top card */}

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
						<TopCard analyticsData={analyticsData} />
					</Box>

					{/* graphs section */}
					<Box my={3.8}>
						{/* Earning Revenue, Top Sales & Users table */}
						<Box my={3.5} component="section">
							<Grid container spacing={2.5}>
								{/* Total Sales */}
								<Grid item xs={12} lg={4}>
									<TotalSalesChart TotalSalesData={graphData.TotalSales} />
								</Grid>

								{/* Total Online Store Visits */}
								<Grid item xs={12} lg={4}>
									<TotalOnlineStoreVisitsChart
										TotalOnlineStoreVisitsData={graphData.TotalOnlineStoreVisits}
									/>
								</Grid>

								{/* Cstomer Rate*/}
								<Grid item xs={12} lg={4}>
									<CustomerRateChart CustomerRateData={graphData.CustomerRate} />
								</Grid>

								{/* Online Store Conversion Rate */}
								<Grid item xs={12} lg={4}>
									<OnlineStoreConversionRateChart
										OnlineStoreConversionRateData={graphData.OnlineStoreConversionRate}
									/>
								</Grid>

								{/* Average Order Value */}
								<Grid item xs={12} lg={4}>
									<AvgOrderValueChart AvgOrderData={graphData.AvgOrderValue} />
								</Grid>

								{/* Total Orders */}
								<Grid item xs={12} lg={4}>
									<TotalOrdersChart TotalOrdersData={graphData.TotalOrders} />
								</Grid>
							</Grid>
						</Box>
					</Box>
				</>
			)}
			{state === "reportings" && (
				<>
					<Box
						sx={{
							mb: 2,
							mt: 2,
							display: "flex",
							alignItems: "center",
							gap: 2.5,
							justifyContent: "flex-start",
							flexWrap: "wrap",
						}}
					>
						<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
							<CircleIconButton
								sx={{ minWidth: "6px", padding: "2px" }}
								onClick={() => setState("analytics")}
							>
								<ArrowBackIcon />
							</CircleIconButton>
							<Typography
								sx={{
									fontWeight: "500",
									fontSize: "18px",
									marginY: "auto",
								}}
								align="center"
							>
								Reportings
							</Typography>
						</Box>
						<Reportings />
					</Box>
				</>
			)}
		</div>
	);
};

export default Analytics;

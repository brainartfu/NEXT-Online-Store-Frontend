import { Box, CardContent, MenuItem, Select, SelectChangeEvent, Stack, SvgIconProps, Typography } from "@mui/material";
import { useState } from "react";
import { StyledCard, StyledFormControl } from "../../components/styledComponents";
// import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { CartText } from "../../../styledComponents";
const Chart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

// chart options
const options: ApexOptions = {
	chart: {
		// height: 350,
		type: "area",
		toolbar: {
			show: false,
		},
		foreColor: "rgba(0 0 0 / 50%)",
	},
	grid: {
		borderColor: "#F4F4F4",
	},

	fill: {
		type: "gradient",
		// opacity: 0.5,
		// type: "solid",
		gradient: {
			// shadeIntensity: 1,
			// opacityFrom: 0,
			// opacityTo: 0.9,
			colorStops: [
				{
					offset: 80,
					color: "#6674BB",
					opacity: 0.3,
				},
				{
					offset: 80,
					color: "#6674BB",
					opacity: 0.3,
				},
			],
		},
	},
	colors: ["#6674BB"],
	dataLabels: {
		enabled: true,
		style: {
			fontSize: "0px",
			fontFamily: "Helvetica, Arial, sans-serif",
			fontWeight: "bold",
			colors: undefined,
		},
	},
	markers: {
		size: 5,
		strokeColors: "#fff",
		strokeWidth: 2,
		strokeOpacity: 0.9,
		strokeDashArray: 0,
		fillOpacity: 1,
		discrete: [],
		hover: {
			size: 9,
		},
		shape: "rect",
	},

	stroke: {
		curve: "straight",
	},
	xaxis: {
		categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	},

	tooltip: {
		x: {
			format: "dd/MM/yy HH:mm",
		},
	},
};

// chart series
const series = [
	{
		name: "TotalSales",
		data: [28, 18, 28, 19, 12, 25, 35],
	},
];
interface TotalOrderssDataProps {
	smallIcon: SvgIconProps;
	title: string;
	titleColor: string;
	dec: string;
	subtitle: string;
	color: string;
}

const TotalOrdersChart = ({ TotalOrdersData }: { TotalOrdersData: TotalOrderssDataProps }) => {
	const [filter, setFilter] = useState("10");

	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};

	return (
		<StyledCard>
			<CardContent>
				{/* enhanced toolbar */}
				<Stack direction="row" alignItems="center" spacing={1}>
					<Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 2.5 }}>
						<Typography
							sx={{ flex: "1 1 100%", fontSize: "16px", fontWeight: "500" }}
							id="tableTitle"
							component="div"
						>
							Total orders
						</Typography>
					</Box>
					<Box sx={{ minWidth: "135px", height: "45px" }}>
						<StyledFormControl fullWidth size="small">
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={filter}
								onChange={handleFilter}
							>
								<MenuItem value={10}>This Week</MenuItem>
								<MenuItem value={20}>This Month</MenuItem>
								<MenuItem value={30}>Quarterly</MenuItem>
								<MenuItem value={40}>Yearly</MenuItem>
							</Select>
						</StyledFormControl>
					</Box>
				</Stack>
				<Stack direction="row" alignItems="center" spacing={1}>
					<Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 2.5, mt: -2 }}>
						<Stack spacing={1}>
							<Typography
								variant="h5"
								fontWeight="bold"
								sx={{ opacity: 0.7, color: TotalOrdersData.titleColor }}
							>
								{TotalOrdersData.title}
							</Typography>
							<Typography sx={{ opacity: 0.9, fontSize: "14px", fontWeight: "500" }}>
								Visitors over time
							</Typography>
						</Stack>
					</Box>
					<Stack alignItems="center" spacing={1}>
						<>
							{TotalOrdersData.smallIcon}
							<CartText color={TotalOrdersData.color}>{TotalOrdersData.subtitle}</CartText>
						</>
					</Stack>
				</Stack>

				{/* radialbars chart */}
				<div id="chart">
					<Chart options={options} series={series} type="bar" height={340} />
				</div>
			</CardContent>
		</StyledCard>
	);
};

export default TotalOrdersChart;

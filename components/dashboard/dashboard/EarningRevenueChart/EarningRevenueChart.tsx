import { useState } from "react";
import { StyledCard, StyledFormControl } from "../../components/styledComponents";
import { Toolbar, Typography, MenuItem, Box, Select, SelectChangeEvent, CardContent } from "@mui/material";
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});
import { ApexOptions } from "apexcharts";

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
					offset: 20,
					color: "#E2BC82",
					opacity: 0,
				},
				{
					offset: 80,
					color: "#E2BC82",
					opacity: 0.5,
				},
			],
		},
	},
	colors: ["#7BD39A"],
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "smooth",
		show: true,
	},
	xaxis: {
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
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
		name: "Earning",
		data: [28, 18, 28, 19, 12, 25, 35],
	},
];

const TopSalesChart = () => {
	const [filter, setFilter] = useState("10");

	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};

	return (
		<StyledCard sx={{ height: "100%" }}>
			<CardContent>
				{/* enhanced toolbar */}
				<Toolbar
					sx={{
						pl: { sm: 2 },
						pr: { xs: 1, sm: 1 },
					}}
				>
					<Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
						Earning Revenue
					</Typography>

					<Box sx={{ minWidth: "160px" }}>
						<StyledFormControl fullWidth size="small">
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={filter}
								onChange={handleFilter}
							>
								<MenuItem value={10}>This Month</MenuItem>
								<MenuItem value={20}>Previous Month</MenuItem>
								<MenuItem value={30}>Last 6 Months</MenuItem>
								<MenuItem value={40}>This Year</MenuItem>
							</Select>
						</StyledFormControl>
					</Box>
				</Toolbar>

				{/* radialbars chart */}
				<div id="chart">
					<Chart options={options} series={series} type="area" height={350} />
				</div>
			</CardContent>
		</StyledCard>
	);
};

export default TopSalesChart;

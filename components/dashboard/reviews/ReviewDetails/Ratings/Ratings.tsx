import { Box, CardContent, Divider, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useState } from "react";
import { StyledCard, StyledFormControl } from "../../../components/styledComponents";

const Chart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

// chart options
const options: ApexOptions = {
	chart: {
		height: "150px",
		type: "bar",
		toolbar: {
			show: false,
		},
		redrawOnParentResize: true,
		foreColor: "rgba(0 0 0 / 50%)",
	},
	plotOptions: {
		bar: {
			borderRadius: 8,
			horizontal: true,
			columnWidth: "40%",
			barHeight: "70%",
		},
	},

	// fill: {
	// 	colors: ["#E3E3E3", "#E3E3E3", "#546E7A", "#E3E3E3", "#E3E3E3"],
	// 	//type: "gradient",
	// 	// opacity: 0.5,
	// 	type: "solid",
	// 	// gradient: {
	// 	// 	// shadeIntensity: 1,
	// 	// 	// opacityFrom: 0,
	// 	// 	// opacityTo: 0.9,
	// 	// 	colorStops: [
	// 	// 		{
	// 	// 			offset: 20,
	// 	// 			color: "#E3E3E3",
	// 	// 			opacity: 1,
	// 	// 		},
	// 	// 		{
	// 	// 			offset: 80,
	// 	// 			color: "#E3E3E3",
	// 	// 			opacity: 1,
	// 	// 		},
	// 	// 	],
	// 	// },
	// },
	colors: ["#E3E3E3", "#E3E3E3", "#13d8aa", "#E3E3E3", "#E3E3E3"],
	dataLabels: {
		enabled: true,
		style: {
			fontSize: "0px",
			fontFamily: "Helvetica, Arial, sans-serif",
			fontWeight: "bold",
			colors: undefined,
		},
	},
	grid: {
		show: false,
		xaxis: {
			lines: {
				show: false,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
	xaxis: {
		categories: ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"],
		labels: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
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
		name: "Total Reviews",
		data: [28, 18, 58, 19, 12],
	},
];

const Ratings = () => {
	const [filter, setFilter] = useState("10");

	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};

	return (
		<StyledCard>
			<CardContent>
				<Stack direction="row" alignItems="center" spacing={1}>
					<Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 2.5 }}>
						<Typography sx={{ flex: "1 1 100%", fontSize: "16px", fontWeight: "500" }} component="div">
							Ratings
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
								<MenuItem value={10}>Overall</MenuItem>
								<MenuItem value={20}>This Week</MenuItem>
								<MenuItem value={30}>This Month</MenuItem>
								<MenuItem value={40}>Quarterly</MenuItem>
								<MenuItem value={50}>Yearly</MenuItem>
							</Select>
						</StyledFormControl>
					</Box>
				</Stack>
				<Divider variant="middle" sx={{ mt: 1.25 }} />
				{/* radialbars chart */}
				<div id="chart">
					<Chart options={options} series={series} type="bar" height={170} />
				</div>
			</CardContent>
		</StyledCard>
	);
};
export default Ratings;

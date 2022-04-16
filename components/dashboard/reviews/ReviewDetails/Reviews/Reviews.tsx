import { Box, CardContent, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
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
		type: "donut",
		toolbar: {
			show: false,
		},
		redrawOnParentResize: true,
	},

	fill: {
		colors: ["#FF3131", "#13d8aa"],

		type: "solid",
	},
	labels: ["1-2 Stars", "3-5 Stars"],
	colors: ["red", "#13d8aa"],
	dataLabels: {
		enabled: true,
		style: {
			fontSize: "0px",
			fontFamily: "Helvetica, Arial, sans-serif",
			fontWeight: "bold",
			colors: undefined,
		},
	},

	tooltip: {
		x: {
			format: "dd/MM/yy HH:mm",
		},
	},
};

// chart series
const series = [25, 77];

const Reviews = () => {
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
							Reviews
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
				{/* radialbars chart */}
				<div id="chart">
					<Chart options={options} series={series} type="donut" height={190} />
				</div>
			</CardContent>
		</StyledCard>
	);
};
export default Reviews;

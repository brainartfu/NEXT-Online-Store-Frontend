import { Box, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { StyledFormControl } from "../components/styledComponents";
import { useStyles } from "./styled";
const DayComparedToFilter = () => {
	const [filter, setFilter] = useState("10");
	const classes = useStyles();

	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};
	return (
		<>
			<Box sx={{ minWidth: "100px" }}>
				<StyledFormControl fullWidth size="small" className={classes.daySelect}>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={filter}
						onChange={handleFilter}
					>
						<MenuItem value={10}>Today</MenuItem>
						<MenuItem value={20}>Week</MenuItem>
						<MenuItem value={30}>Month</MenuItem>
						<MenuItem value={40}>Year</MenuItem>
					</Select>
				</StyledFormControl>
			</Box>
			<Typography
				sx={{
					fontWeight: "400",
					fontSize: "12px",
					marginY: "auto",
				}}
				align="center"
			>
				Compared to
			</Typography>
			<Box sx={{ minWidth: "100px" }}>
				<StyledFormControl fullWidth size="small" className={classes.daySelect}>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={filter}
						onChange={handleFilter}
					>
						<MenuItem value={10}>Previous</MenuItem>
						<MenuItem value={20}>Last 3</MenuItem>
						<MenuItem value={30}>Last 6</MenuItem>
						<MenuItem value={40}>Last 8</MenuItem>
					</Select>
				</StyledFormControl>
			</Box>
		</>
	);
};
export default DayComparedToFilter;

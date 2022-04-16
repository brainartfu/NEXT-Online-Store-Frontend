import { Toolbar, Typography, MenuItem, Box, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { StyledFormControl } from "../../components/styledComponents";

const EnhancedTableToolbar = () => {
	const [filter, setFilter] = useState("10");

	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};
	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
			}}
		>
			<Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
				Orders
			</Typography>

			<Box sx={{ minWidth: "155px" }}>
				<StyledFormControl fullWidth size="small">
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={filter}
						onChange={handleFilter}
					>
						<MenuItem value={10}>Recent</MenuItem>
						<MenuItem value={20}>Pending</MenuItem>
						<MenuItem value={30}>Completed</MenuItem>
						<MenuItem value={40}>Refunded</MenuItem>
					</Select>
				</StyledFormControl>
			</Box>
		</Toolbar>
	);
};

export default EnhancedTableToolbar;

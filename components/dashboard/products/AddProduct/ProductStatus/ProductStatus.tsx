import { Box, CardContent, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { BorderFormControl, StyledCard } from "../../../components/styledComponents";
import { useStyles } from "../styled";

const ProductStatus = () => {
	const [filter, setFilter] = useState("10");

	const classes = useStyles();
	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};

	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Product status
				</Typography>

				<Box sx={{ minWidth: "135px", height: "45px" }}>
					<BorderFormControl fullWidth size="small" className={classes.statusSelect}>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={filter}
							onChange={handleFilter}
						>
							<MenuItem value={10}>Draft</MenuItem>
							<MenuItem value={20}>Active</MenuItem>
						</Select>
					</BorderFormControl>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default ProductStatus;

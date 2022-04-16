import { Paper, Box, Button, Divider, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import { useState } from "react";

function valuetext(value: number) {
	return `${value}`;
}

const FilterDropdwon = ({ handleFilterClick }: { handleFilterClick: () => void }) => {
	const [rangeValue, setRangeValue] = useState<number[]>([0, 1000]);

	const handleRangeChange = (event: Event, newValue: number | number[]) => {
		setRangeValue(newValue as number[]);
	};

	return (
		<Paper
			sx={{
				//  maxWidth: 308,
				boxShadow: 0,
				borderRadius: 0,
				p: 2.5,
				border: "1px solid #ABABAB",
			}}
		>
			<Box textAlign="right">
				<Button onClick={handleFilterClick} color="secondary">
					Close
				</Button>
			</Box>
			<Divider sx={{ my: 2.5, bgcolor: "#5B5B5B" }} />

			{/* Categories */}
			<Box my={2.5}>
				<Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
					Categories
				</Typography>
				<FormGroup>
					<FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Trending" />
					<FormControlLabel control={<Checkbox color="secondary" />} label="Discount" />
					<FormControlLabel control={<Checkbox color="secondary" />} label="Clothing" />
				</FormGroup>
			</Box>

			{/* Brands */}
			<Box my={2.5}>
				<Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
					Price Range
				</Typography>
				<Box sx={{ width: "100%" }}>
					<Typography variant="subtitle1" sx={{ mb: 0.5 }}>
						$0 - $1500
					</Typography>

					<Slider
						min={0}
						step={1}
						max={1500}
						value={rangeValue}
						onChange={handleRangeChange}
						valueLabelDisplay="auto"
						getAriaValueText={valuetext}
						getAriaLabel={() => "Price range"}
					/>

					<Box sx={{ mt: 0.5, display: "flex", justifyContent: "space-between" }}>
						<Typography variant="subtitle1">${rangeValue[1]}</Typography>
						<Typography variant="subtitle1">$1500</Typography>
					</Box>
				</Box>
			</Box>

			{/* Brands */}
			<Box my={2.5}>
				<Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
					Categories
				</Typography>
				<FormGroup>
					<FormControlLabel control={<Checkbox color="secondary" />} label="Adidas" />
					<FormControlLabel control={<Checkbox color="secondary" />} label="Nike" />
					<FormControlLabel control={<Checkbox color="secondary" />} label="Adidas" />
					<FormControlLabel control={<Checkbox color="secondary" />} label="Adidas" />
				</FormGroup>
			</Box>

			<Box sx={{ "& .MuiButton-root": { my: 1.25 } }}>
				<Divider sx={{ my: 2.5, bgcolor: "#5B5B5B" }} />
				<Button variant="contained" fullWidth sx={{ color: "common.white" }}>
					Apply Filters
				</Button>
				<Button variant="outlined" fullWidth color="secondary">
					Cancel
				</Button>
			</Box>
		</Paper>
	);
};

export default FilterDropdwon;

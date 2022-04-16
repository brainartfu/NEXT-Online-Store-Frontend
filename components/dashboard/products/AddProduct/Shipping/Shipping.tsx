import {
	Box,
	CardContent,
	Checkbox,
	FormControlLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { BorderFormControl, SmallFormControl, StyledCard, StyledTextField } from "../../../components/styledComponents";
import { useStyles } from "./styled";

const Shipping = () => {
	const [isPhysicalProductChecked, setIsPhysicalProductChecked] = useState(true);
	const [filter, setFilter] = useState("10");
	const [, setRegionFilter] = useState("10");

	const classes = useStyles();
	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};

	const handleRegionFilter = (event: SelectChangeEvent) => {
		setRegionFilter(event.target.value as string);
	};

	// handle track quantity check
	const handlePhysicalProductCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsPhysicalProductChecked(event.target.checked);
	};

	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Shipping
				</Typography>
				<FormControlLabel
					label="This is a physical product"
					control={
						<Checkbox checked={isPhysicalProductChecked} onChange={handlePhysicalProductCheckChange} />
					}
				/>
				<Typography sx={{ fontSize: 18, mb: 1.25, mt: 2 }} fontWeight="medium">
					Weight
				</Typography>

				<Typography sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 1.25 }} fontWeight="light">
					Used to calculate shipping rates at checkout and label prices
				</Typography>
				<Typography sx={{ fontSize: 14, mb: 1.25, mt: 2 }} fontWeight="medium">
					Weight
				</Typography>
				<Box sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mb: 1.25 }}>
					<Box component="form" sx={{ display: "flex", alignItems: "center", minWidth: "85%", gap: 1.25 }}>
						<StyledTextField size="small" fullWidth required placeholder="0.0" />
					</Box>
					<Box sx={{ maxWidth: "15%", height: "45px", mt: 0.75 }}>
						<SmallFormControl fullWidth size="small" className={classes.kgSelect}>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={filter}
								onChange={handleFilter}
							>
								<MenuItem value={10}>KG</MenuItem>
								<MenuItem value={20}>Pound</MenuItem>
							</Select>
						</SmallFormControl>
					</Box>
				</Box>
				<Typography sx={{ fontSize: 18, mb: 1.25, mt: 2 }} fontWeight="medium">
					Customs information
				</Typography>

				<Typography sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 1.25 }} fontWeight="light">
					Customs authorities use the information to calculate duties when shipping internationally. Shown on
					printed customs forms.
				</Typography>
				<Typography sx={{ fontSize: 14, mb: 1.25, mt: 2 }} fontWeight="medium">
					Country/Region of Origin
				</Typography>
				<Box sx={{ minWidth: "135px", height: "45px", mt: 0.75 }}>
					<BorderFormControl fullWidth size="small" className={classes.regionSelect}>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={filter}
							onChange={handleRegionFilter}
						>
							<MenuItem value={10}>Select Country/region</MenuItem>
							<MenuItem value={20}>USA</MenuItem>
						</Select>
					</BorderFormControl>
				</Box>

				<Typography sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 1.25 }} fontWeight="light">
					In most cases, where the product is manufactured.
				</Typography>
				<Typography sx={{ fontSize: 14, mb: 1.25, mt: 2 }} fontWeight="medium">
					Harmonized System code
				</Typography>
				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
					<StyledTextField size="small" fullWidth required placeholder="Enter a HS code" />
				</Box>
				<Typography sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 1.25 }} fontWeight="light">
					Manually enter codes that are longer than 6 numbers.
				</Typography>
			</CardContent>
		</StyledCard>
	);
};

export default Shipping;

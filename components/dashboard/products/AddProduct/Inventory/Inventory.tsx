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
import { BorderFormControl, StyledCard, StyledTextField } from "../../../components/styledComponents";
import { useStyles } from "../styled";

const Inventory = () => {
	const [isTrackChecked, setIsTrackChecked] = useState(true);
	const [isContinueSellingChecked, setIsContinueSellingChecked] = useState(false);
	const [filter, setFilter] = useState("10");

	const classes = useStyles();
	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};

	// handle track quantity check
	const handleTrackCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsTrackChecked(event.target.checked);
	};

	// handle continue selling check
	const handleContinueSellingCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsContinueSellingChecked(event.target.checked);
	};

	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Inventory
				</Typography>
				<Box sx={{ minWidth: "135px", height: "45px" }}>
					<BorderFormControl
						fullWidth
						size="small"
						sx={{ borderWidth: "5px", borderColor: "black" }}
						className={classes.statusSelect}
					>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={filter}
							onChange={handleFilter}
						>
							<MenuItem value={10}>Hoomey</MenuItem>
							<MenuItem value={20}>Others</MenuItem>
						</Select>
					</BorderFormControl>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mb: 1.25 }}>
					<Box sx={{ display: "flex", flexDirection: "column", minWidth: "50%" }}>
						<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="semibold">
							Stock Keeping Unit
						</Typography>
						<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
							<StyledTextField size="small" fullWidth required />
						</Box>
					</Box>
					<Box sx={{ display: "flex", flexDirection: "column", minWidth: "50%" }}>
						<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="semibold">
							Barcode (ISBN, UPC, GTIN etc)
						</Typography>
						<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
							<StyledTextField size="small" fullWidth required />
						</Box>
					</Box>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<FormControlLabel
						label="Track quantity"
						control={<Checkbox checked={isTrackChecked} onChange={handleTrackCheckChange} />}
					/>
					<FormControlLabel
						label="Continue selling when ot of stock"
						control={
							<Checkbox checked={isContinueSellingChecked} onChange={handleContinueSellingCheckChange} />
						}
					/>
				</Box>

				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Quantity
				</Typography>
				<Box sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mb: 1.25 }}>
					<Typography sx={{ fontSize: 16, mb: 1.25 }} fontWeight="semibold">
						Location name
					</Typography>
					<Typography sx={{ fontSize: 16, mb: 1.25, color: "#8B8B8B" }} fontWeight="semibold">
						Available
					</Typography>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mb: 1.25 }}>
					<Typography sx={{ fontSize: 16, mb: 1.25 }} fontWeight="semibold">
						Hoomey
					</Typography>
					<StyledTextField
						size="small"
						type="number"
						defaultValue={0}
						fullWidth
						sx={{ maxWidth: "48%" }}
						required
					/>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Inventory;

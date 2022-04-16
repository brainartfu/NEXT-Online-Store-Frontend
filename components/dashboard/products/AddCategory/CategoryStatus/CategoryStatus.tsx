import {
	Box,
	Button,
	CardContent,
	Checkbox,
	Divider,
	FormControlLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { BorderFormControl, StyledButton, StyledCard } from "../../../components/styledComponents";
import { useStyles } from "../../AddProduct/styled";

interface Inputs {
	name: string;
	slug: string;
	description: string;
	isStatus: string;
}

interface MyProps {
	register: UseFormRegister<Inputs>;
	handleTogglePopup: (toggle: boolean) => void;
}

const CategoryStatus = ({ handleTogglePopup, register }: MyProps) => {
	const [filter, setFilter] = useState("10");
	const [isTrackChecked, setIsTrackChecked] = useState(true);
	const [selectChange, setSelectChange] = useState("Select All");

	const classes = useStyles();
	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};
	// handle track quantity check
	const handleTrackCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsTrackChecked(event.target.checked);
	};
	const handleAllCheck = () => {
		if (isTrackChecked === true) {
			setIsTrackChecked(false);
			setSelectChange("Select All");
		} else if (isTrackChecked === false) {
			setIsTrackChecked(true);
			setSelectChange("Deselect All");
		}
	};

	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Category status
				</Typography>

				<Box sx={{ minWidth: "135px", height: "45px" }}>
					<BorderFormControl fullWidth size="small" className={classes.statusSelect}>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={filter}
							{...register("isStatus")}
							onChange={handleFilter}
						>
							<MenuItem value={10}>Draft</MenuItem>
							<MenuItem value={20}>Active</MenuItem>
						</Select>
					</BorderFormControl>
				</Box>
				<Typography sx={{ mb: 1.25 }} color="text.secondary" variant="body2">
					This category will be hidden from all sales channels.
				</Typography>
				<Divider variant="middle" />
				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mt: 1.25 }}>
					<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
						Sub-Categories
					</Typography>
					<StyledButton
						sx={{ px: 2 }}
						onClick={() => handleTogglePopup(true)}
						variant="contained"
						color="secondary"
					>
						Add Sub-Category
					</StyledButton>
				</Box>
				<Typography sx={{ color: "#E2BC82", fontWeight: "600", fontSize: "14px", mt: 2 }}>
					<Button onClick={handleAllCheck}>{selectChange}</Button>
				</Typography>
				<Divider variant="middle" />
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<FormControlLabel
						control={<Checkbox checked={isTrackChecked} onChange={handleTrackCheckChange} />}
						label="Trending"
					/>
					<FormControlLabel
						control={<Checkbox checked={isTrackChecked} onChange={handleTrackCheckChange} />}
						label="Discounts"
					/>
					<FormControlLabel
						control={<Checkbox checked={isTrackChecked} onChange={handleTrackCheckChange} />}
						label="Clothing"
					/>
					<FormControlLabel
						control={<Checkbox checked={isTrackChecked} onChange={handleTrackCheckChange} />}
						label="Gym"
					/>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default CategoryStatus;

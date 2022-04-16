import { Box, Button, CardContent, IconButton, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { RemoveIcon } from "../../../components/icons";
import { BorderFormControl, StyledButton, StyledCard, StyledTextField } from "../../../components/styledComponents";
import { useStyles } from "../styled";

const Options = () => {
	const [filter, setFilter] = useState("10");
	const [options, setOptions] = useState(["Grey Ice Kettle", "Pink", "Blue Ice Kettle", "White"]);

	const classes = useStyles();
	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};

	const removeOption = (option: string) => {
		const filteredOptions = options.filter(function (value: string) {
			return value !== option;
		});
		setOptions(filteredOptions);
	};
	const addOption = (option: string) => {
		setOptions((options) => [...options, option]);
	};

	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Options
				</Typography>
				<Typography sx={{ fontSize: 12, mb: 1.25 }} fontWeight="medium">
					Option name
				</Typography>
				<Box sx={{ minWidth: "135px", height: "45px" }}>
					<BorderFormControl fullWidth size="small" className={classes.statusSelect}>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={filter}
							onChange={handleFilter}
						>
							<MenuItem value={10}>Color</MenuItem>
							<MenuItem value={20}>Size</MenuItem>
						</Select>
					</BorderFormControl>
				</Box>

				<Typography sx={{ fontSize: 12, mb: 1.25 }} fontWeight="medium">
					Option values
				</Typography>
				{options.map((option) => (
					<Box
						component="form"
						key={option}
						sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mt: 1.25 }}
					>
						<StyledTextField size="small" placeholder={option} fullWidth required />
						<IconButton onClick={() => removeOption(option)}>
							<RemoveIcon />
						</IconButton>
					</Box>
				))}
				<StyledButton
					sx={{ px: 2, minWidth: "132px", mt: 1.25 }}
					type="submit"
					variant="contained"
					color="secondary"
				>
					Done
				</StyledButton>
				<Button sx={{ display: "flex", mt: 1.25 }} onClick={() => addOption("Add another value")}>
					Add option
				</Button>
			</CardContent>
		</StyledCard>
	);
};

export default Options;

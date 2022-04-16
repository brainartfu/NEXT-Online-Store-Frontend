import {
	Box,
	Button,
	Typography,
	DialogContent,
	Select,
	MenuItem,
	FormControl,
	TextField,
	DialogActions,
	SelectChangeEvent,
} from "@mui/material";
import { Label } from "../styledComponents";
import { PopupDivider } from "../../styledComponents";
import { useState } from "react";

const EditAddress = ({ handleTogglePopup }: { handleTogglePopup: (toggle: boolean) => void }) => {
	const [country, setCountry] = useState("United States");

	// handleCountryChange
	const handleCountryChange = (event: SelectChangeEvent) => {
		setCountry(event.target.value as string);
	};

	return (
		<>
			<DialogContent>
				<Typography textAlign="center" variant="h6" fontFamily="Poppins" fontWeight={600}>
					Edit Address
				</Typography>
				<PopupDivider />
				<Box
					component="form"
					sx={{
						"& .MuiTextField-root": { bgcolor: "#fff" },
					}}
				>
					<Box my={2}>
						<Label>Country / Region</Label>
						<FormControl fullWidth>
							<Select
								size="small"
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={country}
								onChange={handleCountryChange}
							>
								<MenuItem value={10}>United States</MenuItem>
								<MenuItem value={20}>North South</MenuItem>
								<MenuItem value={30}>India</MenuItem>
							</Select>
						</FormControl>
					</Box>
					<Box my={2}>
						<Label>Street Address</Label>
						<TextField
							size="small"
							sx={{ mb: 2 }}
							required
							placeholder="House number and street name"
							fullWidth
						/>
						<TextField
							size="small"
							required
							placeholder="Apartment, suit, unit, etc (optional)"
							fullWidth
						/>
					</Box>

					<Box my={2}>
						<Label>Town / City</Label>
						<TextField size="small" required placeholder="City or Town Name" fullWidth />
					</Box>
					<Box>
						<Label>State</Label>
						<TextField size="small" required placeholder="State name" fullWidth />
					</Box>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button fullWidth color="secondary" variant="contained" onClick={() => handleTogglePopup(false)}>
					Cancel
				</Button>
				<Button fullWidth color="secondary" variant="outlined" onClick={() => handleTogglePopup(false)}>
					Save Changes
				</Button>
			</DialogActions>
		</>
	);
};

export default EditAddress;

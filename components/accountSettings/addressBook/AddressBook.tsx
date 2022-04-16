import {
	Box,
	Button,
	Grid,
	Typography,
	Checkbox,
	FormControlLabel,
	IconButton,
	DialogContent,
	TextField,
	DialogActions,
	FormControl,
	SelectChangeEvent,
	Select,
	MenuItem,
} from "@mui/material";
import { Label, SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";
import { AddressBookSvg, EditSvg, DeleteSvg } from "../../icons";
import { Popup } from "../../common";
import { useState } from "react";
import { PopupDivider } from "../../styledComponents";
import EditAddress from "./EditAddress";
import { AddressBookSkeleton } from "../../skeleton";

const AddressBook = () => {
	const [isEditOpen, setIsEditOpen] = useState(false);
	const [isAddNewOpen, setIsAddNewOpen] = useState(false);
	const [country, setCountry] = useState("United States");
	const [isDefaultChecked, setIsDefaultChecked] = useState(true);
	const [isNewChecked, setIsNewChecked] = useState(false);

	const handleAddNewTogglePopup = (boolean: boolean) => {
		setIsAddNewOpen(boolean);
	};

	const handleEditTogglePopup = (boolean: boolean) => {
		setIsEditOpen(boolean);
	};

	// handle country change
	const handleCountryChange = (event: SelectChangeEvent) => {
		setCountry(event.target.value as string);
	};

	// handle default address check
	const handleDefaultCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsDefaultChecked(event.target.checked);
	};
	// handle new address check
	const handleNewCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsNewChecked(event.target.checked);
	};

	// kept it just for checking loading sign
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 1500);

	return (
		<Box>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
				<TitleFlexStack>
					<AddressBookSvg />
					<TitleText>Address Book</TitleText>
				</TitleFlexStack>
				<Button onClick={() => handleAddNewTogglePopup(true)} color="secondary" variant="contained">
					Add New
				</Button>
			</Box>
			<SettingsDivider />

			{isLoading ? (
				<Grid container spacing={2.5}>
					{[...Array(2)].map((_, idx) => (
						<Grid item key={idx} xs={12} sm={6}>
							<AddressBookSkeleton />
						</Grid>
					))}
				</Grid>
			) : (
				<Grid container spacing={2.5}>
					{/* default address */}
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								position: "relative",
								border: "1px solid #D9D9D9",
								p: 2.5,
								bgcolor: isDefaultChecked ? "#FFF9F0" : "common.white",
							}}
						>
							<Box sx={{ maxWidth: "75%" }}>
								<Typography fontWeight="medium" lineHeight="30px">
									2442 N Virginia Av, Chicago, IL 60610 United States
								</Typography>
								<FormControlLabel
									sx={{ mt: 2 }}
									label="Default Address"
									control={
										<Checkbox checked={isDefaultChecked} onChange={handleDefaultCheckChange} />
									}
								/>
							</Box>
							{/* action on right corner */}
							<Box sx={{ position: "absolute", top: 20, right: 20 }}>
								<Box>
									<IconButton onClick={() => handleEditTogglePopup(true)}>
										<EditSvg />
									</IconButton>
								</Box>
								<Box>
									<IconButton>
										<DeleteSvg />
									</IconButton>
								</Box>
							</Box>
						</Box>
					</Grid>

					<Grid item xs={12} md={6}>
						<Box
							sx={{
								position: "relative",
								border: "1px solid #D9D9D9",
								p: 2.5,
								bgcolor: isNewChecked ? "#FFF9F0" : "common.white",
							}}
						>
							<Box sx={{ maxWidth: "75%" }}>
								<Typography fontWeight="medium" lineHeight="30px">
									2442 N Virginia Av, Chicago, IL 60610 United States
								</Typography>
								<FormControlLabel
									sx={{ mt: 2 }}
									label="New Address"
									control={<Checkbox checked={isNewChecked} onChange={handleNewCheckChange} />}
								/>
							</Box>
							{/* action on right corner */}
							<Box sx={{ position: "absolute", top: 20, right: 20 }}>
								<Box>
									<IconButton onClick={() => handleEditTogglePopup(true)}>
										<EditSvg />
									</IconButton>
								</Box>
								<Box>
									<IconButton>
										<DeleteSvg />
									</IconButton>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			)}
			{/* Popup -> add new */}
			<Popup isOpen={isAddNewOpen} handleTogglePopup={handleAddNewTogglePopup}>
				<DialogContent>
					<Typography textAlign="center" variant="h6" fontFamily="Poppins" fontWeight={600}>
						New Address
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
					<Button
						fullWidth
						color="secondary"
						variant="contained"
						onClick={() => handleAddNewTogglePopup(false)}
					>
						Cancel
					</Button>
					<Button
						fullWidth
						color="secondary"
						variant="outlined"
						onClick={() => handleAddNewTogglePopup(false)}
					>
						Save Changes
					</Button>
				</DialogActions>
			</Popup>
			{/* Popup -> edit */}
			<Popup isOpen={isEditOpen} handleTogglePopup={handleEditTogglePopup}>
				<EditAddress handleTogglePopup={handleEditTogglePopup} />
			</Popup>
		</Box>
	);
};

export default AddressBook;

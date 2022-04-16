import {
	CardContent,
	Typography,
	Box,
	Grid,
	InputAdornment,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Select,
	MenuItem,
	SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import {
	SelectFormControl,
	StyledCard,
	StyledLabel,
	StyledTextBox,
	StyledTextField,
} from "../../../components/styledComponents";

import { KeyboardArrowDownIcon } from "../../../../../uiElements/icons";
import { COUNTRIES } from "../../../../../assets/data/countries";

const CustomerOverview = () => {
	const [countryMobileCode, setCountryMobileCode] = useState("+93");

	const handleCountryMobileCodeChange = (event: SelectChangeEvent) => {
		setCountryMobileCode(event.target.value as string);
	};

	return (
		<StyledCard>
			<CardContent>
				<Box textAlign="center">
					<Typography gutterBottom fontWeight="medium" fontSize={18}>
						Customer Overview
					</Typography>
				</Box>

				{/* form input */}

				<StyledTextBox>
					<Grid container spacing={2.5}>
						<Grid item xs={12} sm={6}>
							<StyledLabel fw="500">First Name</StyledLabel>
							<StyledTextField size="small" fullWidth />
						</Grid>
						<Grid item xs={12} sm={6}>
							<StyledLabel fw="500">Last Name</StyledLabel>
							<StyledTextField size="small" fullWidth />
						</Grid>
					</Grid>
				</StyledTextBox>

				<StyledTextBox>
					<Grid container spacing={2.5}>
						<Grid item xs={12} sm={6}>
							<StyledLabel fw="500">Email Address</StyledLabel>
							<StyledTextField type="email" size="small" fullWidth />
						</Grid>
						<Grid item xs={12} sm={6}>
							<StyledLabel fw="500">Phone Number</StyledLabel>
							<Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
								<Box sx={{ flex: 1 }} component="div">
									<StyledTextField
										size="small"
										fullWidth
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">{countryMobileCode}</InputAdornment>
											),
										}}
									/>
								</Box>
								<div>
									{/* country Select */}
									<SelectFormControl size="small">
										<Select
											IconComponent={KeyboardArrowDownIcon}
											labelId="country-select-label"
											id="country-select"
											value={countryMobileCode}
											onChange={handleCountryMobileCodeChange}
										>
											{COUNTRIES.map((country) => (
												<MenuItem key={country.name} value={country.mobileCode}>
													<Box sx={{ "& > img": { mr: 2, flexShrink: 0 } }}>
														<img
															loading="lazy"
															width="20"
															src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
															srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
															alt=""
														/>
														{country.code}
													</Box>
												</MenuItem>
											))}
										</Select>
									</SelectFormControl>
								</div>
							</Box>
						</Grid>
					</Grid>
				</StyledTextBox>

				<StyledTextBox>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Customer agreed to receive marketing emails."
						/>
						<FormControlLabel
							control={<Checkbox />}
							label="Customer agreed to receive SMS marketing text messages."
						/>
					</FormGroup>
				</StyledTextBox>

				{/* overview footer */}
				<Typography sx={{ mt: 2.5 }} color="text.secondary" variant="body2">
					You should ask your customer for permission before you subscribe to your marketing emails or SMS.
				</Typography>
			</CardContent>
		</StyledCard>
	);
};

export default CustomerOverview;

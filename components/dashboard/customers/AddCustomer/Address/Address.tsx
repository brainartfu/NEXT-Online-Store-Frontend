import { CardContent, Typography, Box, Grid, Select, MenuItem, SelectChangeEvent, InputAdornment } from "@mui/material";
import { useState } from "react";
import { COUNTRIES } from "../../../../../assets/data/countries";
import { KeyboardArrowDownIcon } from "../../../../../uiElements/icons";
import {
	SelectFormControl,
	StyledCard,
	StyledLabel,
	StyledTextBox,
	StyledTextField,
} from "../../../components/styledComponents";

const Address = () => {
	const [countryMobileCode, setCountryMobileCode] = useState("+93");

	const handleCountryMobileCodeChange = (event: SelectChangeEvent) => {
		setCountryMobileCode(event.target.value as string);
	};
	return (
		<StyledCard>
			<CardContent>
				<Box textAlign="center">
					<Typography gutterBottom fontWeight="medium" fontSize={18}>
						Address
					</Typography>
					<Typography color="text.secondary" variant="body2">
						The primary address of this customer
					</Typography>
				</Box>

				{/* form input */}
				<StyledTextBox>
					<StyledLabel fw="500">Country/Region</StyledLabel>
					<StyledTextField size="small" fullWidth />
				</StyledTextBox>

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
					<StyledLabel fw="500">Company</StyledLabel>
					<StyledTextField size="small" fullWidth />
				</StyledTextBox>

				<StyledTextBox>
					<StyledLabel fw="500">Address</StyledLabel>
					<StyledTextField multiline size="small" fullWidth />
				</StyledTextBox>

				<StyledTextBox>
					<StyledLabel fw="500">Apartment, suite, etc</StyledLabel>
					<StyledTextField multiline size="small" fullWidth />
				</StyledTextBox>

				<StyledTextBox>
					<Grid container spacing={2.5}>
						<Grid item xs={12} sm={6}>
							<StyledLabel fw="500">City</StyledLabel>
							<StyledTextField size="small" fullWidth />
						</Grid>
						<Grid item xs={12} sm={6}>
							<StyledLabel fw="500">Postal Code</StyledLabel>
							<StyledTextField size="small" fullWidth />
						</Grid>
					</Grid>
				</StyledTextBox>

				<StyledLabel fw="500">Phone Number</StyledLabel>
				<Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
					<Box sx={{ flex: 1 }} component="div">
						<StyledTextField
							size="small"
							fullWidth
							InputProps={{
								startAdornment: <InputAdornment position="start">{countryMobileCode}</InputAdornment>,
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
			</CardContent>
		</StyledCard>
	);
};

export default Address;

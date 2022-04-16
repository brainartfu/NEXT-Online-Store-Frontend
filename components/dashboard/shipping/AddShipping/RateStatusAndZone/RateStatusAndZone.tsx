import { Box, CardContent, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { KeyboardArrowDownIcon } from "../../../../../uiElements/icons";
import { StyledCard, StyledLabel, StyledTextBox, StyledTextField } from "../../../components/styledComponents";

// import json -> country data
import countryJson from "country-region-data/data.json";

const RateStatusAndZone = () => {
	const [country, setCountry] = useState("AU");
	const [rateStatus, setRateStatus] = useState("10");

	// country handler
	const handleCountryChange = (event: SelectChangeEvent) => {
		setCountry(event.target.value as string);
	};

	// rate status handler
	const handleRateStatusChange = (event: SelectChangeEvent) => {
		setRateStatus(event.target.value as string);
	};

	return (
		<div>
			<Box>
				<StyledCard>
					<CardContent>
						<Typography fontWeight="medium" sx={{ mb: 2.5 }}>
							Rate Status
						</Typography>

						<FormControl
							sx={{
								"& .MuiOutlinedInput-root": {
									borderRadius: 1,
								},
							}}
							fullWidth
							size="small"
						>
							<Select
								IconComponent={KeyboardArrowDownIcon}
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={rateStatus}
								onChange={handleRateStatusChange}
							>
								<MenuItem value={10}>Draft</MenuItem>
								<MenuItem value={20}>Draft</MenuItem>
							</Select>
						</FormControl>
					</CardContent>
				</StyledCard>
			</Box>

			<Box my={2.5}>
				<StyledCard>
					<CardContent>
						<Typography fontWeight="medium" sx={{ mb: 2.5 }}>
							Zone
						</Typography>

						<StyledTextBox>
							<StyledLabel fs={14} fw="500">
								Zone Name
							</StyledLabel>
							<StyledTextField fullWidth size="small" defaultValue="Austrailia" />
						</StyledTextBox>

						<StyledTextBox>
							<StyledLabel fs={14} fw="500">
								Country Name
							</StyledLabel>
							{/* country Select */}
							<FormControl
								fullWidth
								size="small"
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: 1,
									},
								}}
							>
								<Select
									IconComponent={KeyboardArrowDownIcon}
									labelId="country-select-label"
									id="country-select"
									value={country}
									onChange={handleCountryChange}
								>
									{countryJson.map((country) => (
										<MenuItem key={country.countryShortCode} value={country.countryShortCode}>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													"& > img": { mr: 1.5, flexShrink: 0 },
												}}
											>
												<img
													loading="lazy"
													width="20"
													src={`https://flagcdn.com/w20/${country.countryShortCode.toLowerCase()}.png`}
													srcSet={`https://flagcdn.com/w40/${country.countryShortCode.toLowerCase()}.png 2x`}
													alt=""
												/>
												{/* {country.countryName} ({country.countryShortCode}) +
												{country.phone} */}
												<span>
													{country.countryName} ({country.countryShortCode})
												</span>
											</Box>
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</StyledTextBox>

						<StyledTextBox>
							<StyledLabel fs={14} fw="500">
								Description (optional)
							</StyledLabel>
							<StyledTextField fullWidth size="small" multiline rows={4} placeholder="Write note..." />
						</StyledTextBox>
					</CardContent>
				</StyledCard>
			</Box>
		</div>
	);
};

export default RateStatusAndZone;

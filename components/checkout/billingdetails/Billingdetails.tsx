import { useState, useEffect } from "react";
import { Typography, Box, TextField as MuiTextField, Grid, Checkbox, FormControlLabel } from "@mui/material";
import { styled } from "@mui/system";
import { FieldErrorsImpl, UseFormRegister, UseFormWatch } from "react-hook-form";
import { Inputs } from "../combineCheckout/CombineCheckout";
import { regex } from "../../../utils/validations/regex";
import LinearProgress from "@mui/material/LinearProgress";
import { isStrongPassword } from "../../../utils/validations";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

// import json -> country data
import countryJson from "country-region-data/data.json";

// types
interface RegionSate {
	countryName: string;
	countryShortCode: string;
	regions: (
		| {
				name: string;
				shortCode?: undefined;
		  }
		| {
				name: string;
				shortCode: string;
		  }
	)[];
}

export const Label = styled(Typography)({
	marginBottom: "5px",
	fontSize: 10,
	color: "#727376",
});

const TextField = styled(MuiTextField)({
	"& .MuiOutlinedInput-root": {
		borderRadius: "0 !important",
		fontSize: "10px !important",
		color: "#656565 !important",
	},
});

const Billingdetails = ({
	watch,
	register,
	errors,
}: {
	watch: UseFormWatch<Inputs>;
	register: UseFormRegister<Inputs>;
	errors: FieldErrorsImpl<Inputs>;
}) => {
	const [regionData, setRegionData] = useState<RegionSate>({} as RegionSate);
	const [region, setRegion] = useState("");
	const [country, setCountry] = useState("");
	const [isStrongPass, setIsStrongPass] = useState(false);

	// password check 🔐
	useEffect(() => {
		if (watch("password")) {
			if (isStrongPassword(watch("password"))) {
				setIsStrongPass(true);
			} else {
				setIsStrongPass(false);
			}
		}
	}, [watch("password")]);

	// country & region hanlder
	const handleCountryChange = (event: SelectChangeEvent) => {
		setCountry(event.target.value as string);
	};

	const handleRegionChange = (event: SelectChangeEvent) => {
		setRegion(event.target.value as string);
	};

	// region / state select
	useEffect(() => {
		const regionArr = countryJson.filter((c) => c.countryShortCode === country);
		setRegionData(regionArr[0]);
	}, [country]);

	return (
		<div>
			<Typography sx={{ mb: 3 }} variant="h6">
				Billing details
			</Typography>
			<div>
				<Grid container spacing={{ xs: 0, sm: 2, md: 5 }}>
					<Grid item xs={12} sm={6}>
						<Box component="div" sx={{ my: 1.9 }}>
							<Label>First name *</Label>
							<TextField
								fullWidth
								error={errors.firstName ? true : false}
								{...register("firstName", { required: true })}
								helperText={errors.firstName && "First name is required."}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box component="div" sx={{ my: 1.9 }}>
							<Label>Last name *</Label>
							<TextField
								fullWidth
								error={errors.lastName ? true : false}
								{...register("lastName", { required: true })}
								helperText={errors.lastName && "Last name is required."}
							/>
						</Box>
					</Grid>
				</Grid>

				{/* email */}
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Email address *</Label>
					<TextField
						fullWidth
						type="email"
						error={errors.email ? true : false}
						{...register("email", { required: true, pattern: regex.email })}
						helperText={errors.email && "Enter a valid email address."}
						inputProps={{
							autoComplete: "new-email",
						}}
					/>
				</Box>

				{/* password */}
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Password</Label>
					<TextField
						fullWidth
						type="password"
						error={errors.password ? true : false}
						{...register("password", {
							required: "Password is required.",
							minLength: { value: 8, message: "Password must be at least 8 characters" },
						})}
						helperText={errors.password && errors.password.message}
						inputProps={{
							autoComplete: "new-password",
						}}
					/>
					{/* password label message */}
					{watch("password")?.length ? (
						<Box sx={{ width: "100%", mt: 1.25 }}>
							<LinearProgress variant="determinate" value={isStrongPass ? 100 : 50} />
							<Typography textAlign="right" variant="body2" color="primary">
								{isStrongPass ? "Strong Password" : "Weak Password"}
							</Typography>
						</Box>
					) : null}
				</Box>

				{/* phone */}
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Phone *</Label>
					<TextField
						type="tel"
						fullWidth
						inputMode="numeric"
						error={errors.phone ? true : false}
						{...register("phone", { required: true })}
						helperText={errors.phone && "Enter your number."}
					/>
				</Box>

				{/* country selector */}
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Country / Region *</Label>

					<FormControl fullWidth size="small" error={errors.country ? true : false}>
						<Select
							{...register("country", { required: true })}
							labelId="country-select-label"
							id="country-select"
							value={country}
							onChange={handleCountryChange}
						>
							{countryJson.map((country) => (
								<MenuItem key={country.countryShortCode} value={country.countryShortCode}>
									<Box sx={{ "& > img": { mr: 2, flexShrink: 0 } }}>
										<img
											loading="lazy"
											width="20"
											src={`https://flagcdn.com/w20/${country.countryShortCode.toLowerCase()}.png`}
											srcSet={`https://flagcdn.com/w40/${country.countryShortCode.toLowerCase()}.png 2x`}
											alt=""
										/>
										{country.countryName}
									</Box>
								</MenuItem>
							))}
						</Select>
						<FormHelperText>{errors.country && "This field is required."}</FormHelperText>
					</FormControl>

					{/* <Autocomplete
						id="country-select-demo"
						options={COUNTRIES}
						autoHighlight
						getOptionLabel={(option) => option.name}
						renderOption={(props, option) => (
							<Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
								<img
									loading="lazy"
									width="20"
									src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
									srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
									alt=""
								/>
								
								{option.name}
							</Box>
						)}
						renderInput={(params) => (
							<TextField
								{...params}
								error={errors.country ? true : false}
								{...register("country", { required: true })}
								helperText={errors.country && "Select country."}
								inputProps={{
									...params.inputProps,
									autoComplete: "new-country", 
								}}
							/>
						)}
					/> */}
				</Box>

				{/* street address */}
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Street address *</Label>
					<TextField
						fullWidth
						placeholder="House number and street name"
						error={errors.streetAddress ? true : false}
						{...register("streetAddress", { required: true })}
						helperText={errors.streetAddress && "This field is required."}
					/>
					<TextField sx={{ my: 1.9 }} fullWidth placeholder="Apartment, suit, unit, etc. (optional)" />
				</Box>

				{/* town / city */}
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Town / City *</Label>
					<TextField
						fullWidth
						placeholder="House number and street name"
						error={errors.city ? true : false}
						{...register("city", { required: true })}
						helperText={errors.city && "This field is required."}
					/>
				</Box>

				{/* state / region */}
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>State *</Label>
					<FormControl fullWidth size="small" error={errors.region ? true : false}>
						<Select
							{...register("region", { required: true })}
							defaultValue=""
							labelId="region-select-label"
							id="region-select"
							value={region}
							onChange={handleRegionChange}
							error={errors.region ? true : false}
						>
							{regionData?.regions?.map((r) => {
								return (
									<MenuItem key={r.name} value={r.name}>
										{r.name}
									</MenuItem>
								);
							})}
						</Select>
						<FormHelperText>{errors.region && "This field is required."}</FormHelperText>
					</FormControl>
				</Box>

				{/* zip */}
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>ZIP *</Label>
					<TextField
						fullWidth
						error={errors.zip ? true : false}
						{...register("zip", { required: true })}
						helperText={errors.zip && "Zip is required."}
					/>
				</Box>

				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Company name (optional)</Label>
					<TextField fullWidth />
				</Box>

				{/* Ship to a different address? */}
				<Typography sx={{ my: 3 }} variant="h6" fontFamily="Poppins">
					Shipping Details
				</Typography>
				<FormControlLabel
					sx={{ "& .MuiTypography-root": { fontSize: 10 } }}
					control={<Checkbox size="small" />}
					label="Ship to a different address?"
				/>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Order notes (optional)</Label>
					<TextField fullWidth multiline />
				</Box>
			</div>
		</div>
	);
};

export default Billingdetails;

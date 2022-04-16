import {
	Typography,
	Box,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	SelectChangeEvent,
	MenuItem,
	FormControl,
	Select,
	TextField,
	Button,
	FormHelperText,
} from "@mui/material";
import { styled } from "@mui/system";
import { HeadingText } from "../../styledComponents";
import { COLORS } from "../../../theme/colors";
import { useStyles } from "./styled";
import { PaypalColorSvg, WhiteLockSvg } from "../../icons";
import { PaymentSystemView, SecuredByNorton } from "../../common";
import { EndIconButton } from "../../ui";
import { ExpandMoreIcon, LocationOnIcon } from "../../../uiElements/icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// import json -> country data
import countryJson from "country-region-data/data.json";

// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";

interface Inputs {
	city: string;
	zip: string;
	country: string;
	region: string;
}

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

const SmallText = styled(Typography)({
	fontSize: 10,
	fontWeight: 500,
	color: COLORS.GRANITE_GREY,
});

const styles = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
};

const CartTotals = () => {
	const router = useRouter();
	const classes = useStyles();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [regionData, setRegionData] = useState<RegionSate>({} as RegionSate);
	const [region, setRegion] = useState("");
	const [country, setCountry] = useState("AU");

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

	// handle form
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<div>
			<HeadingText sx={{ mb: 3.5 }}>Cart totals</HeadingText>
			<Box sx={{ background: "#FAFAFA", border: "1px solid #D6D4D4" }}>
				<SmallText sx={{ p: 1.5, borderBottom: "1px solid #D6D4D4" }}>Subtotal</SmallText>
				<SmallText sx={{ p: 1.5 }}>Shipping</SmallText>
				<Box sx={{ ...styles, px: 1.5 }}>
					<SmallText>USPS Priority 2-3 Day:</SmallText>
					<SmallText>$5.00</SmallText>
				</Box>
				<SmallText sx={{ p: 1.5 }}>Shipping to NJ</SmallText>
				{/* update address */}
				<Accordion className={classes.accordion}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<LocationOnIcon sx={{ color: "#4B4B4B", width: 15 }} />
						<Typography sx={{ fontSize: 10, fontWeight: 600 }}>Change address</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box
							component="form"
							onSubmit={handleSubmit(onSubmit)}
							sx={{
								"& .MuiTextField-root, & .MuiFormControl-root": { my: 0.5 },
							}}
						>
							{/* country Select */}
							<FormControl fullWidth size="small">
								<InputLabel id="country-select-label">Select Country</InputLabel>
								<Select
									{...register("country", { required: true })}
									labelId="country-select-label"
									id="country-select"
									value={country}
									label="Select Country"
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
												{country.countryName} ({country.countryShortCode})
											</Box>
										</MenuItem>
									))}
								</Select>
							</FormControl>

							{/* region / state select */}
							<FormControl fullWidth size="small" error={errors.region ? true : false}>
								<InputLabel id="region-select-label">Select Region</InputLabel>
								<Select
									{...register("region", { required: true })}
									defaultValue=""
									labelId="region-select-label"
									id="region-select"
									value={region}
									label="Select Region"
									onChange={handleRegionChange}
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

							<TextField
								fullWidth
								size="small"
								placeholder="Town/City"
								error={errors.city ? true : false}
								helperText={errors.city && "Town/City is required"}
								{...register("city", { required: true })}
							/>
							<TextField
								fullWidth
								size="small"
								placeholder="ZIP"
								error={errors.zip ? true : false}
								helperText={errors.zip && "Zip is required"}
								{...register("zip", { required: true })}
							/>
							<Button
								fullWidth
								size="small"
								type="submit"
								color="secondary"
								variant="contained"
								sx={{ mt: 1.2, justifyContent: "center !important" }}
							>
								Update
							</Button>
						</Box>
					</AccordionDetails>
				</Accordion>

				<SmallText sx={{ p: 1.5, borderBottom: "1px solid #D6D4D4", borderTop: "1px solid #D6D4D4" }}>
					Tax
				</SmallText>
				<Box sx={{ ...styles, p: 1.5 }}>
					<Typography variant="body2" sx={{ fontWeight: 600, color: COLORS.GRANITE_GREY }}>
						Total
					</Typography>
					<Typography variant="body2" sx={{ fontWeight: 600, color: COLORS.GRANITE_GREY }}>
						$55.00
					</Typography>
				</Box>
			</Box>
			<SecuredByNorton />
			<PaymentSystemView />
			<EndIconButton onClick={() => router.push("/sign-in-checkout")} endIcon={<WhiteLockSvg />}>
				Proceed to checkout
			</EndIconButton>
			{/* checkout with- paypal button*/}
			<Button
				fullWidth
				size="small"
				variant="contained"
				sx={{ mt: 1.25, bgcolor: "#fec33a", "&:hover": { bgcolor: "#cb9b2e" }, "& span": { ml: 0.5 } }}
			>
				<PaypalColorSvg width={50} height={20} /> <span> Checkout</span>
			</Button>
		</div>
	);
};

export default CartTotals;

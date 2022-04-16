import {
	Typography,
	Box,
	SelectChangeEvent,
	Checkbox,
	IconButton,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	TextField,
	InputAdornment,
	FormHelperText,
	Button,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/types";
import { COLORS } from "../../../theme/colors";
import { IMAGES } from "../../../uiElements";
import { CloseIcon } from "../../../uiElements/icons";
import { ColorPalette, PaymentSystemView, ProductSizeSelect, SecuredByNorton } from "../../common";
import { CashOnDeliverySvg, WhiteLockSvg, PayWithCardSvg, VisaSvg, MasterCardSvg, PaypalColorSvg } from "../../icons";
import { FieldErrorsImpl, UseFormRegister, UseFormWatch } from "react-hook-form";

import { ProductCircularColor, SmallText } from "../../styledComponents";
import { ArrowLeftIconButton, ArrowRightIconButton, EndIconButton } from "../../ui";
import { Inputs } from "../combineCheckout/CombineCheckout";
import { regex } from "../../../utils/validations/regex";

// styles
const styles = {
	flexStack: { my: 0.3, display: "flex", alignItems: "center", justifyContent: "space-between" },
	fs12: {
		fontSize: 12,
		color: COLORS.GRANITE_GREY,
		fontWeight: 500,
	},
};

const ShoppingCart = ({
	watch,
	register,
	errors,
}: {
	watch: UseFormWatch<Inputs>;
	register: UseFormRegister<Inputs>;
	errors: FieldErrorsImpl<Inputs>;
}) => {
	const [paymentMethods, setPaymentMethods] = useState("cash_on_delivery");
	const color = useAppSelector((state: RootState) => state.color);

	const handlePaymetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPaymentMethods((event.target as HTMLInputElement).value);
	};

	console.log(paymentMethods);

	const [size, setSize] = useState("10");
	const [colorPaletteAnchorEl, setColorPaletteAnchorElAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleSizeChange = (event: SelectChangeEvent) => {
		setSize(event.target.value as string);
	};

	console.log(size);

	// color palette handler
	const handleOpenColorPalette = (event: React.MouseEvent<HTMLButtonElement>) => {
		setColorPaletteAnchorElAnchorEl(event.currentTarget);
	};

	return (
		<div>
			<Typography sx={{ mb: 3 }} variant="h6" fontFamily="Poppins">
				Shopping Cart
			</Typography>
			<Typography sx={{ mb: 2 }} variant="h6" fontFamily="Poppins">
				Your order
			</Typography>
			<Typography sx={{ mb: 2, fontSize: 12 }}>Total (1 Item) $50</Typography>
			{/* product & it's details */}
			<Box>
				<Box sx={{ textAlign: "right" }}>
					<IconButton size="small">
						<CloseIcon fontSize="small" />
					</IconButton>
				</Box>
				<Box sx={{ display: "flex", gap: 1.3, width: "100%", my: 2.5 }}>
					<Box component="div">
						<Image
							src={IMAGES.WhiteTshirtImg}
							alt="Product"
							height={115}
							width={72}
							objectFit="cover"
							placeholder="blur"
						/>
					</Box>
					<Box component="div" sx={{ width: "100%" }}>
						<Box sx={{ ...styles.flexStack }}>
							<Typography sx={{ fontSize: 12, color: COLORS.GRANITE_GREY }}>
								White Cotton Sweatshirt
							</Typography>
							<Typography sx={{ fontSize: 12, color: COLORS.GRANITE_GREY, fontWeight: 500 }}>
								$50.00
							</Typography>
						</Box>

						<Box component="div" sx={{ ...styles.flexStack }}>
							<Typography sx={{ ...styles.fs12 }}>Quantity</Typography>
							<Box sx={{ ...styles.flexStack }}>
								<ArrowLeftIconButton
									color={COLORS.GRANITE_GREY}
									onClick={() => console.log("decrement")}
								/>
								<Typography variant="body2" fontWeight="500">
									1
								</Typography>
								<ArrowRightIconButton
									color={COLORS.GRANITE_GREY}
									onClick={() => console.log("increment")}
								/>
							</Box>
						</Box>
						<Box sx={{ ...styles.flexStack }}>
							<Typography sx={{ ...styles.fs12 }}>Color</Typography>
							{/* <ProductCircularColor color="#FFDB00" className="color-circle">
								<ColorPalette />
							</ProductCircularColor> */}
							<ProductCircularColor
								// aria-describedby={id}
								color={color.colorInHex}
								className="color-circle"
								onClick={handleOpenColorPalette}
							/>
							<ColorPalette
								anchorEl={colorPaletteAnchorEl}
								setAnchorElAnchorEl={setColorPaletteAnchorElAnchorEl}
							/>
						</Box>
						<Box sx={{ ...styles.flexStack }}>
							<Typography sx={{ ...styles.fs12 }}>Size</Typography>
							<ProductSizeSelect
								value={size}
								handleSizeChange={handleSizeChange}
								iconColor={COLORS.GRANITE_GREY}
								outerFontColor={COLORS.GRANITE_GREY}
								outerFontSize={12}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box sx={{ background: "#FAFAFA", border: "1px solid #D6D4D4" }}>
				<SmallText sx={{ p: 1.5, borderBottom: "1px solid #D6D4D4", color: COLORS.GRANITE_GREY }}>
					Subtotal
				</SmallText>
				<SmallText sx={{ p: 1.5, color: COLORS.GRANITE_GREY }}>Shipping</SmallText>
				<Box sx={{ ...styles.flexStack, p: 1.5 }}>
					<SmallText sx={{ color: COLORS.GRANITE_GREY }}>USPS Priority 2-3 Day:</SmallText>
					<SmallText sx={{ color: COLORS.GRANITE_GREY }}>$5.00</SmallText>
				</Box>
				<Box
					sx={{
						...styles.flexStack,
						p: 1.5,
						borderBottom: "1px solid #D6D4D4",
						borderTop: "1px solid #D6D4D4",
					}}
				>
					<SmallText sx={{ color: COLORS.GRANITE_GREY }}>Tax</SmallText>
					<SmallText sx={{ color: COLORS.GRANITE_GREY }}>$0.00</SmallText>
				</Box>
				<Box sx={{ p: 1.5, borderBottom: "1px solid #D6D4D4" }}>
					<SmallText sx={{ mb: 1.25, color: COLORS.GRANITE_GREY }}>Enter Promo Code:</SmallText>
					{/* <Box component="form"> */}
					<Box sx={{ display: "flex", "& .MuiFormControl-root": { bgcolor: "common.white" } }}>
						<TextField fullWidth size="small" id="filled-basic" placeholder="Promo Code" />
						<Button size="small" variant="contained" color="secondary">
							Submit
						</Button>
					</Box>
					{/* </Box> */}
				</Box>

				<Box sx={{ p: 1.5, display: "flex", justifyContent: "space-between" }}>
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

			{/* payment way */}
			<Box sx={{ border: "1px solid #E9E9E9", p: 1.5 }}>
				<FormControl>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="cash_on_delivery"
						name="radio-buttons-group"
						onChange={handlePaymetChange}
						value={paymentMethods}
					>
						<FormControlLabel
							value="cash_on_delivery"
							control={<Radio />}
							label={
								<Box sx={{ display: "flex", gap: 1.3 }}>
									<CashOnDeliverySvg />
									<Typography sx={{ fontSize: 10, color: COLORS.GRANITE_GREY }}>
										Cash on Delivery
									</Typography>
								</Box>
							}
						/>
						<FormControlLabel
							value="pay_with_card"
							control={<Radio />}
							label={
								<Box sx={{ display: "flex", gap: 1.3 }}>
									<PayWithCardSvg />
									<Typography sx={{ fontSize: 10, color: COLORS.GRANITE_GREY }}>
										Pay with Credit/Debit Card
									</Typography>
								</Box>
							}
						/>
						<FormControlLabel
							value="pay_with_paypal"
							control={<Radio />}
							label={
								<Box sx={{ display: "flex", gap: 1.3 }}>
									<PaypalColorSvg height={15} />
									<Typography sx={{ fontSize: 10, color: COLORS.GRANITE_GREY }}>
										Pay with Paypal
									</Typography>
								</Box>
							}
						/>
					</RadioGroup>
					{paymentMethods === "pay_with_card" && (
						<>
							<TextField
								error={errors.payWithCard?.cardNumber ? true : false}
								{...register("payWithCard.cardNumber", {
									required: true,
									pattern: regex.credit_card,
								})}
								helperText={errors.payWithCard?.cardNumber && "Card Number is required"}
								fullWidth
								size="small"
								inputMode="numeric"
								sx={{ borderRadius: 0 }}
								placeholder="Enter card number"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Box component="span" sx={{ display: "flex", gap: 0.5 }}>
												{watch("payWithCard.cardNumber") ? (
													<>
														{watch("payWithCard.cardNumber")?.indexOf("4") ? (
															<VisaSvg />
														) : null}
														{watch("payWithCard.cardNumber")?.indexOf("51") ? (
															<MasterCardSvg />
														) : null}
													</>
												) : (
													<>
														<VisaSvg />
														<MasterCardSvg />
													</>
												)}
											</Box>
										</InputAdornment>
									),
								}}
							/>
							<Box mt={1.3} sx={{ display: "flex", gap: 1.3 }}>
								<TextField
									size="small"
									placeholder="MM"
									error={errors.payWithCard?.month ? true : false}
									{...register("payWithCard.month", {
										required: true,
									})}
									helperText={errors.payWithCard?.month && "Month is required"}
								/>
								<TextField
									size="small"
									placeholder="YYYY"
									error={errors.payWithCard?.year ? true : false}
									{...register("payWithCard.year", {
										required: true,
									})}
									helperText={errors.payWithCard?.year && "Year is required"}
								/>
								<TextField
									size="small"
									placeholder="CVV"
									error={errors.payWithCard?.cvv ? true : false}
									{...register("payWithCard.cvv", {
										required: true,
									})}
									helperText={errors.payWithCard?.cvv && "CVV is required"}
								/>
							</Box>
						</>
					)}
				</FormControl>
			</Box>

			{/* agreement checkbox */}
			<FormControl
				sx={{ my: 2.5 }}
				required
				error={errors.agree ? true : false}
				component="fieldset"
				variant="standard"
			>
				<FormControlLabel
					sx={{ "& .MuiTypography-root": { fontSize: 10 } }}
					control={<Checkbox size="small" {...register("agree", { required: true })} />}
					label={
						<Typography>
							I have read and agree to the website{" "}
							<span style={{ color: "#E2BC82" }}>terms and conditions</span>
						</Typography>
					}
				/>
				<FormHelperText>{errors.agree && "Checkbox is required."}</FormHelperText>
			</FormControl>

			<EndIconButton type="submit" endIcon={<WhiteLockSvg />}>
				Checkout
			</EndIconButton>

			{/* checkout with- paypal button*/}
			{paymentMethods === "pay_with_paypal" && (
				<Button
					fullWidth
					size="small"
					type="submit"
					variant="contained"
					sx={{ mt: 1.25, bgcolor: "#fec33a", "&:hover": { bgcolor: "#cb9b2e" }, "& span": { ml: 0.5 } }}
				>
					<PaypalColorSvg width={50} height={20} /> <span> Checkout</span>
				</Button>
			)}
		</div>
	);
};

export default ShoppingCart;

import { Box, Button, Typography, IconButton, FormControlLabel, Checkbox } from "@mui/material";
import { FlexStack, SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";
import { PaymentMethodsSvg, DeleteSvg, MasterCardSvg, VisaSvg } from "../../icons";
import PaymentPopup from "./PaymentPopup";
import { useState } from "react";
import { PaymentMethodSkeleton } from "../../skeleton";

const AddressBook = () => {
	const [isPaymentMethodOpen, setIsPaymentMethodOpen] = useState(false);
	const [isDefaultChecked, setIsDefaultChecked] = useState(true);

	const handleTogglePopup = (boolean: boolean) => {
		setIsPaymentMethodOpen(boolean);
	};

	// handle default payment check
	const handleDefaultCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsDefaultChecked(event.target.checked);
	};

	console.log(isDefaultChecked);

	// kept it just for checking loading sign
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 1500);

	return (
		<Box>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
				<TitleFlexStack>
					<PaymentMethodsSvg />
					<TitleText>Payment Methods</TitleText>
				</TitleFlexStack>
				<Button onClick={() => handleTogglePopup(true)} color="secondary" variant="contained">
					Add New
				</Button>
			</Box>

			<SettingsDivider />

			{isLoading ? (
				<PaymentMethodSkeleton />
			) : (
				<>
					{[
						{
							card: <MasterCardSvg height={30} width={50} />,
							aboutCard: "This is your default payment method",
							checked: true,
						},
						{
							card: <VisaSvg height={30} width={50} />,
							aboutCard: "This card has been expired",
							checked: false,
						},
					].map((item, idx) => (
						<Box
							key={idx}
							sx={{ position: "relative", bgcolor: "common.white", p: { xs: 1, sm: 2.5 }, my: 2.5 }}
						>
							<Box
								sx={{
									mr: 7,
									width: { xs: "100%", sm: "auto" },
									display: "flex",
									flexDirection: { xs: "column", sm: "row" },
									gap: 2.5,
								}}
							>
								<Box component="span" mt={1.5}>
									{item.card}
								</Box>
								<Box width="100%">
									<FlexStack>
										<Typography fontWeight="medium">Card:</Typography>
										<Typography>Master Debit (9332)</Typography>
									</FlexStack>
									<FlexStack>
										<Typography fontWeight="medium">Exp:</Typography>
										<Typography>Exp: 08/21</Typography>
									</FlexStack>
									<FlexStack>
										<Typography fontWeight="medium">Card Holder:</Typography>
										<Typography>John Doe</Typography>
									</FlexStack>
									<Typography sx={{ color: "#9E9E9E", fontSize: 12, mt: 3 }}>
										{item.aboutCard}
									</Typography>
								</Box>
							</Box>

							<FormControlLabel
								sx={{ mt: 2 }}
								label="Default Payment Methods"
								control={<Checkbox defaultChecked={item.checked} onChange={handleDefaultCheckChange} />}
							/>

							{/* action on right corner */}
							<Box sx={{ position: "absolute", top: { xs: 12, sm: 20 }, right: { xs: 2, sm: 20 } }}>
								<Box>
									<IconButton>
										<DeleteSvg />
									</IconButton>
								</Box>
							</Box>
						</Box>
					))}
				</>
			)}

			{/* payment methods card */}

			{/* popup for - add new payment */}
			<PaymentPopup isOpen={isPaymentMethodOpen} handleTogglePopup={handleTogglePopup} />
		</Box>
	);
};

export default AddressBook;

import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { DiscoverSvg, MasterCardForCartSvg, OPaySvg, PaypalSvg, UnionPaySvg, VisaForCartSvg } from "../../icons";

const PaymentSystemView: FC = () => {
	return (
		<>
			<Box sx={{ my: 3, display: "flex", alignItems: "center", justifyContent: "space-around", gap: 1.2 }}>
				<MasterCardForCartSvg />
				<VisaForCartSvg />
				<PaypalSvg />
				<DiscoverSvg />
				<UnionPaySvg />
				<OPaySvg />
			</Box>
			<Typography sx={{ fontSize: 10, color: "#808080", my: 2.5, textAlign: "center" }}>
				Your card details would be securely saved for faster payments. Your CVV will not be stored
			</Typography>
		</>
	);
};

export default PaymentSystemView;

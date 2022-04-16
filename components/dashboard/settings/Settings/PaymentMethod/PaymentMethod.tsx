import { CardContent, Typography, Box } from "@mui/material";
import { AppSwitch } from "../../../../ui";
import { StyledCard } from "../../../components/styledComponents";
import { styled } from "@mui/material/styles";

const FlexStack = styled(Box)({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: 20,
	margin: "20px 0",
});

const label = { inputProps: { "aria-label": "Switch demo" } };

const PaymentMethod = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography fontWeight="medium" gutterBottom>
					Payment Method
				</Typography>

				<FlexStack>
					<Typography variant="body2">Pay with Credit / Debit card</Typography>
					<AppSwitch {...label} defaultChecked />
				</FlexStack>
				<FlexStack>
					<Typography variant="body2">Cash on delivery</Typography>
					<AppSwitch {...label} />
				</FlexStack>
				<FlexStack>
					<Typography variant="body2">Pay with Paypal</Typography>
					<AppSwitch {...label} defaultChecked />
				</FlexStack>
			</CardContent>
		</StyledCard>
	);
};

export default PaymentMethod;

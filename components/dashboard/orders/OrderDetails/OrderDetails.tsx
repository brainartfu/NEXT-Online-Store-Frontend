import { BackIconButton } from "../../../ui";
import { Box, Typography, Grid, Stack } from "@mui/material";
import TotalItem from "./TotalItem";
import DeliveryDetails from "./DeliveryDetails";
import PaymentDetails from "./PaymentDetails";
import { StatusText } from "../../components/styledComponents";
import { useRouter } from "next/router";

const OrderDetails = () => {
	const router = useRouter();

	return (
		<Box my={2.5}>
			{/* back to order tab */}
			<Box mb={3.5}>
				<BackIconButton onClick={() => router.back()}>Order Details</BackIconButton>
			</Box>

			<Box component="section">
				<Stack sx={{ mb: 1.5 }} direction="row" spacing={3.75} justifyContent="flex-end">
					<Typography fontWeight="medium">Delivery Status</Typography>
					<StatusText fs={18} status="Delivered">
						Delivered
					</StatusText>
				</Stack>

				{/*  order details, payment Details & total items */}
				<Grid container spacing={2.5}>
					{/* order details & payment details */}
					<Grid item xs={12} md={6}>
						<Grid container spacing={2.5}>
							<Grid item xs={12}>
								<DeliveryDetails />
							</Grid>
							<Grid item xs={12}>
								<PaymentDetails />
							</Grid>
						</Grid>
					</Grid>

					{/* total items */}
					<Grid item xs={12} md={6}>
						<TotalItem />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default OrderDetails;

import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { BackIconButton } from "../../../ui";
import ManageCouponTable from "./ManageCouponTable";

const ManageCoupon = () => {
	const router = useRouter();

	return (
		<Box my={2.5}>
			<BackIconButton onClick={() => router.back()}>Manage Coupon</BackIconButton>

			{/* others sections */}
			<Box mt={3.75} component="section">
				<ManageCouponTable />
			</Box>
		</Box>
	);
};

export default ManageCoupon;

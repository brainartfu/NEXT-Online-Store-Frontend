import { useRouter } from "next/router";
import Table from "./Table";
import { Box } from "@mui/material";
import { BackIconButton } from "../../../ui";

const AbandonedCart = () => {
	const router = useRouter();
	return (
		<Box my={2.5}>
			<Box mb={3.5}>
				<BackIconButton onClick={() => router.back()}>Abondoned Cart</BackIconButton>
			</Box>

			{/* table section */}
			<Table />
		</Box>
	);
};

export default AbandonedCart;

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StatusText = styled(Typography)(
	({ status, color, fs, fw }: { status?: string; fs?: number | string; fw?: string | number; color?: string }) => ({
		fontSize: fs || 14,
		fontWeight: fw || 400,
		color:
			status === "Delivered" ||
			status === "In Stock" ||
			status === "Verified" ||
			status === "Active" ||
			status === "Paid" ||
			status === "Fulfilled" ||
			status === "Recovered"
				? "#04AF00"
				: status === "Out of Stock" ||
				  status === "Unverified" ||
				  status === "Pending" ||
				  status === "Inactive" ||
				  status === "Unfulfilled"
				? "#FF0303"
				: "#F97904",
	}),
);

export default StatusText;

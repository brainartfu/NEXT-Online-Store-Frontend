import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StatusChip = styled(Typography)(
	({ status, color, fs, fw }: { status?: string; fs?: number | string; fw?: string | number; color?: string }) => ({
		fontSize: fs || 14,
		fontWeight: fw || 400,
		color:
			status === "Paid" ||
			status === "Fulfilled" ||
			status === "Sent" ||
			status === "Recovered" ||
			status === "Active"
				? "#04AF00"
				: status === "UnPaid" ||
				  status === "UnFulfilled" ||
				  status === "Not Sent" ||
				  status === "Not Recovered" ||
				  status === "Inactive"
				? "#FF0303"
				: status === "Draft"
				? "#676767"
				: "#F97904",

		background:
			status === "Paid" ||
			status === "Fulfilled" ||
			status === "Sent" ||
			status === "Recovered" ||
			status === "Active"
				? "#E1FFE0"
				: status === "UnPaid" ||
				  status === "UnFulfilled" ||
				  status === "Not Sent" ||
				  status === "Not Recovered" ||
				  status === "Inactive"
				? "#FFEAEA"
				: "#c4c4c4",

		borderRadius: 5,
		padding: 5,
	}),
);

export default StatusChip;

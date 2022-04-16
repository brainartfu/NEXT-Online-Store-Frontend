import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexStack = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: 2,
	padding: 10,
	justifyContent: "space-between",
	borderBottom: "1px solid #D6D4D4",
	"&:last-child": {
		borderBottom: 0,
	},
});

export default FlexStack;

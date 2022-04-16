import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const OrangeButton = styled(Button)(({ theme }) => ({
	borderRadius: 5,
	background: "#FB5555",
	color: theme.palette.common.white,
	"&:hover": { background: "#fb5555bb" },
	boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
}));

export default OrangeButton;

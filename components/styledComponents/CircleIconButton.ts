import { IconButton } from "@mui/material";
import { styled } from "@mui/system";

const CircleIconButton = styled(IconButton)(({ theme }) => ({
	borderRadius: "100%",
	background: theme.palette.primary.main,
	color: theme.palette.common.white,
	boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
	"&:hover": {
		background: theme.palette.primary.dark,
	},
}));

export default CircleIconButton;

import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { COLORS } from "../../theme/colors";

const CartText = styled(Typography)(({ color, fs }: { fs?: number | string; color?: string }) => ({
	fontSize: 10,
	fontWeight: 500,
	color: color || COLORS.GRANITE_GREY,
}));

export default CartText;

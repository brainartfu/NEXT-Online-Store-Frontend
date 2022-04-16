import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { COLORS } from "../../theme/colors";

const Text = styled(Typography)(({ color, fs, fw }: { fs?: number | string; fw: number | string; color?: string }) => ({
	fontSize: fs || 16,
	fontWeight: fw || 400,
	color: color || COLORS.GRANITE_GREY,
}));

export default Text;

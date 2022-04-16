import { Theme, Typography } from "@mui/material";
import { styled } from "@mui/system";

const HeadingText = styled(Typography)(({ theme, color }: { theme?: Theme; color?: string }) => ({
	color: color || (theme && theme.palette.text.primary),
	fontSize: 18,
	fontWeight: 500,
}));

export default HeadingText;

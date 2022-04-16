// @mui material components
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

interface StyledBoxProps extends BoxProps {
	action: string;
}

export default styled(Box)<StyledBoxProps>(({ theme }) => ({
	fontFamily: "Poppins",
	display: "flex",
	borderRadius: 5,
	alignItems: "center",
	justifyContent: "center",
	border: "0.5px solid #ABABAB !important",
	color: theme.palette.text.secondary,

	"& .dz-default": {
		margin: "0 auto !important",
	},

	"& .dz-default .dz-button": {
		color: theme.palette.text.secondary,
		// fontSize: "14px !important",
	},

	"& .dz-preview .dz-details": {
		// color: `${dark.main} !important`,
		opacity: "1 !important",

		"& .dz-size span, & .dz-filename span": {
			backgroundColor: theme.palette.primary.main,
		},
	},

	"& .dz-error-message": {
		display: "none !important",
	},

	"& .dz-remove": {
		color: theme.palette.text.secondary,
		textDecoration: "none",
		fontWeight: 500,

		"&:hover, &:focus": {
			textDecoration: "none !important",
		},
	},
}));

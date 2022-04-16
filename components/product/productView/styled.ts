import { makeStyles } from "@mui/styles";
import { COLORS } from "../../../theme/colors";

export const useStyles = makeStyles(() => ({
	discountChip: {
		position: "absolute",
		top: 20,
		right: 20,
		fontSize: 12,
		fontWeight: 500,
		color: "#000000",
		background: "#E8BD83",
		borderRadius: 30,
		padding: "2px 8px",
	},

	viewTop: {
		display: "flex",
		alignItems: "flex-start",
		gap: 2,
	},
	chartBtn: {
		padding: 0,
		fontSize: 12,
		textDecoration: "underline",
	},
	accordion: {
		boxShadow: "none !important",
		"& .MuiAccordionSummary-root": {
			padding: 0,
			"& .MuiAccordionSummary-content": {
				margin: "0 !important",
				"& .MuiTypography-root": {
					fontSize: 14,
					fontWeight: 500,
					color: COLORS.GRANITE_GREY,
				},
			},
		},
		"& .MuiAccordionDetails-root": {
			marginTop: -15,
			"& .MuiTypography-root": {
				fontSize: 12,
				color: COLORS.GRANITE_GREY,
			},
		},
	},

	smallGreyText: {
		color: COLORS.GRANITE_GREY,
		fontSize: 10,
		fontWeight: 500,
	},
}));

import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const HoverTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.arrow}`]: {
		color: "#C4C4C4",
	},
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.common.white,
		color: "rgba(0, 0, 0, 0.87)",
		border: "0.5px solid #C4C4C4",
		padding: "13px 7px",
		borderRadius: 0,
		fontSize: 11,
	},
}));

export default HoverTooltip;

import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const AppTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.arrow}`]: {
		color: theme.palette.common.white,
	},
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.common.white,
	},
}));

export default AppTooltip;

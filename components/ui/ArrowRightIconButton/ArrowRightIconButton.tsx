import { IconButton } from "@mui/material";
import { COLORS } from "../../../theme/colors";
import { ArrowRightIcon } from "../../../uiElements/icons";

interface IProps {
	onClick: () => void;
	color?: string;
}

const ArrowRightIconButton = ({ onClick, color }: IProps) => {
	return (
		<IconButton onClick={onClick} sx={{ color: color || COLORS.GRANITE_GREY, padding: 0 }}>
			<ArrowRightIcon />
		</IconButton>
	);
};

export default ArrowRightIconButton;

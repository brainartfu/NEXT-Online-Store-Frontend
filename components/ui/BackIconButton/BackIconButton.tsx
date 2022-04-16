import { Stack, Typography } from "@mui/material";
import { ArrowBackIcon } from "../../../uiElements/icons";
import { CircleIconButton } from "../../styledComponents";

interface IProps {
	onClick?: () => void;
	children: React.ReactNode;
}

const BackIconButton = ({ onClick, children, ...props }: IProps) => {
	return (
		<Stack direction="row" alignItems="center" spacing={2.5} {...props} sx={{ alignSelf: "flex-start" }}>
			<CircleIconButton onClick={onClick} size="small">
				<ArrowBackIcon fontSize="small" />
			</CircleIconButton>
			<Typography sx={{ fontWeight: 500, fontSize: { xs: 16, sm: 18 } }}>{children}</Typography>
		</Stack>
	);
};

export default BackIconButton;

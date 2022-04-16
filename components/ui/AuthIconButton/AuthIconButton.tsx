import { Button, Box } from "@mui/material";
import { COLORS } from "../../../theme/colors";

interface IProps {
	onClick?: () => void;
	icon: React.ReactElement;
	btnText: string;
}

const AuthIconButton = ({ onClick, icon, btnText }: IProps) => {
	return (
		<Button
			fullWidth
			color="secondary"
			onClick={onClick}
			sx={{
				my: 2,
				fontSize: { xs: 14, sm: 22 },
				fontWeight: 400,
				justifyContent: "flex-start",
				gap: { xs: 5, sm: 10, md: 20 },
				border: `1px solid ${COLORS.BORDER[1]}`,
			}}
		>
			<Box sx={{ mt: 1.2, pl: { xs: 1, sm: 4 } }}>{icon}</Box>
			{btnText}
		</Button>
	);
};

export default AuthIconButton;

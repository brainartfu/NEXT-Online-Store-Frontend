import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { CircleIcon } from "../../../uiElements/icons";

interface IProps {
	children: React.ReactNode;
}

const BulletListItem = ({ children }: IProps) => {
	return (
		<ListItem sx={{ my: 1.3, p: 0, alignItems: "flex-start" }}>
			<ListItemIcon sx={{ minWidth: 20 }}>
				<CircleIcon color="primary" sx={{ width: 8 }} />
			</ListItemIcon>
			<ListItemText sx={{ m: 0 }} secondary={children} />
		</ListItem>
	);
};

export default BulletListItem;

import Drawer from "@mui/material/Drawer";
import { AppBar, Box, Toolbar } from "@mui/material";
import { CartDivider, CloseButton } from "../../styledComponents";

// types
interface IProps {
	children: React.ReactNode;
	isDrawerOpen: boolean;
	toggleDrawer: (open: boolean) => void;
}

const AppDrawer = ({ children, isDrawerOpen, toggleDrawer }: IProps) => {
	return (
		<Drawer
			anchor="right"
			open={isDrawerOpen}
			onClose={() => toggleDrawer(false)}
			sx={{
				"& .MuiPaper-root": {
					minWidth: 300,
					bgcolor: (theme) => theme.palette.secondary.main,
				},
			}}
		>
			<AppBar
				position="static"
				sx={{
					bgcolor: (theme) => theme.palette.secondary.main,
					boxShadow: 0,
				}}
			>
				<Toolbar sx={{ px: "20px !important" }}>
					<Box textAlign="right" sx={{ width: "100%" }}>
						<CloseButton onClick={() => toggleDrawer(false)}>Close</CloseButton>
					</Box>
				</Toolbar>
				<Box px={2.5}>
					<CartDivider />
				</Box>
			</AppBar>

			{/* drawer body content */}
			<Box p={2.5} sx={{ color: "#FFFFFF" }}>
				{children}
			</Box>
		</Drawer>
	);
};

export default AppDrawer;

import { BackIconButton } from "../../../ui";
import { Box, Grid } from "@mui/material";
import Menu from "./Menu";
import AddItem from "./AddItem";
import { useRouter } from "next/router";

const MegaMenu = () => {
	const router = useRouter();

	return (
		<Box my={2.5}>
			<BackIconButton onClick={() => router.back()}>Men Mega Menu Settings</BackIconButton>

			{/* others sections */}
			<Box mt={3.75} component="section">
				<Grid container spacing={2.5}>
					{/* menu */}
					<Grid item xs={12} md={4}>
						<Menu />
					</Grid>

					{/* add item */}
					<Grid item xs={12} md={8}>
						<AddItem />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default MegaMenu;

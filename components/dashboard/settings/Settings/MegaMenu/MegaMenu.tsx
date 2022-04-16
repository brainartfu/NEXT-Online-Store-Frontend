import { CardContent, Typography, Box, Button } from "@mui/material";
import { StyledCard } from "../../../components/styledComponents";
import { ROUTING_TREE } from "../../../../../constants/siteUrls";
import { styled } from "@mui/material/styles";
import { Link } from "../../../../ui";

const FlexStack = styled(Box)({
	gap: 20,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

const megaMenu: { id: string; item: string }[] = [
	{ id: "men", item: "Men" },
	{ id: "women", item: "Women" },
	{ id: "kids", item: "Kids" },
];

const MegaMenu = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography gutterBottom fontWeight="medium">
					Mega Menu
				</Typography>

				{megaMenu.map((menu) => (
					<FlexStack key={menu.id}>
						<Typography variant="body2">{menu.item}</Typography>
						<Link
							href={`${ROUTING_TREE.DASHBOARD.SETTINGS.ROOT}/${ROUTING_TREE.DASHBOARD.SETTINGS.MEGA_MENU}/${menu.id}`}
						>
							<Button>Customize</Button>
						</Link>
					</FlexStack>
				))}
			</CardContent>
		</StyledCard>
	);
};

export default MegaMenu;

import { CardContent, Typography, Box, Button } from "@mui/material";
import { StyledCard } from "../../../components/styledComponents";
import { styled } from "@mui/material/styles";
import { Link } from "../../../../ui";
import { ROUTING_TREE } from "../../../../../constants/siteUrls";

const FlexStack = styled(Box)({
	gap: 20,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

const Manage = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography gutterBottom fontWeight="medium">
					Manage
				</Typography>

				<FlexStack>
					<Typography variant="body2">Sending Email</Typography>
					<Link
						href={`${ROUTING_TREE.DASHBOARD.SETTINGS.ROOT}/${ROUTING_TREE.DASHBOARD.SETTINGS.EMAIL.ROOT}`}
					>
						<Button>Manage</Button>
					</Link>
				</FlexStack>
				<FlexStack>
					<Typography variant="body2">Blogs</Typography>
					{/* blogs */}
					<Link
						href={`${ROUTING_TREE.DASHBOARD.SETTINGS.ROOT}/${ROUTING_TREE.DASHBOARD.SETTINGS.BLOGS.ROOT}`}
					>
						<Button>Manage</Button>
					</Link>
				</FlexStack>
				<FlexStack>
					<Typography variant="body2">Contact Us / Newsletter</Typography>
					{/* contact / newsletter */}
					<Link
						href={`${ROUTING_TREE.DASHBOARD.SETTINGS.ROOT}/${ROUTING_TREE.DASHBOARD.SETTINGS.CONTACT_OR_NEWSLETTER}`}
					>
						<Button>Manage</Button>
					</Link>
				</FlexStack>
			</CardContent>
		</StyledCard>
	);
};

export default Manage;

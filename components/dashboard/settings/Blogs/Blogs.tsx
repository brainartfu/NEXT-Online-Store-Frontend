import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { ROUTING_TREE } from "../../../../constants/siteUrls";
import { RoundButton } from "../../../styledComponents";
import { BackIconButton, Link } from "../../../ui";
import BlogsTable from "./BlogsTable";

const Blogs = () => {
	const router = useRouter();

	return (
		<Box my={2.5}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 2.5,
				}}
			>
				<BackIconButton onClick={() => router.back()}>Blogs</BackIconButton>

				<Link
					href={`${ROUTING_TREE.DASHBOARD.SETTINGS.BLOGS.ROOT}/${ROUTING_TREE.DASHBOARD.SETTINGS.BLOGS.ADD}`}
				>
					<RoundButton sx={{ minWidth: 150 }} variant="contained" color="secondary">
						Add Blog
					</RoundButton>
				</Link>
			</Box>

			{/* others sections */}
			<Box mt={3.75} component="section">
				<BlogsTable />
			</Box>
		</Box>
	);
};

export default Blogs;

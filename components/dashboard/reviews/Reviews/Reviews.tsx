import { Box, Stack, Typography } from "@mui/material";
import SwitchIcon from "../../../common/SwitchIcon";
import ReviewTable from "./ReviewTable";

const Reviews = () => {
	return (
		<div>
			<Box
				sx={{
					mb: 4,
					mt: 2,
					display: "flex",
					alignItems: "center",
					gap: 2.5,
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
			>
				<Typography variant="h6" fontWeight={600}>
					Reviews
				</Typography>
				<Stack direction="row" spacing={1} alignItems="center">
					<Typography sx={{ fontSize: 12 }} fontWeight="medium">
						Review approval
					</Typography>
					<SwitchIcon inputProps={{ "aria-label": "swiper" }} />
				</Stack>
			</Box>
			{/* table section */}
			<Box my={2.5}>
				<ReviewTable />
			</Box>
		</div>
	);
};

export default Reviews;

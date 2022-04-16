import { FC } from "react";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const PageLoading: FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				height: "100vh",
				gap: 2,
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<CircularProgress />
			<Typography sx={{ fontWeight: "medium", textTransform: "uppercase", letterSpacing: "0.22em" }}>
				Loading...
			</Typography>
		</Box>
	);
};

export default PageLoading;

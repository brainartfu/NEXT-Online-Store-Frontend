import { Stack, Skeleton } from "@mui/material";

const MyOrdersSkeleton = () => {
	return (
		<Stack spacing={2.5} direction={{ xs: "column", sm: "row" }} sx={{ my: 2.5 }}>
			<Skeleton variant="rectangular" height={165} width={140} sx={{ mx: "auto" }} />

			<Stack spacing={2.5} direction="row" sx={{ width: "100%" }}>
				<div style={{ width: "100%" }}>
					<Skeleton variant="text" sx={{ fontSize: "1.2rem" }} />
					<Skeleton variant="text" sx={{ mt: 2.5, fontSize: "0.6rem", width: "50%" }} />
					<Skeleton variant="text" sx={{ mt: 1, fontSize: "0.6rem", width: "50%" }} />
					<Skeleton variant="text" sx={{ mt: 1, fontSize: "0.6rem", width: "50%" }} />
					<Skeleton variant="text" sx={{ mt: 1, fontSize: "0.6rem", width: "50%" }} />
				</div>
				<div>
					<Skeleton width={100} variant="text" height={50} sx={{ mt: -0.7 }} />
					<Skeleton variant="text" sx={{ mt: 1, fontSize: "0.6rem" }} />
					<Skeleton variant="text" sx={{ mt: 1, fontSize: "0.6rem" }} />
					<Skeleton variant="text" sx={{ mt: 1, fontSize: "0.6rem" }} />
				</div>
			</Stack>
		</Stack>
	);
};

export default MyOrdersSkeleton;

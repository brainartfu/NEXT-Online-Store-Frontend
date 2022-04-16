import { Stack, Skeleton, Box } from "@mui/material";

const AddressBookSkeleton = () => {
	return (
		<Box sx={{ border: "1px solid #D9D9D9", p: 2 }}>
			<Stack spacing={2.5} direction="row" sx={{ my: 2.5 }}>
				<Box width="100%">
					<Skeleton variant="text" sx={{ width: "100%", fontSize: "1.3rem" }} />
					<Skeleton variant="text" sx={{ width: "30%", fontSize: "1rem", mt: 2.5 }} />
				</Box>

				<div>
					<Skeleton width={40} height={40} sx={{ mt: -0.2 }} />
					<Skeleton width={40} height={40} sx={{}} />
				</div>
			</Stack>
		</Box>
	);
};

export default AddressBookSkeleton;

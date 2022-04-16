import Skeleton from "@mui/material/Skeleton";

const ProductSkeleton = () => {
	return (
		<div>
			<Skeleton variant="rectangular" sx={{ width: "100%", height: { xs: 250, sm: 300, md: 400 } }} />
			<Skeleton variant="text" sx={{ fontSize: "1.3rem", my: 0.5 }} />
			<Skeleton width="60%" variant="text" sx={{ fontSize: "0.8rem" }} />
			<Skeleton width="70%" variant="text" sx={{ fontSize: "0.8rem" }} />
		</div>
	);
};

export default ProductSkeleton;

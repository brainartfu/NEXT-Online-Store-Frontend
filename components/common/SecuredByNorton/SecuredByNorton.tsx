import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { LockSvg, NortonSvg } from "../../icons";
import { HoverTooltip } from "../../styledComponents";

const SecuredByNorton: FC = () => {
	return (
		<Box sx={{ my: 3, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1.2 }}>
			<LockSvg />

			<Typography sx={{ fontSize: 12, fontWeight: 500 }}>Guaranteed safe & secure checkout with</Typography>

			<HoverTooltip title="You are protected">
				<Box display="flex">
					<NortonSvg />
				</Box>
			</HoverTooltip>
		</Box>
	);
};

export default SecuredByNorton;

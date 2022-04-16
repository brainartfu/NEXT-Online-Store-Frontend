import { FC } from "react";
import { Box } from "@mui/material";

// data
import { itemData } from "./data";
import CollectionsGrid from "../../common/CollectionsGrid";

const Collections: FC = () => {
	return (
		<Box my={9.1}>
			<CollectionsGrid itemData={itemData} />
		</Box>
	);
};

export default Collections;

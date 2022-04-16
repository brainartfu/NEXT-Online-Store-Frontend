import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Link } from "../../ui";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";

const AppBreadcrumb: FC = () => {
	const router = useRouter();
	const asPath = router.asPath.split("/");

	const mainPaths = asPath.filter((e) => e);
	const slicePaths = asPath.filter((e) => e).slice(0, -1);

	const lastPath = mainPaths[mainPaths.length - 1];

	return (
		<Box pt={3} pb={4}>
			<Container>
				<Stack spacing={2}>
					<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
						<Link href="/">Home</Link>
						{slicePaths &&
							slicePaths?.map((path, idx) => (
								<Link key={idx} href={`/${path}`}>
									{/* {`${path.replaceAll(regex.removeSlash, "")}`} */}

									{path && path[0].toUpperCase() + path.substring(1)}
								</Link>
							))}
						<Typography color="primary">
							{/* {lastPath} */}
							{lastPath && lastPath[0].toUpperCase() + lastPath.substring(1)}
						</Typography>
					</Breadcrumbs>
				</Stack>
			</Container>
		</Box>
	);
};

export default AppBreadcrumb;

import FilterListIcon from "@mui/icons-material/FilterList";
import { Box, CardContent, SelectChangeEvent, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { RoundButton } from "../../styledComponents";
import { TableCustomPagination } from "../../ui";
import { StyledCard } from "../components/styledComponents";
import FilterMenu from "./FilterMenu";
import SingleNotification from "./SingleNotification";

const data = [
	{ type: "New User", text: "New Registrtion", name: "Jhon Doe", color: "green", new: true },
	{ type: "New Review", text: "New Review", name: "Levis Tshirt", color: "#8A34FF", new: true },
	{ type: "Abandoned Cart", text: "Abandoned Cart", name: "Jhon Doe", color: "red", new: false },
	{ type: "Order Confirmed", text: "Order Confirmed", name: "Levis Tshirt", color: "black", new: false },
	{ type: "New User", text: "New Registrtion", name: "Jhon Doe", color: "green", new: false },
];

const Notification = () => {
	const [anchorFilterEl, setAnchorFilterEl] = useState<null | HTMLElement>(null);
	const isFilterMenuOpen = Boolean(anchorFilterEl);

	// handle filter
	const handleFilterMenuClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorFilterEl(event.currentTarget);
	};

	// handle filter closer
	const handleFilterMenuClose = () => {
		setAnchorFilterEl(null);
	};

	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [, setPage] = useState(0);

	const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<div>
			<Typography sx={{ mb: 4, mt: 2 }} variant="h6" fontWeight={600}>
				Notifications & Recent Activity
			</Typography>

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
				<Box sx={{ minWidth: "135px", height: "45px" }}>
					<div>
						<RoundButton
							fullWidth
							startIcon={<FilterListIcon />}
							color="secondary"
							variant="contained"
							aria-haspopup="true"
							aria-label="filter-menu"
							onClick={handleFilterMenuClick}
							aria-expanded={isFilterMenuOpen ? "true" : undefined}
							aria-controls={isFilterMenuOpen ? "filter-menu" : undefined}
						>
							Filter
						</RoundButton>

						{/* filter menu popover */}
						<FilterMenu
							anchorEl={anchorFilterEl}
							isOpen={isFilterMenuOpen}
							handleClose={handleFilterMenuClose}
						/>
					</div>
				</Box>

				<RoundButton sx={{ backgroundColor: "#ECECEC", color: "black" }} variant="contained">
					Mark all as read
				</RoundButton>
			</Box>

			<Box my={2.5}>
				<StyledCard>
					<CardContent>
						<SingleNotification data={data[0]} />
						<Divider variant="middle" />
						<SingleNotification data={data[1]} />
						<Divider variant="middle" />
						<SingleNotification data={data[2]} />
						<Divider variant="middle" />
						<SingleNotification data={data[3]} />
						<Divider variant="middle" />
						<SingleNotification data={data[4]} />
					</CardContent>
				</StyledCard>
				<TableCustomPagination handleChangeRowsPerPage={handleChangeRowsPerPage} rowsPerPage={rowsPerPage} />
			</Box>
		</div>
	);
};

export default Notification;

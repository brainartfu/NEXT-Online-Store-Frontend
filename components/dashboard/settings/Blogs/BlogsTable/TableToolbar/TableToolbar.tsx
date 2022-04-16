import { Toolbar, Grid, Stack } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { StyledTextField } from "../../../../components/styledComponents";
import { RoundButton } from "../../../../../styledComponents";
import { ExportIcon } from "../../../../components/icons";
import { useState } from "react";
import FilterMenu from "./FilterMenu";

const TableToolbar = () => {
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

	return (
		<Toolbar sx={{ mb: 2.5, px: "0 !important" }}>
			<Grid container spacing={1.25}>
				<Grid item xs={12} sm={9}>
					<Grid container spacing={1.25}>
						<Grid item xs={12} md={4}>
							<StyledTextField size="small" fullWidth placeholder="Search by Title" />
						</Grid>
						<Grid item xs={12} md={4}>
							<StyledTextField size="small" fullWidth placeholder="Search by Type" />
						</Grid>
						<Grid item xs={12} md={4}>
							<StyledTextField size="small" fullWidth placeholder="Search by Price" />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={3}>
					<Stack spacing={1.25} direction="row">
						<div>
							<RoundButton
								variant="contained"
								aria-haspopup="true"
								aria-label="filter-menu"
								onClick={handleFilterMenuClick}
								aria-expanded={isFilterMenuOpen ? "true" : undefined}
								aria-controls={isFilterMenuOpen ? "filter-menu" : undefined}
							>
								<FilterListIcon />
							</RoundButton>

							{/* filter menu popover */}
							<FilterMenu
								anchorEl={anchorFilterEl}
								isOpen={isFilterMenuOpen}
								handleClose={handleFilterMenuClose}
							/>
						</div>

						<RoundButton fullWidth startIcon={<ExportIcon />} variant="contained" color="secondary">
							Export .CSV
						</RoundButton>
					</Stack>
				</Grid>
			</Grid>
		</Toolbar>
	);
};

export default TableToolbar;

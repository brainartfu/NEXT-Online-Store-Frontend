import { Box, Pagination, Stack, Typography, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SmallFormControl, SmallInput } from "../../dashboard/components/styledComponents";

interface IProps {
	handleChangeRowsPerPage: (event: SelectChangeEvent) => void;
	rowsPerPage: number;
}

const TableCustomPagination = ({ handleChangeRowsPerPage, rowsPerPage }: IProps) => {
	return (
		<Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2.5 }}>
			<Stack direction="row" spacing={1.25} alignItems="center">
				{/* show entries of table */}
				<Typography variant="body2">Showing 1 to 10 of 9,225 entries</Typography>

				{/* number pagination */}
				<Pagination count={10} shape="rounded" />

				{/* select page per rows */}
				<Box sx={{ minWidth: 120 }}>
					<SmallFormControl fullWidth>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={rowsPerPage.toString()}
							onChange={handleChangeRowsPerPage}
						>
							{[5, 10, 25].map((num) => (
								<MenuItem key={num} value={num}>
									{num}
								</MenuItem>
							))}
						</Select>
					</SmallFormControl>
				</Box>

				{/* input provide to go spacing number of page*/}
				<Stack direction="row" spacing={1.25} alignItems="center">
					<Typography variant="body2">go to</Typography>
					<SmallInput type="number" />
				</Stack>
			</Stack>
		</Box>
	);
};

export default TableCustomPagination;

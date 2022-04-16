import { ChangeEvent, MouseEvent, useState } from "react";
import {
	Box,
	Table,
	Checkbox,
	TableRow,
	TableCell,
	TableBody,
	CardContent,
	TableContainer,
	SelectChangeEvent,
} from "@mui/material";
import TableHeader from "./TableHeader";
import TableToolbar from "./TableToolbar";
import SelectToolbar from "./SelectToolbar";
import { Order } from "../../../../../types/order";
import { TableCustomPagination } from "../../../../ui";
import { StyledCard } from "../../../components/styledComponents";
import { getComparator, stableSort } from "../../../../../utils/helper/table-sort";

export interface Data {
	name: string;
	email: string;
	contactNo: number | string;
}

function createData(name: string, email: string, contactNo: number | string): Data {
	return {
		name,
		email,
		contactNo,
	};
}

const rows = [
	createData("Jhon Done", "jhone@gmail.com", 1234567879),
	createData("Mariah Betts", "Mariah@abc.com", 1234567879),
	createData("Jhon Done", "jhone@gmail.com", 1234567879),
	createData("Mariah Betts", "Mariah@abc.com", 1234567879),
	createData("Jhon Done", "jhone@gmail.com", 1234567879),
	createData("Mariah Betts", "Mariah@abc.com", 1234567879),
	createData("Jhon Done", "jhone@gmail.com", 1234567879),
	createData("Mariah Betts", "Mariah@abc.com", 1234567879),
	createData("Jhon Done", "jhone@gmail.com", 1234567879),
	createData("Mariah Betts", "Mariah@abc.com", 1234567879),
];

// function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
// 	if (b[orderBy] < a[orderBy]) {
// 		return -1;
// 	}
// 	if (b[orderBy] > a[orderBy]) {
// 		return 1;
// 	}
// 	return 0;
// }

// type Order = "asc" | "desc";

// function getComparator<Key extends keyof any>(
// 	order: Order,
// 	orderBy: Key,
// ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
// 	return order === "desc"
// 		? (a, b) => descendingComparator(a, b, orderBy)
// 		: (a, b) => -descendingComparator(a, b, orderBy);
// }

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
// function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
// 	const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
// 	stabilizedThis.sort((a, b) => {
// 		const order = comparator(a[0], b[0]);
// 		if (order !== 0) {
// 			return order;
// 		}
// 		return a[1] - b[1];
// 	});
// 	return stabilizedThis.map((el) => el[0]);
// }

export default function SelectUsersTable() {
	const [order, setOrder] = useState<Order>("asc");
	const [orderBy, setOrderBy] = useState<keyof Data>("contactNo");
	const [selected, setSelected] = useState<readonly string[]>([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleRequestSort = (event: MouseEvent<unknown>, property: keyof Data) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelected = rows.map((n) => n.name);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected: readonly string[] = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	};

	const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// const handleChangePage = (event: unknown, newPage: number) => {
	// 	setPage(newPage);
	// };

	const isSelected = (name: string) => selected.indexOf(name) !== -1;

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	return (
		<Box sx={{ width: "100%" }}>
			<TableToolbar />
			<StyledCard>
				<CardContent>
					<SelectToolbar numSelected={selected.length} />
					<TableContainer sx={{ overflowX: { sm: "auto", md: "hidden" } }}>
						<Table sx={{ minWidth: 450 }} aria-labelledby="tableTitle" size="medium">
							<TableHeader
								numSelected={selected.length}
								order={order}
								orderBy={orderBy}
								onSelectAllClick={handleSelectAllClick}
								onRequestSort={handleRequestSort}
								rowCount={rows.length}
							/>
							<TableBody>
								{/* if you don't need to support IE11, you can replace the `stableSort` call with:
             						rows.slice().sort(getComparator(order, orderBy)) */}
								{stableSort(rows, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										const isItemSelected = isSelected(row.name);
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow
												hover
												onClick={(event) => handleClick(event, row.name)}
												role="checkbox"
												aria-checked={isItemSelected}
												tabIndex={-1}
												key={index}
												// key={row.name}
												selected={isItemSelected}
											>
												<TableCell padding="checkbox">
													<Checkbox
														color="primary"
														checked={isItemSelected}
														inputProps={{
															"aria-labelledby": labelId,
														}}
													/>
												</TableCell>
												<TableCell id={labelId} scope="row" align="center">
													{row.name}
												</TableCell>
												<TableCell align="center">{row.email}</TableCell>
												<TableCell align="right">{row.contactNo}</TableCell>
											</TableRow>
										);
									})}
								{emptyRows > 0 && (
									<TableRow
										style={{
											height: 53 * emptyRows,
										}}
									>
										<TableCell colSpan={6} />
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>
				</CardContent>
			</StyledCard>
			{/* <TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/> */}

			{/* customized table pagination  */}
			<TableCustomPagination handleChangeRowsPerPage={handleChangeRowsPerPage} rowsPerPage={rowsPerPage} />
		</Box>
	);
}

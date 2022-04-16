import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { CardContent } from "@mui/material";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import { StatusText, StyledButton, StyledCard } from "../../components/styledComponents";
import { stableSort, getComparator } from "../../../../utils/helper/table-sort";
import { Order } from "../../../../types/order";

export interface Data {
	customer: string;
	email: string;
	amount: number;
	status: string;
	action: string;
}

function createData(customer: string, email: string, amount: number, status: string, action: string): Data {
	return {
		customer,
		email,
		amount,
		status,
		action,
	};
}

const rows = [
	createData("John Doe", "John@abc.com", 100, "Delivered", "View"),
	createData("Oliver", "oliver@abc.com", 200, "In Shipping", "View"),
	createData("Mariah Betts", "Mariah@abc.com", 100, "Delivered", "View"),
];

const OrdersTable = () => {
	const [order, setOrder] = useState<Order>("asc");
	const [orderBy, setOrderBy] = useState<keyof Data>("amount");
	// const [selected, setSelected] = useState<readonly string[]>([]);
	// const [page, setPage] = useState(0);
	// const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	// const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	if (event.target.checked) {
	// 		const newSelected = rows.map((n) => n.customer);
	// 		setSelected(newSelected);
	// 		return;
	// 	}
	// 	setSelected([]);
	// };

	// const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
	// 	const selectedIndex = selected.indexOf(name);
	// 	let newSelected: readonly string[] = [];

	// 	if (selectedIndex === -1) {
	// 		newSelected = newSelected.concat(selected, name);
	// 	} else if (selectedIndex === 0) {
	// 		newSelected = newSelected.concat(selected.slice(1));
	// 	} else if (selectedIndex === selected.length - 1) {
	// 		newSelected = newSelected.concat(selected.slice(0, -1));
	// 	} else if (selectedIndex > 0) {
	// 		newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
	// 	}

	// 	setSelected(newSelected);
	// };

	// const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setRowsPerPage(parseInt(event.target.value, 10));
	// 	setPage(0);
	// };

	// const isSelected = (name: string) => selected.indexOf(name) !== -1;

	// Avoid a layout jump when reaching the last page with empty rows.
	// const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	return (
		<Box>
			<StyledCard>
				<CardContent>
					<EnhancedTableToolbar
					//  numSelected={selected.length}
					/>
					<TableContainer>
						<Table aria-labelledby="tableTitle" size="medium">
							<EnhancedTableHead
								// numSelected={selected.length}
								order={order}
								orderBy={orderBy}
								// onSelectAllClick={handleSelectAllClick}
								onRequestSort={handleRequestSort}
								rowCount={rows.length}
							/>
							<TableBody>
								{/* if you don't need to support IE11, you can replace the `stableSort` call with:
                            rows.slice().sort(getComparator(order, orderBy)) */}
								{stableSort(rows, getComparator(order, orderBy))
									// .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										// const isItemSelected = isSelected(row.customer);
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow
												hover
												// onClick={(event) => handleClick(event, row.customer)}
												role="checkbox"
												// aria-checked={isItemSelected}
												tabIndex={-1}
												key={row.customer}
												// selected={isItemSelected}
											>
												<TableCell padding="checkbox">{index + 1}</TableCell>
												{/* <TableCell padding="checkbox">
												<Checkbox
													color="primary"
													checked={isItemSelected}
													inputProps={{
														"aria-labelledby": labelId,
													}}
												/>
											</TableCell> */}
												<TableCell component="th" id={labelId} scope="row" padding="none">
													{row.customer}
												</TableCell>
												<TableCell align="center">{row.email}</TableCell>
												<TableCell align="center">{row.amount}</TableCell>
												<TableCell align="center">
													<StatusText fw={500} status={row.status}>
														{row.status}
													</StatusText>
												</TableCell>
												<TableCell align="right">
													<StyledButton
														variant="contained"
														color="secondary"
														sx={{ maxHeight: 30 }}
													>
														View
													</StyledButton>
												</TableCell>
											</TableRow>
										);
									})}
								{/* {emptyRows > 0 && (
									<TableRow
										style={{
											height: 53 * emptyRows,
										}}
									>
										<TableCell colSpan={6} />
									</TableRow>
								)} */}
							</TableBody>
						</Table>
					</TableContainer>
					{/* <TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/> */}
				</CardContent>
			</StyledCard>
			{/* <FormControlLabel control={<Switch checked={dense}  label="Dense padding" /> */}
		</Box>
	);
};

export default OrdersTable;

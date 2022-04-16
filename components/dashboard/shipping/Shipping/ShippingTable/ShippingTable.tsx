import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { CardContent, SelectChangeEvent } from "@mui/material";
import { OrangeButton, StyledCard } from "../../../components/styledComponents";
import { getComparator, stableSort } from "../../../../../utils/helper/table-sort";
import { TableCustomPagination } from "../../../../ui";
import { Order } from "../../../../../types/order";
import TableHeader from "./TableHeader";
import TableToolbar from "./TableToolbar";
import { useState } from "react";
import { useWarningPopup } from "../../../../../store/slices/warningSlice";
import { useAppDispatch } from "../../../../../store/hooks";

export interface Data {
	zone: string;
	type: string;
	price: number;
}

function createData(zone: string, type: string, price: number): Data {
	return {
		zone,
		type,
		price,
	};
}

const rows = [
	createData("Austrailia", "Flat Rate", 100),
	createData("England", "Rate by price", 50),
	createData("Austrailia", "Flat Rate", 100),
	createData("England", "Rate by price", 50),
	createData("Austrailia", "Flat Rate", 100),
	createData("England", "Rate by price", 50),
	createData("Austrailia", "Flat Rate", 100),
	createData("England", "Rate by price", 50),
	createData("Austrailia", "Flat Rate", 100),
	createData("England", "Rate by price", 50),
	createData("Austrailia", "Flat Rate", 100),
	createData("England", "Rate by price", 50),
];

const ShippingTable = () => {
	const dispatch = useAppDispatch();
	const [orderBy, setOrderBy] = useState<keyof Data>("zone");
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [order, setOrder] = useState<Order>("asc");
	const [page, setPage] = useState(0);

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// const handleChangePage = (event: unknown, newPage: number) => {
	// 	setPage(newPage);
	// };

	// const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setRowsPerPage(parseInt(event.target.value, 10));
	// 	setPage(0);
	// };

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	return (
		<Box sx={{ width: "100%" }}>
			<TableToolbar />
			<StyledCard sx={{ width: "100%" }}>
				<CardContent>
					<TableContainer>
						<Table sx={{ minWidth: 550 }} aria-labelledby="tableTitle" size="medium">
							<TableHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
							<TableBody>
								{/* if you don't need to support IE11, you can replace the `stableSort` call with:
                                rows.slice().sort(getComparator(order, orderBy)) */}
								{stableSort(rows, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow hover tabIndex={-1} key={index}>
												<TableCell padding="checkbox">{index + 1}</TableCell>
												<TableCell component="th" id={labelId} scope="row" padding="none">
													{row.zone}
												</TableCell>

												<TableCell align="center">{row.type}</TableCell>
												<TableCell align="center">${row.price}</TableCell>
												<TableCell align="right">
													<OrangeButton
														onClick={() =>
															dispatch(
																useWarningPopup(
																	"Are you sure you want to delete this item?",
																),
															)
														}
														sx={{ px: 3 }}
														size="small"
													>
														Delete
													</OrangeButton>
												</TableCell>
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
				page={page}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				onPageChange={handleChangePage}
				rowsPerPageOptions={[5, 10, 25]}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/> */}

			{/* customized table pagination  */}
			<TableCustomPagination handleChangeRowsPerPage={handleChangeRowsPerPage} rowsPerPage={rowsPerPage} />
		</Box>
	);
};

export default ShippingTable;

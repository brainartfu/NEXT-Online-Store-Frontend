import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { CardContent, Stack, Typography } from "@mui/material";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import { StatusText, StyledCard } from "../../components/styledComponents";
import Image from "next/image";
import { IMAGES } from "../../../../uiElements";
import { ArrowUpIcon } from "../../components/icons";
import { CartText } from "../../../styledComponents";
import { Order } from "../../../../types/order";
import { getComparator, stableSort } from "../../../../utils/helper/table-sort";

export interface Data {
	name: string;
	amount: number;
	stock: number;
	status: string;
}

function createData(name: string, amount: number, stock: number, status: string): Data {
	return {
		name,
		amount,
		stock,
		status,
	};
}

const rows = [createData("John Doe", 100, 43, "In Stock"), createData("Oliver", 200, 43, "Out of Stock")];

const TopSellingProductsTable = () => {
	const [order, setOrder] = useState<Order>("asc");
	const [orderBy, setOrderBy] = useState<keyof Data>("amount");

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	return (
		<Box>
			<StyledCard>
				<CardContent>
					<EnhancedTableToolbar
					//  numSelected={selected.length}
					/>
					<TableContainer>
						<Table aria-labelledby="tableTitle" sx={{ minWidth: 600 }}>
							<EnhancedTableHead
								order={order}
								orderBy={orderBy}
								onRequestSort={handleRequestSort}
								rowCount={rows.length}
							/>
							<TableBody>
								{/* if you don't need to support IE11, you can replace the `stableSort` call with:
                          		  rows.slice().sort(getComparator(order, orderBy)) */}
								{stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											role="checkbox"
											tabIndex={-1}
											key={row.name}
											sx={{ "& .MuiTableCell-root": { p: 1.25 } }}
										>
											<TableCell padding="checkbox">{index + 1}</TableCell>

											<TableCell component="th" id={labelId} scope="row" padding="none">
												<Stack direction="row" spacing={2}>
													<Image
														src={IMAGES.ProductOneImg}
														height={65}
														width={65}
														objectFit="cover"
														placeholder="blur"
													/>
													<Box
														sx={{
															display: "flex",
															flexDirection: "column",
															justifyContent: "space-around",
														}}
													>
														<Typography sx={{ fontWeight: "500", fontSize: 14 }}>
															Tshirt Levis
														</Typography>
														<Stack direction="row" alignItems="center" spacing={1}>
															<ArrowUpIcon sx={{ fontSize: 14 }} />
															<CartText color="#04AF00">+14% Inc</CartText>
														</Stack>
													</Box>
												</Stack>
											</TableCell>
											<TableCell align="center">$ {row.amount}</TableCell>
											<TableCell align="center">{row.stock}</TableCell>
											<TableCell align="center">
												<StatusText fw={500} status={row.status}>
													{row.status}
												</StatusText>
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
				</CardContent>
			</StyledCard>
		</Box>
	);
};

export default TopSellingProductsTable;

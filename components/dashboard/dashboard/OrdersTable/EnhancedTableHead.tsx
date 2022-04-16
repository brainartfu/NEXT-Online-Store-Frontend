import { TableHead, TableRow, TableCell, TableSortLabel, Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Order } from "../../../../types/order";
import { UnfoldMoreIcon } from "../../../../uiElements/icons";
import { Data } from "./OrdersTable";

interface EnhancedTableProps {
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}

interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	numeric: boolean;
}

const headCells: readonly HeadCell[] = [
	{
		id: "customer",
		numeric: false,
		disablePadding: true,
		label: "Customer",
	},
	{
		id: "email",
		numeric: false,
		disablePadding: false,
		label: "Email",
	},
	{
		id: "amount",
		numeric: false,
		disablePadding: false,
		label: "Amount",
	},
	// {
	// 	id: "status",
	// 	numeric: false,
	// 	disablePadding: false,
	// 	label: "Status",
	// },
	// {
	// 	id: "action",
	// 	numeric: true,
	// 	disablePadding: false,
	// 	label: "Action",
	// },
];

const EnhancedTableHead = (props: EnhancedTableProps) => {
	const {
		// onSelectAllClick,
		order,
		orderBy,
		//  numSelected,
		//   rowCount,
		onRequestSort,
	} = props;
	const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">#</TableCell>
				{/* <TableCell padding="checkbox">
					<Checkbox
						color="primary"
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							"aria-label": "select all desserts",
						}}
					/>
				</TableCell> */}
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? "right" : "center"}
						padding={headCell.disablePadding ? "none" : "normal"}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
							IconComponent={UnfoldMoreIcon}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === "desc" ? "sorted descending" : "sorted ascending"}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}

				<TableCell align="center" padding="normal">
					Status
				</TableCell>
				<TableCell align="center" padding="normal">
					Action
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default EnhancedTableHead;

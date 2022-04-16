import { TableHead, TableRow, TableCell, TableSortLabel, Box, Checkbox } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Align } from "../../../../../../types/align";
import { Order } from "../../../../../../types/order";
import { UnfoldMoreIcon } from "../../../../../../uiElements/icons";
import { Data } from "../SelectUsersTable";

interface HeadCell {
	id: keyof Data;
	disablePadding: boolean;
	label: string;
	align: Align;
}

const headCells: readonly HeadCell[] = [
	{
		id: "name",
		align: "center",
		disablePadding: true,
		label: "Name",
	},
	{
		id: "email",
		align: "center",
		disablePadding: true,
		label: "Email",
	},
	{
		id: "contactNo",
		align: "right",
		disablePadding: true,
		label: "Contact No.",
	},
];

interface TableHeaderProps {
	numSelected: number;
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}

const TableHeader = (props: TableHeaderProps) => {
	const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
	const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						color="primary"
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							"aria-label": "select all desserts",
						}}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.align}
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
			</TableRow>
		</TableHead>
	);
};

export default TableHeader;

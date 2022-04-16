import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Order } from "../../../../../types/order";
import { UnfoldMoreIcon } from "../../../../../uiElements/icons";
import { Data } from "./ReviewTable";

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
	align: "inherit" | "right" | "left" | "center" | "justify" | undefined;
}

const headCells: readonly HeadCell[] = [
	{
		id: "product",
		align: "left",
		label: "Product",
		disablePadding: false,
	},
	{
		id: "noOfReviews",
		align: "center",
		label: "No. of Reviews",
		disablePadding: false,
	},
	{
		id: "avgRating",
		align: "center",
		label: "Avg. Ratings",
		disablePadding: false,
	},
	{
		id: "button",
		align: "center",
		label: "Action",
		disablePadding: false,
	},
];

const EnhancedTableHead = (props: EnhancedTableProps) => {
	const {
		order,
		orderBy,

		onRequestSort,
	} = props;
	const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">#</TableCell>

				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.align}
						padding={headCell.disablePadding ? "none" : "normal" || "left"}
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

export default EnhancedTableHead;

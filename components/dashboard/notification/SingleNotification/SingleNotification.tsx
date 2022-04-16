import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CancelIcon from "@mui/icons-material/Cancel";
import { Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppDispatch } from "../../../../store/hooks";
import { useWarningPopup } from "../../../../store/slices/warningSlice";
import { RoundButton } from "../../../styledComponents";

interface DataProps {
	type: string;
	text: string;
	name: string;
	color: string;
	new: boolean;
}

const SingleNotification = ({ data }: { data: DataProps }) => {
	const dispatch = useAppDispatch();
	return (
		<div>
			{" "}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					padding: 2,
					gap: 1.25,
					height: "100%",
				}}
			>
				<Box
					sx={{
						display: "flex",

						gap: 2.5,
						justifyContent: "space-between",
						flexWrap: "wrap",
					}}
				>
					<Box
						sx={{
							display: "flex",

							gap: 1.25,
							justifyContent: "flex-start",
							flexWrap: "wrap",
						}}
					>
						{data.new && (
							<Box
								sx={{
									width: "8px",
									height: "8px",
									mt: 1.75,
									borderRadius: "100%",
									backgroundColor: "#FF0303",
									marginLeft: "-15px",
								}}
							/>
						)}
						<RoundButton variant="contained" sx={{ backgroundColor: `${data.color}`, color: "white" }}>
							{data.type}
						</RoundButton>
					</Box>
					<Box
						sx={{
							display: "flex",

							gap: 1.25,
							justifyContent: "flex-end",
							flexWrap: "wrap",
						}}
					>
						<AccessTimeIcon />
						<Typography
							sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 0.25 }}
							fontWeight="light"
						>
							24 May 2022 at 03:45 pm
						</Typography>
					</Box>
				</Box>
				<Typography sx={{ fontSize: "16px" }} fontWeight={500}>
					{data.text} : {data.name}
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={8}>
						<Typography
							sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 1.25 }}
							fontWeight="light"
						>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos amet neque dolore maxime
							eaque debitis quae, temporibus voluptates minus voluptatem. Deleniti aspernatur rerum sit,
							minima optio blanditiis fugit? Vero, iure!
						</Typography>
					</Grid>
					<Grid item xs={3} />
					<Grid item xs={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
						<div>
							<IconButton
								onClick={() => dispatch(useWarningPopup("Are you sure you want to remove this item?"))}
							>
								<CancelIcon />
							</IconButton>
						</div>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default SingleNotification;

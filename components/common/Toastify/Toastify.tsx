import { Box, Divider, Paper, Slide, Typography } from "@mui/material";
import { goneToastify } from "../../../store/slices/toastifySlice";
import { ErrorSvg, InfoSvg, SuccessSvg } from "../../icons";
import { useAppDispatch } from "../../../store/hooks";

// types
export interface IToastify {
	desc: string;
	isToastify: boolean;
	severity: "success" | "info" | "error";
}

const success = { title: `Yay! Everything worked!`, desc: `Congrats on the internet loading your request.` };
const error = { title: `Uh oh, something went wrong`, desc: `Sorry! their was a problem with your request.` };
const info = { title: `Did you know?`, desc: `Here’s something that you might like to know.` };

const Toastify = ({ severity, isToastify, desc }: IToastify) => {
	const dispatch = useAppDispatch();

	setTimeout(() => {
		dispatch(goneToastify(false));
	}, 5000);

	return (
		<Slide direction="left" in={isToastify} mountOnEnter unmountOnExit>
			<Paper
				sx={{
					position: "fixed",
					top: 16,
					right: 16,
					zIndex: "tooltip",
					minHeight: 100,
					maxWidth: 400,
					display: "flex",
					alignItems: "center",
					p: 1,
					borderRadius: 0,
					boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
				}}
			>
				<Divider
					orientation="vertical"
					flexItem
					sx={{ width: "5px", borderColor: "#FFBC59", bgcolor: "#FFBC59" }}
				/>

				<Box sx={{ display: "flex", gap: 2.5, pl: 1.25 }}>
					{severity === "success" ? <SuccessSvg /> : severity === "info" ? <InfoSvg /> : <ErrorSvg />}
					<div>
						<Typography variant="body2" fontWeight="500">
							{severity === "success" ? success.title : severity === "info" ? info.title : error.title}
						</Typography>
						<Typography sx={{ mt: 0.5, fontSize: 12, color: "#666666" }}>{desc}</Typography>
					</div>
				</Box>
			</Paper>
		</Slide>
	);
};

export default Toastify;

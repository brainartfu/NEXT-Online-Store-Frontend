import { Typography } from "@mui/material";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

interface IProps {
	value: number;
	icon: React.ReactNode;
	count: number | string;
	desc?: string;
}

const CircularProgressbarWithCount = ({ value, icon, count, desc }: IProps) => {
	return (
		<CircularProgressbarWithChildren
			value={value}
			styles={buildStyles({
				textColor: "red",
				pathColor: "#E2BC82",
				trailColor: "#E6E6E6",
			})}
		>
			{icon}
			<Typography color="primary" sx={{ marginTop: "5px", fontSize: 26, fontWeight: 600 }}>
				{typeof count === "number" ? count.toFixed(1) : count}
			</Typography>
			<Typography sx={{ fontWeight: 500, opacity: 0.6 }}>{desc}</Typography>
		</CircularProgressbarWithChildren>
	);
};

export default CircularProgressbarWithCount;

import { useState } from "react";
import { Button, Rating } from "@mui/material";

const styles = {
	my: 1.25,
	height: 50,
	width: "100%",
	maxWidth: 400,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	border: "1px solid #292929",
};

export interface SetActiveStepType {
	setActiveStep: (value: number) => void;
}

const Ratings = ({ setActiveStep }: SetActiveStepType) => {
	const [ratingValue, setRatingValue] = useState<number | null>(null);

	if (ratingValue !== null) setActiveStep(2);

	return (
		<>
			<Button sx={{ ...styles }} onClick={() => setRatingValue(5)}>
				<Rating value={5} readOnly />
			</Button>
			<Button sx={{ ...styles }} onClick={() => setRatingValue(4)}>
				<Rating name="simple-controlled" value={4} readOnly />
			</Button>
			<Button sx={{ ...styles }} onClick={() => setRatingValue(3)}>
				<Rating name="simple-controlled" value={3} readOnly />
			</Button>
			<Button sx={{ ...styles }} onClick={() => setRatingValue(2)}>
				<Rating name="simple-controlled" value={2} readOnly />
			</Button>
			<Button sx={{ ...styles }} onClick={() => setRatingValue(1)}>
				<Rating name="simple-controlled" value={1} readOnly />
			</Button>
		</>
	);
};

export default Ratings;

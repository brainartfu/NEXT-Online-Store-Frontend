import { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { SetActiveStepType } from "./Ratings";

const Comment = ({ setActiveStep }: SetActiveStepType) => {
	const [isError, setIsError] = useState(false);
	const [comment, setComment] = useState<string | undefined>();

	const handleComment = () => {
		if (comment?.length) {
			setActiveStep(4);
		}
	};

	useEffect(() => {
		const valiedStr = comment?.trim().split("");

		if (valiedStr && valiedStr.length > 1) {
			setIsError(false);
		} else {
			setIsError(true);
		}
	}, [comment]);

	return (
		<>
			<Box component="form" autoComplete="off">
				<TextField
					multiline
					rows={4}
					required
					fullWidth
					error={isError}
					helperText={isError && "This field is required"}
					placeholder="Share your experience"
					onChange={(event: ChangeEvent<HTMLInputElement>) => setComment(event.target.value)}
				/>

				<Box sx={{ width: "100%" }}>
					<Button
						onClick={() => handleComment()}
						sx={{ mt: 2.5, minWidth: { xs: "auto", md: 400 } }}
						variant="contained"
						color="secondary"
						// type="submit"
					>
						Next
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default Comment;

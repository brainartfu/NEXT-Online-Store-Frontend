import { Box, Button, DialogActions, DialogContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateSubCategoriesMutation } from "../../../../../store/api/subCategoryApi";
import { useAppDispatch } from "../../../../../store/hooks";
import { useToastify } from "../../../../../store/slices/toastifySlice";
import { IPostSubCategories } from "../../../../../types/api/sub-categories";
import { PopupDivider } from "../../../../styledComponents";
import { StyledTextField } from "../../../components/styledComponents";

const AddSubCategory = ({ handleTogglePopup }: { handleTogglePopup: (toggle: boolean) => void }) => {
	const dispatch = useAppDispatch();
	const [createSubCategories, { data, isLoading, error }] = useCreateSubCategoriesMutation();

	const { register, handleSubmit } = useForm<IPostSubCategories>();

	// handle form submit & sub category creation
	const onSubmit: SubmitHandler<IPostSubCategories> = (data) => {
		const { name } = data;

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		createSubCategories({
			name: name,
			slug: `${name.toLowerCase()}`,
			description: name,
			status: false,
			categoryId: "63180b2dc7f5456c34159dc8",
		});
	};

	useEffect(() => {
		if (error) dispatch(useToastify({ desc: "Sub-Category create failed.", severity: "error" }));
		if (data) dispatch(useToastify({ desc: "Sub-Category create successful.", severity: "success" }));
	}, [dispatch, error, data]);

	return (
		<>
			<Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
				<DialogContent>
					<Typography textAlign="center" variant="h6" fontFamily="Poppins" fontWeight={600}>
						Add Sub-Category
					</Typography>
					<PopupDivider />
					<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="medium">
						Sub-Category title
					</Typography>

					<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
						<StyledTextField
							size="small"
							fullWidth
							{...register("name", { required: "This field is required" })}
							required
						/>
					</Box>
					<Typography
						sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 1.25 }}
						fontWeight="light"
					>
						0 of 70 chrcters used
					</Typography>

					<Typography sx={{ fontSize: 14, mb: 1.25, mt: 1.25 }} fontWeight="medium">
						URL handle
					</Typography>

					<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
						<StyledTextField
							size="medium"
							placeholder="http://www.hoomey.co/products"
							fullWidth
							required
							multiline
						/>
					</Box>
				</DialogContent>

				<DialogActions>
					<Button fullWidth color="secondary" variant="contained" onClick={() => handleTogglePopup(false)}>
						Cancel
					</Button>
					<Button
						fullWidth
						color="secondary"
						type="submit"
						variant="outlined"
						onClick={() => handleTogglePopup(false)}
					>
						{isLoading ? "Please wait..." : "Save"}
					</Button>
				</DialogActions>
			</Box>
		</>
	);
};

export default AddSubCategory;

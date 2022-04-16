import { ProductArrowSlider } from "../../common";
import { productData } from "./data";

const AlsoLikeProducts = () => {
	return (
		<>
			<ProductArrowSlider
				headingText="You may also like"
				tooltipContent="These results are based on your searches"
				productArr={productData}
			/>
		</>
	);
};

export default AlsoLikeProducts;

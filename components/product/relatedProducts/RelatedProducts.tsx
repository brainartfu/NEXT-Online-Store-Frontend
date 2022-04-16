import { ProductArrowSlider } from "../../common";
import { productData } from "./data";

const RelatedProducts = () => {
	return (
		<>
			<ProductArrowSlider
				headingText="Related Products"
				productArr={productData}
				tooltipContent="These results are related to the product mentioned above"
			/>
		</>
	);
};

export default RelatedProducts;

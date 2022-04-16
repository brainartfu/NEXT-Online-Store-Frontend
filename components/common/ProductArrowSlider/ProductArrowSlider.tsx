import { FC } from "react";
import { useStyles } from "./styled";
import { Container } from "@mui/material";
import ProductCard from "../ProductCard";
import { SectionBox } from "../../styledComponents";
import { HintsHeading } from "../../ui";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Lazy } from "swiper";

// types
import { IProduct } from "../../../types/product";

interface IProps {
	headingText: string;
	productArr: IProduct[];
	tooltipContent: string;
}

const ProductArrowSlider: FC<IProps> = ({ headingText, productArr, tooltipContent }) => {
	const classes = useStyles();

	return (
		<SectionBox>
			<Container maxWidth="xl">
				<HintsHeading text={headingText} tooltip={tooltipContent} />
				<Swiper
					className={classes.mySwiper}
					slidesPerView={4}
					spaceBetween={12}
					pagination={{
						clickable: true,
					}}
					lazy={true}
					modules={[Lazy, Pagination]}
					breakpoints={{
						0: { slidesPerView: 1 },
						350: { slidesPerView: 2 },
						// 600: { slidesPerView: 2 },
						900: { slidesPerView: 3 },
						1200: { slidesPerView: 4 },
					}}
				>
					{productArr.map((product, idx) => (
						<SwiperSlide key={idx}>
							<ProductCard product={product} />
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</SectionBox>
	);
};

export default ProductArrowSlider;

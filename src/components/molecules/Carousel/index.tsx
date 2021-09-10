import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1,
    },
};
const MultiCarousel: FC = ({ children }) => {
    return (
        <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            partialVisbile={true}
        >
            {children}
        </Carousel>
    );
};

export default MultiCarousel;

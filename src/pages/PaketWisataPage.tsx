import { Box } from "@chakra-ui/react";
import Carousel from "../components/carousel";
import CarouselItem from "../components/carousel/carousel_item";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import carouselImage1 from "../images/carousel/carousel1.png";
import carouselImage2 from "../images/carousel/carousel2.png";
import carouselImage3 from "../images/carousel/carousel3.png";
import carouselImage4 from "../images/carousel/carousel4.png";
import carouselImage5 from "../images/carousel/carousel5.png";

const PaketWisataPage = () => {
    return(
        <Box>
            <Navbar isAuthenticated={false} type="other"/>
            <Carousel>
                <CarouselItem width={""}><img src={carouselImage1}/></CarouselItem>
                <CarouselItem width={""}><img src={carouselImage2}/></CarouselItem>
                <CarouselItem width={""}><img src={carouselImage3}/></CarouselItem>
                <CarouselItem width={""}><img src={carouselImage4}/></CarouselItem>
                <CarouselItem width={""}><img src={carouselImage5}/></CarouselItem>
            </Carousel>
            <Footer/>
        </Box>
    )
};

export default PaketWisataPage;
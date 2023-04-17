import { Box } from "@chakra-ui/react";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const PaketWisataPage = () => {
    return(
        <Box>
            <Navbar isAuthenticated={false} type="other"/>
            <Carousel/>
            <Footer/>
        </Box>
    )
};

export default PaketWisataPage;
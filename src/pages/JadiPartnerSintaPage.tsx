import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";

const JadiPartnerSintaPage = () => {
    return(
        <Box>
            <Navbar isAuthenticated={false} type="other"/>
            <Header type="jadipartner"/>
            <Footer/>
        </Box>
    )
};

export default JadiPartnerSintaPage;
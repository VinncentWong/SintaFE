import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import auth_util from "../util/auth_util";

const JadiPartnerSintaPage = () => {
    return(
        <Box>
            <Navbar isAuthenticated={auth_util()} type="other"/>
            <Header type="jadipartner"/>
            <Footer/>
        </Box>
    )
};

export default JadiPartnerSintaPage;
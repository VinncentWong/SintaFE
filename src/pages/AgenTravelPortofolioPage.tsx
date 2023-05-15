import DropDown from "../components/dropdown";
import LengkapiProfil, { DashboardAgen, ArahkanPremium, LengkapiBank } from "../components/lengkapi_profil";
import Navbar from "../components/navbar";
import { getAgenTravel } from "../util/auth_util";
import { TipeAgenTravelPage } from "./AgenTravelHomePage";
import { Box } from "@chakra-ui/react";

const AgenTravelPortofolioPage = ({type}: {type: TipeAgenTravelPage}) => {
    const agenTravel = getAgenTravel();
    let showedElement: JSX.Element;
    if(!agenTravel.sudahLengkapiProfil){
        showedElement = 
        <Box>
            <LengkapiProfil props={{
                 flexDir: "column",
                 position: "relative",
                 bottom: "31rem",
                 left: "31rem",
                 gap: {"lg" : "1rem"}
            }}/>
            <ArahkanPremium props={{
                width: {"lg" : "60%"},
                borderRadius: "8px",
                border: "1px solid #E0E6ED",
                position: "relative",
                bottom: "28rem",
                left: "31rem",
                gap: {"lg" : "1rem"},
                paddingX: {"lg" : "5rem"},
                paddingY: {"lg" : "2rem"},
            }}/>
        </Box>;
    } else {
        if(!agenTravel.sudahIsiDetailBank){
            showedElement = 
            <Box>
                <LengkapiBank props={{
                    flexDir: "column",
                    position: "relative",
                    bottom: "31rem",
                    left: "31rem",
                    gap: {"lg" : "1rem"}
                }}/>
                <ArahkanPremium
                props={{
                    width: {"lg" : "60%"},
                    borderRadius: "8px",
                    border: "1px solid #E0E6ED",
                    position: "relative",
                    bottom: "28rem",
                    left: "31rem",
                    gap: {"lg" : "1rem"},
                    paddingX: {"lg" : "5rem"},
                    paddingY: {"lg" : "2rem"},
                }}/>;
            </Box>
        } else {
            showedElement = <></>;
        }
    }
    return(
        <Box paddingBottom={{"lg" : "2rem"}}>
            <Navbar type="other" typeUser="agentravel"/>
            <DropDown type={type}/>
            {showedElement}
        </Box>
    );
};

export default AgenTravelPortofolioPage;
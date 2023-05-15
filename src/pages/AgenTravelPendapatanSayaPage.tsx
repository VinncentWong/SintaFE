import { Box, Flex, Text } from "@chakra-ui/react";
import DropDown from "../components/dropdown";
import LengkapiProfil, { DashboardAgen, ArahkanPremium } from "../components/lengkapi_profil";
import Navbar from "../components/navbar";
import { getAgenTravel } from "../util/auth_util";
import { TipeAgenTravelPage } from "./AgenTravelHomePage";
import { fontFamily } from "../style/font";

const AgenTravelPendapatanSayaPage = ({type}: {type: TipeAgenTravelPage}) => {
    const agenTravel = getAgenTravel();
    let showedElement: JSX.Element;
    if(!agenTravel.sudahLengkapiProfil){
        showedElement = 
        <Box>
            <DashboardAgen props={{
                flexDir: "column",
                position: "relative",
                bottom: "28rem",
                left: "25rem"
            }}/>
            <LengkapiProfil props={{
                 flexDir: "column",
                 position: "relative",
                 bottom: "25rem",
                 left: "25rem",
                 gap: {"lg" : "1rem"}
            }}/>
            <ArahkanPremium props={{
                width: {"lg" : "60%"},
                borderRadius: "8px",
                border: "1px solid #E0E6ED",
                position: "relative",
                bottom: "19rem",
                left: "25rem",
                gap: {"lg" : "1rem"},
                paddingX: {"lg" : "5rem"},
                paddingY: {"lg" : "2rem"},
            }}/>
        </Box>;
    } else {
        showedElement = 
        <Flex
        position="relative"
        bottom="31rem"
        left="31rem"
        flexDir="column"
        gap={{"lg" : "2rem"}}
        >
            <Text
            fontFamily={fontFamily}
            fontSize={{"lg" : "1.75rem"}}
            fontWeight={600}>
                Pendapatan Saya
            </Text>
            <Flex flexDir="column" gap={"1rem"} borderRadius="8px" border="1px solid #E0E6ED" paddingX={{"lg" : "1rem"}} paddingY={{"lg" : "2rem"}} width={{"lg" : "60%"}}>
                <Text
                fontFamily={fontFamily}
                fontSize={{"lg" : "1.25rem"}}
                color="#0053AD"
                fontWeight={600}>
                    Total Pendapatan Anda Saat Ini : <Text as="span" color="#00B87B" fontFamily={fontFamily} fontSize={{"lg" : "1.25rem"}} fontWeight={600}>Rp0</Text>
                </Text>
                <Text
                fontFamily={fontFamily}
                fontSize={{"lg" : "0.875rem"}}
                color="#89939E"
                fontWeight={400}>
                    *Data pendapatan terhitung sejak Anda bergabung pada aplikasi kami(Mon 10 Apr 2023) - hingga saat ini({new Date().toDateString()})
                </Text>
            </Flex>
        </Flex>;
    }
    return(
        <Box paddingBottom={{"lg" : "2rem"}}>
            <Navbar type="other" typeUser="agentravel"/>
            <DropDown type={type}/>
            {showedElement}
        </Box>
    );
};

export default AgenTravelPendapatanSayaPage;
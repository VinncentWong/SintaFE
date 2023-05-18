import { Box, Button, Flex, Text } from "@chakra-ui/react";
import DropDown from "../components/dropdown";
import LengkapiProfil, { DashboardAgen, ArahkanPremium } from "../components/lengkapi_profil";
import Navbar from "../components/navbar";
import { getAgenTravel } from "../util/auth_util";
import { TipeAgenTravelPage } from "./AgenTravelHomePage";
import { fontFamily } from "../style/font";
import { CheckIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const AgenTravelPremiumPage = ({type}: {type: TipeAgenTravelPage}) => {
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
        <Flex flexDir="column" position="relative" left="28rem" bottom="31rem" gap={{"lg" : "1rem"}}>
            <Text
            fontFamily={fontFamily}
            fontSize={{"lg" : "1.75rem"}}
            fontWeight={600}>
                Pilihan Paket Premium
            </Text>
            <Text
            fontFamily={fontFamily}
            fontSize={{"lg" : "1.125rem"}}
            fontWeight={400}
            color="#717171"
            width={{"lg" : "50%"}}>
                Agar kamu dapat posting paket wisata dan portofolio sebebasnya, mari berlangganan layanan premium kami
            </Text>
            <Flex marginTop={{"lg" : "2rem"}} flexWrap="wrap" width={{"lg" : "70%"}}>
                <PremiumCard bulan="1" harga="80000" jenisPaket="Pemula"/>
                <PremiumCard bulan="3" harga="230000" jenisPaket="Menengah"/>
                <PremiumCard bulan="6" harga="400000" jenisPaket="Jagoan"/>
            </Flex>
        </Flex>
    }
    return(
        <Box paddingBottom={{"lg" : "2rem"}}>
            <Navbar type="other" typeUser="agentravel"/>
            <DropDown type={type}/>
            {showedElement}
        </Box>
    );
};

const PremiumCard = ({bulan, harga, jenisPaket}: {jenisPaket: string, harga: string, bulan: string}) => {
    const navigate = useNavigate();
    return(
        <Flex paddingX={{"lg" : "2rem"}} paddingY={{"lg" : "2rem"}} marginX={{"lg" : "2rem"}} flexDir="column" boxShadow="0px 4px 8px rgba(171, 190, 209, 0.4)" borderRadius="16px" gap={{"lg" : "1.5rem"}}>
            <Text 
            fontFamily={fontFamily}
            fontSize={{"lg" : "1.25rem"}}
            fontWeight={600}>
                Paket Buat {jenisPaket}
            </Text>
            <Text
             fontFamily={fontFamily}
             fontSize={{"lg" : "1.25rem"}}
             fontWeight={600}
             color="#0053AD">
                Rp{harga}/{bulan} Bulan
            </Text>
            <Flex flexDir="column" gap="0.5rem">
                <Text
                fontFamily={fontFamily}
                fontSize={{"lg" : "0.65rem"}}
                fontWeight={400}
                color="#0053AD">
                    <CheckIcon color="#0053AD" marginRight={{"lg" : "0.5rem"}}/> Posting paket wisata tanpa batas
                </Text>
                <Text
                fontFamily={fontFamily}
                fontSize={{"lg" : "0.65rem"}}
                fontWeight={400}
                color="#0053AD">
                    <CheckIcon color="#0053AD" marginRight={{"lg" : "0.5rem"}}/> Bagikan portofolio tanpa batas
                </Text>
            </Flex>
            <Button backgroundColor="#0053AD" borderRadius="50px" _hover={{"backgroundColor" : undefined}} onClick={() => {navigate(`/agentravel/belipremium?harga=${harga}&bulan=${bulan}`)}}>
                <Text fontFamily={fontFamily} color="white">
                    Mulai Berlangganan <ChevronRightIcon color="white"/>
                </Text>
            </Button>
        </Flex>
    )
};

export default AgenTravelPremiumPage;
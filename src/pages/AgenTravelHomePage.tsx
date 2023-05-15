import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import DropDown from "../components/dropdown";
import Navbar from "../components/navbar";
import { getAgenTravel } from "../util/auth_util";
import LengkapiProfil, { ArahkanPremium, DashboardAgen, LengkapiBank } from "../components/lengkapi_profil";
import { useEffect, useState } from "react";
import api from "../api/api";
import { AgenTravel, AgenTravelResponse } from "../response/agen_travel";
import { Portofolio, PortofolioResponse } from "../response/portofolio";
import { PaketWisatas } from "../response/paket_wisata";
import { fontFamily } from "../style/font";
import belumAdaPaketWisata from "../images/agen_travel_home/belum_ada_paket_wisata.png";
import belumAdaPortofolio from "../images/agen_travel_home/belum_ada_portofolio.png";
import { ChevronRightIcon } from "@chakra-ui/icons";

export type TipeAgenTravelPage = "home" | "paketwisata" | "portofolio" | "penjualan" | "pendapatan" | "bank" | "profil" | "premium";
const AgenTravelHomePage = ({type}: {type: TipeAgenTravelPage}) => {
    const [agenTravel, setAgenTravel] = useState<AgenTravel>(getAgenTravel());
    const [portofolios, setPortofolios] = useState<Portofolio[]>([]);
    const [paketWisatas, setPaketWisatas] = useState<PaketWisatas[]>([]);
    let showedElement: JSX.Element;

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get<AgenTravelResponse>(`/agentravel/get/${agenTravel.id}`);
            localStorage.setItem("agenTravel", JSON.stringify(result.data.data?.agentravel as AgenTravel));
            setAgenTravel(result.data?.data?.agentravel as AgenTravel);
            const resultPortofolio = await api.get<PortofolioResponse>(`/portofolio/get/${agenTravel.id}`);
            setPortofolios(resultPortofolio.data.data?.portofolio)
        };

        fetchData();
    }, []);
    if(!agenTravel.sudahLengkapiProfil){
        showedElement = 
        <Box>
            <DashboardAgen props={{
                flexDir: "column",
                position: "relative",
                bottom: "31rem",
                left: "31rem"
            }}/>
            <LengkapiProfil props={{
                 flexDir: "column",
                 position: "relative",
                 bottom: "28rem",
                 left: "31rem",
                 gap: {"lg" : "1rem"}
            }}/>
            <ArahkanPremium props={{
                width: {"lg" : "60%"},
                borderRadius: "8px",
                border: "1px solid #E0E6ED",
                position: "relative",
                bottom: "25rem",
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
                <DashboardAgen props={{
                    flexDir: "column",
                    position: "relative",
                    bottom: "31rem",
                    left: "31rem"
                }}/>
                <LengkapiBank props={{
                    flexDir: "column",
                    position: "relative",
                    bottom: "28rem",
                    left: "31rem",
                    gap: {"lg" : "1rem"}
                }}/>
                <ArahkanPremium
                props={{
                    width: {"lg" : "60%"},
                    borderRadius: "8px",
                    border: "1px solid #E0E6ED",
                    position: "relative",
                    bottom: "25rem",
                    left: "31rem",
                    gap: {"lg" : "1rem"},
                    paddingX: {"lg" : "5rem"},
                    paddingY: {"lg" : "2rem"},
                }}/>;
            </Box>
        } else {
            if(portofolios.length == 0 || paketWisatas.length == 0){
                showedElement = 
                <Flex position="relative" left="31rem" bottom="31rem" flexDir="column">
                    <DashboardAgen props={{flexDir: "column",}}/>
                    {
                        paketWisatas.length == 0 && 
                        <Flex flexDir="column">
                            <Text 
                            fontFamily={fontFamily}
                            fontSize="1.75rem"
                            fontWeight={600}>
                                Paket Wisata
                            </Text>
                            <Flex flexDir="column" width={{"lg" : "50%"}}>
                                <Image alignSelf="center" width={{"lg" : "60%"}} src={belumAdaPaketWisata}/>
                                <Flex flexDir="column" gap="0.5rem">
                                    <Text 
                                    fontFamily={fontFamily}
                                    fontSize="1.25rem"
                                    fontWeight={600}
                                    alignSelf="center">
                                        Belum Ada Paket Wisata
                                    </Text>
                                    <Text 
                                    fontSize={{"lg" : "1.125rem"}}
                                    fontWeight={400}
                                    color="#717171"
                                    alignSelf="center">
                                        Saat ini anda belum mempublish paket trip sama sekali :(
                                    </Text>
                                    <Button
                                    backgroundColor="#0053AD"
                                    borderRadius="50px"
                                    width={{"lg" : "50%"}}
                                    alignSelf="center">
                                        <Text
                                        fontSize={{"lg" : "0.875rem"}}
                                        fontWeight={600}
                                        color="white">
                                            Publish Sekarang <ChevronRightIcon color="white"/>
                                        </Text>
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    }
                </Flex>
            } else {
                showedElement = <></>;
            }
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

export default AgenTravelHomePage;
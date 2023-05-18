import { Box, Button, Flex, Image, Link, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import DropDown from "../components/dropdown";
import Navbar from "../components/navbar";
import { getAgenTravel } from "../util/auth_util";
import LengkapiProfil, { ArahkanPremium, DashboardAgen, LengkapiBank } from "../components/lengkapi_profil";
import { useEffect, useState } from "react";
import api from "../api/api";
import { AgenTravel, AgenTravelResponse } from "../response/agen_travel";
import { Portofolio, PortofolioResponse } from "../response/portofolio";
import { PaketWisataResponse, PaketWisatas } from "../response/paket_wisata";
import { fontFamily } from "../style/font";
import belumAdaPaketWisata from "../images/agen_travel_home/belum_ada_paket_wisata.png";
import belumAdaPortofolio from "../images/agen_travel_home/belum_ada_portofolio.png";
import { ChevronRightIcon } from "@chakra-ui/icons";
import axios from "axios";
import DestinationCard from "../components/card";

export type TipeAgenTravelPage = "home" | "paketwisata" | "portofolio" | "penjualan" | "pendapatan" | "bank" | "profil" | "premium";
const AgenTravelHomePage = ({type}: {type: TipeAgenTravelPage}) => {
    const [agenTravel, setAgenTravel] = useState<AgenTravel>(getAgenTravel());
    const [portofolios, setPortofolios] = useState<Portofolio[]>([]);
    const [paketWisatas, setPaketWisatas] = useState<PaketWisatas[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    let showedElement: JSX.Element;

    useEffect(() => {
        setLoad(true);
        const fetchData = async () => {
            try{
                const result = await api.get<AgenTravelResponse>(`/agentravel/get/${agenTravel.id}`);
                localStorage.setItem("agenTravel", JSON.stringify(result.data.data?.agentravel as AgenTravel));
                setAgenTravel(result.data?.data?.agentravel as AgenTravel);
                const paketWisata = await api.get<PaketWisataResponse>(`/paketwisata/get/agentravel/${agenTravel.id}`);
                setPaketWisatas(paketWisata.data.data?.paket_wisata as PaketWisatas[]);
                const resultPortofolio = await api.get<PortofolioResponse>(`/portofolio/get/${agenTravel.id}`);
                setPortofolios(resultPortofolio.data.data?.portofolio as Portofolio[])
            } catch(e){
                if(axios.isAxiosError<AgenTravelResponse>(e)){
                    console.log("err agen travel" + e.response?.data?.message);
                } else if(axios.isAxiosError<PaketWisataResponse>(e)){
                    console.log("err paket wisata" + e.response?.data?.message);
                } else if(axios.isAxiosError<PortofolioResponse>(e)){
                    console.log("err portofolio" + e.response?.data?.message);
                }
            } finally{
                setLoad(false);
            }
        };

        fetchData();
    }, []);
    if(!load){
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
                    <Flex position="relative" left="31rem" bottom="31rem" flexDir="column" gap={{"lg" : "2rem"}}>
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
                                    <Flex flexDir="column" gap="1rem">
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
                                        alignSelf="center"
                                        _hover={{backgroundColor: undefined}}>
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
                        {
                           portofolios.length == 0 && 
                           <Flex flexDir="column">
                                <Text 
                                fontFamily={fontFamily}
                                fontSize="1.75rem"
                                fontWeight={600}>
                                    Portofolio
                                </Text>
                                <Flex flexDir="column" width={{"lg" : "50%"}}>
                                    <Image alignSelf="center" width={{"lg" : "60%"}} src={belumAdaPortofolio}/>
                                    <Flex flexDir="column" gap="1rem">
                                        <Text 
                                        fontFamily={fontFamily}
                                        fontSize="1.25rem"
                                        fontWeight={600}
                                        alignSelf="center">
                                            Belum Ada Portofolio
                                        </Text>
                                        <Text 
                                        fontSize={{"lg" : "1.125rem"}}
                                        fontWeight={400}
                                        color="#717171"
                                        alignSelf="center">
                                            Saat ini anda belum mempublish portofolio sama sekali :(
                                        </Text>
                                        <Button
                                        backgroundColor="#0053AD"
                                        borderRadius="50px"
                                        width={{"lg" : "50%"}}
                                        alignSelf="center"
                                        _hover={{backgroundColor: undefined}}>
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
                    showedElement = 
                    <Flex
                    position="relative"
                    left="31rem"
                    bottom="31rem"
                    flexDir="column"
                    gap={{"lg" : "2rem"}}>
                        <DashboardAgen props={{flexDir: "column"}}/>
                        {
                            <Flex flexDir="column">
                                <Flex
                                gap={{"lg" : "25rem"}}>
                                    <Text
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "1.25rem"}}
                                    fontWeight={600}
                                    marginY={{"lg" : "1rem"}}>
                                        Paket Wisata
                                    </Text>
                                    <Link
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "0.875rem"}}
                                    color="#0053AD"
                                    marginY={{"lg" : "1rem"}}
                                    fontWeight={600}>
                                        Lihat Selengkapnya
                                    </Link>
                                </Flex>
                                <Flex
                                flexWrap="wrap"
                                width={{"lg" : "60%"}}
                                gap={{"lg" : "2rem"}}>
                                    {
                                        paketWisatas.map((v) => {
                                           if(v.hargaPaketWisata[0]){
                                                return <DestinationCard destinationCity="" destinationName={v.nama} destinationPrice={v.hargaPaketWisata[0].harga} destinationProvince={v.lokasiPenjemputan} height="100%" imageLink={v.gambarCover} typeDestination={v.durasiPaketWisataHari + "D/" + v.durasiPaketWisataMalam + "N"} width="40%"/>
                                           }
                                        }).slice(0, 4) as JSX.Element[]
                                    }
                                </Flex>
                            </Flex>
                        }
                        {
                            <Flex
                            flexDir="column"
                            position="relative">
                                <Flex
                                marginY={{"lg" : "1rem"}}>
                                    <Text 
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "1.25rem"}}
                                    fontWeight={600}>
                                        Portofolio
                                    </Text>
                                </Flex>
                                <Flex
                                border="1px solid #E0E6ED"
                                borderRadius="8px"
                                boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)"
                                flexDir="column"
                                paddingX={{"lg" : "2rem"}}
                                paddingY={{"lg" : "2rem"}}
                                width={{"lg" : "50%"}}
                                gap={{"lg" : "2rem"}}>
                                    <Flex
                                    flexDir="column"
                                    gap={{"lg" : "1rem"}}>
                                        <Text 
                                        fontFamily={fontFamily}
                                        fontSize={{"lg" : "1rem"}}
                                        fontWeight={600}>
                                        Portofolio {agenTravel.nama} Travel
                                        </Text>
                                        <Text 
                                        fontFamily={fontFamily}
                                        fontSize={{"lg" : "0.875rem"}}
                                        fontWeight={600}
                                        color="#4D4D4D">
                                            Tanggal Publikasi: {portofolios[0].createdAt}
                                        </Text>
                                        <Text 
                                        fontFamily={fontFamily}
                                        fontSize={{"lg" : "0.875rem"}}
                                        fontWeight={600}
                                        color="#4D4D4D">
                                            Terakhir Diedit: {portofolios[0].updatedAt}
                                        </Text>
                                    </Flex>
                                    <Button
                                    _hover={{backgroundColor: undefined}}
                                    backgroundColor="#0053AD"
                                    borderRadius="8px">
                                        <Text
                                        fontFamily={fontFamily}
                                        color="white"
                                        fontSize={{"lg" : "0.875rem"}}>
                                            Update Portofolio
                                        </Text>
                                    </Button>
                                </Flex>
                            </Flex>
                        }
                    </Flex>
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
    } else {
        return(
            <Box
                width={{
                    "lg" : "100%"
                }}>
                <Box 
                padding='6' 
                boxShadow='lg'>
                    <SkeletonCircle size='10' />
                    <SkeletonText mt='4' noOfLines={23} spacing='4' skeletonHeight='2' />
                </Box>
            </Box>
        );
    }
};

export default AgenTravelHomePage;
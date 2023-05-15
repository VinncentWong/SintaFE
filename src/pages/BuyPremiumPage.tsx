import { Box, Button, Flex, Image, Text, position } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AgenTravel, AgenTravelResponse } from "../response/agen_travel";
import { getAgenTravel } from "../util/auth_util";
import api from "../api/api";
import Navbar from "../components/navbar";
import AgenTravelContext from "../context/AgenTravelContext";
import Timer from "../components/timer";
import PembayaranPremium from "./PembayaranPremium";
import { fontFamily } from "../style/font";
import berhasil from "../images/pemesanan/berhasil.png";

const BuyPremiumPage = () => {
    const [agenTravel, setAgenTravel] = useState<AgenTravel>(getAgenTravel());
    const location = useLocation();
    const urlParam = new URLSearchParams(location.search);
    const hargaPembelian = urlParam.get("harga");
    const bulan = urlParam.get("bulan");
    const [currentPosition, setCurrentPosition] = useState<1 | 2>(1);
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get<AgenTravelResponse>(`/agentravel/get/${agenTravel.id}`);
            setAgenTravel(result.data.data?.agentravel as AgenTravel);
            localStorage.setItem("agenTravel", JSON.stringify(result.data.data?.agentravel as AgenTravel));
        };
        fetchData();
    }, []);
    return(
        <AgenTravelContext.Provider value={{
            currentPosition: currentPosition,
            setCurrentPosition: (e) => {
                setCurrentPosition(e as 1 | 2);
            }
        }}>
            {
                currentPosition == 1 ?
                <Box>
                    <Navbar type="belipremium"/>
                    <Timer/>
                    <PembayaranPremium harga={hargaPembelian as string} bulan={bulan as string}/>
                </Box> 
                :
                <Box>
                    <Navbar type="belipremium"/>
                    <Result/>
                </Box> 
            }
            
        </AgenTravelContext.Provider>
    )
};

const Result = () => {
    const navigate = useNavigate();
    return(
        <Flex flexDir="column" width={{"lg" : "100%"}} position="relative" top={{"lg" : "5rem"}} alignItems="center">
            <Image src={berhasil} maxWidth="100%"/>
            <Text fontFamily={fontFamily} fontSize={{"lg" : "1.75rem"}} fontWeight={600}>
            Yeay! Pesanan Anda Berhasil Dipesan
            </Text>
            <Flex width={{"lg" : "100%"}} gap={{"lg" : "3rem"}} alignItems="center" justifyContent="center">
                <Button border="1px solid #0053AD" borderRadius="8px" backgroundColor="#FCFCFC" onClick={() => {navigate("/agentravel/premium")}} width={{"lg" : "30%"}}>
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "0.875rem"}}
                    color="#0053AD">
                        Lihat status berlangganan
                    </Text>
                </Button>
                <Button colorScheme="blue" backgroundColor="#0053AD" borderRadius="8px" width={{"lg" : "30%"}} marginY={{"lg" : "2rem"}} onClick={() => {navigate("/agentravel/home")}}>
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "0.875rem"}}
                    color="#FCFCFC">
                        Kembali ke beranda
                    </Text>
                </Button>
            </Flex>
        </Flex>
    );
}
export default BuyPremiumPage;
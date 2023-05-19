import { Box, Button, Flex, SkeletonCircle, SkeletonText, Text, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useMemo, useState } from "react";
import MyAccount from "../components/myaccount";
import DetailTamu from "../components/detail_tamu";

import { fontFamily } from "../style/font";
import Receipt from "../components/receipt";
import PemesananPaketWisataContext from "../context/PemesananPaketWisataContext";
import { PaketWisatas, SinglePaketWisataResponse } from "../response/paket_wisata";
import api from "../api/api";
import axios from "axios";
import { useParams } from "react-router-dom";

const PemesananPaketWisataPage = ({nDewasa, nAnak, nBayi}: {nDewasa: number, nAnak: number, nBayi: number, id?: string}) => {
    const pemesananWisataContext = useContext(PemesananPaketWisataContext);
    const [load, setLoad] = useState<boolean>(false);
    const [paketWisata, setPaketWisata] = useState<PaketWisatas>();
    const toast = useToast();
    const {paketWisataId} = useParams();
    const showedElement = useMemo(() => {
        return(
            <DetailTamu nAnak={nAnak} nBayi={nBayi} nDewasa={nDewasa}/>
        );
    }, []);

    useEffect(() => {
        setLoad(true);

        const fetchData = async () => {
            try{
                const paketWisata = await api.get<SinglePaketWisataResponse>(`/paketwisata/get/paketwisata/${paketWisataId ?? 0}`);
                const data = paketWisata.data.data;
                if(data){
                    if(data.paket_wisata.tipePaketWisata === "OPEN"){
                        data.paket_wisata.tipePaketWisata = "Open";
                    } else {
                        data.paket_wisata.tipePaketWisata = "Private";
                    }
                }
                setPaketWisata(paketWisata.data.data?.paket_wisata as PaketWisatas)
            } catch(e){
                if(axios.isAxiosError<SinglePaketWisataResponse>(e)){
                    toast({
                        description: e.response?.data.message ?? "Kesalahan internal server",
                        position: "top-right",
                        isClosable: true,
                        duration: 3000,
                        status: "error",
                        title: "Error from server"
                    });
                }
            } finally{
                setLoad(false);
            }
        };

        fetchData();
    }, []);
    if(load){
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
    return(
        <Box>
            <Flex>
                <Flex
                flexDir="column"
                width={{"lg" : "50%"}}>
                    <MyAccount additionalChange={{
                        position: "relative",
                        top: "10rem",
                        width: {
                            "lg" : "100%"
                        },
                        marginLeft: {"lg" : "2rem"},
                    }}/>
                    {showedElement}
                </Flex>
                <Flex flexDir="column" position="relative" top={{"lg" : "10rem"}} left={{"lg" : "5rem"}} width={{"lg" : "40%"}}>
                    <Receipt nAnak={nAnak} nBayi={nBayi} nDewasa={nDewasa} paketWisata={paketWisata}/>
                    <Button backgroundColor="#0053AD" borderRadius="8px" width={{"lg" : "100%"}} marginY={{"lg" : "2rem"}} onClick={() => {pemesananWisataContext.setCurrentPosition(2)}}>
                        <Text
                        fontFamily={fontFamily}
                        fontSize={{"lg" : "0.875rem"}}
                        color="#FCFCFC">
                            Lanjutkan ke metode pembayaran
                        </Text>
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default PemesananPaketWisataPage;
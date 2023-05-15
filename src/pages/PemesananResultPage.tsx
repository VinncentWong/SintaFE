import { Button, Flex, Image, Text } from "@chakra-ui/react";
import berhasil from "../images/pemesanan/berhasil.png";
import { fontFamily } from "../style/font";
import { useNavigate } from "react-router-dom";

const PemesananResultPage = () => {
    const navigate = useNavigate();
    return(
        <Flex flexDir="column" width={{"lg" : "100%"}} position="relative" top={{"lg" : "5rem"}} alignItems="center">
            <Image src={berhasil} maxWidth="100%"/>
            <Text fontFamily={fontFamily} fontSize={{"lg" : "1.75rem"}} fontWeight={600}>
            Yeay! Pesanan Anda Berhasil Dipesan
            </Text>
            <Flex width={{"lg" : "100%"}} gap={{"lg" : "3rem"}} alignItems="center" justifyContent="center">
                <Button border="1px solid #0053AD" borderRadius="8px" backgroundColor="#FCFCFC" onClick={() => {navigate("/")}} width={{"lg" : "30%"}}>
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "0.875rem"}}
                    color="#0053AD">
                        Kembali ke halaman utama
                    </Text>
                </Button>
                <Button colorScheme="blue" backgroundColor="#0053AD" borderRadius="8px" width={{"lg" : "30%"}} marginY={{"lg" : "2rem"}} onClick={() => {navigate("/")}}>
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "0.875rem"}}
                    color="#FCFCFC">
                        Lihat pesanan saya
                    </Text>
                </Button>
            </Flex>
        </Flex>
    );
};

export default PemesananResultPage;
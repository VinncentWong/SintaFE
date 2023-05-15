import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useContext, useMemo } from "react";
import MyAccount from "../components/myaccount";
import DetailTamu from "../components/detail_tamu";

import { fontFamily } from "../style/font";
import Receipt from "../components/receipt";
import PemesananPaketWisataContext from "../context/PemesananPaketWisataContext";

const PemesananPaketWisataPage = ({nDewasa, nAnak, nBayi}: {nDewasa: number, nAnak: number, nBayi: number}) => {
    const pemesananWisataContext = useContext(PemesananPaketWisataContext);
    const showedElement = useMemo(() => {
        return(
            <DetailTamu nAnak={nAnak} nBayi={nBayi} nDewasa={nDewasa}/>
        );
    }, []);
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
                    <Receipt nAnak={nAnak} nBayi={nBayi} nDewasa={nDewasa}/>
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
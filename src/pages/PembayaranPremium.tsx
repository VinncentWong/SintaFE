import { Flex, RadioGroup, Stack, Radio, Button, Box, Text, Image, useToast} from "@chakra-ui/react";
import QRCode from "qrcode.react";
import { useState, useContext } from "react";
import Receipt from "../components/receipt";
import PemesananPaketWisataContext from "../context/PemesananPaketWisataContext";
import { fontFamily } from "../style/font";
import duit from "../images/pemesanan/duit.png";
import { getAgenTravel, getJwtAgenTravel } from "../util/auth_util";
import AgenTravelContext from "../context/AgenTravelContext";
import api from "../api/api";
import axios from "axios";
import { PembelianPremiumResponse } from "../response/pembelian_premium";

const PembayaranPremium = ({harga, bulan}: {harga: string, bulan: string}) => {
    const agenTravel = getAgenTravel();
    const [posisiPembayaran, setPosisiPembayaran] = useState<1|2>(1);
    const [provider, setProvider] = useState<string>("Gopay");
    const agenTravelContext = useContext(AgenTravelContext);
    const [load, setLoad] = useState<boolean>(false);
    const [apiSuccess, setApiSuccess] = useState<boolean>(false);
    const toast = useToast();
    if(posisiPembayaran === 1){
        return(
            <Flex
            position="relative"
            top={{"lg" : "8rem"}}
            marginX={{"lg" : "3rem"}}
            flexWrap="wrap"
            gap={"3rem"}>
                <Flex
                flexDir="column"
                gap="0.5rem"
                width={{"lg" : "100%"}}>
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "1.75rem"}}
                    fontWeight={600}
                    color="#212121">
                        Pilih Metode Pembayaran
                    </Text>
                    <Text
                    color="#89939E"
                    fontWeight={400}
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "1.125rem"}}
                    >
                        Silahkan pilih salah satu metode pembayaran yang Anda inginkan
                    </Text>
                </Flex>
                <Flex width={{"lg" : "100%"}} gap="2rem">
                   <Flex flexDir="column" width={{"lg" : "60%"}}>
                        <Flex flexDir="column" boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)" borderRadius="16px" border="1px solid #E0E6ED" marginBottom={{"lg" : "3rem"}}>
                            <Flex gap={"1rem"} marginX={{"lg" : "1rem"}} marginTop={{"lg" : "1rem"}}>
                                <Image src={duit} maxWidth="100%"/>
                                <Text
                                fontFamily={fontFamily}
                                fontWeight={600}
                                fontSize={{"lg" : "1.25rem"}}
                                >Pembayaran Instan</Text>
                            </Flex>
                            <RadioGroup marginX={{"lg" : "1rem"}} marginY={{"lg" : "2rem"}} defaultValue="Gopay" value={provider} onChange={(e) => {setProvider(e)}}>
                                <Stack gap="0.5rem">
                                    <Box border="1px solid #E0E6ED" borderRadius="8px" width={{"lg" : "100%"}}>
                                        <Radio value="Gopay" width={{"lg" : "100%"}} marginY={{"lg" : "1rem"}} marginX={{"lg" : "1rem"}}>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#212121"
                                            fontSize={{"lg" : "1.125rem"}}
                                            fontWeight={400}>
                                                Gopay
                                            </Text>
                                        </Radio>
                                    </Box>
                                    <Box border="1px solid #E0E6ED" borderRadius="8px" width={{"lg" : "100%"}}>
                                        <Radio border="1px solid #E0E6ED" borderRadius="8px" value="Shopeepay" width={{"lg" : "100%"}} marginY={{"lg" : "1rem"}} marginX={{"lg" : "1rem"}}>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#212121"
                                            fontSize={{"lg" : "1.125rem"}}
                                            fontWeight={400}>
                                                Shopeepay
                                            </Text>
                                        </Radio>
                                    </Box>
                                    <Box border="1px solid #E0E6ED" borderRadius="8px" width={{"lg" : "100%"}}>
                                        <Radio border="1px solid #E0E6ED" borderRadius="8px" value="Ovo" width={{"lg" : "100%"}} marginY={{"lg" : "1rem"}} marginX={{"lg" : "1rem"}}>
                                        <Text
                                            fontFamily={fontFamily}
                                            color="#212121"
                                            fontSize={{"lg" : "1.125rem"}}
                                            fontWeight={400}>
                                                Ovo
                                            </Text>
                                        </Radio>
                                    </Box>
                                    <Box border="1px solid #E0E6ED" borderRadius="8px" width={{"lg" : "100%"}}>
                                        <Radio border="1px solid #E0E6ED" borderRadius="8px" value="Dana" width={{"lg" : "100%"}} marginY={{"lg" : "1rem"}} marginX={{"lg" : "1rem"}}>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#212121"
                                            fontSize={{"lg" : "1.125rem"}}
                                            fontWeight={400}>
                                                Dana
                                            </Text>
                                        </Radio>
                                    </Box>
                                </Stack>
                            </RadioGroup>
                        </Flex>
                   </Flex>
                   <Flex flexDirection="column">
                        <Receipt harga={harga} bulan={bulan}/>
                        <Button colorScheme="blue" backgroundColor="#0053AD" borderRadius="8px" width={{"lg" : "100%"}} marginY={{"lg" : "2rem"}} onClick={() => {setPosisiPembayaran(2)}}>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "0.875rem"}}
                            color="#FCFCFC">
                                Lanjutkan ke pembayaran
                            </Text>
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        );
    } else {
        return(
            <Flex
            position="relative"
            top={{"lg" : "8rem"}}
            marginX={{"lg" : "3rem"}}
            flexWrap="wrap"
            gap={"3rem"}>
                <Flex
                flexDir="column"
                gap="0.5rem"
                width={{"lg" : "100%"}}>
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "1.75rem"}}
                    fontWeight={600}
                    color="#212121">
                        {provider}
                    </Text>
                    <Text
                    color="#89939E"
                    fontWeight={400}
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "1.125rem"}}
                    >
                        Silahkan scan QR code berikut untuk melakukan pembayaran
                    </Text>
                </Flex>
                <Flex width={{"lg" : "100%"}} gap="2rem">
                   <Flex flexDir="column" width={{"lg" : "60%"}}>
                        <Flex flexDir="column" boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)" borderRadius="16px" border="1px solid #E0E6ED" marginBottom={{"lg" : "3rem"}}>
                            <Box width={{"lg" : "100%"}} marginX={{"lg" : "15rem"}} marginY={{"lg" : "1.5rem"}}>
                                <QRCode value="https://www.google.com" size={200}/>
                            </Box>
                            <Flex flexDir="column" marginBottom={{"lg" : "2rem"}} marginX={{"lg" : "1rem"}}>
                                <Text
                                fontFamily={fontFamily}
                                fontSize={{"lg": "1.125rem"}}
                                fontWeight={600}>
                                    Cara Pembayaran
                                </Text>
                                <ol style={{fontFamily: fontFamily, color: "#717171", fontWeight: 400, marginLeft: "1rem"}}>
                                    <li>Buka App {provider} di ponsel Anda</li>
                                    <li>Pilih “Bayar” dan scan QR code di atas</li>
                                    <li>Tinjau pembayaran lalu ketuk “konfirmasi & bayar”</li>
                                    <li>Masukkan kode PIN</li>
                                    <li>Transaksi Selesai</li>
                                </ol>
                            </Flex>
                        </Flex>
                        <Button border="1px solid #0053AD" borderRadius="8px" backgroundColor="#FCFCFC" onClick={() => {setPosisiPembayaran(1)}}>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "0.875rem"}}
                            color="#0053AD">
                                Ganti Metode Pembayaran
                            </Text>
                        </Button>
                   </Flex>
                   <Flex flexDirection="column">
                        <Receipt bulan={bulan} harga={harga}/>
                        <Button colorScheme="blue" backgroundColor="#0053AD" borderRadius="8px" width={{"lg" : "100%"}} marginY={{"lg" : harga && bulan ? "2.9rem" : "2rem"}} isLoading={load} onClick={async () => {
                            try{
                                setLoad(true);
                                const result = await api.post<PembelianPremiumResponse>("/premium/create", {
                                    "tipePembayaran" : provider,
                                    "lamaPremium" : bulan,
                                    "totalPembayaran" : harga
                                }, {
                                    headers: {
                                        Authorization: `Bearer ${getJwtAgenTravel()}`
                                    }
                                });
                                localStorage.setItem("agenTravel", JSON.stringify(result.data.data?.pembelian_premium.agenTravel));
                                setApiSuccess(true);
                                setLoad(false);
                            } catch(e){
                                setApiSuccess(false);
                                if(axios.isAxiosError<PembelianPremiumResponse>(e)){
                                    toast({
                                        title: "Error from server",
                                        duration: 3000,
                                        isClosable: true,
                                        status: "error",
                                        description: e.response?.data?.message
                                    });
                                }
                            } finally{
                                localStorage.removeItem(`deadline-${agenTravel.id}`)
                                setTimeout(() => {
                                    agenTravelContext.setCurrentPosition(2);
                                }, 1000);
                            }
                        }}>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "0.875rem"}}
                            color="#FCFCFC">
                                Saya sudah melakukan pembayaran
                            </Text>
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        );
    }
};

export default PembayaranPremium;
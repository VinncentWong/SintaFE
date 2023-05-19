import { Box, Button, Flex, Select, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import { fontFamily } from "../../style/font";
import { useContext, useState } from "react";
import { PaketWisatas } from "../../response/paket_wisata";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import WisataIdContext from "../../context/WisataIdContext";

const PesanPaketWisata = ({paketWisata}: {paketWisata: PaketWisatas}) => {

    const [choosenDate, setChoosenDate] = useState<string>("");
    const [nDewasa, setNDewasa] = useState<number>(0);
    const [nAnak, setNAnak] = useState<number>(0);
    const [nBayi, setNBayi] = useState<number>(0);
    const navigate = useNavigate();
    const pemesananContext = useContext(WisataIdContext);

    const extractDate = (date: string) => {
        let index = 0;
        for(let i = 0 ; i < date.length ; i++){
            if(date[i] === "T"){
                index = i;
                break;
            }
            index++;
        }
        return date.substring(0, index);
    };

    if(!paketWisata){
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
        )
    }
    const tanggalMulai = extractDate(paketWisata.detailTanggal[0].tanggalMulai);
    const tanggalSelesai = extractDate(paketWisata.detailTanggal[0].tanggalPulang);
    return(
        <Flex
        width={{
            "lg" : "100%"
        }}
        paddingLeft={{
            "lg" : "5rem"
        }}
        paddingRight={{
            "lg" : "5rem"
        }}>
            <Flex flexDir="column">
                <Box>
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "1.75rem"}}
                    fontWeight={600}>
                        Atur Detail Pesanan Paket Wisata
                    </Text>
                </Box>
                <Flex
                flexDir="column"
                gap={{"lg" : "1rem"}}
                marginY={{"lg" : "1rem"}}>
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "1rem"}}>
                        Tanggal Keberangkatan <Text as="span" color="red">*</Text>
                    </Text>
                    <Select placeholder="Pilih opsi dan cari tanggal keberangkatan dari paket wisata yang anda ingin pesan" value={choosenDate} onChange={(e) => {setChoosenDate(e.currentTarget.value)}}>
                        <option>{tanggalMulai} &nbsp; - &nbsp; {tanggalSelesai}</option>
                    </Select>
                </Flex>
                <Flex
                flexDir="column"
                boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)"
                borderRadius="16px"
                width={{"lg" : "100%"}}
                marginY={{"lg" : "2rem"}}
                paddingX={{"lg" : "1rem"}}
                paddingY={{"lg" : "1rem"}}
                gap={{"lg" : "1rem"}}>
                    <Box>
                        <Text 
                        fontFamily={fontFamily}
                        fontSize={{"lg" : "1.25rem"}}
                        fontWeight={600}>
                            Atur Jumlah Tamu
                        </Text>
                    </Box>
                    <Flex
                    flexDirection="column"
                    gap={{"lg" : "2rem"}}>
                        <Flex
                        gap={{"lg" : "5rem"}}>
                            <Text
                            fontFamily={fontFamily}
                            color="#4D4D4D"
                            fontSize={{"lg" : "1.25rem"}}>
                                Dewasa(&gt; 11 Tahun)
                            </Text>
                            <Flex
                            gap={{"lg" : "2rem"}}>
                                <Button 
                                border={nDewasa == 0? "1px solid black" : "1px solid #0053AD"}
                                borderRadius="50%"
                                isDisabled={nDewasa == 0}
                                backgroundColor="white"
                                _hover={{backgroundColor: undefined}}
                                onClick={() => {setNDewasa(nDewasa - 1)}}>
                                    <MinusIcon style={{color: (nDewasa == 0? "black" : "#0053AD")}}/>
                                </Button>
                                <Box
                                marginY={{"lg" : "0.5rem"}}>
                                    {nDewasa}
                                </Box>
                                <Button 
                                border="1px solid #0053AD"
                                borderRadius="50%"
                                backgroundColor="white"
                                _hover={{backgroundColor: undefined}}
                                onClick={() => {setNDewasa(nDewasa + 1)}}>
                                    <AddIcon style={{color: "#0053AD"}}/>
                                </Button>
                            </Flex>
                        </Flex>
                        <Flex
                        gap={{"lg" : "6.5rem"}}>
                            <Text
                            fontFamily={fontFamily}
                            color="#4D4D4D"
                            fontSize={{"lg" : "1.25rem"}}>
                                Anak(2-11 Tahun)
                            </Text>
                            <Flex
                            gap={{"lg" : "2rem"}}>
                                <Button 
                                border={nAnak == 0? "1px solid black" : "1px solid #0053AD"}
                                borderRadius="50%"
                                isDisabled={nAnak == 0}
                                backgroundColor="white"
                                _hover={{backgroundColor: undefined}}
                                onClick={() => {setNAnak(nAnak - 1)}}>
                                    <MinusIcon style={{color: (nAnak == 0? "black" : "#0053AD")}}/>
                                </Button>
                                <Box
                                marginY={{"lg" : "0.5rem"}}>
                                    {nAnak}
                                </Box>
                                <Button 
                                border="1px solid #0053AD"
                                borderRadius="50%"
                                backgroundColor="white"
                                _hover={{backgroundColor: undefined}}
                                onClick={() => {setNAnak(nAnak + 1)}}>
                                    <AddIcon style={{color: "#0053AD"}}/>
                                </Button>
                            </Flex>
                        </Flex>
                        <Flex
                        gap={{"lg" : "7.5rem"}}>
                            <Text
                            fontFamily={fontFamily}
                            color="#4D4D4D"
                            fontSize={{"lg" : "1.25rem"}}>
                                Bayi(&lt; 2 Tahun)
                            </Text>
                            <Flex
                            gap={{"lg" : "2rem"}}>
                                <Button 
                                border={nBayi == 0? "1px solid black" : "1px solid #0053AD"}
                                borderRadius="50%"
                                isDisabled={nBayi == 0}
                                backgroundColor="white"
                                _hover={{backgroundColor: undefined}}
                                onClick={() => {setNBayi(nBayi - 1)}}>
                                    <MinusIcon style={{color: (nBayi == 0? "black" : "#0053AD")}}/>
                                </Button>
                                <Box
                                marginY={{"lg" : "0.5rem"}}>
                                    {nBayi}
                                </Box>
                                <Button 
                                border="1px solid #0053AD"
                                borderRadius="50%"
                                backgroundColor="white"
                                _hover={{backgroundColor: undefined}}
                                onClick={() => {setNBayi(nBayi + 1)}}>
                                    <AddIcon style={{color: "#0053AD"}}/>
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Button
                    _hover={{backgroundColor: undefined}}
                    backgroundColor="#0053AD"
                    borderRadius="8px"
                    onClick={() => {navigate(`/paketwisata/pesan/${pemesananContext.id}?dewasa=${nDewasa}&anak=${nAnak}&bayi=${nBayi}`)}}>
                        <Text
                        fontFamily={fontFamily}
                        fontSize={{"lg" : "0.875rem"}}
                        color="white">
                            Selesai
                        </Text>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
};

export default PesanPaketWisata;
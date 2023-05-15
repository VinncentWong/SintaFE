import { Box, Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { fontFamily } from "../../style/font";
import detailPesanan from "../../images/pemesanan/detail_pesanan2.png";
import calender from "../../images/pemesanan/calender.png";
import calenderPlus from "../../images/pemesanan/calenderplus.png";
import handsCoin from "../../images/pemesanan/hands.png";
import users from "../../images/pemesanan/users.png";
import duit from "../../images/pemesanan/duit.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import silang from "../../images/pemesanan/silang.png";
import jam from "../../images/pemesanan/jam.png";

const Receipt = ({nDewasa, nAnak, nBayi, harga, bulan}: {nDewasa?: number, nAnak?: number, nBayi?: number, harga?: string, bulan?: string}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <Box
        position="relative"
        boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)"
        borderRadius="16px"
        border="1px solid #E0E6ED"
        width={{"lg" : "100%"}}
        height={{"lg" : "max-content"}}>
            <Flex marginTop={{"lg" : "1rem"}} marginBottom={{"lg" : "1rem"}} marginX={{"lg" : "2rem"}} gap="1rem">
                <Image src={detailPesanan} maxWidth={"100%"}/>
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "1.25rem"}}
                    fontWeight={600}>Detail Pesanan</Text>
            </Flex>
            <Flex flexDir="column" marginTop={{"lg" : "2rem"}} marginX={{"lg" : "2rem"}}>
                {
                    nAnak && nDewasa && nBayi &&
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "1.25rem"}}
                    fontWeight={600}>Paket Wisata Pantai Malang Selatan Full Trip
                    </Text>
                }
                {
                    harga && bulan &&
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "1.25rem"}}
                    fontWeight={600}>
                        {harga == "80000"? "Paket Pemula" : harga =="230000" ? "Paket Menengah" : "Paket Jagoan"}
                    </Text>
                }
                <Flex
                flexDir="column"
                marginY={{"lg" : "1rem"}}>
                    {
                        harga ? 
                        <Flex marginY={{"lg" : "0.5rem"}} gap={"0.5rem"}>
                            <Image src={calender} maxWidth={"100%"}/>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "1.125rem"}}
                            fontWeight={400}
                            color="#717171">
                                {new Date().toLocaleString()}
                            </Text>
                        </Flex> : 
                        <Flex marginY={{"lg" : "0.5rem"}} gap={"0.5rem"}>
                            <Image src={calender} maxWidth={"100%"}/>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "1.125rem"}}
                            fontWeight={400}
                            color="#717171">
                                14 Apr 2023 - 15 Apr 2023
                            </Text>
                        </Flex>
                    }
                    {
                        nAnak && nBayi && nDewasa &&
                        <Flex marginY={{"lg" : "0.5rem"}} gap={"0.5rem"}>
                            <Image src={users} maxWidth={"100%"}/>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "1.125rem"}}
                            fontWeight={400}
                            color="#717171">
                                {nDewasa} Dewasa | {nAnak} Anak | {nBayi} Bayi
                            </Text>
                        </Flex>
                    }
                    {
                        nAnak && nBayi && nDewasa &&
                        <Flex marginY={{"lg" : "0.5rem"}} gap={"0.5rem"}> 
                            <Image src={handsCoin} maxWidth={"100%"}/>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "1.125rem"}}
                            fontWeight={400}
                            color="#717171">
                                Bisa Refund
                            </Text>
                        </Flex>
                    }
                    {
                        nAnak && nBayi && nDewasa &&
                        <Flex marginY={{"lg" : "0.5rem"}} gap={"0.5rem"}>
                            <Image src={calenderPlus} maxWidth={"100%"}/>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "1.125rem"}}
                            fontWeight={400}
                            color="#717171">
                                Bisa reschedule
                            </Text>
                        </Flex>
                    }
                    {
                        harga && bulan &&
                        <Flex marginY={{"lg" : "0.5rem"}} gap={"0.5rem"}>
                            <Image src={jam} maxWidth={"100%"}/>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "1.125rem"}}
                            fontWeight={400}
                            color="#717171">
                                Berlaku {bulan} Bulan
                            </Text>
                        </Flex>
                    }
                    {
                        harga && bulan && 
                        <Flex marginY={{"lg" : "0.5rem"}} gap={"0.5rem"}>
                            <Image src={silang} maxWidth={"100%"}/>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "1.125rem"}}
                            fontWeight={400}
                            color="#717171">
                                Tidak bisa refund
                            </Text>
                        </Flex>
                    }
                </Flex>
            </Flex>
            {
                nAnak && nDewasa && nBayi && 
                <Box height={{"lg" : "0.5rem"}} width={{"lg" : "90%"}} borderTop="1px dashed #ABBED1" marginX={{"lg" : "2rem"}} marginY={{"lg" : "1rem"}}></Box>
            }
            {
                harga && bulan &&
                <Box height={{"lg" : "0.5rem"}} width={{"lg" : "90%"}} borderTop="1px dashed #ABBED1" marginX={{"lg" : "2rem"}} marginY={{"lg" : "2.5rem"}}></Box>
            }
            <Flex marginX={{"lg" : "2rem"}} marginY={{"lg" : "2rem"}} alignItems="center" gap={{"lg" : "9rem"}}>
                <Text
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "1.25rem"}}
                    fontWeight={600}
                    color="#212121"
                    width={{"lg" : "80%"}}>
                        Total Pembayaran
                </Text>
                <Button _hover={{backgroundColor : undefined}} backgroundColor="transparent" colorScheme={undefined} width={{"lg" : "45%"}} onClick={() => {onOpen()}}>
                    <Flex alignItems="center">
                        {
                            nAnak && nBayi && nDewasa && 
                            <Text
                                fontFamily={fontFamily}
                                fontSize={{"lg" : "1.25rem"}}
                                fontWeight={600}
                                color="#0053AD">
                                Rp{(nDewasa ?? 0 * 100000) + (nAnak ?? 0* 75000) + (nBayi ?? 0 * 50000) + 5000}
                            </Text>
                        }
                        {
                            harga && bulan && 
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "1.25rem"}}
                            fontWeight={600}
                            color="#0053AD">
                                Rp{harga}
                            </Text>
                        }
                        <ChevronDownIcon boxSize={{"lg" : "20%"}}/>
                    </Flex>
                </Button>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>
                        <Flex gap="1rem">
                            <Image src={duit} maxWidth="100%"/>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "1.25rem"}}
                            fontWeight={600}>
                                Detail Pesanan
                            </Text>
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Flex flexDir="column" marginTop={{"lg" : "2rem"}} marginX={{"lg" : "2rem"}} marginBottom={{"lg" : "1rem"}}>
                            <Text
                            fontFamily={fontFamily}
                            color="#717171"
                            fontSize={{"lg" : "1.125rem"}}>Tarif</Text>
                            {
                                nAnak && nBayi && nDewasa && 
                                <ul style={{"color" : "#89939E"}}>
                                    <li style={{"marginTop" : "0.5rem", "marginBottom": "0.5rem"}}>
                                        <Flex gap={{"lg" : "20rem"}}>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#89939E"
                                            fontSize={{"lg" : "0.875rem"}}>
                                                Dewasa(x{nDewasa})
                                            </Text>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#89939E"
                                            fontSize={{"lg" : "0.875rem"}}>
                                                Rp.{nDewasa ?? 0 * 100000}
                                            </Text>
                                        </Flex>
                                    </li>
                                    <li style={{"marginTop" : "0.5rem", "marginBottom": "0.5rem"}}>
                                        <Flex gap={{"lg" : "21.09rem"}}>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#89939E"
                                            fontSize={{"lg" : "0.875rem"}}>
                                                Anak(x{nAnak})
                                            </Text>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#89939E"
                                            fontSize={{"lg" : "0.875rem"}}
                                            justifySelf="flex-end">
                                                Rp.{nAnak ?? 0 * 75000}
                                            </Text>
                                        </Flex>
                                    </li>
                                    <li style={{"marginTop" : "0.5rem", "marginBottom": "0.5rem"}}>
                                        <Flex gap={{"lg" : "21.4rem"}}>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#89939E"
                                            fontSize={{"lg" : "0.875rem"}}>
                                                Bayi(x{nBayi})
                                            </Text>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#89939E"
                                            fontSize={{"lg" : "0.875rem"}}>
                                                Rp.{nBayi ?? 0 * 50000}
                                            </Text>
                                        </Flex>
                                    </li>
                                </ul>
                            }
                            {
                                harga && bulan && 
                                <ul style={{"color" : "#89939E"}}>
                                    <li style={{"marginTop" : "0.5rem", "marginBottom": "0.5rem"}}>
                                        <Flex gap={{"lg" : "21.4rem"}}>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#89939E"
                                            fontSize={{"lg" : "0.875rem"}}>
                                                {bulan} Bulan
                                            </Text>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#89939E"
                                            fontSize={{"lg" : "0.875rem"}}>
                                                Rp.{harga}
                                            </Text>
                                        </Flex>
                                    </li>
                                </ul>
                            }
                        </Flex>
                        <Flex flexDir="column" marginX={{"lg" : "2rem"}}>
                            <Text
                            fontFamily={fontFamily}
                            color="#717171"
                            fontSize={{"lg" : "1.125rem"}}>Biaya Lainnya</Text>
                            <ul style={{"color" : "#89939E"}}>
                                <li style={{"marginTop" : "0.5rem", "marginBottom": "0.5rem"}}>
                                    <Flex gap={{"lg" : "19.8rem"}}>
                                        <Text
                                        fontFamily={fontFamily}
                                        color="#89939E"
                                        fontSize={{"lg" : "0.875rem"}}>
                                            Administrasi
                                        </Text>
                                        <Text
                                        fontFamily={fontFamily}
                                        color="#89939E"
                                        fontSize={{"lg" : "0.875rem"}}>
                                            Rp0
                                        </Text>
                                    </Flex>
                                </li>
                            </ul>
                        </Flex>
                        <Box height={{"lg" : "0.5rem"}} width={{"lg" : "90%"}} borderTop="1px dashed #ABBED1" marginX={{"lg" : "2rem"}} marginY={{"lg" : "1rem"}}></Box>
                        <Flex marginX={{"lg" : "2rem"}} marginY={{"lg" : "2rem"}} alignItems="center" gap={{"lg" : "9rem"}}>
                            <Text
                                fontFamily={fontFamily}
                                fontSize={{"lg" : "1.25rem"}}
                                fontWeight={600}
                                color="#212121"
                                width={{"lg" : "80%"}}>
                                    Total Pembayaran
                            </Text>
                            {
                                nAnak && nBayi && nDewasa &&
                                <Text
                                fontFamily={fontFamily}
                                fontSize={{"lg" : "1.25rem"}}
                                fontWeight={600}
                                color="#0053AD">
                                    Rp{(nDewasa ?? 0 * 100000) + (nAnak ?? 0 * 75000) + (nBayi ?? 0 * 50000) + 5000}
                                </Text>
                            }
                            {
                                harga && bulan &&
                                <Text
                                fontFamily={fontFamily}
                                fontSize={{"lg" : "1.25rem"}}
                                fontWeight={600}
                                color="#0053AD">
                                    Rp{harga}
                                </Text>
                            }
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>  
    );
};

export default Receipt;
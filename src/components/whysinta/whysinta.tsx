import { Box, Flex, Image, Text } from "@chakra-ui/react";
import businessMan from "../../images/logo/businessman.png"
import { fontFamily } from "../../style/font";
import ListWhySinta from "../list/listwhysinta";

const WhySinta = () => {
    return(
        <Flex
        marginTop={{
            "lg" : "5rem"
        }}
        marginBottom={{
            "lg" : "6rem"
        }}>
            <Box
            width={{
                "lg" : "40%"
            }}
            paddingTop={{
                "lg" : "5rem"
            }}>
                <Image src={businessMan}/>
            </Box>
            <Box
            width={{
                "lg" : "60%"
            }}>
                <Text
                fontFamily={fontFamily}
                fontWeight="600"
                fontSize={{
                    "lg" : "2.5rem"
                }}>Kenapa memilih SINTA?</Text>
                <Box>
                    <Text
                    fontFamily={fontFamily}
                    fontWeight="400"
                    fontSize={{
                        "lg" : "1rem"
                    }}
                    marginTop={{
                        "lg" : "1.5rem"
                    }}>
                    Bersama SINTA, kami menghubungkan para wisatawan dengan pihak travel agent, 
                    melalui penawaran paket-paket trip liburan yang dipublikasi oleh pihak travel 
                    agent pada platform kami. SINTA juga memastikan bahwa pihak-pihak travel agent 
                    yang bergabung menjadi mitra kami, merupakan travel agent yang terpercaya, dan 
                    terdaftar dibawah badan hukum
                    </Text>
                </Box>
                <Box
                marginTop={{
                    "lg" : "3rem"
                }}
                marginBottom={{
                    "lg" : "3rem"
                }}>
                    <ListWhySinta detail="Tersedia beragam paket trip liburan, baik dalam maupun luar negeri"/>
                    <ListWhySinta detail="Agen yang bekerja sama dengan kami merupakan agen yang terpercaya"/>
                    <ListWhySinta detail="Memfasilitasi agen travel untuk dapat mempublish paket wisata miliknya"/>
                    <ListWhySinta detail="Agen dapat membagikan portofolio untuk membagikan pengalamannya"/>
                </Box>
            </Box>
        </Flex>
    )
};

export default WhySinta;
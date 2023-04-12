import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import header from "../../images/landingpage/header.png"
import { fontFamily } from "../../style/font";
import jadiPartnerMan from "../../images/logo/jadipartnerman.png";
import ListWhySinta from "../list/listwhysinta";

interface HeaderProps{
    type: "landing" | "jadipartner"
}

const Header = ({type}: HeaderProps) => {
    switch(type){
        case "landing":
            return(
                <Box
                id="header"
                position="relative"
                height={{
                    "lg" : "90vh"
                }}
                backgroundImage={header}
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                zIndex="1">
                    <Flex
                    flexDir={{
                        "lg" : "column"
                    }}
                    justifyContent="center"
                    alignItems="center"
                    paddingTop={{
                        "lg" : "12rem"
                    }}>
                        <Text
                        fontFamily={fontFamily}
                        fontSize={{
                            "lg" : "2rem"
                        }}
                        color="white"
                        fontWeight="600">
                            Mari Jelajahi Dunia Bersama SINTA
                        </Text>
                        <InputGroup
                        paddingLeft={{
                            "lg" : "25rem"
                        }}
                        paddingTop={{
                            "lg" : "3rem"
                        }}>
                            <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.300' />}
                            marginLeft={{
                                "lg" : "25.2rem"
                            }}
                            paddingTop={{
                                "lg" : "4.3rem"
                            }}
                            />
                            <Input 
                            type='text' 
                            placeholder='Temukan paket trip liburanmu disini!' 
                            borderRadius="100px"
                            width={{
                                "lg" : "58%"
                            }}
                            _placeholder={{
                                "color" : "#717171"
                            }}
                            backgroundColor="#FCFCFC"/>
                        </InputGroup>
                    </Flex>
                </Box>
            );
        case "jadipartner":
            return(
                <Flex
                paddingTop={{
                    "lg" : "15%"
                }}
                paddingBottom={{
                    "lg" : "15%"
                }}>
                    <Image 
                    src={jadiPartnerMan}
                    marginLeft={{
                        "lg" : "10rem"
                    }}
                    marginRight={{
                        "lg" : "10rem"
                    }}
                    maxWidth="100%"
                    maxHeight="100%"/>
                    <Flex
                    flexDir={{
                        "lg" : "column"
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
                            }}
                            width={{
                                "lg" : "80%"
                            }}>
                            SINTA adalah platform aplikasi berbasis web yang bergerak untuk 
                            mendigitalisasi usaha-usaha milik agen tour dan travel, baik dalam skala 
                            kecil (UMKM) hingga menegah yang masih kurang terdigitalisasi, 
                            yang menyebabkan usaha kurang dapat menjangkau audiens (travelers) yang 
                            lebih luas.
                            <br/>
                            <br/>
                            Dengan bergabung bersama kami, Anda akan mendapatkan 
                            benefit-benefit sebagai berikut: 
                            </Text>
                        </Box>
                        <Box
                            marginTop={{
                                "lg" : "2rem"
                            }}
                            marginBottom={{
                                "lg" : "2rem"
                            }}>
                                <ListWhySinta detail="Dapat mempublikasikan paket wisata pada aplikasi kami untuk menjangkau audiens yang lebih luas dan meningkatkan eksposur bisnis Anda."/>
                                <ListWhySinta detail="Pemesanan paket wisata secara online melalui aplikasi kami, sehingga membuat proses transaksi menjadi lebih mudah dan nyaman bagi Anda dan Traveler."/>
                                <ListWhySinta detail="Dapat membagikan portofolio dan dokumentasi dari paket-paket wisata yang berhasil Anda jalankan selama ini, untuk meningkatkan rasa percaya traveler pada jasa dan layanan yang anda miliki."/>
                                <ListWhySinta detail="Dapat memperluas basis pelanggan Anda dan meningkatkan reputasi Anda di dunia travel."/>
                        </Box>
                    </Flex>
                </Flex>
            );
        default:
            return(
                <Flex>

                </Flex>
            )
    }
};

export default Header;
import { Box, Flex, Text } from "@chakra-ui/react";
import randomNumber from "../../util/random";
import { fontFamily } from "../../style/font";

interface PaketWisataFasilitasProps{
    fasilitasTermasuk: string[],
    fasilitasTidakTermasuk: string[]
}

const PaketWisataFasilitas = ({fasilitasTermasuk, fasilitasTidakTermasuk}: PaketWisataFasilitasProps) => {
    const listFasilitasTermasuk = fasilitasTermasuk.map((v) => {
        return (
            <li key={randomNumber()}>{v}</li>
        )
    });
    const listFasilitasTidakTermasuk = fasilitasTidakTermasuk.map((v) => {
        return(
            <li key={randomNumber()}>{v}</li>
        )
    })
    return(
        <Box>
            <Flex 
            flexDir="column"
            marginTop={{
                "lg" : "3rem"
            }}
            marginBottom={{
                "lg" : "3rem"
            }}
            marginLeft={{
                "lg" : "5rem"
            }}
            marginRight={{
                "lg" : "5rem"
            }}>
                <Text
                    fontFamily={fontFamily}
                    color="#00B87B"
                    fontWeight={600}
                    fontSize="1.75rem">
                            Fasilitas Yang Sudah Termasuk Dalam Paket Wisata
                </Text>
                <Box
                marginLeft={{
                    "lg" : "2rem"
                }}
                marginRight={{
                    "lg" : "2rem"
                }}
                marginTop={{
                    "lg" : "1rem"
                }}>
                    <ul>
                        {listFasilitasTermasuk}
                    </ul>
                </Box>
            </Flex >
            <Flex 
            flexDir="column"
            marginTop={{
                "lg" : "3rem"
            }}
            marginBottom={{
                "lg" : "3rem"
            }}
            marginLeft={{
                "lg" : "5rem"
            }}
            marginRight={{
                "lg" : "5rem"
            }}>
                <Text
                    fontFamily={fontFamily}
                    color="#EF473A"
                    fontWeight={600}
                    fontSize="1.75rem">
                            Fasilitas Yang Belum Termasuk Dalam Paket Wisata
                </Text>
                <Box
                marginLeft={{
                    "lg" : "2rem"
                }}
                marginRight={{
                    "lg" : "2rem"
                }}
                marginTop={{
                    "lg" : "1rem"
                }}
                marginBottom={{
                    "lg" : "1rem"
                }}>
                    <ul>
                        {listFasilitasTidakTermasuk}
                    </ul>
                </Box>
            </Flex >
        </Box>
    )
};

export default PaketWisataFasilitas;
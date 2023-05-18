import { Box, Flex, Text } from "@chakra-ui/react";
import randomNumber from "../../util/random";
import { fontFamily } from "../../style/font";
import { PaketWisatas } from "../../response/paket_wisata";

const PaketWisataFasilitas = ({paketWisata}: {paketWisata: PaketWisatas}) => {
    return(
        <Box
        width={{
            "lg" : "100%"
        }}
        paddingLeft={{
            "lg" : "5rem"
        }}
        paddingRight={{
            "lg" : "5rem"
        }}
        marginY={{"lg" : "2rem"}}
        dangerouslySetInnerHTML={{__html: paketWisata.fasilitas}}>
        </Box>
    )
};

export default PaketWisataFasilitas;
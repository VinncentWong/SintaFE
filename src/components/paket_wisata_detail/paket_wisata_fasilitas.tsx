import { Box, Flex, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import randomNumber from "../../util/random";
import { fontFamily } from "../../style/font";
import { PaketWisatas } from "../../response/paket_wisata";

const PaketWisataFasilitas = ({paketWisata}: {paketWisata: PaketWisatas}) => {
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
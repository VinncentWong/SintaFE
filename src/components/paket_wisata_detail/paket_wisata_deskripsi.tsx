import { Box, Flex, Image, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import { PaketWisatas } from "../../response/paket_wisata";

interface DeskrisiPaketWisataContentProps{
    paketWisataDescription: string,
    subTitle: string[],
    photos: string[],
    photosContent: string[]
}

const DeskripsiPaketWisata = ({paketWisata}: {paketWisata: PaketWisatas}) => {
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
        );
    }
    return(
        <Flex 
        flexDir="column"
        width={{
            "lg" : "100%"
        }}>
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
            dangerouslySetInnerHTML={{__html: paketWisata.deskripsi}}
            />
        </Flex>
    )
};

export default DeskripsiPaketWisata;
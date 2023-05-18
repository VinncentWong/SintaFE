import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import PaketWisataTitle from "./paket_wisata_title";
import { PaketWisatas } from "../../response/paket_wisata";

const PaketWisataInfoPenting = ({paketWisata}: {paketWisata: PaketWisatas}) => {
    if(paketWisata){
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
            dangerouslySetInnerHTML={{__html: paketWisata.infoPenting}}>
                
            </Box>
        )
    } else {
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
};

export default PaketWisataInfoPenting;
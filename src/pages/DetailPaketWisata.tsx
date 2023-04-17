import { Box, Image } from "@chakra-ui/react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import image from "../images/detail_wisata/main_image.png";
import PaketWisataTitle from "../components/paket_wisata_detail/paket_wisata_title";
import BreadCrumb from "../components/breadcrumb";
import DeskripsiPaketWisata from "../components/paket_wisata_detail/paket_wisata_deskripsi";
import { PaketWisataType } from "../router/PaketWisataRouter";

interface DetailPaketWisataProps{
    type: PaketWisataType
}

const DetailPaketWisata = ({type}: DetailPaketWisataProps) => {
    let showedElement: JSX.Element;
    switch(type){
        case "deskripsi":
            showedElement = <DeskripsiPaketWisata/>
            break;
        default:
            showedElement = <DeskripsiPaketWisata/>
    }
    return(
        <Box>
            <Navbar isAuthenticated={false} type="other"/>
            <Image 
            src={image}
            width={{
                "lg" : "100%"
            }}/>
            <PaketWisataTitle 
            title="Paket Wisata Pantai Malang Selatan Full Trip"
            namaAgen=" Rahman Travel"
            kotaPenjemputan="Malang"
            provinsiPenjemputan="Jawa Timur"
            durasiPaketWisata={1}
            tipePaketWisata="Open"/>
            <BreadCrumb type="deskripsi"/>
            {showedElement}
            <Footer/>
        </Box>
    )
};

export default DetailPaketWisata;
import { Box, Image, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import image from "../images/detail_wisata/main_image.png";
import PaketWisataTitle from "../components/paket_wisata_detail/paket_wisata_title";
import BreadCrumb from "../components/breadcrumb";
import DeskripsiPaketWisata from "../components/paket_wisata_detail/paket_wisata_deskripsi";
import { PaketWisataType } from "../router/PaketWisataRouter";
import PaketWisataInfoPenting from "../components/paket_wisata_detail/paket_wisata_infopenting";
import PaketWisataFasilitas from "../components/paket_wisata_detail/paket_wisata_fasilitas";
import { useContext } from "react";
import WisataIdContext from "../context/WisataIdContext";

interface DetailPaketWisataProps{
    type: PaketWisataType
}

const DetailPaketWisata = ({type}: DetailPaketWisataProps) => {
    const loadComplete = useContext(WisataIdContext).loadComplete;
    let showedElement: JSX.Element;
    let nonUnionType: string;
    
    const fasilitasTermasukTempData = [
        "Harga Tiket Masuk Kawasan CMC (Pantai Gatra, Pantai Clungup, dan Pantai Tiga Warna)",
        "Transportasi Selama Tour Sesuai Jumlah Peserta",
        "Antar Jemput sesuai tempat kesepakatan",
        "Driver (Makan, Uang tips, Rokok, Dll)",
        "Parkir & BBM Lokal Guide Pantai Tiga Warna",
        "Mineral Selama Tour"
    ];
    const fasilitasTidakTermasukTempData = [
        "Ojek PP dari Parkiran Mobil menuju Loket Satu (Rp. 10.000/Org)",
        "Sewa Peralatan Diving/Selam (Rp. 20.000/Org)",
        "Sewa Perahu Kano (Rp. 25.000/Org)",
        "Kamar Mandi",
        "Peralatan Mandi",
        "Beli Oleh - oleh"
    ];

    switch(type){
        case "deskripsi":
            showedElement = <DeskripsiPaketWisata/>
            nonUnionType = "deskripsi";
            break;
        case "infopenting":
            showedElement = <PaketWisataInfoPenting/>
            nonUnionType ="infopenting"
            break;
        case "fasilitas":
            showedElement = <PaketWisataFasilitas 
            fasilitasTermasuk={fasilitasTermasukTempData} 
            fasilitasTidakTermasuk={fasilitasTidakTermasukTempData}/>
            nonUnionType = "fasilitas";
            break;
        default:
            showedElement = <DeskripsiPaketWisata/>
    }
    return(
        <Box>
            <Navbar isAuthenticated={false} type="other"/>
            {loadComplete ? 
                <Box>
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
                    <BreadCrumb type={type}/>
                    {showedElement}
                </Box> : 
                <Box
                paddingTop={{
                    "lg" : "10rem"
                }}
                paddingBottom={{
                    "lg" : "5rem"
                }}>
                    <SkeletonCircle isLoaded={loadComplete} size='10'/>
                    <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='8' isLoaded={loadComplete}/>
                </Box>
            }
            <Footer/>
        </Box>
    )
};

export default DetailPaketWisata;
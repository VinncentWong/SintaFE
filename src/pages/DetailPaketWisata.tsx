import { Box, Image, SkeletonCircle, SkeletonText, useToast } from "@chakra-ui/react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import image from "../images/detail_wisata/main_image.png";
import PaketWisataTitle from "../components/paket_wisata_detail/paket_wisata_title";
import BreadCrumb from "../components/breadcrumb";
import DeskripsiPaketWisata from "../components/paket_wisata_detail/paket_wisata_deskripsi";
import { PaketWisataType } from "../router/PaketWisataRouter";
import PaketWisataInfoPenting from "../components/paket_wisata_detail/paket_wisata_infopenting";
import PaketWisataFasilitas from "../components/paket_wisata_detail/paket_wisata_fasilitas";
import { useContext, useEffect, useState } from "react";
import WisataIdContext from "../context/WisataIdContext";
import axios from "axios";
import api from "../api/api";
import { SinglePaketWisataResponse, PaketWisatas } from "../response/paket_wisata";
import Rundown from "../components/paket_wisata_detail/paket_wisata_rundown";
import PesanPaketWisata from "../components/paket_wisata_detail/paket_wisata_pesan";

interface DetailPaketWisataProps{
    type: PaketWisataType
}

const DetailPaketWisata = ({type}: DetailPaketWisataProps) => {
    let showedElement: JSX.Element;
    let nonUnionType: string;
    const paketWisataContext = useContext(WisataIdContext)
    const [load, setLoad] = useState<boolean>(false);
    const [paketWisata, setPaketWisata] = useState<PaketWisatas>();
    const loadComplete = paketWisataContext.loadComplete;
    const toast = useToast();
    useEffect(() => {
        setLoad(true);
        const fetchData = async () => {
            try{
                const paketWisata = await api.get<SinglePaketWisataResponse>(`/paketwisata/get/paketwisata/${paketWisataContext.id}`);
                const data = paketWisata.data.data;
                if(data){
                    if(data.paket_wisata.tipePaketWisata === "OPEN"){
                        data.paket_wisata.tipePaketWisata = "Open";
                    } else {
                        data.paket_wisata.tipePaketWisata = "Private";
                    }
                }
                setPaketWisata(paketWisata.data.data?.paket_wisata as PaketWisatas)
            } catch(e){
                if(axios.isAxiosError<SinglePaketWisataResponse>(e)){
                    toast({
                        description: e.response?.data.message ?? "Kesalahan internal server",
                        position: "top-right",
                        isClosable: true,
                        duration: 3000,
                        status: "error",
                        title: "Error from server"
                    });
                }
            } finally{
                setLoad(false);
            }
        };

        fetchData();
    }, []);
    if(load){
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
    switch(type){
        case "deskripsi":
            showedElement = <DeskripsiPaketWisata paketWisata={paketWisata as PaketWisatas}/>
            nonUnionType = "deskripsi";
            break;
        case "infopenting":
            showedElement = <PaketWisataInfoPenting paketWisata={paketWisata as PaketWisatas}/>
            nonUnionType ="infopenting"
            break;
        case "fasilitas":
            showedElement = <PaketWisataFasilitas 
            paketWisata={paketWisata as PaketWisatas}/>
            nonUnionType = "fasilitas";
            break;
        case "pesanpaketwisata":
            showedElement = 
            <PesanPaketWisata paketWisata={paketWisata as PaketWisatas}/>
            nonUnionType="pesanpaketwisata";
            break;
        default:
            showedElement = <Rundown paketWisata={paketWisata as PaketWisatas}/>
    }
    return(
        <Box>
            <Navbar isAuthenticated={false} type="other" typeUser="user"/>
            {loadComplete ? 
                <Box width={{"lg" : "100%"}}>
                    <Box width={{"lg" : "100%"}}>
                        <Image 
                        src={paketWisata?.gambarCover ?? image}
                        width={{"lg" : "100%"}}
                        height={{"lg" : "50vh"}}
                        backgroundSize="cover"/>
                    </Box>
                    <PaketWisataTitle 
                    title={paketWisata?.nama ?? "-"}
                    namaAgen={paketWisata?.agenTravel.nama ?? "Anonim"}
                    kotaPenjemputan=""
                    provinsiPenjemputan={paketWisata?.lokasiPenjemputan ?? ""}
                    durasiPaketWisata={paketWisata?.durasiPaketWisataHari ?? 0}
                    tipePaketWisata={paketWisata?.tipePaketWisata as "Open" | "Private" ?? "Open"}/>
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
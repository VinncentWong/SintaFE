import { ButtonProps, Flex, FlexProps, Image, Text, TextProps } from "@chakra-ui/react";
import { getAgenTravel } from "../../util/auth_util";
import { fontFamily } from "../../style/font";
import menungguVerifikasi from "../../images/agen_travel_home/menungguverifikasi.png";
import warning from "../../images/agen_travel_home/warning.png"
import ButtonWithImage from "../button";
import beranda from "../../images/agen_travel_home/beranda.png";
import berandaPutih from "../../images/agen_travel_home/berandaputih.png";
import paketWisata from "../../images/agen_travel_home/paketwisata.png";
import paketWisataPutih from "../../images/agen_travel_home/paketwisataputih.png";
import portofolio from "../../images/agen_travel_home/portofolio.png";
import portofolioPutih from "../../images/agen_travel_home/portofolioputih.png";
import penjualanSaya from "../../images/agen_travel_home/penjualansaya.png";
import penjualanSayaPutih from "../../images/agen_travel_home/penjualansayaputih.png";
import pendapatanSaya from "../../images/agen_travel_home/pendapatansaya.png";
import pendapatanSayaPutih from "../../images/agen_travel_home/pendapatansayaputih.png";
import bankSaya from "../../images/agen_travel_home/banksaya.png";
import bankSayaPutih from "../../images/agen_travel_home/banksayaputih.png";
import profilSaya from "../../images/agen_travel_home/profilsaya.png";
import profilSayaPutih from "../../images/agen_travel_home/profilsayaputih.png";
import premiumSaya from "../../images/agen_travel_home/premiumsaya.png";
import premiumSayaPutih from "../../images/agen_travel_home/premiumsayaputih.png";
import keluar from "../../images/agen_travel_home/keluar.png";
import terverifikasi from "../../images/agen_travel_home/terverifikasi.png";
import nonpremium from "../../images/agen_travel_home/nonpremium.png";
import premium from "../../images/agen_travel_home/premium.png";
import { TipeAgenTravelPage } from "../../pages/AgenTravelHomePage";
import { useNavigate } from "react-router-dom";

const StatusMessage = ({image, additionalProps, text}: {image: string, additionalProps: FlexProps, text: string}) => {
    return(
        <Flex {...additionalProps}>
            <Image src={image} width={{"lg" : "10%"}} maxWidth="100%"/>
            <Text fontFamily={fontFamily} fontSize={{"lg" : "1.25rem"}} fontWeight={600}>
                {text}
            </Text>
        </Flex>
    )
}

const DropDown = ({type}: {type: TipeAgenTravelPage}) => {
    const agenTravel = getAgenTravel();
    let showedStatus: JSX.Element[] = [];
    if(!agenTravel.sudahLengkapiProfil){
        showedStatus.push(<StatusMessage image={warning} text="Lengkapi Profil Anda" additionalProps={{color: "#EF473A", gap: "0.5rem", width: {"lg" : "100%"}}}/>);
    } else {
        if(agenTravel.isVerified){
            showedStatus.push(<StatusMessage image={terverifikasi} text="Terverifikasi" additionalProps={{color: "#0053AD", gap: "0.5rem", width: {"lg" : "100%"}}}/>);
        } else {
            showedStatus.push(<StatusMessage image={menungguVerifikasi} text="Menunggu Verifikasi" additionalProps={{color: "#FFA826", gap: "0.5rem", width: {"lg" : "100%"}}}/>);
        }
        if(!agenTravel.sudahIsiDetailBank){
            showedStatus.push(<StatusMessage image={warning} text="Lengkapi Bank/E-Walletmu" additionalProps={{color: "#EF473A", gap: "0.5rem", width: {"lg" : "100%"}}}/>);
        }
        if(agenTravel.isPremium){
            showedStatus.push(<StatusMessage image={premium} text="Akun Premium" additionalProps={{color: "#00B87B", gap: "0.5rem", width: {"lg" : "100%"}}}/>);
        } else {
            showedStatus.push(<StatusMessage image={nonpremium} text="Akun Non-Premium" additionalProps={{color: "#ABBED1", gap: "0.5rem", width: {"lg" : "100%"}}}/>);
        }
    }
    const buttonProps: ButtonProps = {
        width: "100%",
        _hover: {bg: "undefined"}
    }
    const textProps: TextProps = {
        fontFamily: fontFamily,
        fontSize: {"lg" : "1.25rem"},
    }
    const navigate = useNavigate();
    return(
        <Flex
        border="1px solid #E0E6ED"
        borderRadius="8px"
        position="relative"
        top={{"lg" : "8rem"}}
        width={{"lg" : "25%"}}
        marginLeft={{"lg" : "3rem"}}
        flexDir="column"
        gap={{"lg" : "2rem"}}>
            <Flex flexDir="column" gap={{"lg" : "0.5rem"}} marginLeft={{"lg" : "1.5rem"}} marginY={{"lg" : "1rem"}}>
                <Text
                fontFamily={fontFamily}
                color="#212121"
                fontSize={{"lg" : "1.75rem"}}>
                    {agenTravel.namaBadanUsaha}
                </Text>
                {showedStatus}
            </Flex>
            <Flex flexDir="column" gap={"0.5rem"}>
                <ButtonWithImage textPositionProps={{gap: {"lg" : "1rem"}, width: {"lg" : "100%"}}} image={type == "home"? berandaPutih : beranda} textContent="Beranda" buttonProps={{...buttonProps, backgroundColor: type == "home"? "#0053AD" : "white", onClick: () => {navigate("/agentravel/home")}}} textProps={{...textProps, color: type == "home" ? "white" : "black"}}/>
                <ButtonWithImage textPositionProps={{gap: {"lg" : "1rem"}, width: {"lg" : "100%"}}} image={type == "paketwisata"? paketWisataPutih : paketWisata} textContent="Paket Wisata" buttonProps={{...buttonProps, paddingLeft: undefined, paddingRight: {"lg" : "2rem"},backgroundColor: type == "paketwisata"? "#0053AD" : "white", onClick: () => {navigate("/agentravel/paketwisata")}}} textProps={{...textProps, color: type == "paketwisata" ? "white" : "black"}}/>
                <ButtonWithImage textPositionProps={{gap: {"lg" : "1rem"}, width: {"lg" : "100%"}}} image={type == "portofolio"? portofolioPutih : portofolio} textContent="Portofolio" buttonProps={{...buttonProps, backgroundColor: type == "portofolio"? "#0053AD" : "white", onClick: () => {navigate("/agentravel/portofolio")}}} textProps={{...textProps, color: type == "portofolio" ? "white" : "black"}}/>
                <ButtonWithImage textPositionProps={{gap: {"lg" : "1rem"}, width: {"lg" : "100%"}}} image={type == "penjualan"? penjualanSayaPutih : penjualanSaya} textContent="Penjualan saya" buttonProps={{...buttonProps, backgroundColor: type == "penjualan"? "#0053AD" : "white", onClick: () => {navigate("/agentravel/penjualan")}}} textProps={{...textProps, color: type == "penjualan" ? "white" : "black"}}/>
                <ButtonWithImage textPositionProps={{gap: {"lg" : "1rem"}, width: {"lg" : "100%"}}} image={type == "pendapatan"? pendapatanSayaPutih : pendapatanSaya} textContent="Pendapatan saya" buttonProps={{...buttonProps, backgroundColor: type == "pendapatan"? "#0053AD" : "white", onClick: () => {navigate("/agentravel/pendapatan")}}} textProps={{...textProps, color: type == "pendapatan" ? "white" : "black"}}/>
                <ButtonWithImage textPositionProps={{gap: {"lg" : "1rem"}, width: {"lg" : "100%"}}} image={type == "bank"? bankSayaPutih : bankSaya} textContent="Bank/E-Wallet saya" buttonProps={{...buttonProps, backgroundColor: type == "bank"? "#0053AD" : "white", onClick: () => {navigate("/agentravel/bank")}}} textProps={{...textProps, color: type == "bank" ? "white" : "black"}}/>
                <ButtonWithImage textPositionProps={{gap: {"lg" : "1rem"}, width: {"lg" : "100%"}}} image={type == "profil"? profilSayaPutih : profilSaya} textContent="Profil & Akun saya" buttonProps={{...buttonProps, backgroundColor: type == "profil"? "#0053AD" : "white", onClick: () => {navigate("/agentravel/profil")}}} textProps={{...textProps, color: type == "profil" ? "white" : "black"}}/>
                <ButtonWithImage textPositionProps={{gap: {"lg" : "1rem"}, width: {"lg" : "100%"}}} image={type == "premium"? premiumSayaPutih : premiumSaya} textContent="Premium" buttonProps={{...buttonProps, backgroundColor: type == "premium"? "#0053AD" : "white", onClick: () => {navigate("/agentravel/premium")}}} textProps={{...textProps, color: type == "premium" ? "white" : "black"}}/>
                <ButtonWithImage textPositionProps={{gap: {"lg" : "1rem"}, width: {"lg" : "100%"}}} image={keluar} textContent="Keluar" buttonProps={{...buttonProps, backgroundColor: "white", onClick: () => {localStorage.removeItem("agenTravel"); navigate("/agentravel/login")}}} textProps={{...textProps, color: "black"}}/>
            </Flex>
        </Flex>
    );
};

export default DropDown;
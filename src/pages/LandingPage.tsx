import { useState } from "react";
import DestinationCard, { DestinationCardProps } from "../components/card";
import Footer from "../components/footer";
import DestinationGroup from "../components/group";
import Header from "../components/header";
import Navbar from "../components/navbar";
import WhySinta from "../components/whysinta/whysinta";
import LandingContext from "../context/LandingContext";
import auth_util from "../util/auth_util";
import cardData from "../data/card_paketwisata.json";
import gambar from "../images/sample/destination1.png";
import { PaketWisata } from "../response/paket_wisata";

const LandingPage = () => {

    const arrDestinationCard = cardData.paket_wisata.map((d: PaketWisata) => {
        return <DestinationCard
        destinationCity={d.kota}
        destinationName={d.nama}
        destinationPrice={d.harga}
        destinationProvince={d.provinsi}
        imageLink={gambar}
        typeDestination={d.lama_paket_wisata + " Trip"}
        width="33%"
        height="23%"
        />
    });

    const [position, setPosition] = useState<number>(0);
    window.addEventListener("scroll", (e: Event) => {
        setPosition(window.scrollY);
    });

    return(
        <LandingContext.Provider value={{
            position: position,
        }}>
            <Navbar isAuthenticated={auth_util()} type="landing"/>
            <Header type="landing"/>
            <DestinationGroup 
            title="Pilihan destinasi menarik di dalam negeri!"
            subtitle="Yuk, temukan destinasi favoritmu! Ada banyak pilihan paket wisata menantimu 🤗"
            data={arrDestinationCard}/>
            <DestinationGroup 
            title="Pilihan destinasi menarik di luar negeri!!"
            subtitle="Yuk, temukan destinasi favoritmu! Ada banyak pilihan paket wisata menantimu 🤗"
            data={arrDestinationCard}/>
            <DestinationGroup 
            title="Pilihan destinasi menarik under 500k 😱"
            subtitle="Cocok buat kamu yang punya budget terbatas, tapi mau liburan yang seru!"
            data={arrDestinationCard}/>
            <DestinationGroup 
            title="Include semuanya tinggal bawa badan"
            subtitle="Gaperlu repot mikirin biaya lainnya, cukup bawa badan and enjoy ur holiday 🤩"
            data={arrDestinationCard}/>
            <WhySinta/>
            <Footer/>
        </LandingContext.Provider>
    )
};

export default LandingPage;
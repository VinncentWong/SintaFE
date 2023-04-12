import { useState } from "react";
import DestinationCard, { DestinationCardProps } from "../components/card";
import Footer from "../components/footer";
import DestinationGroup from "../components/group";
import Header from "../components/header";
import Navbar from "../components/navbar";
import WhySinta from "../components/whysinta/whysinta";
import LandingContext from "../context/LandingContext";
import sample from "../images/sample/destination1.png";

const data: DestinationCardProps = {
    destinationName : "Paket Wisata Bali Full Trip",
    destinationCity: "Batu",
    destinationPrice: 192000,
    destinationProvince: "Jawa Timur",
    imageLink: sample,
    typeDestination: "1D Trip"
}

const arr = [
    <DestinationCard 
    destinationCity={data.destinationCity}
    destinationName={data.destinationName}
    destinationPrice={data.destinationPrice}
    destinationProvince={data.destinationProvince}
    imageLink={data.imageLink}
    typeDestination={data.typeDestination}/>,
    <DestinationCard 
    destinationCity={data.destinationCity}
    destinationName={data.destinationName}
    destinationPrice={data.destinationPrice}
    destinationProvince={data.destinationProvince}
    imageLink={data.imageLink}
    typeDestination={data.typeDestination}/>,
    <DestinationCard 
    destinationCity={data.destinationCity}
    destinationName={data.destinationName}
    destinationPrice={data.destinationPrice}
    destinationProvince={data.destinationProvince}
    imageLink={data.imageLink}
    typeDestination={data.typeDestination}/>,
    <DestinationCard 
    destinationCity={data.destinationCity}
    destinationName={data.destinationName}
    destinationPrice={data.destinationPrice}
    destinationProvince={data.destinationProvince}
    imageLink={data.imageLink}
    typeDestination={data.typeDestination}/>
]

const LandingPage = () => {

    const [position, setPosition] = useState<number>(0);
    window.addEventListener("scroll", (e: Event) => {
        setPosition(window.scrollY);
    });

    return(
        <LandingContext.Provider value={{
            position: position,
        }}>
            <Navbar isAuthenticated={false} type="landing"/>
            <Header type="landing"/>
            <DestinationGroup 
            title="Pilihan destinasi menarik di dalam negeri!"
            subtitle="Yuk, temukan destinasi favoritmu! Ada banyak pilihan paket wisata menantimu 🤗"
            data={arr}/>
            <DestinationGroup 
            title="Pilihan destinasi menarik di luar negeri!!"
            subtitle="Yuk, temukan destinasi favoritmu! Ada banyak pilihan paket wisata menantimu 🤗"
            data={arr}/>
            <DestinationGroup 
            title="Pilihan destinasi menarik under 500k 😱"
            subtitle="Cocok buat kamu yang punya budget terbatas, tapi mau liburan yang seru!"
            data={arr}/>
            <DestinationGroup 
            title="Include semuanya tinggal bawa badan"
            subtitle="Gaperlu repot mikirin biaya lainnya, cukup bawa badan and enjoy ur holiday 🤩"
            data={arr}/>
            <WhySinta/>
            <Footer/>
        </LandingContext.Provider>
    )
};

export default LandingPage;
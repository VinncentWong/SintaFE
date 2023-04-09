import DestinationCard, { DestinationCardProps } from "../components/card";
import DestinationGroup from "../components/group";
import Header from "../components/header";
import Navbar from "../components/navbar";
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
    return(
        <>
            <Navbar isAuthenticated={false}/>
            <Header/>
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
        </>
    )
};

export default LandingPage;
import { useEffect, useState } from "react";
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
import { PaketWisata, PaketWisataResponse, PaketWisatas } from "../response/paket_wisata";
import randomNumber from "../util/random";
import api from "../api/api";
import axios from "axios";
import { Box, SkeletonCircle, SkeletonText, useToast } from "@chakra-ui/react";

const LandingPage = () => {

    const [load, setLoad] = useState<boolean>(false);
    const [arrPaketWisataDalamNegeri, setArrPaketWisataDalamNegeri] = useState<JSX.Element[]>([]);
    const [arrPaketWisataLuarNegeri, setArrPaketWisataLuarNegeri] = useState<JSX.Element[]>([]);
    const [arrPaketWisataIncludeAll, setArrPaketWisataIncludeAll] = useState<JSX.Element[]>([]);
    const toast = useToast();

    useEffect(() => {
        setLoad(true);
        const fetchData = async () => {
            try{
                const paketWisataDalamNegeri = await api.get<PaketWisataResponse>(`/paketwisata/get/domain/dalamnegeri`);
                const paketWisataLuarNegeri = await api.get<PaketWisataResponse>(`/paketwisata/get/domain/luarnegeri`);
                const paketWisataIncludeSemua = await api.get<PaketWisataResponse>(`/paketwisata/get/kelengkapan/all`);
                const dataDalamNegeri = paketWisataDalamNegeri.data.data;
                const dataLuarNegeri = paketWisataLuarNegeri.data.data;
                const dataIncludeSemua = paketWisataIncludeSemua.data.data;
                if(dataDalamNegeri){
                    try{
                        const arrDalamNegeri = dataDalamNegeri.paket_wisata.map((v) => {
                            if(v.hargaPaketWisata[0]){
                                return <DestinationCard id={v.id} destinationCity="" destinationName={v.nama} destinationPrice={v.hargaPaketWisata[0].harga} destinationProvince={v.lokasiPenjemputan} height="100%" imageLink={v.gambarCover} typeDestination={v.durasiPaketWisataHari + "D/" + v.durasiPaketWisataMalam + "N"} width="25%"/>
                            }
                        });
                        const filter: JSX.Element[] = [];
                        for(let i = 0 ; i < arrDalamNegeri.length ; i++){
                            if(i == 4){
                                break;
                            }
                            const currentArr = arrDalamNegeri[i];
                            if(currentArr){
                                filter.push(currentArr);
                            }
                        }
                        setArrPaketWisataDalamNegeri(filter as JSX.Element[]);
                    } catch(e){
                        console.log(`e = ${e}`);
                    }
                }
                if(dataLuarNegeri){
                    const arrLuarNegeri = dataLuarNegeri.paket_wisata.map((v) => {
                        if(v){
                            if(v.hargaPaketWisata[0]){
                                return <DestinationCard id={v.id} destinationCity="" destinationName={v.nama} destinationPrice={v.hargaPaketWisata[0].harga} destinationProvince={v.lokasiPenjemputan} height="100%" imageLink={v.gambarCover} typeDestination={v.durasiPaketWisataHari + "D/" + v.durasiPaketWisataMalam + "N"} width="25%"/> 
                            }
                        }
                    }); 
                    const filter: JSX.Element[] = [];
                        for(let i = 0 ; i < arrLuarNegeri.length ; i++){
                            if(i == 4){
                                break;
                            }
                            const currentArr = arrLuarNegeri[i];
                            if(currentArr){
                                filter.push(currentArr);
                            }
                        }
                    setArrPaketWisataLuarNegeri(filter as JSX.Element[]);
                }
                if(dataIncludeSemua){
                    const arrIncludeSemua = dataIncludeSemua.paket_wisata.map((v) => {
                        console.log(`v.id include semua = ${v.id}`);
                        if(v){
                            if(v.hargaPaketWisata[0]){
                                return <DestinationCard id={v.id} destinationCity="" destinationName={v.nama} destinationPrice={v.hargaPaketWisata[0].harga} destinationProvince={v.lokasiPenjemputan} height="100%" imageLink={v.gambarCover} typeDestination={v.durasiPaketWisataHari + "D/" + v.durasiPaketWisataMalam + "N"} width="25%"/>
                            }
                        }
                    });
                    const filter: JSX.Element[] = [];
                        for(let i = 0 ; i < arrIncludeSemua.length ; i++){
                            if(i == 4){
                                break;
                            }
                            const currentArr = arrIncludeSemua[i];
                            if(currentArr){
                                filter.push(currentArr);
                            }
                        }
                    setArrPaketWisataIncludeAll(filter as JSX.Element[]);
                }
                toast({
                    isClosable: true,
                    description: "Berhasil mendapatkan data paket wisata dari server",
                    title: "Sukses",
                    status: "success",
                    duration: 3000,
                    position: "top-right"
                });
            } catch(e){
                if(axios.isAxiosError<PaketWisataResponse>(e)){
                    toast({
                        isClosable: true,
                        description: e.response?.data.message ?? "",
                        title: "Error from server",
                        status: "error",
                        duration: 3000,
                        position: "top-right"
                    });
                }
            } finally{
                setLoad(false);
            }

        };
        fetchData();
    }, []);

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
        key={randomNumber()}
        />
    });

    const [position, setPosition] = useState<number>(0);
    window.addEventListener("scroll", (e: Event) => {
        setPosition(window.scrollY);
    });

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
    return(
        <LandingContext.Provider value={{
            position: position,
        }}>
            <Navbar isAuthenticated={auth_util()} type="landing" typeUser="user"/>
            <Header type="landing"/>
            <DestinationGroup 
            title="Pilihan destinasi menarik di dalam negeri!"
            subtitle="Yuk, temukan destinasi favoritmu! Ada banyak pilihan paket wisata menantimu 🤗"
            data={arrPaketWisataDalamNegeri.slice(0,4)}/>
            <DestinationGroup 
            title="Pilihan destinasi menarik di luar negeri!!"
            subtitle="Yuk, temukan destinasi favoritmu! Ada banyak pilihan paket wisata menantimu 🤗"
            data={arrPaketWisataLuarNegeri.slice(0,4)}/>
            <DestinationGroup 
            title="Pilihan destinasi menarik under 500k 😱"
            subtitle="Cocok buat kamu yang punya budget terbatas, tapi mau liburan yang seru!"
            data={arrDestinationCard.slice(0,4)}/>
            <DestinationGroup 
            title="Include semuanya tinggal bawa badan"
            subtitle="Gaperlu repot mikirin biaya lainnya, cukup bawa badan and enjoy ur holiday 🤩"
            data={arrPaketWisataIncludeAll.slice(0,4)}/>
            <WhySinta/>
            <Footer/>
        </LandingContext.Provider>
    )
};

export default LandingPage;
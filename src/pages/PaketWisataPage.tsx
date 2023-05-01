import { Box, Button, Flex, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import auth_util from "../util/auth_util";
import Filter from "../components/filter";
import gambar from "../images/sample/destination1.png";
import data from "../data/card_paketwisata.json";
import DestinationCard from "../components/card";
import { useEffect, useState } from "react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import randomNumber from "../util/random";
import apiLokasi from "../api/api_lokasi";
import { KotaKabupaten, KotaKabupatenResponse, Provinsi, ProvinsiResponse } from "../response/lokasi";
import { fontFamily } from "../style/font";

const PaketWisataPage = () => {

    const [maxIndex, setMaxIndex] = useState<number>(0);
    const [provinsi, setProvinsi] = useState<Provinsi[]>([]);
    const [kabupatenKota, setKabupatenKota] = useState<KotaKabupaten[][]>([]);
    const [loadLokasiSelesai, setLoadLokasiSelesai] = useState<boolean>(false);
    const elements: JSX.Element[] = [];

    useEffect(() => {
        const fetchData = async () => {
            const tempProvinsi = await apiLokasi.get<ProvinsiResponse>("/provinsi");
            const listProvinsi: Provinsi[] = [];
            const listKabupatenKota: KotaKabupaten[][] = [];
            for(let p of tempProvinsi.data.provinsi){
                const tempKabupatenKota = await apiLokasi.get<KotaKabupatenResponse>(`/kota?id_provinsi=${p.id}`);
                listProvinsi.push(p);
                if(tempKabupatenKota.data.kota_kabupaten){
                    listKabupatenKota.push(tempKabupatenKota.data.kota_kabupaten);
                }
            }
            setProvinsi(listProvinsi);
            setKabupatenKota(listKabupatenKota);
            setLoadLokasiSelesai(true);
        }
        fetchData();
    }, []);

    for(let i = 0 ; i < data.paket_wisata.length ; i = i + 3){
        const arr = data.paket_wisata.slice(i, i + 3);
        const tempElements = arr.map((v) => {
            return(
            <DestinationCard
            destinationCity={v.kota}
            destinationName={v.nama}
            destinationPrice={v.harga}
            destinationProvince={v.provinsi}
            height="max-content"
            width="28%"
            imageLink={gambar}
            typeDestination={v.lama_paket_wisata + " Trip"}
            key={randomNumber()}
            />
            );
        });
        elements.push(
            <Flex
            width={{"lg" : "100%"}}
            gap="2rem"
            key={randomNumber()}>
                {tempElements}
            </Flex>
        );
    }
    const addMoreIndex = () => {
        setMaxIndex(maxIndex + 4);
    }
    if(loadLokasiSelesai){
        return(
            <Box>
            <Navbar isAuthenticated={auth_util()} type="other"/>
            <Carousel/>
            <Flex gap={{"lg" : "2rem"}} marginBottom={{"lg" : "2rem"}}>
                <Filter provinsi={provinsi} kabupatenKota={kabupatenKota}/>
                <Flex 
                flexDir='column'
                width={{"lg" : "80%"}}
                flexWrap={{"lg" : "wrap"}}
                gap={{"lg" : "2rem"}}
                height={{"lg" : "max-content"}}>
                    {elements.slice(0, maxIndex + 4)}
                    {maxIndex >= elements.length - 4? 
                    <></>
                    : 
                    <Flex justifyContent="center">
                        <Button backgroundColor="#0053AD" onClick={() => addMoreIndex()}>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{
                                "lg" : "0.875rem"
                            }}
                            color="#FCFCFC">Tampilkan lebih banyak</Text>    
                        </Button>    
                    </Flex>}
                </Flex>
            </Flex>
            <Footer/>
        </Box>
        );
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
        );
    }
};

export default PaketWisataPage;
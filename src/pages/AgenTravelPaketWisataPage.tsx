import { Box, Button, ButtonGroup, Flex, IconButton, Image, Input, Select, SkeletonCircle, SkeletonText, Text, useToast } from "@chakra-ui/react";
import { getAgenTravel, getJwtAgenTravel } from "../util/auth_util";
import { TipeAgenTravelPage } from "./AgenTravelHomePage";
import DropDown from "../components/dropdown";
import LengkapiProfil, { DashboardAgen, ArahkanPremium, LengkapiBank } from "../components/lengkapi_profil";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { PaketWisata, PaketWisataResponse, PaketWisatas } from "../response/paket_wisata";
import api from "../api/api";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import { fontFamily } from "../style/font";
import belumAdaPaketWisata from "../images/agen_travel_home/belum_ada_paket_wisata.png";
import InputSinta from "../components/input";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import MyEditor from "../components/editor/myeditor";
import axios from "axios";
import DestinationCard from "../components/card";

const AgenTravelPaketWisataPage = ({type}: {type: TipeAgenTravelPage}) => {
    const agenTravel = getAgenTravel();
    let showedElement: JSX.Element;

    const [tipePaketWisata, setTipePaketWisata] = useState<"OPEN" | "PRIVATE">("OPEN");
    const [paketWisatas, setPaketWisatas] = useState<PaketWisatas[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const [currentPosition, setCurrentPosition] = useState<1 | 2 | 3 | 4 | 5>(1);
    const [pageType, setPageType] = useState<"create" | "update">("create");
    const [paketWisata, setPaketWisata] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);
    const [kategoriWisata, setKategoriWisata] = useState<string>("");
    const [durasiPaketWisataHari, setDurasiPaketWisataHari] = useState<string>("");
    const [durasiPaketWisataMalam, setDurasiPaketWisataMalam] = useState<string>("");
    const [linkGroup, setLinkGroup] = useState<string>("-");
    const [lokasiPenjemputan, setLokasiPenjemputan] = useState<string>("");
    const [tanggalKeberangkatan, setTanggalKeberangkatan] = useState<string>("");
    const [tanggakKepulangan, setTanggalKepulangan] = useState<string>("");
    const [hargaDewasa, setHargaDewasa] = useState<string>("");
    const [kuotaDewasa, setKuotaDewasa] = useState<string>("");
    const [kuotaAnak, setKuotaAnak] = useState<string>("");
    const [hargaAnak, setHargaAnak] = useState<string>("");
    const [kuotaBayi, setKuotaBayi] = useState<string>("");
    const [hargaBayi, setHargaBayi] = useState<string>("");
    const [kelengkapan, setKelengkapan] = useState<string>("");
    const [hargaTerendah, setHargaTerendah] = useState<string>("");
    const [hargaTertinggi, setHargaTertinggi] = useState<string>("");
    const [breadCrumbIndex, setBreadCrumbIndex] = useState<1 | 2 | 3 | 4>(1);
    const [deskripsi, setDeskripsi] = useState<string>("");
    const [infoPenting, setInfoPenting] = useState<string>("");
    const [rundown, setRundown] = useState<string>("");
    const [fasilitas, setFasilitas] = useState<string>("");
    const [loadPost, setLoadPost] = useState<boolean>(false);
    const toast = useToast();

    useEffect(() => {
        setLoad(true);
        const fetchData = async () => {
            const paketWisata = await api.get<PaketWisataResponse>(`/paketwisata/get/agentravel/${agenTravel.id}`);
            setPaketWisatas(paketWisata.data.data?.paket_wisata as PaketWisatas[]);
            setLoad(false);
        };

        fetchData();
    }, []);

    const handleSubmit = () => {
        setLoadPost(true);
        const fetchData = async () => {
            let dto = {};
            if(tipePaketWisata === "OPEN"){
                dto = {
                    "tipePaketWisata" : tipePaketWisata,
                    "nama" : paketWisata,
                    "domain" : kategoriWisata,
                    "durasiPaketWisataHari" : durasiPaketWisataHari,
                    "durasiPaketWisataMalam" : durasiPaketWisataMalam,
                    "linkGroup" : linkGroup,
                    "lokasiPenjemputan" : lokasiPenjemputan,
                    "detailTanggal" : [
                        {
                            "tanggalMulai" : tanggalKeberangkatan,
                            "tanggalPulang" : tanggakKepulangan
                        }
                    ],
                    "hargaPaketWisata" : [
                        {
                            "tipeOrang" : "Dewasa",
                            "harga" : hargaDewasa,
                            "kuota" : kuotaDewasa,
                        },
                        {
                            "tipeOrang" : "Anak",
                            "harga" : hargaAnak,
                            "kuota" : kuotaAnak
                        },
                        {
                            "tipeOrang" : "Bayi",
                            "harga" : hargaBayi,
                            "kuota" : kuotaBayi
                        }
                    ],
                    "jenisKelengkapan" : kelengkapan,
                    "deskripsi" : deskripsi,
                    "infoPenting" : infoPenting,
                    "rundown" : rundown,
                    "fasilitas" : fasilitas,
                    "infoHarga" : "-"
                };
            } else {
                dto = {
                    "tipePaketWisata" : tipePaketWisata,
                    "nama" : paketWisata,
                    "domain" : kategoriWisata,
                    "durasiPaketWisataHari" : durasiPaketWisataHari,
                    "durasiPaketWisataMalam" : durasiPaketWisataMalam,
                    "linkGroup" : linkGroup,
                    "lokasiPenjemputan" : lokasiPenjemputan,
                    "detailTanggal" : [
                        {
                            "tanggalMulai" : tanggalKeberangkatan,
                            "tanggalPulang" : tanggakKepulangan
                        }
                    ],
                    "hargaPaketWisata" : [
                        {
                            "tipeOrang" : "Dewasa",
                            "harga" : hargaTertinggi,
                            "kuota" : hargaTerendah,
                        },
                        {
                            "tipeOrang" : "Anak",
                            "harga" : hargaTertinggi,
                            "kuota" : hargaTerendah,
                        },
                        {
                            "tipeOrang" : "Bayi",
                            "harga" : hargaTertinggi,
                            "kuota" : hargaTerendah,
                        }
                    ],
                    "jenisKelengkapan" : kelengkapan,
                    "deskripsi" : deskripsi,
                    "infoPenting" : infoPenting,
                    "rundown" : rundown,
                    "fasilitas" : fasilitas,
                    "infoHarga" : "-"
                };
            }
            const blob = new Blob([JSON.stringify(dto)], {type: "application/json"});
            const formData = new FormData();
            formData.append("dto", blob);
            formData.append("file", file as File);
            try{
                await api.post<PaketWisataResponse>("/paketwisata/create", formData, {
                    headers: {
                        "Content-Type" : "multipart/form-data",
                        "Authorization" : `Bearer ${getJwtAgenTravel()}`
                    }
                });
                toast({
                    isClosable: true,
                    description: "Sukses menyimpan paket wisata",
                    status: "success",
                    duration: 2000,
                    title: "Sukses",
                    position: "top-right"
                });
                setTimeout(() => {
                    const location = window.location;
                    location.reload();
                }, 3000);
            } catch(e){
                if(axios.isAxiosError<PaketWisataResponse>(e)){
                    toast({
                        isClosable: true,
                        description: e.response?.data.message ?? "Kesalahan Internal Server",
                        status: "error",
                        duration: 2000,
                        title: "Error from server",
                        position: "top-right"
                    });
                }
            } finally{
                setLoadPost(false);
            }
        };

        fetchData();
    };

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
    } else {
        if(currentPosition === 1){
            if(!agenTravel.sudahLengkapiProfil){
                showedElement = 
                <Box>
                    <LengkapiProfil props={{
                         flexDir: "column",
                         position: "relative",
                         bottom: "31rem",
                         left: "31rem",
                         gap: {"lg" : "1rem"}
                    }}/>
                    <ArahkanPremium props={{
                        width: {"lg" : "60%"},
                        borderRadius: "8px",
                        border: "1px solid #E0E6ED",
                        position: "relative",
                        bottom: "28rem",
                        left: "31rem",
                        gap: {"lg" : "1rem"},
                        paddingX: {"lg" : "5rem"},
                        paddingY: {"lg" : "2rem"},
                    }}/>
                </Box>;
            } else {
                if(!agenTravel.sudahIsiDetailBank){
                    showedElement = 
                    <Box>
                        <LengkapiBank props={{
                            flexDir: "column",
                            position: "relative",
                            bottom: "31rem",
                            left: "31rem",
                            gap: {"lg" : "1rem"}
                        }}/>
                        <ArahkanPremium
                        props={{
                            width: {"lg" : "60%"},
                            borderRadius: "8px",
                            border: "1px solid #E0E6ED",
                            position: "relative",
                            bottom: "28rem",
                            left: "31rem",
                            gap: {"lg" : "1rem"},
                            paddingX: {"lg" : "5rem"},
                            paddingY: {"lg" : "2rem"},
                        }}/>;
                    </Box>
                } else {
                    if(paketWisatas.length == 0){
                        showedElement = 
                        <Flex flexDir="column" position="relative" bottom="31rem" left="31rem">
                            <ButtonGroup marginY={{"lg" : "2rem"}}>
                                <IconButton icon={<SearchIcon/>} aria-label='Search paket wisata' _hover={{backgroundColor: undefined}}/>
                                <Input type="text" border="1px solid #ABBED1" borderRadius="8px" placeholder="Temukan paket wisata anda disini" width={{"lg" : "50%"}}/>
                            </ButtonGroup>
                            <Text 
                            fontFamily={fontFamily}
                            fontSize="1.75rem"
                            fontWeight={600}>
                                Paket Wisata
                            </Text>
                            <Flex flexDir="column" width={{"lg" : "50%"}}>
                                <Image alignSelf="center" width={{"lg" : "60%"}} src={belumAdaPaketWisata}/>
                                <Flex flexDir="column" gap="1rem">
                                    <Text 
                                    fontFamily={fontFamily}
                                    fontSize="1.25rem"
                                    fontWeight={600}
                                    alignSelf="center">
                                        Belum Ada Paket Wisata
                                    </Text>
                                    <Text 
                                    fontSize={{"lg" : "1.125rem"}}
                                    fontWeight={400}
                                    color="#717171"
                                    alignSelf="center">
                                        Saat ini anda belum mempublish paket trip sama sekali :(
                                    </Text>
                                    <Button
                                    backgroundColor="#0053AD"
                                    borderRadius="50px"
                                    width={{"lg" : "50%"}}
                                    alignSelf="center"
                                    _hover={{backgroundColor: undefined}}
                                    onClick={() => {setCurrentPosition(2)}}>
                                        <Text
                                        fontSize={{"lg" : "0.875rem"}}
                                        fontWeight={600}
                                        color="white">
                                            Publish Sekarang <ChevronRightIcon color="white"/>
                                        </Text>
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    } else {
                        showedElement = 
                        <Flex flexDir="column" position="relative" bottom="31rem" left="31rem" width={{"lg" : "80%"}}>
                            <ButtonGroup marginY={{"lg" : "2rem"}}>
                                <IconButton icon={<SearchIcon/>} aria-label='Search paket wisata' _hover={{backgroundColor: undefined}}/>
                                <Input type="text" border="1px solid #ABBED1" borderRadius="8px" placeholder="Temukan paket wisata anda disini" width={{"lg" : "50%"}}/>
                            </ButtonGroup>
                            <Flex width={{"lg" : "80%"}} flexDir="row" gap={{"lg" : "25rem"}} flexWrap="wrap">
                                <Text 
                                fontFamily={fontFamily}
                                fontSize="1.75rem"
                                fontWeight={600}>
                                    Paket Wisata
                                </Text>
                                <Box>
                                    <Button onClick={() => {setCurrentPosition(2)}} _hover={{backgroundColor: undefined}} backgroundColor="#0053AD" borderRadius="8px">
                                        <Text
                                        fontFamily={fontFamily}
                                        fontSize={{"lg" : "0.875rem"}}
                                        color="white">
                                            Upload Paket Wisata
                                        </Text>
                                    </Button>
                                </Box>
                            </Flex>
                            <Flex width={{"lg" : "80%"}} gap={{"lg" : "3rem"}} flexWrap="wrap">
                                {paketWisatas.map((v) => {
                                    if(v.hargaPaketWisata[0]){
                                        return <DestinationCard destinationCity="" destinationName={v.nama} destinationPrice={v.hargaPaketWisata[0].harga} destinationProvince={v.lokasiPenjemputan} imageLink={v.gambarCover} height="100%" typeDestination={v.durasiPaketWisataHari + "D/" + v.durasiPaketWisataMalam + "N"} width="40%"/>
                                    }
                                }) as JSX.Element[]}
                            </Flex>
                        </Flex>;
                    }
                }
            }
            return(
                <Box paddingBottom={{"lg" : "2rem"}}>
                    <Navbar type="other" typeUser="agentravel"/>
                    <DropDown type={type}/>
                    {showedElement}
                </Box>
            );
        } else if(currentPosition === 2){
            showedElement =
            <Box width={{"lg" : "100%"}}>
                <Navbar type="other" typeUser="agentravel"/>
                <Flex
                flexDir="column"
                position="relative"
                top={{"lg" : "7rem"}}
                left={{"lg" : "5rem"}}
                gap={{"lg" : "2rem"}}>
                    <Flex>
                        <Button
                        backgroundColor="white"
                        _hover={{backgroundColor: undefined}}
                        onClick={() => {setCurrentPosition(1)}}>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "1.25rem"}}
                            fontWeight={400}>
                                <ChevronLeftIcon/> Keluar dari menu upload paket wisata
                            </Text>
                        </Button>
                    </Flex>
                    <Flex gap={{"lg" : "1rem"}} flexDir="column">
                        <Text
                        fontFamily={fontFamily}
                        fontSize={{"lg" : "1.25rem"}}
                        fontWeight={600}>
                            Silahkan pilih tipe trip paket wisata yang ingin anda jual
                        </Text>
                        <Select width={{"lg" : "80%"}} defaultValue="OPEN" placeholder="Pilih tipe trip paket wisatanya disini" onChange={(e) => {setTipePaketWisata(e.currentTarget.value as "OPEN" | "PRIVATE")}} value={tipePaketWisata}>
                            <option value="OPEN">Open Trip</option>
                            <option value="PRIVATE">Private Trip</option>
                        </Select>
                        <Button
                        backgroundColor="#0053AD"
                        _hover={{backgroundColor: undefined}}
                        width={{"lg" : "80%"}}
                        onClick={() => {setCurrentPosition(3); setPageType("create")}}
                        marginTop={{"lg" : "1rem"}}
                        _pressed={{backgroundColor: undefined}}>
                            <Text
                            fontWeight={400}
                            color="white"
                            fontFamily={fontFamily}>
                                Selanjutnya
                            </Text>
                        </Button>
                    </Flex>
                </Flex>
            </Box>
            return showedElement;
        } else if(currentPosition === 3){
                if(pageType === "create" && tipePaketWisata === "OPEN"){
                    return(
                        <Flex>
                            <Navbar type="other" typeUser="agentravel"/>
                            <Flex
                            position="relative"
                            left={{"lg" : "5rem"}}
                            top={{"lg" : "8rem"}}>
                                <Button backgroundColor={"#FCFCFC"} _hover={{backgroundColor: "undefined"}} onClick={() => {setCurrentPosition(2)}}>
                                    <Text
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "1.25rem"}}>
                                        <ChevronLeftIcon/> Kembali
                                    </Text>
                                </Button>
                            </Flex>
                            <Flex
                            position="relative"
                            top={{"lg" : "13rem"}}
                            flexDir="column"
                            width={{"lg" : "70%"}}>
                                <Text
                                fontFamily={fontFamily}
                                fontSize={{"lg" : "1.25rem"}}
                                fontWeight={600}>
                                    Silahkan lengkapi detail paket wisata yang ingin anda jual
                                </Text>
                                <InputSinta additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Nama Paket Wisata" notes="Batas maksimal nama paket wisata adalah 100 karakter" placeholder="Masukkan nama paket wisata anda disini" value={paketWisata} onChange={(e) => {setPaketWisata(e.currentTarget.value)}} width="100%" type="text"/>
                                <InputSinta additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Gambar Cover Paket Wisata" notes="Pastikan inputan gambar dalam format jpg, jpeg, atau png" placeholder="Belum ada gambar yang dipilih" width="100%" onChange={(e) => {
                                    const files = e.currentTarget.files && e.currentTarget.files[0];
                                    setFile(files as File);
                                }} type="file"/>
                                <Flex
                                flexDir="column"
                                gap={{"lg" : "0.5rem"}}>
                                    <Text fontFamily={fontFamily}>
                                        Kategori Wisata<Text as="span" color="#E12C1F">*</Text>
                                    </Text>
                                    <Select value={kategoriWisata} placeholder="Silahkan pilih kategori wisata anda termasuk trip dalam negeri atau trip luar negeri" onChange={(e) => {setKategoriWisata(e.currentTarget.value)}}>
                                        <option value="DALAM_NEGERI">Trip Dalam Negeri</option>
                                        <option value="LUAR_NEGERI">Trip Luar Negeri</option>
                                    </Select>
                                </Flex>
                                <InputSinta additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Durasi Paket Wisata (dalam hari)" notes="Pastikan anda hanya menginputkan angka. Contoh paket wisata anda berdurasi 3 hari, cukup masukkan angka 3 saja tanpa tulisan hari" placeholder="Masukkan lama durasi paket wisata anda dalam satuan hari disini" width="100%" value={durasiPaketWisataHari} onChange={(e) => {setDurasiPaketWisataHari(e.currentTarget.value)}} type="text"/>
                                <InputSinta additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Durasi Paket Wisata (dalam malam)" notes="Pastikan anda hanya menginputkan angka. Contoh paket wisata anda berdurasi 3 malam, cukup masukkan angka 3 saja tanpa tulisan malam" placeholder="Masukkan lama durasi paket wisata anda dalam satuan malam disini" width="100%" value={durasiPaketWisataMalam} onChange={(e) => {setDurasiPaketWisataMalam(e.currentTarget.value)}} type="text"/>
                                <InputSinta additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Link Group Untuk Pusat Informasi Traveler" notes="Gunakan link grup pada social media, pastikan link grup dapat digabung oleh traveler anda" placeholder="Masukkan link grup pada social media agar traveler dapat tergabung pada grup dan tidak ketinggalan informasi" width="100%" value={linkGroup} onChange={(e) => {setLinkGroup(e.currentTarget.value)}} type="text"/>
                                <InputSinta additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Lokasi Penjemputan" notes="" placeholder="Pilih lokasi penjemputan atau titik kumpul dari paket wisata yang anda jual" width="100%" value={lokasiPenjemputan} onChange={(e) => {setLokasiPenjemputan(e.currentTarget.value)}} type="text"/>
                                <Flex gap={{"lg" : "2rem"}}>
                                    <InputSinta additionalProps={{width: {"lg" : "40%"}, marginBottom: {"lg" : "0.5rem"}}} description="Opsi Tanggal Keberangkatan" notes="Pilih tanggal mulai paket wisata anda" width="100%" value={tanggalKeberangkatan} onChange={(e) => {setTanggalKeberangkatan(e.currentTarget.value)}} type="date" placeholder=""/>
                                    <InputSinta additionalProps={{width: {"lg" : "40%"}, marginBottom: {"lg" : "0.5rem"}}} description="Opsi Tanggal Kepulangan" notes="Pilih tanggal berakhir paket wisata anda" width="100%" value={tanggakKepulangan} onChange={(e) => {setTanggalKepulangan(e.currentTarget.value)}} type="date" placeholder=""/>
                                </Flex>
                                <Flex flexDir="column" width={{"lg" : "100%"}} gap={{"lg" : "1rem"}}>
                                    <Box width={{"lg" : "100%"}}>
                                        <Text
                                        fontFamily={fontFamily}
                                        fontSize={{"lg" : "#212121"}}
                                        marginY={{"lg" : "1rem"}}>
                                            Kategori Harga & Jumlah Untuk Dewasa<Text as="span" color="red">*</Text>
                                        </Text>
                                        <Flex width={{"lg" : "100%"}} gap={{"lg" : "8rem"}} height={{"lg" : "100%"}}>
                                            <Flex paddingX={{"lg" : "1rem"}} backgroundColor="#F5F5F5" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "30%"}} height={{"lg" : "45%"}}>
                                                <Text
                                                fontFamily={fontFamily}
                                                color="#717171"
                                                alignSelf="center">
                                                    Kategori: Dewasa
                                                </Text>
                                            </Flex>
                                            <Flex width={{"lg" : "35%"}} flexDir="column" gap={{"lg" : "0.5rem"}} height="100%">
                                                <Input height="45%" paddingY={{"lg" : "1rem"}} paddingX={{"lg" : "1rem"}} backgroundColor="#FCFCFC" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "100%"}} placeholder="Harga" onChange={(e) => {setHargaDewasa(e.currentTarget.value)}} value={hargaDewasa}/>
                                                <Text
                                                fontFamily={fontFamily}
                                                fontSize={{"lg" : "0.875rem"}}
                                                color="#89939E">
                                                    Masukkan hanya dalam bentuk angka. Contoh : 165000
                                                </Text>
                                            </Flex>
                                            <Flex width={{"lg" : "35%"}} flexDir="column" height="100%" gap={{"lg" : "0.5rem"}}>
                                                <Input paddingY={{"lg" : "1rem"}} height="45%" paddingX={{"lg" : "1rem"}} backgroundColor="#FCFCFC" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "100%"}} placeholder="Jumlah Kuota" onChange={(e) => {setKuotaDewasa(e.currentTarget.value)}} value={kuotaDewasa}/>
                                                <Text
                                                fontFamily={fontFamily}
                                                fontSize={{"lg" : "0.875rem"}}
                                                color="#89939E">
                                                    Masukkan hanya dalam bentuk angka. Contoh : 30
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                    <Box width={{"lg" : "100%"}}>
                                        <Text
                                        fontFamily={fontFamily}
                                        fontSize={{"lg" : "#212121"}}
                                        marginY={{"lg" : "1rem"}}>
                                            Kategori Harga & Jumlah Untuk Anak(optional)
                                        </Text>
                                        <Flex width={{"lg" : "100%"}} gap={{"lg" : "8rem"}} height={{"lg" : "100%"}}>
                                            <Flex paddingX={{"lg" : "1rem"}} backgroundColor="#F5F5F5" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "30%"}} height={{"lg" : "45%"}}>
                                                <Text
                                                fontFamily={fontFamily}
                                                color="#717171"
                                                alignSelf="center">
                                                    Kategori: Anak
                                                </Text>
                                            </Flex>
                                            <Flex width={{"lg" : "35%"}} flexDir="column" gap={{"lg" : "0.5rem"}} height="100%">
                                                <Input height="45%" paddingY={{"lg" : "1rem"}} paddingX={{"lg" : "1rem"}} backgroundColor="#FCFCFC" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "100%"}} placeholder="Harga" onChange={(e) => {setHargaAnak(e.currentTarget.value)}} value={hargaAnak}/>
                                                <Text
                                                fontFamily={fontFamily}
                                                fontSize={{"lg" : "0.875rem"}}
                                                color="#89939E">
                                                    Masukkan hanya dalam bentuk angka. Contoh : 165000
                                                </Text>
                                            </Flex>
                                            <Flex width={{"lg" : "35%"}} flexDir="column" height="100%" gap={{"lg" : "0.5rem"}}>
                                                <Input paddingY={{"lg" : "1rem"}} height="45%" paddingX={{"lg" : "1rem"}} backgroundColor="#FCFCFC" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "100%"}} placeholder="Kuota" onChange={(e) => {setKuotaAnak(e.currentTarget.value)}} value={kuotaAnak}/>
                                                <Text
                                                fontFamily={fontFamily}
                                                fontSize={{"lg" : "0.875rem"}}
                                                color="#89939E">
                                                    Masukkan hanya dalam bentuk angka. Contoh : 30
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                    <Box width={{"lg" : "100%"}}>
                                        <Text
                                        fontFamily={fontFamily}
                                        fontSize={{"lg" : "#212121"}}
                                        marginY={{"lg" : "1rem"}}>
                                            Kategori Harga & Jumlah Untuk Bayi(optional)
                                        </Text>
                                        <Flex width={{"lg" : "100%"}} gap={{"lg" : "8rem"}} height={{"lg" : "100%"}}>
                                            <Flex paddingX={{"lg" : "1rem"}} backgroundColor="#F5F5F5" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "30%"}} height={{"lg" : "45%"}}>
                                                <Text
                                                fontFamily={fontFamily}
                                                color="#717171"
                                                alignSelf="center">
                                                    Kategori: Bayi
                                                </Text>
                                            </Flex>
                                            <Flex width={{"lg" : "35%"}} flexDir="column" gap={{"lg" : "0.5rem"}} height="100%">
                                                <Input height="45%" paddingY={{"lg" : "1rem"}} paddingX={{"lg" : "1rem"}} backgroundColor="#FCFCFC" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "100%"}} placeholder="Harga" onChange={(e) => {setHargaBayi(e.currentTarget.value)}} value={hargaBayi}/>
                                                <Text
                                                fontFamily={fontFamily}
                                                fontSize={{"lg" : "0.875rem"}}
                                                color="#89939E">
                                                    Masukkan hanya dalam bentuk angka. Contoh : 165000
                                                </Text>
                                            </Flex>
                                            <Flex width={{"lg" : "35%"}} flexDir="column" height="100%" gap={{"lg" : "0.5rem"}}>
                                                <Input paddingY={{"lg" : "1rem"}} height="45%" paddingX={{"lg" : "1rem"}} backgroundColor="#FCFCFC" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "100%"}} placeholder="Kuota" onChange={(e) => {setKuotaBayi(e.currentTarget.value)}} value={kuotaBayi}/>
                                                <Text
                                                fontFamily={fontFamily}
                                                fontSize={{"lg" : "0.875rem"}}
                                                color="#89939E">
                                                    Masukkan hanya dalam bentuk angka. Contoh : 30
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                </Flex>
                                <Flex
                                flexDir="column"
                                gap={{"lg" : "0.5rem"}}
                                marginY={{"lg" : "1rem"}}>
                                    <Text fontFamily={fontFamily}>
                                    Kelengkapan Fasilitas Pada Paket Wisata<Text as="span" color="#E12C1F">*</Text>
                                    </Text>
                                    <Select value={kelengkapan} placeholder="Silahkan pilih apakah fasilitas pada paket wisata anda sudah include semuanya atau ada beberapa exclude" onChange={(e) => {setKelengkapan(e.currentTarget.value)}}>
                                        <option value="ALL">Sudah include semuanya</option>
                                        <option value="EXCLUDE">Ada exclude beberapa</option>
                                    </Select>
                                    <Text
                                    fontFamily={fontFamily}
                                    color="#89939E"
                                    fontSize="0.875rem">
                                    Pilih salah satu tipe kelengkapan fasilitas pada paket wisata anda
                                    </Text>
                                </Flex>
                                <Button onClick={() => {setCurrentPosition(4)}} marginY={{"lg" : "1rem"}} backgroundColor="#0053AD" borderRadius="8px" _hover={{backgroundColor: undefined}}>
                                    <Text 
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "0.875rem"}}
                                    color="white">
                                        Selanjutnya
                                    </Text>
                                </Button>
                            </Flex>
                        </Flex>
                    );
            } else {
                return(
                    <Flex
                    flexDir="column">
                        <Navbar type="other" typeUser="agentravel"/>
                        <Flex
                        position="relative"
                        top={{"lg" : "7rem"}}
                        left={{"lg" : "3rem"}}
                        flexDir="column">
                            <Flex>
                                <Button
                                onClick={() => {setCurrentPosition(2)}}
                                backgroundColor="white"
                                _hover={{backgroundColor: undefined}}>
                                    <Text
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "1.25rem"}}>
                                        <ChevronLeftIcon/> Kembali
                                    </Text>
                                </Button>
                            </Flex>
                            <Flex flexDir="column">
                                <InputSinta description="Nama Paket Wisata" notes="Batas maksimal nama paket wisata adalah 100 karakter (0/100)" placeholder="Masukkan nama paket wisata anda disini" width="90%" value={paketWisata} onChange={(e) => {setPaketWisata(e.currentTarget.value)}} type="text"/>
                                <InputSinta description="Gambar Cover Paket Wisata" notes="Pastikan inputan gambar dalam format jpg, jpeg, atau png" placeholder="" width="90%" onChange={(e) => {
                                    const files = e.currentTarget.files && e.currentTarget.files[0];
                                    setFile(files as File);
                                }} type="file"/>
                                <Flex
                                flexDir="column"
                                gap={{"lg" : "0.5rem"}}>
                                    <Text fontFamily={fontFamily}>
                                        Kategori Wisata<Text as="span" color="#E12C1F">*</Text>
                                    </Text>
                                    <Select width={{"lg" : "90%"}} value={kategoriWisata} placeholder="Silahkan pilih kategori wisata anda termasuk trip dalam negeri atau trip luar negeri" onChange={(e) => {setKategoriWisata(e.currentTarget.value)}}>
                                        <option value="DALAM_NEGERI">Trip Dalam Negeri</option>
                                        <option value="LUAR_NEGERI">Trip Luar Negeri</option>
                                    </Select>
                                </Flex>
                                <InputSinta additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Durasi Paket Wisata (dalam hari)" notes="Pastikan anda hanya menginputkan angka. Contoh paket wisata anda berdurasi 3 hari, cukup masukkan angka 3 saja tanpa tulisan hari" placeholder="Masukkan lama durasi paket wisata anda dalam satuan hari disini" width="90%" value={durasiPaketWisataHari} onChange={(e) => {setDurasiPaketWisataHari(e.currentTarget.value)}} type="text"/>
                                <InputSinta additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Durasi Paket Wisata (dalam malam)" notes="Pastikan anda hanya menginputkan angka. Contoh paket wisata anda berdurasi 3 malam, cukup masukkan angka 3 saja tanpa tulisan malam" placeholder="Masukkan lama durasi paket wisata anda dalam satuan malam disini" width="90%" value={durasiPaketWisataMalam} onChange={(e) => {setDurasiPaketWisataMalam(e.currentTarget.value)}} type="text"/>
                                <InputSinta width="90%" additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Lokasi Penjemputan" notes="" placeholder="Pilih lokasi penjemputan atau titik kumpul dari paket wisata yang anda jual" value={lokasiPenjemputan} onChange={(e) => {setLokasiPenjemputan(e.currentTarget.value)}} type="text"/>
                                <Flex flexDir="column" gap={{"lg" : "0.5rem"}} marginY={{"lg" : "0.5rem"}}>
                                    <Text
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "0.875rem"}}>
                                        Rentang Harga Paket Wisata <Text as="span" color="red">*</Text>
                                    </Text>
                                    <Flex width={{"lg" : "100%"}} gap={{"lg" : "2rem"}}>
                                        <Flex flexDir="column" width={{"lg" : "40%"}} gap={{"lg" : "0.5rem"}}>
                                            <Input value={hargaTerendah} onChange={(e) => {setHargaTerendah(e.currentTarget.value)}} border="1px solid #ABBED1" borderRadius="8px" placeholder="Harga Terendah"/>
                                            <Text fontFamily={fontFamily} fontSize={{"lg" : "0.875rem"}} color="#89939E">
                                            Masukkan harga terendah hanya dalam bentuk angka. Contoh : 165000
                                            </Text>
                                        </Flex>
                                        <Flex flexDir="column" width={{"lg" : "40%"}} gap={{"lg" : "0.5rem"}}>
                                            <Input value={hargaTertinggi} onChange={(e) => {setHargaTertinggi(e.currentTarget.value)}} border="1px solid #ABBED1" borderRadius="8px" placeholder="Harga Terendah"/>
                                            <Text fontFamily={fontFamily} fontSize={{"lg" : "0.875rem"}} color="#89939E">
                                            Masukkan harga tertinggi hanya dalam bentuk angka. Contoh : 235000
                                            </Text>
                                        </Flex>
                                    </Flex>
                                    <Flex
                                flexDir="column"
                                gap={{"lg" : "0.5rem"}}
                                marginY={{"lg" : "1rem"}}>
                                    <Text fontFamily={fontFamily}>
                                    Kelengkapan Fasilitas Pada Paket Wisata<Text as="span" color="#E12C1F">*</Text>
                                    </Text>
                                    <Select width={{"lg" : "90%"}} value={kelengkapan} placeholder="Silahkan pilih apakah fasilitas pada paket wisata anda sudah include semuanya atau ada beberapa exclude" onChange={(e) => {setKelengkapan(e.currentTarget.value)}}>
                                        <option value="ALL">Sudah include semuanya</option>
                                        <option value="EXCLUDE">Ada exclude beberapa</option>
                                    </Select>
                                    <Text
                                    fontFamily={fontFamily}
                                    color="#89939E"
                                    fontSize="0.875rem">
                                    Pilih salah satu tipe kelengkapan fasilitas pada paket wisata anda
                                    </Text>
                                </Flex>
                                <Button width={{"lg" : "90%"}} onClick={() => {setCurrentPosition(4)}} marginY={{"lg" : "1rem"}} backgroundColor="#0053AD" borderRadius="8px" _hover={{backgroundColor: undefined}}>
                                    <Text 
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "0.875rem"}}
                                    color="white">
                                        Selanjutnya
                                    </Text>
                                </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                );
            }
        } else if(currentPosition == 4){
            return(
                <Flex flexDir="column">
                    <Navbar type="other" typeUser="agentravel"/>
                    <Flex position="relative" top="8rem" left={{"lg" : "5rem"}} flexDir="column" gap={{"lg" : "1rem"}}>
                        <Flex>
                            <Button backgroundColor={"#FCFCFC"} _hover={{backgroundColor: "undefined"}} onClick={() => {setCurrentPosition(3)}}>
                                <Text
                                fontFamily={fontFamily}
                                fontSize={{"lg" : "1.25rem"}}>
                                    <ChevronLeftIcon/> Kembali
                                </Text>
                            </Button>
                        </Flex>
                        <Flex
                        flexDir="column"
                        gap={{"lg" : "0.5rem"}}>
                            <Text
                            fontFamily={fontFamily}
                            fontWeight={600}
                            fontSize={{"lg" : "1.25rem"}}>
                                Silahkan lengkapi informasi paket wisata yang ingin anda jual
                            </Text>
                            <Flex border="2px solid #ABBED1" borderRadius="8px" width={{"lg" : "90%"}}>
                                <Button
                                paddingY={{"lg" : "2rem"}}
                                width={{"lg" : "25%"}}
                                backgroundColor={breadCrumbIndex == 1 ? "#0053AD" : "white"}
                                _hover={{backgroundColor: undefined}}
                                onClick={() => {setBreadCrumbIndex(1)}}>
                                    <Text
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "0.875rem"}}
                                    color={breadCrumbIndex == 1 ? "white" : "black"}>
                                        Deskripsi
                                    </Text>
                                </Button>
                                <Button
                                paddingY={{"lg" : "2rem"}}
                                width={{"lg" : "25%"}}
                                backgroundColor={breadCrumbIndex == 2 ? "#0053AD" : "white"}
                                _hover={{backgroundColor: undefined}}
                                onClick={() => {setBreadCrumbIndex(2)}}>
                                    <Text
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "0.875rem"}}
                                    color={breadCrumbIndex == 2 ? "white" : "black"}>
                                        Info Penting
                                    </Text>
                                </Button>
                                <Button
                                paddingY={{"lg" : "2rem"}}
                                width={{"lg" : "25%"}}
                                backgroundColor={breadCrumbIndex == 3 ? "#0053AD" : "white"}
                                _hover={{backgroundColor: undefined}}
                                onClick={() => {setBreadCrumbIndex(3)}}>
                                    <Text
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "0.875rem"}}
                                    color={breadCrumbIndex == 3 ? "white" : "black"}>
                                        Rundown
                                    </Text>
                                </Button>
                                <Button
                                paddingY={{"lg" : "2rem"}}
                                width={{"lg" : "25%"}}
                                backgroundColor={breadCrumbIndex == 4 ? "#0053AD" : "white"}
                                _hover={{backgroundColor: undefined}}
                                onClick={() => {setBreadCrumbIndex(4)}}>
                                    <Text
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "0.875rem"}}
                                    color={breadCrumbIndex == 4 ? "white" : "black"}>
                                        Fasilitas
                                    </Text>
                                </Button>
                            </Flex>
                        </Flex>
                        {
                            breadCrumbIndex == 1 && 
                            <Flex width={{"lg" : "100%"}} marginY={{"lg" : "1rem"}}>
                                <MyEditor state={deskripsi} setState={setDeskripsi}/>
                            </Flex>
                        }
                        {
                            breadCrumbIndex == 2 &&
                            <Flex width={{"lg" : "100%"}} marginY={{"lg" : "1rem"}}>
                                <MyEditor state={infoPenting} setState={setInfoPenting}/>
                            </Flex>
                        }
                        {
                            breadCrumbIndex == 3 &&
                            <Flex width={{"lg" : "100%"}} marginY={{"lg" : "1rem"}}>
                                <MyEditor state={rundown} setState={setRundown}/>
                            </Flex>
                        }
                        {
                            breadCrumbIndex == 4 &&
                            <Flex width={{"lg" : "100%"}} marginY={{"lg" : "1rem"}}>
                                <MyEditor state={fasilitas} setState={setFasilitas}/>
                            </Flex>
                        }
                        {
                        deskripsi.length != 0 && infoPenting.length != 0 && rundown.length != 0 && fasilitas.length != 0
                        ?
                            <Flex flexDir="column" marginY={{"lg" : "3rem"}} > 
                                <Button onClick={() => {setCurrentPosition(5)}} width={{"lg" : "90%"}} backgroundColor="#0053AD" _hover={{backgroundColor: undefined}}>
                                    <Text
                                    fontFamily={fontFamily}
                                    color="white"
                                    fontSize={{"lg" : "0.875rem"}}>
                                        Selanjutnya
                                    </Text>
                                </Button>
                            </Flex>
                            :
                            <Flex marginY={{"lg" : "3rem"}}>
                                <Button width={{"lg" : "90%"}} isDisabled backgroundColor="#E0E6ED">
                                    <Text
                                    fontFamily={fontFamily}
                                    color="#717171"
                                    fontSize={{"lg" : "0.875rem"}}>
                                        Selanjutnya
                                    </Text>
                                </Button>
                            </Flex>
                        }
                    </Flex>
                </Flex>
            );
        } else {
            if(pageType === "create" && tipePaketWisata === "OPEN"){
                return(
                    <Flex>
                        <Navbar type="other" typeUser="agentravel"/>
                        <Flex
                        position="relative"
                        left={{"lg" : "5rem"}}
                        top={{"lg" : "8rem"}}>
                            <Button backgroundColor={"#FCFCFC"} _hover={{backgroundColor: "undefined"}} onClick={() => {setCurrentPosition(4)}}>
                                <Text
                                fontFamily={fontFamily}
                                fontSize={{"lg" : "1.25rem"}}>
                                    <ChevronLeftIcon/> Kembali
                                </Text>
                            </Button>
                        </Flex>
                        <Flex
                        position="relative"
                        top={{"lg" : "13rem"}}
                        flexDir="column"
                        width={{"lg" : "70%"}}>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "1.25rem"}}
                            fontWeight={600}>
                                Berikut Rincian Informasi Paket Wisata Anda
                            </Text>
                            <InputSinta isDisable additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Nama Paket Wisata" notes="Batas maksimal nama paket wisata adalah 100 karakter" placeholder="Masukkan nama paket wisata anda disini" value={paketWisata} onChange={(e) => {setPaketWisata(e.currentTarget.value)}} width="100%" type="text"/>
                            <InputSinta isDisable additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Gambar Cover Paket Wisata" notes="Pastikan inputan gambar dalam format jpg, jpeg, atau png" placeholder="Belum ada gambar yang dipilih" width="100%" onChange={(e) => {
                                const files = e.currentTarget.files && e.currentTarget.files[0];
                                setFile(files as File);
                            }} type="file"/>
                            <Flex
                            flexDir="column"
                            gap={{"lg" : "0.5rem"}}>
                                <Text fontFamily={fontFamily} color="#717171">
                                    Kategori Wisata<Text as="span" color="#717171">*</Text>
                                </Text>
                                <Select isDisabled value={kategoriWisata} placeholder="Silahkan pilih kategori wisata anda termasuk trip dalam negeri atau trip luar negeri" onChange={(e) => {setKategoriWisata(e.currentTarget.value)}}>
                                    <option value="DALAM_NEGERI">Trip Dalam Negeri</option>
                                    <option value="LUAR_NEGERI">Trip Luar Negeri</option>
                                </Select>
                            </Flex>
                            <InputSinta isDisable additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Durasi Paket Wisata (dalam hari)" notes="Pastikan anda hanya menginputkan angka. Contoh paket wisata anda berdurasi 3 hari, cukup masukkan angka 3 saja tanpa tulisan hari" placeholder="Masukkan lama durasi paket wisata anda dalam satuan hari disini" width="100%" value={durasiPaketWisataHari} onChange={(e) => {setDurasiPaketWisataHari(e.currentTarget.value)}} type="text"/>
                            <InputSinta isDisable additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Durasi Paket Wisata (dalam malam)" notes="Pastikan anda hanya menginputkan angka. Contoh paket wisata anda berdurasi 3 malam, cukup masukkan angka 3 saja tanpa tulisan malam" placeholder="Masukkan lama durasi paket wisata anda dalam satuan malam disini" width="100%" value={durasiPaketWisataMalam} onChange={(e) => {setDurasiPaketWisataMalam(e.currentTarget.value)}} type="text"/>
                            <InputSinta isDisable additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Link Group Untuk Pusat Informasi Traveler" notes="Gunakan link grup pada social media, pastikan link grup dapat digabung oleh traveler anda" placeholder="Masukkan link grup pada social media agar traveler dapat tergabung pada grup dan tidak ketinggalan informasi" width="100%" value={linkGroup} onChange={(e) => {setLinkGroup(e.currentTarget.value)}} type="text"/>
                            <InputSinta isDisable additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Lokasi Penjemputan" notes="" placeholder="Pilih lokasi penjemputan atau titik kumpul dari paket wisata yang anda jual" width="100%" value={lokasiPenjemputan} onChange={(e) => {setLokasiPenjemputan(e.currentTarget.value)}} type="text"/>
                            <Flex gap={{"lg" : "2rem"}}>
                                <InputSinta isDisable additionalProps={{width: {"lg" : "40%"}, marginBottom: {"lg" : "0.5rem"}}} description="Opsi Tanggal Keberangkatan" notes="Pilih tanggal mulai paket wisata anda" width="100%" value={tanggalKeberangkatan} onChange={(e) => {setTanggalKeberangkatan(e.currentTarget.value)}} type="date" placeholder=""/>
                                <InputSinta isDisable additionalProps={{width: {"lg" : "40%"}, marginBottom: {"lg" : "0.5rem"}}} description="Opsi Tanggal Kepulangan" notes="Pilih tanggal berakhir paket wisata anda" width="100%" value={tanggakKepulangan} onChange={(e) => {setTanggalKepulangan(e.currentTarget.value)}} type="date" placeholder=""/>
                            </Flex>
                            <Flex flexDir="column" width={{"lg" : "100%"}} gap={{"lg" : "1rem"}}>
                                <Box width={{"lg" : "100%"}}>
                                    <Text
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "#212121"}}
                                    marginY={{"lg" : "1rem"}}
                                    color="#717171">
                                        Kategori Harga & Jumlah Untuk Dewasa<Text as="span" color="#717171">*</Text>
                                    </Text>
                                    <Flex width={{"lg" : "100%"}} gap={{"lg" : "8rem"}} height={{"lg" : "100%"}}>
                                        <Flex paddingX={{"lg" : "1rem"}} backgroundColor="#F5F5F5" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "30%"}} height={{"lg" : "45%"}}>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#717171"
                                            alignSelf="center">
                                                Kategori: Dewasa
                                            </Text>
                                        </Flex>
                                        <Flex width={{"lg" : "35%"}} flexDir="column" gap={{"lg" : "0.5rem"}} height="100%">
                                            <Input isDisabled height="45%" paddingY={{"lg" : "1rem"}} paddingX={{"lg" : "1rem"}} backgroundColor="#FCFCFC" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "100%"}} placeholder="Harga" onClick={(e) => {setHargaDewasa(e.currentTarget.value)}} value={hargaDewasa}/>
                                            <Text
                                            fontFamily={fontFamily}
                                            fontSize={{"lg" : "0.875rem"}}
                                            color="#89939E">
                                                Masukkan hanya dalam bentuk angka. Contoh : 165000
                                            </Text>
                                        </Flex>
                                        <Flex width={{"lg" : "35%"}} flexDir="column" height="100%" gap={{"lg" : "0.5rem"}}>
                                            <Input isDisabled paddingY={{"lg" : "1rem"}} height="45%" paddingX={{"lg" : "1rem"}} backgroundColor="#FCFCFC" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "100%"}} placeholder="Jumlah Kuota" onClick={(e) => {setKuotaDewasa(e.currentTarget.value)}} value={kuotaDewasa}/>
                                            <Text
                                            fontFamily={fontFamily}
                                            fontSize={{"lg" : "0.875rem"}}
                                            color="#89939E">
                                                Masukkan hanya dalam bentuk angka. Contoh : 30
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Box>
                                <Box width={{"lg" : "100%"}}>
                                    <Text
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "#212121"}}
                                    marginY={{"lg" : "1rem"}}
                                    color="#717171">
                                        Kategori Harga & Jumlah Untuk Anak(optional)
                                    </Text>
                                    <Flex width={{"lg" : "100%"}} gap={{"lg" : "8rem"}} height={{"lg" : "100%"}}>
                                        <Flex paddingX={{"lg" : "1rem"}} backgroundColor="#F5F5F5" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "30%"}} height={{"lg" : "45%"}}>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#717171"
                                            alignSelf="center">
                                                Kategori: Anak
                                            </Text>
                                        </Flex>
                                        <Flex width={{"lg" : "35%"}} flexDir="column" gap={{"lg" : "0.5rem"}} height="100%">
                                            <Input isDisabled height="45%" paddingY={{"lg" : "1rem"}} paddingX={{"lg" : "1rem"}} backgroundColor="#FCFCFC" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "100%"}} placeholder="Harga" onClick={(e) => {setHargaAnak(e.currentTarget.value)}} value={hargaAnak}/>
                                            <Text
                                            fontFamily={fontFamily}
                                            fontSize={{"lg" : "0.875rem"}}
                                            color="#89939E">
                                                Masukkan hanya dalam bentuk angka. Contoh : 165000
                                            </Text>
                                        </Flex>
                                        <Flex width={{"lg" : "35%"}} flexDir="column" height="100%" gap={{"lg" : "0.5rem"}}>
                                            <Input isDisabled paddingY={{"lg" : "1rem"}} height="45%" paddingX={{"lg" : "1rem"}} backgroundColor="#FCFCFC" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "100%"}} placeholder="Kuota" onClick={(e) => {setKuotaAnak(e.currentTarget.value)}} value={kuotaAnak}/>
                                            <Text
                                            fontFamily={fontFamily}
                                            fontSize={{"lg" : "0.875rem"}}
                                            color="#89939E">
                                                Masukkan hanya dalam bentuk angka. Contoh : 30
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Box>
                                <Box width={{"lg" : "100%"}}>
                                    <Text
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "#212121"}}
                                    marginY={{"lg" : "1rem"}}
                                    color="#717171">
                                        Kategori Harga & Jumlah Untuk Bayi(optional)
                                    </Text>
                                    <Flex width={{"lg" : "100%"}} gap={{"lg" : "8rem"}} height={{"lg" : "100%"}}>
                                        <Flex paddingX={{"lg" : "1rem"}} backgroundColor="#F5F5F5" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "30%"}} height={{"lg" : "45%"}}>
                                            <Text
                                            fontFamily={fontFamily}
                                            color="#717171"
                                            alignSelf="center">
                                                Kategori: Bayi
                                            </Text>
                                        </Flex>
                                        <Flex width={{"lg" : "35%"}} flexDir="column" gap={{"lg" : "0.5rem"}} height="100%">
                                            <Input isDisabled height="45%" paddingY={{"lg" : "1rem"}} paddingX={{"lg" : "1rem"}} backgroundColor="#FCFCFC" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "100%"}} placeholder="Harga" onClick={(e) => {setHargaBayi(e.currentTarget.value)}} value={hargaBayi}/>
                                            <Text
                                            fontFamily={fontFamily}
                                            fontSize={{"lg" : "0.875rem"}}
                                            color="#89939E">
                                                Masukkan hanya dalam bentuk angka. Contoh : 165000
                                            </Text>
                                        </Flex>
                                        <Flex width={{"lg" : "35%"}} flexDir="column" height="100%" gap={{"lg" : "0.5rem"}}>
                                            <Input isDisabled paddingY={{"lg" : "1rem"}} height="45%" paddingX={{"lg" : "1rem"}} backgroundColor="#FCFCFC" border="1px solid #ABBED1" borderRadius="8px" width={{"lg" : "100%"}} placeholder="Kuota" onClick={(e) => {setKuotaBayi(e.currentTarget.value)}} value={kuotaBayi}/>
                                            <Text
                                            fontFamily={fontFamily}
                                            fontSize={{"lg" : "0.875rem"}}
                                            color="#89939E">
                                                Masukkan hanya dalam bentuk angka. Contoh : 30
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Box>
                            </Flex>
                            <Flex
                            flexDir="column"
                            gap={{"lg" : "0.5rem"}}
                            marginY={{"lg" : "1rem"}}>
                                <Text fontFamily={fontFamily} color="#717171">
                                Kelengkapan Fasilitas Pada Paket Wisata<Text as="span" color="#717171">*</Text>
                                </Text>
                                <Select isDisabled value={kelengkapan} placeholder="Silahkan pilih apakah fasilitas pada paket wisata anda sudah include semuanya atau ada beberapa exclude" onChange={(e) => {setKelengkapan(e.currentTarget.value)}}>
                                    <option value="ALL">Sudah include semuanya</option>
                                    <option value="EXCLUDE">Ada exclude beberapa</option>
                                </Select>
                                <Text
                                fontFamily={fontFamily}
                                color="#89939E"
                                fontSize="0.875rem">
                                Pilih salah satu tipe kelengkapan fasilitas pada paket wisata anda
                                </Text>
                            </Flex>
                            <Button onClick={handleSubmit} marginY={{"lg" : "1rem"}} backgroundColor="#0053AD" borderRadius="8px" _hover={{backgroundColor: undefined}} isLoading={loadPost}>
                                <Text 
                                fontFamily={fontFamily}
                                fontSize={{"lg" : "0.875rem"}}
                                color="white">
                                    Upload Paket Wisata
                                </Text>
                            </Button>
                        </Flex>
                    </Flex>
                );
        } else {
            return(
                <Flex
                flexDir="column">
                    <Navbar type="other" typeUser="agentravel"/>
                    <Flex
                    position="relative"
                    top={{"lg" : "7rem"}}
                    left={{"lg" : "3rem"}}
                    flexDir="column">
                        <Flex>
                            <Button
                            onClick={() => {setCurrentPosition(2)}}
                            backgroundColor="white"
                            _hover={{backgroundColor: undefined}}>
                                <Text
                                fontFamily={fontFamily}
                                fontSize={{"lg" : "1.25rem"}}>
                                    <ChevronLeftIcon/> Kembali
                                </Text>
                            </Button>
                        </Flex>
                        <Flex flexDir="column">
                            <InputSinta isDisable description="Nama Paket Wisata" notes="Batas maksimal nama paket wisata adalah 100 karakter (0/100)" placeholder="Masukkan nama paket wisata anda disini" width="90%" value={paketWisata} onChange={(e) => {setPaketWisata(e.currentTarget.value)}} type="text"/>
                            <InputSinta isDisable description="Gambar Cover Paket Wisata" notes="Pastikan inputan gambar dalam format jpg, jpeg, atau png" placeholder="" width="90%" onChange={(e) => {
                                const files = e.currentTarget.files && e.currentTarget.files[0];
                                setFile(files as File);
                            }} type="file"/>
                            <Flex
                            flexDir="column"
                            gap={{"lg" : "0.5rem"}}>
                                <Text fontFamily={fontFamily}>
                                    Kategori Wisata<Text as="span" color="#E12C1F">*</Text>
                                </Text>
                                <Select isDisabled width={{"lg" : "90%"}} value={kategoriWisata} placeholder="Silahkan pilih kategori wisata anda termasuk trip dalam negeri atau trip luar negeri" onChange={(e) => {setKategoriWisata(e.currentTarget.value)}}>
                                    <option value="DALAM_NEGERI">Trip Dalam Negeri</option>
                                    <option value="LUAR_NEGERI">Trip Luar Negeri</option>
                                </Select>
                            </Flex>
                            <InputSinta isDisable additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Durasi Paket Wisata (dalam hari)" notes="Pastikan anda hanya menginputkan angka. Contoh paket wisata anda berdurasi 3 hari, cukup masukkan angka 3 saja tanpa tulisan hari" placeholder="Masukkan lama durasi paket wisata anda dalam satuan hari disini" width="90%" value={durasiPaketWisataHari} onChange={(e) => {setDurasiPaketWisataHari(e.currentTarget.value)}} type="text"/>
                            <InputSinta isDisable additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Durasi Paket Wisata (dalam malam)" notes="Pastikan anda hanya menginputkan angka. Contoh paket wisata anda berdurasi 3 malam, cukup masukkan angka 3 saja tanpa tulisan malam" placeholder="Masukkan lama durasi paket wisata anda dalam satuan malam disini" width="90%" value={durasiPaketWisataMalam} onChange={(e) => {setDurasiPaketWisataMalam(e.currentTarget.value)}} type="text"/>
                            <InputSinta isDisable width="90%" additionalProps={{marginBottom: {"lg" : "0.5rem"}}} description="Lokasi Penjemputan" notes="" placeholder="Pilih lokasi penjemputan atau titik kumpul dari paket wisata yang anda jual" value={lokasiPenjemputan} onChange={(e) => {setLokasiPenjemputan(e.currentTarget.value)}} type="text"/>
                            <Flex flexDir="column" gap={{"lg" : "0.5rem"}} marginY={{"lg" : "0.5rem"}}>
                                <Text
                                fontFamily={fontFamily}
                                fontSize={{"lg" : "0.875rem"}}
                                color="#717171">
                                    Rentang Harga Paket Wisata <Text as="span" color="red">*</Text>
                                </Text>
                                <Flex width={{"lg" : "100%"}} gap={{"lg" : "2rem"}}>
                                    <Flex flexDir="column" width={{"lg" : "40%"}} gap={{"lg" : "0.5rem"}}>
                                        <Input isDisabled value={hargaTerendah} onChange={(e) => {setHargaTerendah(e.currentTarget.value)}} border="1px solid #ABBED1" borderRadius="8px" placeholder="Harga Terendah"/>
                                        <Text fontFamily={fontFamily} fontSize={{"lg" : "0.875rem"}} color="#89939E">
                                        Masukkan harga terendah hanya dalam bentuk angka. Contoh : 165000
                                        </Text>
                                    </Flex>
                                    <Flex flexDir="column" width={{"lg" : "40%"}} gap={{"lg" : "0.5rem"}}>
                                        <Input isDisabled value={hargaTertinggi} onChange={(e) => {setHargaTertinggi(e.currentTarget.value)}} border="1px solid #ABBED1" borderRadius="8px" placeholder="Harga Terendah"/>
                                        <Text fontFamily={fontFamily} fontSize={{"lg" : "0.875rem"}} color="#89939E">
                                        Masukkan harga tertinggi hanya dalam bentuk angka. Contoh : 235000
                                        </Text>
                                    </Flex>
                                </Flex>
                                <Flex
                            flexDir="column"
                            gap={{"lg" : "0.5rem"}}
                            marginY={{"lg" : "1rem"}}>
                                <Text fontFamily={fontFamily}
                                color="#717171">
                                Kelengkapan Fasilitas Pada Paket Wisata<Text as="span" color="#717171">*</Text>
                                </Text>
                                <Select isDisabled width={{"lg" : "90%"}} value={kelengkapan} placeholder="Silahkan pilih apakah fasilitas pada paket wisata anda sudah include semuanya atau ada beberapa exclude" onChange={(e) => {setKelengkapan(e.currentTarget.value)}}>
                                    <option value="ALL">Sudah include semuanya</option>
                                    <option value="EXCLUDE">Ada exclude beberapa</option>
                                </Select>
                                <Text
                                fontFamily={fontFamily}
                                color="#89939E"
                                fontSize="0.875rem">
                                Pilih salah satu tipe kelengkapan fasilitas pada paket wisata anda
                                </Text>
                            </Flex>
                            <Button width={{"lg" : "90%"}} onClick={handleSubmit} marginY={{"lg" : "1rem"}} backgroundColor="#0053AD" borderRadius="8px" _hover={{backgroundColor: undefined}} isLoading={loadPost}>
                                <Text 
                                fontFamily={fontFamily}
                                fontSize={{"lg" : "0.875rem"}}
                                color="white">
                                    Upload Paket Wisata
                                </Text>
                            </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                );
            }
        }
    }
}

export default AgenTravelPaketWisataPage;
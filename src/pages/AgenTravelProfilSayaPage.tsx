import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ExpandedIndex, Flex, Input, Text, useAccordionItem, useToast } from "@chakra-ui/react";
import DropDown from "../components/dropdown";
import { getAgenTravel, getJwtAgenTravel } from "../util/auth_util";
import { TipeAgenTravelPage } from "./AgenTravelHomePage";
import Navbar from "../components/navbar";
import { fontFamily } from "../style/font";
import InputSinta from "../components/input";
import { useState } from "react";
import api from "../api/api";
import { AgenTravel, AgenTravelResponse } from "../response/agen_travel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AgenTravelProfilSayaPage = ({type}: {type: TipeAgenTravelPage}) => {

    const agenTravel = getAgenTravel();
    const [namaBadanUsaha, setNamaBadanUsaha] = useState<string>(agenTravel.namaBadanUsaha);
    const [alamatBadanUsaha, setAlamatBadanUsaha] = useState<string>(agenTravel.alamatBadanUsaha ?? "");
    const [namaPic, setNamaPic] = useState<string>(agenTravel.nama ?? "");
    const [kontakWhatsappPic, setKontakWhatsappPic] = useState<string>(agenTravel.kontakWhatsappPic ?? "");
    const [suratIzinUsaha, setSuratIzinUsaha] = useState<File | null>(null);
    const [bio, setBio] = useState<string>(agenTravel.bio ?? "");
    const [tentangSaya, setTentangSaya] = useState<string>(agenTravel.tentangSaya ?? "");
    const [emailPribadi, setEmailPribadi] = useState<string>(agenTravel.emailPribadi ?? "");
    const [nomorTelepon, setNomorTelepon] = useState<string>(agenTravel.nomorTeleponPribadi ?? "");
    const [kontakWhatsappBadanUsaha, setKontakWhatsappBadanUsaha] = useState<string>(agenTravel.kontakWhatsappBadanUsaha ?? "");
    const [akunInstagramBadanUsaha, setAkunInstagramBadanUsaha] = useState<string>(agenTravel.akunInstagramBadanUsaha ?? "");
    const [akunFacebookBadanUsaha, setAkunFacebookBadanUsaha] = useState<string>(agenTravel.akunFacebookBadanUsaha ?? "");
    const [akunTelegramBadanUsaha, setAkunTelegramBadanUsaha] = useState<string>(agenTravel.akunTelegramBadanUsaha ?? "");
    const [akunLineBadanUsaha, setAkunLineBadanUsaha] = useState<string>(agenTravel.akunLineBadanUsaha ?? "");
    const toast = useToast();
    const [load, setLoad] = useState<boolean>(false);
    const navigate = useNavigate();

    const submitLengkapiDataHandler = async () => {
        setLoad(true);
        const formData = new FormData();
        const dto = {
            "namaBadanUsaha" : namaBadanUsaha,
            "alamatBadanUsaha" : alamatBadanUsaha,
            "nama" : namaPic,
            "kontakWhatsappPic" : kontakWhatsappPic,
            "bio" : bio,
            "tentangSaya" : tentangSaya,
            "emailPribadi" : emailPribadi,
            "noTeleponPribadi" : nomorTelepon,
            "kontakWhatsappBadanUsaha" : kontakWhatsappBadanUsaha,
            "akunInstagramBadanUsaha" : akunInstagramBadanUsaha,
            "akunFacebookBadanUsaha" : akunFacebookBadanUsaha,
            "akunTelegramBadanUsaha" : akunTelegramBadanUsaha,
            "akunLineBadanUsaha" : akunLineBadanUsaha 
        };
        const jwtToken = getJwtAgenTravel();
        const blob = new Blob([JSON.stringify(dto)], {type: "application/json"});
        formData.append("dto", blob);
        formData.append("suratIzinUsaha", suratIzinUsaha as File);
        try{
            await api.patch<AgenTravelResponse>("/agentravel/lengkapiprofil", formData, {
            headers: {
                Authorization : `Bearer ${jwtToken}`,
                "Content-Type" : "multipart/form-data"
            }
            });
            toast({
                title: "Sukses",
                description: "Sukses melengkapi profil agen travel",
                duration: 2000,
                isClosable: true,
                status: "success",
                position: "top-right"
            });
            const updateAgenTravel = await api.get<AgenTravelResponse>(`/agentravel/get/${agenTravel.id}`);
            const newestAgenTravel = updateAgenTravel.data.data?.agentravel as AgenTravel;
            localStorage.setItem("agenTravel", JSON.stringify(newestAgenTravel));
            setTimeout(() => {
                navigate("/agentravel/home");
            }, 2000)
        } catch(e){
            if(axios.isAxiosError<AgenTravelResponse>(e)){
                const message = e.response?.data.message;
                toast({
                    title: "Error from server",
                    description: message,
                    duration: 3000,
                    isClosable: true,
                    status: "error",
                    position: "top-right"
                });
            }
        } finally{
            setLoad(false);
        }
    };

    let showedElement: JSX.Element;
    showedElement = 
    <Box width={{"lg" : "50%"}} position="relative" bottom="28rem" left="28rem">
        <Accordion allowMultiple>
            <AccordionItem boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)" borderRadius="8px" border="1px solid #E0E6ED" marginBottom={{"lg" : "2.5rem"}}>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        <Text
                            fontFamily={fontFamily}
                            fontWeight={600}
                            fontSize={{"lg" : "1.75rem"}}
                            color="black">
                                Profil Utama
                        </Text>
                        <Text
                            fontFamily={fontFamily}
                            fontWeight={400}
                            fontSize={{"lg" : "1.125rem"}}
                            color="#717171"
                            >
                                Silahkan melengkapi profil utama Anda agar dapat menggunakan layanan kami
                        </Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                    <Flex flexDir="column">
                        <InputSinta description="Nama Badan Usaha" notes="Pastikan nama badan usaha anda telah terdaftar secara resmi" placeholder="" width="100%" value={namaBadanUsaha}  type="text" onChange={(e) => {setNamaBadanUsaha(e.currentTarget.value)}}/>
                        <InputSinta description="Alamat Badan Usaha" notes="Contoh: Jl. Veteran Malang, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145" placeholder="" width="100%" value={alamatBadanUsaha} type="text" onChange={(e) => {setAlamatBadanUsaha(e.currentTarget.value)}}/>
                        <InputSinta description="Nama PIC" notes="Gunakan nama lengkap anda sesuai dengan KTP/Paspor/SIM" placeholder="" width="100%" value={namaPic} type="text" onChange={(e) => {setNamaPic(e.currentTarget.value)}}/>
                        <InputSinta description="Kontak Whatsapp PIC" notes="Gunakan format 08 dalam memasukkannya. Contoh: 081234567890" placeholder="" width="100%" value={kontakWhatsappPic} type="text" onChange={(e) => {setKontakWhatsappPic(e.currentTarget.value)}}/>
                        <InputSinta description="Surat Izin Usaha" notes="Masukkan file dengan ukuran maksimal 5 Mb" placeholder="" width="100%" type="file" onChange={(e) => {
                            const files  = e.currentTarget.files && e.currentTarget.files[0];
                            setSuratIzinUsaha(files);
                        }}/>
                        <InputSinta description="Bio" notes="Batas maksimal bio adalah 300 karakter" placeholder="" width="100%" value={bio} type="text" onChange={(e) => {setBio(e.currentTarget.value)}}/>
                        <InputSinta description="Tentang Saya" notes="Batas maksimal bio adalah 300 karakter" placeholder="" width="100%" value={tentangSaya} type="text" onChange={(e) => {setTentangSaya(e.currentTarget.value)}}/>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)" borderRadius="8px" border="1px solid #E0E6ED" marginBottom={{"lg" : "2rem"}}> 
                <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <Text
                                fontFamily={fontFamily}
                                fontWeight={600}
                                fontSize={{"lg" : "1.75rem"}}
                                color="black">
                                    Akun & Kontak Utama Anda
                            </Text>
                            <Text
                                fontFamily={fontFamily}
                                fontWeight={400}
                                fontSize={{"lg" : "1.125rem"}}
                                color="#717171"
                                >
                                    Silahkan melengkapi akun & kontak utama anda
                            </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        <InputSinta description="Email" notes="Gunakan alamat email yang valid" placeholder="" width="100%" value={emailPribadi}  type="text" onChange={(e) => {setEmailPribadi(e.currentTarget.value)}}/>
                        <InputSinta description="Nomor Telepon" notes="Gunakan format 08 dalam memasukkannya. Contoh: 081234567890" placeholder="" width="100%" value={nomorTelepon}  type="text" onChange={(e) => {setNomorTelepon(e.currentTarget.value)}}/>
                        <InputSinta description="Kontak Whatsapp Badan Usaha" notes="Gunakan link akun whatsapp. Contoh : https://wa.me/081234567890" placeholder="" width="100%" value={kontakWhatsappBadanUsaha}  type="text" onChange={(e) => {setKontakWhatsappBadanUsaha(e.currentTarget.value)}}/>
                        <InputSinta description="Akun Instagram Badan Usaha" notes="Gunakan link akun instagram. Contoh : https://www.instagram.com/rahmantravel/" placeholder="" width="100%" value={akunInstagramBadanUsaha}  type="text" onChange={(e) => {setAkunInstagramBadanUsaha(e.currentTarget.value)}} optional/>
                        <InputSinta description="Akun Facebook Badan Usaha" notes="Gunakan link akun facebook. Contoh : https://ms-my.facebook.com/people/rahmantravel/100074765952109/" placeholder="" width="100%" value={akunFacebookBadanUsaha}  type="text" onChange={(e) => {setAkunFacebookBadanUsaha(e.currentTarget.value)}} optional/>
                        <InputSinta description="Akun Telegram Badan Usaha" notes="Gunakan link akun telegram. Contoh : https://t.me/rahmantravel" placeholder="" width="100%" value={akunTelegramBadanUsaha}  type="text" onChange={(e) => {setAkunTelegramBadanUsaha(e.currentTarget.value)}} optional/>
                        <InputSinta description="Akun Line Badan Usaha" notes="Gunakan link akun line. Contoh : https://line.me/ti/p/cYnZcntrWh" placeholder="" width="100%" value={akunLineBadanUsaha}  type="text" onChange={(e) => {setAkunLineBadanUsaha(e.currentTarget.value)}} optional/>
                    </AccordionPanel>
            </AccordionItem>
        </Accordion>
        <Button backgroundColor={"#0053AD"} borderRadius="8px" width={{"lg" : "100%"}} onClick={submitLengkapiDataHandler} isLoading={load}>
            <Text
            fontFamily={fontFamily}
            fontSize={{"lg" : "0.875rem"}}
            color="white">
                Simpan data
            </Text>
        </Button>
    </Box>;
    return(
        <Box paddingBottom={{"lg" : "2rem"}}>
            <Navbar type="other" typeUser="agentravel"/>
            <DropDown type={type}/>
            {showedElement}
        </Box>
    );
};

export default AgenTravelProfilSayaPage;
import { Box, Button, ButtonProps, Flex, Image, SkeletonCircle, SkeletonText, Text, TextProps, useToast } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import ButtonWithImage from "../components/button";
import { fontFamily } from "../style/font";
import boking from "../images/myaccount/boking.png";
import keluar from "../images/myaccount/keluar.png";
import myaccount from "../images/myaccount/myaccount.png";
import refund from "../images/myaccount/refund.png";
import riwayat from "../images/myaccount/riwayat.png";
import terverifikasi from "../images/myaccount/terverifikasi.png";
import menungguVerifikasi from "../images/myaccount/menunggu_terverifikasi.png";
import Footer from "../components/footer";
import InputSinta from "../components/input";
import useFetchUser from "../hook/useFetchUser";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";
import { getJwtToken } from "../util/auth_util";
import axios from "axios";
import UserResponse from "../response/response";
import { useMemo, useState } from "react";

type AccountDetailsType = "booking" | "refund" | "history" | "myaccount";

const AccountDetailsPage = ({type}: {type: AccountDetailsType}) => {

    const {userId} = useParams();
    const {data, error, load} = useFetchUser(`/user/get/${userId}`);
    const user = data.data?.user;
    const navigate = useNavigate();
    const toast = useToast();
    const [loadUpdate, setLoadUpdate] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [nomorKtp, setNomorKtp] = useState<string>("");
    const [nama, setNama] = useState<string>("");
    const [noTelp, setNoTelp] = useState<string>("");
    const emailMemo = useMemo<[string]>(() => {
        if(load){
            setEmail(user?.email ?? "");
            return [user?.email ?? ""];
        } else {
            return [""];
        }
    }, [load]);
    const nomorKtpMemo = useMemo<[string]>(() => {
        if(load){
            setNomorKtp(user?.nomorKtp ?? "");
            return [user?.nomorKtp ?? ""];
        } else {
            return [""];
        }
    }, [load]);
    const namaMemo = useMemo<[string]>(() => {
        if(load){
            setNama(user?.nama ?? "");
            return [user?.nama ?? ""];
        } else {
            return [""];
        }
    },[load]);
    const noTelpMemo = useMemo<[string]>(() => {
        if(load){
            setNoTelp(user?.noTelp ?? "");
            return [user?.noTelp ?? ""];
        } else {
            return [""];
        }
    }, [load]);
    const updateUserHandler = () => {
        setLoadUpdate(true);
        const fetchData = async () => {
            try{
                const sampleData = {"email" : email, "noTelp" : noTelp, "nomorKtp" : nomorKtp, "nama" : nama};
                const result = await api.patch<UserResponse>(`/user/update/${userId}`, sampleData, {
                    headers: {
                        Authorization: `Bearer ${getJwtToken()}`
                    }
                });
                localStorage.setItem("user", JSON.stringify(result.data.data?.user));
                toast({
                    title: "Berhasil",
                    duration: 2000,
                    isClosable: true,
                    position: "top-right",
                    description: result?.data.message,
                    status: "success"
                });
                setTimeout(() => {
                    const currentLocation = window.location;
                    currentLocation.reload();
                }, 3000);
            } catch(e){
                if(axios.isAxiosError<UserResponse>(e)){
                    toast({
                        title: "Gagal",
                        duration: 3000,
                        isClosable: true,
                        position: "top-right",
                        description: e.response?.data.message,
                        status: "error"
                    });
                }
            } finally{
                setLoadUpdate(false);
            }
        };
        fetchData();
    };

    let logoVerifikasi = "";
    let warnaFont = "";
    let contentVerifikasi = "";
    if(user?.verified == "MENUNGGU"){
        logoVerifikasi = menungguVerifikasi;
        warnaFont = "#FFA826";
        contentVerifikasi = "Menunggu Verifikasi";
    } else if(user?.verified == "TERVERIFIKASI"){
        logoVerifikasi = terverifikasi;
        warnaFont = "#0053AD";
        contentVerifikasi = "Terverifikasi";
    }
    let showedElement: JSX.Element;
    switch(type){
        case "booking":
            showedElement = <Box></Box>;
            break;
        case "history":
            showedElement = <Box></Box>;
            break;
        case "refund":
            showedElement = <Box></Box>;
            break;
        case "myaccount":
            showedElement = 
            <Box>
                <Text
                fontFamily={fontFamily}
                fontSize={{"lg" : "2.25rem"}}
                color="#212121"
                fontWeight={600}>
                    Detail Akun Saya
                </Text>
                <InputSinta 
                placeholder="" 
                description="Email" 
                notes="Gunakan alamat email yang valid"
                value={email}
                type="text"
                width={"100%"}
                onChange={(e) => {
                    setEmail(e.currentTarget.value);
                }}/>
                <InputSinta 
                placeholder="" 
                description="Nomor KTP" 
                notes="Pastikan Anda memasukkan nomor KTP Anda yang valid"
                value={nomorKtp}
                type="text"
                width={"100%"}
                onChange={(e) => {
                    setNomorKtp(e.currentTarget.value);
                }}/>
                <InputSinta 
                placeholder="" 
                description="Nama Lengkap" 
                notes="Gunakan nama lengkap anda sesuai dengan KTP/Paspor/SIM"
                value={nama}
                type="text"
                width={"100%"}
                onChange={(e) => {
                    setNama(e.currentTarget.value);
                }}/>
                <InputSinta 
                placeholder="" 
                description="Nomor Telepon" 
                notes="Gunakan format 08 dalam memasukkannya. Contoh: 081234567890"
                value={noTelp}
                type="text"
                width={"100%"}
                onChange={(e) => {
                    setNoTelp(e.currentTarget.value);
                }}/>
                <Button backgroundColor="#0053AD" borderRadius="8px" width={{"lg" : "100%"}} onClick={updateUserHandler} isLoading={loadUpdate}>
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{"lg" : "0.875rem"}}
                    color="#FCFCFC"
                    fontWeight={600}>
                        Simpan
                    </Text>
                </Button>
            </Box>;
            break;
    }
    const textProps: TextProps = {
        fontWeight: 600,
        fontFamily: fontFamily,
        color: "#212121",
        marginX: "2rem"
    };
    const buttonProps: ButtonProps = {
        borderBottom: "1px solid #E0E6ED",
        width: "100%",
    };
    if(load){
        return(
            <Box width={{"lg" : "100%"}}>
                <Navbar type="myaccount" typeUser="user"/>
                <Flex 
                width={{"lg" : "100%"}}
                position="relative"
                top={{"lg" : "8rem"}}
                marginLeft={{"lg" : "5rem"}}
                gap={{"lg" : "3rem"}}>
                    <Box
                    borderRadius="8px" 
                    border="1px solid #E0E6ED"
                    height={{"lg" : "max-content"}}>
                        <Box marginBottom={{"lg" : "2rem"}}>
                            <Text
                            fontFamily={fontFamily}
                            fontWeight={600}
                            fontSize={{"lg" : "1.75rem"}}
                            width={{"lg" : "85%"}}
                            marginX={{"lg" : "1.5rem"}}
                            marginTop={{"lg" : "3rem"}}>{user?.nama}</Text>
                            <Flex
                            marginX={{"lg" : "1.5rem"}}
                            marginTop={{"lg" : "1rem"}}>
                                <Image maxWidth="100%" src={logoVerifikasi}/>
                                <Text
                                fontFamily={fontFamily}
                                fontWeight={600}
                                color={warnaFont}
                                fontSize={{"lg" : "1.25rem"}}
                                marginLeft={{"lg" : "0.5rem"}}>{contentVerifikasi}</Text>
                            </Flex>
                        </Box>
                        <Flex flexDirection="column" marginTop={{"lg" : "3rem"}}>
                            <ButtonWithImage 
                            image={boking} 
                            textContent="Cek Booking" 
                            textProps={textProps}
                            buttonProps={{...buttonProps, paddingLeft: {"lg" : "1.5rem"}, backgroundColor: type === "booking"? "#DBEDFF" : "#FCFCFC"}}/>
                            <ButtonWithImage
                            image={refund}
                            textContent="Cek Refund"
                            buttonProps={{...buttonProps, backgroundColor: type === "refund"? "#DBEDFF" : "#FCFCFC"}}
                            textProps={textProps}
                            />
                            <ButtonWithImage
                            image={riwayat}
                            textContent="Riwayat Pesanan"
                            buttonProps={{...buttonProps, paddingLeft: {"lg" : "3.5rem"}, backgroundColor: type === "history"? "#DBEDFF" : "#FCFCFC"}}
                            textProps={textProps}
                            />
                            <ButtonWithImage
                            image={myaccount}
                            textContent="Akun Saya"
                            buttonProps={{...buttonProps, paddingRight: {"lg" : "1.5rem"}, backgroundColor: type === "myaccount" ? "#DBEDFF" : "#FCFCFC"}}
                            textProps={textProps}
                            />
                            <ButtonWithImage
                            image={keluar}
                            textContent="Keluar"
                            buttonProps={{...buttonProps, paddingRight: {"lg" : "3.5rem"}, backgroundColor: "#FCFCFC", onClick: () => {navigate("/")}}}
                            textProps={textProps}
                            />
                        </Flex>
                    </Box>
                    {showedElement}
                </Flex>
                <Box marginTop={{"lg" : "12rem"}}/>
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
}

export default AccountDetailsPage;
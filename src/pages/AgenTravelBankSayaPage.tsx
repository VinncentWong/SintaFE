import { Box, Button, ButtonProps, Flex, Image, Select, SkeletonCircle, SkeletonText, Text, useToast } from "@chakra-ui/react";
import DropDown from "../components/dropdown";
import LengkapiProfil, { DashboardAgen, ArahkanPremium } from "../components/lengkapi_profil";
import Navbar from "../components/navbar";
import { getAgenTravel, getJwtAgenTravel, getJwtToken } from "../util/auth_util";
import { TipeAgenTravelPage } from "./AgenTravelHomePage";
import { useEffect, useState } from "react";
import { Bank, BankResponse } from "../response/bank";
import api from "../api/api";
import axios from "axios";
import { fontFamily } from "../style/font";
import kreditCard from "../images/agen_travel_home/creditcard.png";
import randomNumber from "../util/random";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import InputSinta from "../components/input";
import { AgenTravel, AgenTravelResponse } from "../response/agen_travel";

type Provider = "Gopay" | "Ovo" | "Dana" | "Shopeepay" | undefined;

const AgenTravelBankSayaPage = ({type}: {type: TipeAgenTravelPage}) => {
    const [agenTravel, setAgenTravel] = useState<AgenTravel>(getAgenTravel());
    const [bank, setBank] = useState<JSX.Element[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const [loadCreate, setLoadCreate] = useState<boolean>(false);
    const [loadUpdate, setLoadUpdate] = useState<boolean>(false);
    const [loadDelete, setLoadDelete] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<1 | 2>(1);
    const [choosenId, setChoosenId] = useState<number>(0);
    const [nama, setNama] = useState<string>("");
    const [choosenNama, setChoosenNama] = useState<string>("");
    const [noRek, setNoRek] = useState<string>("");
    const [choosenNoRek, setChoosenNoRek] = useState<string>("");
    const [provider, setProvider] = useState<Provider>("Gopay");
    const [choosenProvider, setChoosenProvider] = useState<Provider>("Gopay");
    const [pageType, setPageType] = useState<"create" | "update">("create");
    const toast = useToast();

    useEffect(() => {
        setLoad(true);
        const fetchData = async () => {
            try{
                const newAgenTravel = await api.get<AgenTravelResponse>(`/agentravel/get/${agenTravel.id}`)
                localStorage.setItem("agenTravel", JSON.stringify(newAgenTravel.data.data?.agentravel as AgenTravel));
                setAgenTravel(newAgenTravel.data.data?.agentravel as AgenTravel);
                const result = await api.get<BankResponse>(`/bank/get/${agenTravel.id}`);
                const data = result.data.data.bank;
                const arrElement: JSX.Element[] = [];
                data.forEach((v, i) => {
                    arrElement.push(<BankCardComponent key={randomNumber()} image={kreditCard} data={v} index={i} onClick={() => {
                        setChoosenId(data[i].id);
                        setChoosenNama(data[i].nama);
                        setChoosenNoRek(data[i].nomorRekening);
                        setChoosenProvider(data[i].provider as Provider);
                        setCurrentPage(2);
                        setPageType("update")
                    }}/>);
                });
                setBank(arrElement);
            } catch(e){
                if(axios.isAxiosError<BankResponse>(e)){
                    alert(e.response?.data?.message ?? "Error from server occured");
                }
            } finally{
                setLoad(false);
            }
        };

        fetchData();
    }, []);
    let showedElement: JSX.Element;

    const submitCreateBankHandler = async () => {
        setLoadCreate(true);
        const jwtToken  = getJwtAgenTravel();
        try{
            await api.post<BankResponse>("/bank/create", {
                "nama" : nama,
                "nomorRekening" : noRek,
                "provider" : provider
            }, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            });
            toast({
                title: "Success",
                description: "Sukses menyimpan data Bank/E-Wallet Anda",
                duration: 3000,
                position: "top-right",
                isClosable: true,
                status: "success"
            });
            setTimeout(() => {
                const location = window.location;
                location.reload();
            }, 3000);
        } catch(e){
            if(axios.isAxiosError<BankResponse>(e)){
                toast({
                    title: "Error from server",
                    description: e.response?.data.message ?? "Internal Server Error",
                    duration: 3000,
                    position: "top-right",
                    isClosable: true,
                    status: "error"
                });
            }
        } finally{
            setLoadCreate(false);
        }
    };

    const deleteHandler = async () => {
        try{
            setLoadDelete(true);
            await api.delete(`/bank/delete/${choosenId}`, {
                headers: {
                    Authorization: `Bearer ${getJwtAgenTravel()}`
                }
            })
            toast({
                title: "Success",
                description: "Sukses menghapus data Bank/E-Wallet Anda",
                duration: 3000,
                position: "top-right",
                isClosable: true,
                status: "success"
            });
            setTimeout(() => {
                const location = window.location;
                location.reload();
            }, 3000);
        } catch(e){
            if(axios.isAxiosError<BankResponse>(e)){
                toast({
                    title: "Error from server",
                    description: e.response?.data.message ?? "Internal Server Error",
                    duration: 3000,
                    position: "top-right",
                    isClosable: true,
                    status: "error"
                });
            }
        } finally{
            setLoadDelete(false);
        }
    };

    const updateHandler = async () => {
        try{
            setLoadUpdate(true);
            await api.patch(`/bank/update/${choosenId}`, {
                "nama" : choosenNama,
                "nomorRekening" : choosenNoRek,
                "provider" : choosenProvider
            },{
                headers: {
                    Authorization: `Bearer ${getJwtAgenTravel()}`
                }
            })
            toast({
                title: "Success",
                description: "Sukses mengupdate data Bank/E-Wallet Anda",
                duration: 3000,
                position: "top-right",
                isClosable: true,
                status: "success"
            });
            setTimeout(() => {
                const location = window.location;
                location.reload();
            }, 3000);
        } catch(e){
            if(axios.isAxiosError<BankResponse>(e)){
                toast({
                    title: "Error from server",
                    description: e.response?.data.message ?? "Internal Server Error",
                    duration: 3000,
                    position: "top-right",
                    isClosable: true,
                    status: "error"
                });
            }
        } finally{
            setLoadUpdate(false);
        }
    }

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
        if(currentPage == 1){
            if(!agenTravel.sudahLengkapiProfil){
                showedElement = 
                <Box>
                    <DashboardAgen props={{
                        flexDir: "column",
                        position: "relative",
                        bottom: "28rem",
                        left: "25rem"
                    }}/>
                    <LengkapiProfil props={{
                         flexDir: "column",
                         position: "relative",
                         bottom: "25rem",
                         left: "25rem",
                         gap: {"lg" : "1rem"}
                    }}/>
                    <ArahkanPremium props={{
                        width: {"lg" : "60%"},
                        borderRadius: "8px",
                        border: "1px solid #E0E6ED",
                        position: "relative",
                        bottom: "19rem",
                        left: "25rem",
                        gap: {"lg" : "1rem"},
                        paddingX: {"lg" : "5rem"},
                        paddingY: {"lg" : "2rem"},
                    }}/>
                </Box>;
            } else {
                showedElement = 
                <Flex position="relative" bottom="31rem" left="31rem" flexDir="column" gap="1.5rem">
                    <Text fontFamily={fontFamily} fontWeight={600} fontSize={{"lg" : "1.75rem"}}>
                        Bank/E-Wallet Saya
                    </Text>
                    <BankCardComponent image={kreditCard} data={
                        <Flex alignSelf="center">
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "1.25rem"}}
                            color="#0053AD">
                            + Tambah Rekening Bank/E-Wallet Anda Disini
                            </Text>
                        </Flex>
                    } onClick={() => {
                        setCurrentPage(2);
                        setPageType("create");
                    }}/>
                    <Text fontFamily={fontFamily} color="#89939E" fontSize="0.7rem" fontWeight={400}>
                    *Tambahkan minimal 1 akun bank atau e-wallet anda agar dana hasil penjualan paket wisata anda dapat kami transfer
                    </Text>
                    {bank}
                </Flex>;
            }
        } else {
            if(pageType === "create"){
                showedElement = 
                <Flex flexDir="column" position="relative" bottom="31rem" left="31rem">
                    <Button _hover={{"backgroundColor" : undefined}} backgroundColor="white" width={{"lg" : "15%"}} onClick={() => {setCurrentPage(1)}}>
                        <Flex marginRight={{"lg" : "3rem"}} gap={{"lg" : "1rem"}} paddingY={{"lg" : "1rem"}}>
                            <ChevronLeftIcon w={{"lg" : "10"}} h={{"lg" : "10"}}/>
                            <Text fontFamily={fontFamily} fontSize={{"lg" : "1.75rem"}} fontWeight={600}>
                                Kembali
                            </Text>
                        </Flex>
                    </Button>
                    <Flex flexDir="column" gap={{"lg" : "0.5rem"}}>
                        <InputSinta description="Nama Lengkap" notes="Masukkan nama lengkap sesuai dengan akun bank/e-wallet anda disini" placeholder="Masukkan nama lengkap Anda" width="60%" type="text" value={nama} onChange={(e) => {setNama(e.currentTarget.value)}} additionalProps={{marginBottom: {"lg" : undefined}}}/>
                        <InputSinta description="No Rekening/E-Wallet" notes="Masukkan no rekening/e-wallet sesuai dengan nama yang anda masukkan diatas" placeholder="Masukkan nomor rekening atau e-wallet Anda" width="60%" type="text" value={noRek} onChange={(e) => {setNoRek(e.currentTarget.value)}}/>
                        <Flex flexDir="column" gap={{"lg" : "1rem"}}>
                            <Text fontFamily={fontFamily} fontSize={{"lg" : "1rem"}} fontWeight={600}>
                            Pilih Provider Bank/E-wallet <Text as="span" color="#E12C1F" fontWeight={400} fontSize={{"lg" : "1rem"}}>*</Text>
                            </Text>
                            <Select width={{"lg" : "60%"}}value={provider} placeholder="Pilih provider dan cari nama bank/e-wallet anda disini" onChange={(e) => {setProvider(e.currentTarget.value as Provider)}}>
                                <option value="Gopay">Gopay</option>
                                <option value="Ovo">Ovo</option>
                                <option value="Dana">Dana</option>
                                <option value="Shopeepay">Shopeepay</option>
                            </Select>
                            <Button backgroundColor="#0053AD" width={{"lg" : "60%"}} _hover={{"backgroundColor" : undefined}} onClick={submitCreateBankHandler} isLoading={loadCreate}>
                                <Text fontFamily={fontFamily} fontSize={{"lg" : "0.875rem"}} color="white">
                                    Simpan Akun Bank/E-Wallet
                                </Text>
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>;
            } else {
                showedElement =
                <Flex flexDir="column" position="relative" bottom="31rem" left="31rem">
                    <Button _hover={{"backgroundColor" : undefined}} backgroundColor="white" width={{"lg" : "15%"}} onClick={() => {setCurrentPage(1)}}>
                        <Flex marginRight={{"lg" : "3rem"}} gap={{"lg" : "1rem"}} paddingY={{"lg" : "1rem"}}>
                            <ChevronLeftIcon w={{"lg" : "10"}} h={{"lg" : "10"}}/>
                            <Text fontFamily={fontFamily} fontSize={{"lg" : "1.75rem"}} fontWeight={600}>
                                Kembali
                            </Text>
                        </Flex>
                    </Button>
                    <Flex flexDir="column" gap={{"lg" : "0.5rem"}}>
                        <InputSinta description="Nama Lengkap" notes="Masukkan nama lengkap sesuai dengan akun bank/e-wallet anda disini" placeholder="Masukkan nama lengkap Anda" width="60%" type="text" value={choosenNama} onChange={(e) => {setChoosenNama(e.currentTarget.value)}} additionalProps={{marginBottom: {"lg" : undefined}}}/>
                        <InputSinta description="No Rekening/E-Wallet" notes="Masukkan no rekening/e-wallet sesuai dengan nama yang anda masukkan diatas" placeholder="Masukkan nomor rekening atau e-wallet Anda" width="60%" type="text" value={choosenNoRek} onChange={(e) => {setChoosenNoRek(e.currentTarget.value)}}/>
                        <Flex flexDir="column" gap={{"lg" : "1rem"}}>
                            <Text fontFamily={fontFamily} fontSize={{"lg" : "1rem"}} fontWeight={600}>
                            Pilih Provider Bank/E-wallet <Text as="span" color="#E12C1F" fontWeight={400} fontSize={{"lg" : "1rem"}}>*</Text>
                            </Text>
                            <Select width={{"lg" : "60%"}} value={choosenProvider} placeholder="Pilih provider dan cari nama bank/e-wallet anda disini" onChange={(e) => {setChoosenProvider(e.currentTarget.value as Provider)}}>
                                <option value="Gopay">Gopay</option>
                                <option value="Ovo">Ovo</option>
                                <option value="Dana">Dana</option>
                                <option value="Shopeepay">Shopeepay</option>
                            </Select>
                            <Flex width="100%" gap={{"lg" : "1rem"}}>
                                <Button backgroundColor="#EF473A" width={{"lg" : "30%"}} _hover={{"backgroundColor" : undefined}} onClick={deleteHandler} isLoading={loadDelete}>
                                    <Text fontFamily={fontFamily} fontSize={{"lg" : "0.875rem"}} color="white">
                                        Hapus Akun Bank/E-Wallet
                                    </Text>
                                </Button>
                                <Button backgroundColor="#0053AD" width={{"lg" : "30%"}} _hover={{"backgroundColor" : undefined}} onClick={updateHandler} isLoading={loadUpdate}>
                                    <Text fontFamily={fontFamily} fontSize={{"lg" : "0.875rem"}} color="white">
                                        Simpan Akun Bank/E-Wallet
                                    </Text>
                                </Button>
                            </Flex>
                        </Flex>
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
};

const BankCardComponent = ({image, data, onClick, index}: {image: string, index?: number, data: JSX.Element | Bank, onClick?: () => void}) => {
    if("id" in data){
        data = data as Bank;
        return(
            <Box>
                <Button paddingY={{"lg" : "1rem"}} width="40%" _hover={{backgroundColor: undefined}} backgroundColor="white" height="max-content" boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)" borderRadius="8px" border="1px solid #E0E6ED" onClick={onClick}>
                    <Flex gap={{"lg" : "0.5rem"}} width={{"lg" : "100%"}}>
                        <Box width={{"lg" : "20%"}}>
                            <Image src={image} maxWidth="100%"/>
                        </Box>
                        <Flex flexDir="column" gap={{"lg" : "0.5rem"}}>
                            <Text fontFamily={fontFamily} fontSize={{"lg" : "1.25rem"}} color="#0053AD">
                                {data.provider}
                            </Text>
                            <Text fontFamily={fontFamily} fontSize={{"lg" : "0.875rem"}} color="#89939E">
                                A.N {data.nama}
                            </Text>
                            <Text fontFamily={fontFamily} fontSize={{"lg" : "0.875rem"}} color="#89939E">
                                {data.nomorRekening}
                            </Text>
                        </Flex>
                    </Flex>
                </Button>
            </Box>
        );
    } else {
        return(
            <Box>
                <Button width="40%" _hover={{backgroundColor: undefined}} backgroundColor="white" boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)" borderRadius="8px" border="1px solid #E0E6ED" paddingY={{"lg" : "3rem"}} onClick={onClick}>
                    <Flex gap={{"lg" : "1rem"}}>
                        <Box width={{"lg" : "30%"}} marginY={{"lg" : "1rem"}}>
                            <Image src={image} maxWidth="100%"/>
                        </Box>
                        <Box marginY={{"lg" : "1.75rem"}}>
                            {data as JSX.Element}
                        </Box>
                    </Flex>
                </Button>
            </Box>
        );
    }
};

export default AgenTravelBankSayaPage;
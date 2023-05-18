import { useEffect, useState } from "react";
import DropDown from "../components/dropdown";
import LengkapiProfil, { ArahkanPremium, LengkapiBank } from "../components/lengkapi_profil";
import Navbar from "../components/navbar";
import { getAgenTravel, getJwtAgenTravel } from "../util/auth_util";
import { TipeAgenTravelPage } from "./AgenTravelHomePage";
import { Box, Button, Flex, Image, SkeletonCircle, SkeletonText, Text, useToast } from "@chakra-ui/react";
import { Portofolio, PortofolioResponse } from "../response/portofolio";
import api from "../api/api";
import { fontFamily } from "../style/font";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import belumAdaPortofolio from "../images/agen_travel_home/belum_ada_portofolio.png";
import MyEditor from "../components/editor/myeditor";
import axios from "axios";

const AgenTravelPortofolioPage = ({type}: {type: TipeAgenTravelPage}) => {
    const agenTravel = getAgenTravel();
    const [text, setText] = useState<string>("");
    const [portofolios, setPortolios] = useState<Portofolio[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const [pageType, setPageType] = useState<"create" | "update">("create");
    const [currentPosition, setCurrentPosition] = useState<1 | 2 | 3>(1);
    let showedElement: JSX.Element;
    const toast = useToast();
    const [loadPostPortofolio, setLoadPostPortofolio] = useState<boolean>(false);
    console.log(`text.length = ${text.length}`);

    useEffect(() => {
        setLoad(true);
        const fetchData = async () => {
            const result = await api.get<PortofolioResponse>(`/portofolio/get/${agenTravel.id}`);
            setPortolios(result.data.data?.portofolio as Portofolio[]);
            setLoad(false);
        };

        fetchData();
    }, []);

    const uploadPortofolio = () => {
        setLoadPostPortofolio(true);
        const postData = async () => {
            try{
                await api.post("/portofolio/create", {
                    "text" : text
                }, {
                    headers: {
                        Authorization: `Bearer ${getJwtAgenTravel()}`
                    }
                });
                toast({
                    description: "Sukses menyimpan data portofolio",
                    title: "Sukses",
                    duration: 2000,
                    isClosable: true,
                    status: "success",
                    position: "top-right"
                });
                setTimeout(() => {
                    const location = window.location;
                    location.reload();
                }, 3000);
            } catch(e){
                if(axios.isAxiosError<PortofolioResponse>(e)){
                    toast({
                        description: e.response?.data.message ?? "Kesalahan internal server",
                        title: "Gagal",
                        duration: 3000,
                        isClosable: true,
                        status: "error",
                        position: "top-right"
                    });
                }
            } finally{
                setLoadPostPortofolio(false);
            }
        };

        postData();
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
    } else{
        if(currentPosition == 1){
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
                    if(portofolios.length == 0){
                        showedElement = 
                        <Flex position="relative" bottom="31rem" left="31rem" width={{"lg" : "100%"}}>
                            {
                               portofolios.length == 0 && 
                               <Flex flexDir="column" width={{"lg" : "100%"}}>
                                    <Text 
                                    fontFamily={fontFamily}
                                    fontSize="1.75rem"
                                    fontWeight={600}>
                                        Portofolio
                                    </Text>
                                    <Flex flexDir="column" width={{"lg" : "50%"}}>
                                        <Image alignSelf="center" width={{"lg" : "60%"}} src={belumAdaPortofolio}/>
                                        <Flex flexDir="column" gap="1rem">
                                            <Text 
                                            fontFamily={fontFamily}
                                            fontSize="1.25rem"
                                            fontWeight={600}
                                            alignSelf="center">
                                                Belum Ada Portofolio
                                            </Text>
                                            <Text 
                                            fontSize={{"lg" : "1.125rem"}}
                                            fontWeight={400}
                                            color="#717171"
                                            alignSelf="center">
                                                Saat ini anda belum mempublish portofolio sama sekali :(
                                            </Text>
                                            <Button
                                            backgroundColor="#0053AD"
                                            borderRadius="50px"
                                            width={{"lg" : "50%"}}
                                            alignSelf="center"
                                            _hover={{backgroundColor: undefined}}
                                            onClick={() => {
                                                setCurrentPosition(2);
                                                setPageType("create");
                                            }}>
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
                            }
                        </Flex>
                    } else {
                        showedElement = 
                        <Flex
                        flexDir="column"
                        position="relative"
                        left={{"lg" : "31rem"}}
                        bottom={{"lg" : "31rem"}}>
                            <Flex
                            marginY={{"lg" : "1rem"}}>
                                <Text 
                                fontFamily={fontFamily}
                                fontSize={{"lg" : "1.25rem"}}
                                fontWeight={600}>
                                    Portofolio
                                </Text>
                            </Flex>
                            <Flex
                            border="1px solid #E0E6ED"
                            borderRadius="8px"
                            boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)"
                            flexDir="column"
                            paddingX={{"lg" : "2rem"}}
                            paddingY={{"lg" : "2rem"}}
                            width={{"lg" : "50%"}}
                            gap={{"lg" : "2rem"}}>
                                <Flex
                                flexDir="column"
                                gap={{"lg" : "1rem"}}>
                                    <Text 
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "1rem"}}
                                    fontWeight={600}>
                                    Portofolio {agenTravel.nama} Travel
                                    </Text>
                                    <Text 
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "0.875rem"}}
                                    fontWeight={600}
                                    color="#4D4D4D">
                                        Tanggal Publikasi: {portofolios[0].createdAt}
                                    </Text>
                                    <Text 
                                    fontFamily={fontFamily}
                                    fontSize={{"lg" : "0.875rem"}}
                                    fontWeight={600}
                                    color="#4D4D4D">
                                        Terakhir Diedit: {portofolios[0].updatedAt}
                                    </Text>
                                </Flex>
                                <Button
                                _hover={{backgroundColor: undefined}}
                                backgroundColor="#0053AD"
                                borderRadius="8px">
                                    <Text
                                    fontFamily={fontFamily}
                                    color="white"
                                    fontSize={{"lg" : "0.875rem"}}>
                                        Update Portofolio
                                    </Text>
                                </Button>
                            </Flex>
                        </Flex>
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
        } else if(currentPosition == 2){
            if(pageType === "create"){
                showedElement = 
                <Flex>
                    <Navbar type="other" typeUser="agentravel"/>
                    <Flex
                    position="relative"
                    top={{"lg" : "8rem"}}
                    left={{"lg" : "5rem"}}
                    flexDir="column"
                    width={{"lg" : "100%"}}>
                        <Flex>
                            <Button onClick={() => {setCurrentPosition(1)}} backgroundColor="white" _hover={{backgroundColor: undefined}}>
                                <Text
                                fontFamily={fontFamily}
                                fontSize={{"lg" : "1.25rem"}}
                                fontWeight={600}>
                                    <ChevronLeftIcon/> Kembali
                                </Text>
                            </Button>
                        </Flex>
                        <Flex
                        flexDir="column"
                        width={{"lg" : "90%"}}
                        gap={{"lg" : "1rem"}}>
                            <Text
                            fontFamily={fontFamily}
                            fontWeight={600}
                            fontSize={{"lg" : "0.875rem"}}>
                            Silahkan lengkapi informasi portofolio usaha anda 
                            </Text>
                            <MyEditor state={text} setState={setText}/>
                            <Flex
                            flexDir="column">
                                <Button onClick={uploadPortofolio} isLoading={loadPostPortofolio} _hover={{backgroundColor: undefined}} isDisabled={text.length == 0} width={{"lg" : "90%"}} backgroundColor={text.length == 0? "#E0E6ED" : "#0053AD"}>
                                    <Text
                                    fontSize={{"lg" : "0.875rem"}}
                                    color={text.length == 0? "#717171" : "white"}
                                    fontFamily={fontFamily}>
                                        Upload Portofolio
                                    </Text>
                                </Button>
                                <Text
                                fontSize={{"lg" : "0.875rem"}}
                                color="#717171"
                                fontFamily={fontFamily}>
                                    *tombol upload portofolio akan aktif apabila anda telah mengisi informasi tentang portofolio anda
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            } else {
                showedElement = 
                <Flex>
                    <Flex>
                        <Button onClick={() => {setCurrentPosition(2)}}>
                            <Text
                            fontFamily={fontFamily}
                            fontSize={{"lg" : "1.25rem"}}
                            fontWeight={600}>
                                <ChevronLeftIcon/> Kembali
                            </Text>
                        </Button>
                    </Flex>
                </Flex>
            }
            return(
                <>
                {showedElement}
                </>
            );
        } else {
            showedElement = <></>;
            return(
                <>
                    {showedElement}
                </>
            );
        }
    }
};

export default AgenTravelPortofolioPage;
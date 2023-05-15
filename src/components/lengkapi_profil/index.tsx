import { Button, Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import { fontFamily } from "../../style/font";
import woman from "../../images/agen_travel_home/woman.png";
import { useNavigate } from "react-router-dom";

export const DashboardAgen = ({props}: {props?: FlexProps}) => {
    return(
        <Flex {...props}>
            <Text
            fontFamily={fontFamily}
            fontSize="1.75rem"
            fontWeight={600}>
                Dashboard Agen
            </Text>
            <Text
            fontFamily={fontFamily}
            fontSize="1.125rem"
            fontWeight={400}
            color="#717171">
            Halo, Selamat datang di task management dashboard agen
            </Text>
        </Flex>
    );
};

const LengkapiProfil = ({props}: {props: FlexProps}) => {
    const navigate = useNavigate();
    return(
        <Flex {...props}>
            <Flex flexDir="column">
                <Text
                fontFamily={fontFamily}
                fontSize="1.75rem"
                fontWeight={600}>
                    Lengkapi Profilmu Sekarang
                </Text>
                <Text
                fontFamily={fontFamily}
                fontSize="1.125rem"
                fontWeight={400}
                color="#717171">
                    Lengkapi informasi profilmu sekarang agar bisa mempublish paket wisata dan portofoliomu
                </Text>
            </Flex>
            <Flex>
                <Button backgroundColor="#0053AD" onClick={() => {navigate("/agentravel/profil")}}>
                    <Text
                    fontFamily={fontFamily}
                    color="white">
                        Lengkapi sekarang
                    </Text>
                </Button>
            </Flex>
        </Flex>
    );
};

export const ArahkanPremium = ({props}: {props: FlexProps}) => {
    const navigate = useNavigate();
    return(
        <Flex {...props}>
            <Image src={woman} maxWidth="100%"/>
            <Flex flexDir="column" width={{"lg" : "60%"}} gap={{"lg" : "2rem"}}>
                <Flex flexDir="column" gap={{"lg" : "1rem"}}>
                    <Text
                    fontFamily={fontFamily}
                    fontSize="1.75rem"
                    fontWeight={600}>
                        Ingin publish portofolio dan paket trip tanpa batasan jumlah? Langganan premium solusinya
                    </Text>
                    <Text
                    fontFamily={fontFamily}
                    fontSize="1.125rem"
                    fontWeight={400}
                    color="#717171">
                        Dapatkan kebebasan mempublish paket wisata dan juga portofoliomu tanpa batasan jumlah dengan durasi waktu tertentu sesuai paket premium pilihanmu.
                    </Text>
                </Flex>
                <Flex>
                    <Button backgroundColor="#0053AD" onClick={() => {navigate("/agentravel/premium")}}>
                        <Text
                        fontFamily={fontFamily}
                        color="white">
                            Lihat Layanan Premium
                        </Text>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};

export const LengkapiBank = ({props}: {props: FlexProps}) => {
    const navigate = useNavigate();
    return(
        <Flex {...props}>
            <Flex flexDir="column">
                <Text
                fontFamily={fontFamily}
                fontSize="1.75rem"
                fontWeight={600}>
                    Lengkapi Akun Bank/E-Walletmu Sekarang
                </Text>
                <Text
                fontFamily={fontFamily}
                fontSize="1.125rem"
                fontWeight={400}
                color="#717171">
                    Lengkapi informasi bankmu sekarang agar bisa mempublish paket wisata dan portofoliomu
                </Text>
            </Flex>
            <Flex>
                <Button backgroundColor="#0053AD" onClick={() => {navigate("/agentravel/bank")}}>
                    <Text
                    fontFamily={fontFamily}
                    color="white">
                        Lengkapi sekarang
                    </Text>
                </Button>
            </Flex>
        </Flex>
    );
};

export default LengkapiProfil;
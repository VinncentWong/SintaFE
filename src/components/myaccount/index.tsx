import { Box, Flex, FlexProps, Image, Select, Text } from "@chakra-ui/react";
import myaccount from "../../images/pemesanan/myaccount.png";
import { fontFamily } from "../../style/font";
import PemesananPaketWisataContext from "../../context/PemesananPaketWisataContext";
import { ChangeEvent, useContext, useState } from "react";
import InputSinta from "../input";
import { User } from "../../response/response";

const MyAccount = ({additionalChange}: {additionalChange?: FlexProps}) => {

    const context = useContext(PemesananPaketWisataContext);
    const user = JSON.parse(localStorage.getItem("user") as string) as User;
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [nama, setNama] = useState<string>(user.nama);
    const [nomorKtp, setNomorKtp] = useState<string>(user.nomorKtp ?? "");
    const [nomorTelepon, setNomorTelepon] = useState<string>(user.noTelp);

    return(
        <Flex
        boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)"
        border="1px solid #E0E6ED"
        borderRadius="16px"
        flexDir="column"
        {...additionalChange}>
            <Flex width={{"lg" : "100%"}} marginX={{"lg" : "2rem"}} marginTop={{"lg" : "1rem"}}>
                <Image src={myaccount}/>
                <Text 
                fontFamily={fontFamily}
                fontWeight={600}
                fontSize={{"lg" : "1.25rem"}}
                width={{"lg" : "100%"}}>
                    Detail Pemesanan
                </Text>
            </Flex>
            <Flex marginX={{"lg" : "2rem"}} marginTop={{"lg" : "1rem"}}>
                <Flex
                flexDir="column"
                gap={{"lg" : "0.5rem"}}
                justifyContent={{"lg" : "center"}}
                marginX={{"lg" : "1rem"}}>
                    <Text 
                    fontFamily={fontFamily}
                    fontWeight={500}
                    fontSize={{"lg" : "1rem"}}>Titel<span style={{color: "#E12C1F"}}>*</span></Text>
                    <Select placeholder="Titel" value={selectedOption} onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                        context.onTitelChange(e);
                        setSelectedOption(e.currentTarget.value);
                    }}>
                        <option>Tuan</option>
                        <option>Nyonya</option>
                        <option>Nona</option>
                    </Select>
                </Flex>
                <InputSinta
                description="Nama Lengkap"
                notes="Gunakan nama lengkap anda sesuai dengan KTP/Paspor/SIM"
                onChange={(e) => {
                    context.onNamaChange(e);
                    setNama(e.currentTarget.value);
                }}
                value={nama}
                placeholder=""
                type="text"
                width="97%"
                additionalProps={{marginBottom: {"lg" : undefined}}}/>
            </Flex>
            <Flex marginLeft={{"lg" : "3rem"}} marginBottom={{"lg" : "1rem"}}>
                <InputSinta
                description="Email"
                notes="E-ticket akan dikirimkan ke alamat Email ini"
                placeholder=""
                value={user.email}
                width="100%"
                isDisable
                type="email"
                additionalProps={{width: {"lg" : "93%"}, marginTop: {"lg" : undefined}, marginBottom: {"lg" : undefined}}}
                />
            </Flex>
            <Flex marginX={{"lg" : "3rem"}}>
                <InputSinta
                description="Nomor KTP"
                notes="Pastikan Anda memasukkan nomor KTP Anda yang valid"
                placeholder=""
                value={nomorKtp}
                onChange={(e) => {
                    context.onNomorKtpChange(e);
                    setNomorKtp(e.currentTarget.value);
                }}
                additionalProps={{marginTop: {"lg" : undefined}, width: {"lg" : "100%"}}}
                width="100%"
                type="text"
                />
            </Flex>
            <Flex marginX={{"lg" : "3rem"}}>
                <InputSinta
                description="Nomor Telepon"
                placeholder=""
                width="100%"
                value={nomorTelepon}
                onChange={(e) => {
                    context.onNomorTeleponChange(e);
                    setNomorTelepon(e.currentTarget.value);
                }}
                notes="Gunakan format 08 dalam memasukkannya. Contoh: 081234567890"
                type="text"
                additionalProps={{marginTop: {"lg" : undefined}, marginBottom: {"lg" : "2rem"}}}
                />
            </Flex>
        </Flex>
    )
};

export default MyAccount;
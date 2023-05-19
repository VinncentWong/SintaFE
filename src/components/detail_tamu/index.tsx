import { Box, Flex, Image, Select, Text } from "@chakra-ui/react";
import detailTamu from "../../images/pemesanan/detailtamu.png";
import { fontFamily } from "../../style/font";
import InputSinta from "../input";
import { useContext, useMemo } from "react";
import randomNumber from "../../util/random";
import PemesananPaketWisataContext from "../../context/PemesananPaketWisataContext";

type TipeOrang = "dewasa" | "anak" | "bayi";

interface DetailTamuInputProps{
    index: number,
    tipe: TipeOrang,

}

const DetailTamuInput = ({index, tipe}: DetailTamuInputProps) => {
    const context = useContext(PemesananPaketWisataContext);
    const namaAnakValue = context.namaAnaks[index];
    const namaBayiValue = context.namaBayis[index];
    const namaDewasaValue = context.namaDewasas[index];
    const tanggalAnakValue = context.tanggalAnaks[index];
    const tanggalBayiValue = context.tanggalBayis[index];
    const tanggalDewasaValue = context.tanggalDewasas[index];
    const optionAnakValue = context.titelAnaks[index];
    const optionBayiValue = context.titelBayis[index];
    const optionDewasaValue = context.titelDewasas[index];
    const namaDepanAnakTengahValue = context.namaDepanTengahAnaks[index];
    const namaDepanBayiTengahValue = context.namaDepanTengahBayis[index];
    const namaDepanDewasaTengahValue = context.namaDepanTengahDewasas[index];
    const namaBelakangAnakValue = context.namaBelakangAnaks[index];
    const namaBelakangDewasaValue = context.namaBelakangDewasas[index];
    const namaBelakangBayiValue = context.namaBelakangBayis[index];
    const nomorPasporAnakValue = context.nomorPasporAnaks[index];
    const nomorPasporBayiValue = context.nomorPasporBayis[index];
    const nomorPasporDewasaValue = context.nomorPasporDewasas[index];
    const tanggalHabisBerlakuAnakValue = context.tanggalHabisBerlakuAnaks[index];
    const tanggalHabisBerlakuBayiValue = context.tanggalHabisBerlakuBayis[index];
    const tanggalHabisBerlakuDewasaValue = context.tanggalHabisBerlakuDewasas[index];
    const tipePaketWisata = context.tipePaketWisata;
    if(tipePaketWisata === "luar_negeri"){
        return(
        <Box marginY={{"lg" : "2rem"}} width={{"lg" : "100%"}}>
            <Flex>
            <Box
            backgroundColor="#EDF6FF"
            borderRadius="8px"
            width={{"lg" : "100%"}}
            paddingLeft={{"lg" : "1rem"}}
            paddingY={{"lg" : "0.5rem"}}>
                <Text
                fontFamily={fontFamily}
                color="#0053AD"
                fontWeight={600}
                fontSize={{"lg" : "1.25rem"}}>
                Penumpang {index + 1}: {tipe}
                </Text>
            </Box>
            </Flex>
            <Flex marginX={{"lg" : "2rem"}} width={{"lg" : "100%"}}>
                <Flex
                flexDir="column"
                gap={{"lg" : "0.5rem"}}
                justifyContent={{"lg" : "center"}}
                marginX={{"lg" : "1rem"}}
                width={{"lg" : "30%"}}>
                    <Text 
                    fontFamily={fontFamily}
                    fontWeight={500}
                    fontSize={{"lg" : "1rem"}}>Titel<span style={{color: "#E12C1F"}}>*</span></Text>
                    <Select placeholder="Titel" value={tipe == "anak"? optionAnakValue : tipe == "bayi"? optionBayiValue : optionDewasaValue} onChange={(e) => {
                        switch(tipe){
                            case "anak":
                                context.onTitelAnaksChange(e, index);
                                break;
                            case "bayi":
                                context.onTitelBayisChange(e, index);
                                break;
                            case "dewasa":
                                context.onTitelDewasasChange(e, index);
                                break;
                        }
                    }}>
                        <option>Tuan</option>
                        <option>Nyonya</option>
                        <option>Nona</option>
                    </Select>
                </Flex>
                <InputSinta
                description="Nama Depan & Tengah"
                notes="Gunakan nama depan dan tengah anda sesuai dengan KTP/Paspor/SIM"
                onChange={(e) => {
                    switch(tipe){
                        case "anak":
                            context.onNamaDepanTengahAnaksChange(e, index);
                            break;
                        case "bayi":
                            context.onNamaDepanTengahBayisChange(e, index);
                            break;
                        case "dewasa":
                            context.onNamaDepanTengahDewasasChange(e, index);
                            break;
                    }
                }}
                value={tipe == "anak"? namaDepanAnakTengahValue : tipe == "bayi"? namaDepanBayiTengahValue : namaDepanDewasaTengahValue}
                placeholder="Masukkan nama depan dan tengah anda disini"
                type="text"
                width="97%"
                additionalProps={{marginBottom: {"lg" : undefined}}}/>
            </Flex>
            <Flex marginX={{"lg" : "3rem"}}>
                <InputSinta
                description="Nama Belakang"
                notes="Gunakan nama belakang anda sesuai dengan KTP/Paspor/SIM"
                onChange={(e) => {
                    switch(tipe){
                        case "anak":
                            context.onNamaBelakangAnaksChange(e, index);
                            break;
                        case "bayi":
                            context.onNamaBelakangBayisChange(e, index);
                            break;
                        case "dewasa":
                            context.onNamaBelakangDewasasChange(e, index);
                            break;
                    }
                }}
                value={tipe == "anak"? namaBelakangAnakValue : tipe == "bayi"? namaBelakangBayiValue : namaBelakangDewasaValue}
                placeholder="Masukkan nama belakang anda disini"
                type="text"
                width="100%"
                additionalProps={{marginBottom: {"lg" : undefined}}}/>
            </Flex>
            <Flex marginX={{"lg" : "3rem"}} alignItems="center" gap="1rem">
                <InputSinta
                description="Tanggal Lahir"
                notes="Gunakan nama lengkap anda sesuai dengan KTP/Paspor/SIM"
                onChange={(e) => {
                    switch(tipe){
                        case "anak":
                            context.onTanggalAnaksChange(e, index);
                            break;
                        case "bayi":
                            context.onTanggalBayisChange(e, index);
                            break;
                        case "dewasa":
                            context.onTanggalDewasasChange(e, index);
                            break;
                    }
                }}
                value={tipe == "anak"? tanggalAnakValue : tipe == "bayi"? tanggalBayiValue : tanggalDewasaValue}
                placeholder="Masukkan tanggal lahir Anda"
                type="date"
                width="100%"
                additionalProps={{marginBottom: {"lg" : undefined}, width: {"lg" : "80%"}}}
                />
                <InputSinta
                description="Kewarganegaraan"
                notes="Kewarganegaraan tersedia sementara hanya Indonesia"
                placeholder=""
                value="Indonesia"
                width="100%"
                isDisable
                type="email"
                additionalProps={{width: {"lg" : "93%"}, marginTop: {"lg" : undefined}, marginBottom: {"lg" : undefined}}}
                />
            </Flex>
            <Flex marginX={{"lg" : "3rem"}} alignItems="center" gap="1rem">
                <InputSinta
                description="Nomor Paspor"
                notes="Paspor harus berlaku diatas 6 bulan dari keberangkatan"
                onChange={(e) => {
                    switch(tipe){
                        case "anak":
                            context.onNomorPasporAnaksChange(e, index);
                            break;
                        case "bayi":
                            context.onNomorPasporBayisChange(e, index);
                            break;
                        case "dewasa":
                            context.onNomorPasporDewasasChange(e, index);
                            break;
                    }
                }}
                value={tipe == "anak"? nomorPasporAnakValue : tipe == "bayi"? nomorPasporBayiValue : nomorPasporDewasaValue}
                placeholder="Masukkan nomor paspor anda disini"
                type="text"
                width="100%"
                additionalProps={{marginBottom: {"lg" : undefined}, width: {"lg" : "100%"}}}
                />
                <InputSinta
                description="Tanggal Habis Berlaku"
                notes="Pastikan tanggal yang dipilih benar"
                onChange={(e) => {
                    switch(tipe){
                        case "anak":
                            context.onTanggalHabisBerlakuAnaksChange(e, index);
                            break;
                        case "bayi":
                            context.onTanggalHabisBerlakuBayisChange(e, index);
                            break;
                        case "dewasa":
                            context.onTanggalHabisBerlakuDewasasChange(e, index);
                            break;
                    }
                }}
                value={tipe == "anak"? tanggalHabisBerlakuAnakValue : tipe == "bayi"? tanggalHabisBerlakuBayiValue : tanggalHabisBerlakuDewasaValue}
                placeholder=""
                type="date"
                width="100%"
                additionalProps={{marginBottom: {"lg" : undefined}, width: {"lg" : "80%"}}}
                />
            </Flex>
        </Box>
        );
    } else {
        return(
            <Box marginY={{"lg" : "2rem"}} width={{"lg" : "100%"}}>
                <Flex>
                <Box
                backgroundColor="#EDF6FF"
                borderRadius="8px"
                width={{"lg" : "100%"}}
                paddingLeft={{"lg" : "1rem"}}
                paddingY={{"lg" : "0.5rem"}}>
                    <Text
                    fontFamily={fontFamily}
                    color="#0053AD"
                    fontWeight={600}
                    fontSize={{"lg" : "1.25rem"}}>
                    Penumpang {index + 1}: {tipe}
                    </Text>
                </Box>
                </Flex>
                <Flex marginX={{"lg" : "2rem"}} width={{"lg" : "100%"}}>
                    <Flex
                    flexDir="column"
                    gap={{"lg" : "0.5rem"}}
                    justifyContent={{"lg" : "center"}}
                    marginX={{"lg" : "1rem"}}
                    width={{"lg" : "30%"}}>
                        <Text 
                        fontFamily={fontFamily}
                        fontWeight={500}
                        fontSize={{"lg" : "1rem"}}>Titel<span style={{color: "#E12C1F"}}>*</span></Text>
                        <Select placeholder="Titel" value={tipe == "anak"? optionAnakValue : tipe == "bayi"? optionBayiValue : optionDewasaValue} onChange={(e) => {
                            switch(tipe){
                                case "anak":
                                    context.onTitelAnaksChange(e, index);
                                    break;
                                case "bayi":
                                    context.onTitelBayisChange(e, index);
                                    break;
                                case "dewasa":
                                    context.onTitelDewasasChange(e, index);
                                    break;
                            }
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
                        switch(tipe){
                            case "anak":
                                context.onNamaAnaksChange(e, index);
                                break;
                            case "bayi":
                                context.onNamaBayisChange(e, index);
                                break;
                            case "dewasa":
                                context.onNamaDewasasChange(e, index);
                                break;
                        }
                    }}
                    value={tipe == "anak"? namaAnakValue : tipe == "bayi"? namaBayiValue : namaDewasaValue}
                    placeholder="Masukkan nama lengkap Anda"
                    type="text"
                    width="90%"
                    additionalProps={{marginBottom: {"lg" : undefined}}}/>
                </Flex>
                <Flex marginX={{"lg" : "3rem"}}>
                    <InputSinta
                    description="Tanggal Lahir"
                    notes="Gunakan nama lengkap anda sesuai dengan KTP/Paspor/SIM"
                    onChange={(e) => {
                        switch(tipe){
                            case "anak":
                                context.onTanggalAnaksChange(e, index);
                                break;
                            case "bayi":
                                context.onTanggalBayisChange(e, index);
                                break;
                            case "dewasa":
                                context.onTanggalDewasasChange(e, index);
                                break;
                        }
                    }}
                    value={tipe == "anak"? tanggalAnakValue : tipe == "bayi"? tanggalBayiValue : tanggalDewasaValue}
                    placeholder="Masukkan tanggal lahir Anda"
                    type="date"
                    width="100%"
                    additionalProps={{marginBottom: {"lg" : undefined}}}/>
                </Flex>
            </Box>
        );
    }
}

interface DetailTamuProps{
    nDewasa: number, 
    nAnak: number, 
    nBayi: number,

}
const DetailTamu = ({nDewasa, nAnak, nBayi}: DetailTamuProps) => {
    const arrDewasa = useMemo(() => {
        const arrInputDewasa: JSX.Element[] = new Array(nDewasa);
        for(let i = 0 ; i < nDewasa; i++){
            arrInputDewasa[i] = <DetailTamuInput tipe="dewasa" index={i} key={randomNumber()}/>
        }
        return arrInputDewasa;
    }, []);
    const arrAnak = useMemo(() => {
        const arrInputAnak: JSX.Element[] = new Array(nAnak);
        for(let i = 0 ; i < nAnak; i++){
            arrInputAnak[i] = <DetailTamuInput tipe="anak" index={i} key={randomNumber()}/>
        }
        return arrInputAnak;
    }, []);
    const arrBayi = useMemo(() => {
        const arrInputBayi: JSX.Element[] = new Array(nBayi);
        for(let i = 0 ; i < nBayi; i++){
            arrInputBayi[i] = <DetailTamuInput tipe="bayi" index={i} key={randomNumber()}/>
        }
        return arrInputBayi;
    }, []);
    return(
        <Flex 
        boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)" 
        borderRadius="16px" 
        border="1px solid #E0E6ED"
        position="relative"
        top={{"lg" : "11rem"}}
        width={{"lg" : "100%"}}
        marginX={{"lg" : "2rem"}}
        marginY={{"lg" : "2rem"}}>
            <Box marginY={{"lg" : "2rem"}} width={{"lg" : "100%"}}>
                <Flex marginY={{"lg" : "1rem"}} marginLeft={{"lg" : "2rem"}} width={{"lg" : "100%"}}>
                    <Image src={detailTamu} maxWidth={{"lg" : "100%"}}/>
                    <Text
                    fontFamily={fontFamily}
                    color="#212121"
                    fontWeight={600}
                    fontSize={{"lg" : "1.25rem"}}>
                        Detail Tamu
                    </Text>
                </Flex>
                {arrDewasa}
                {arrAnak}
                {arrBayi}
            </Box>

        </Flex>
    );
};

export default DetailTamu;
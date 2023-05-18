import { Flex, Text } from "@chakra-ui/react";
import { fontFamily } from "../../style/font";

interface PaketWisataTitleProps{
    title: string,
    namaAgen: string,
    kotaPenjemputan: string,
    provinsiPenjemputan: string,
    durasiPaketWisata: number,
    tipePaketWisata: "Open" | "Private"
}

const PaketWisataTitle = (
    {title, namaAgen, kotaPenjemputan, provinsiPenjemputan, durasiPaketWisata, tipePaketWisata}
    : PaketWisataTitleProps) => {
    return(
        <Flex
        flexDir="column"
        paddingLeft={{
            "lg" : "5rem"
        }}
        paddingRight={{
            "lg" : "5rem"
        }}
        marginTop={{
            "lg" : "1.5rem"
        }}
        marginBottom={{
            "lg" : "1.5rem"
        }}>
            <Text
            fontFamily={fontFamily}
            fontWeight={600}
            fontSize="1.75rem">{title}</Text>
            <PaketWisataTitleSubtext
            keys="Dipublish Oleh Agen: "
            value={namaAgen}
            valueColor="#0053AD"/>
            <PaketWisataTitleSubtext
            keys="Lokasi Penjemputan: "
            value={`${kotaPenjemputan}${provinsiPenjemputan}`}/>
            <PaketWisataTitleSubtext
            keys="Durasi Paket Wisata: "
            value={`${durasiPaketWisata} hari`}/>
            <PaketWisataTitleSubtext
            keys="Tipe Trip Wisata: "
            value={`${tipePaketWisata} Trip`}/>
        </Flex>
    )
};

interface PaketWisataTitleSubtextProps{
    keys: string,
    keyColor?: string,
    value: string,
    valueColor?: string
}

export const PaketWisataTitleSubtext = (
    {keys, keyColor, value, valueColor}
    : PaketWisataTitleSubtextProps) => {
    if(!keyColor){
        keyColor = "#717171";
    }
    if(!valueColor){
        valueColor = "#717171";
    }
    return(
        <Text
            color={keyColor}
            fontFamily={fontFamily}
            display="inline-block"
            marginTop={{
                "lg" : "0.5rem"
            }}
            marginBottom={{
                "lg" : "0.5rem"
            }}
            >
            <Text
            fontWeight={600}
            color={keyColor}
            fontFamily={fontFamily}
            display="inline-block"
            whiteSpace="pre-wrap">{keys}</Text>
            {valueColor == "#0053AD"? <a href="https://www.google.com">
                    <Text
                    fontWeight={600}
                    color={valueColor}
                    fontFamily={fontFamily}
                    display="inline-block"
                    whiteSpace="pre-wrap">
                    {value}
                    </Text>
                </a> : 
                 <Text
                 fontWeight={600}
                 color={valueColor}
                 fontFamily={fontFamily}
                 display="inline-block"
                 whiteSpace="pre-wrap">
                 {value}
                 </Text>}
            </Text>
    )
};

export default PaketWisataTitle;
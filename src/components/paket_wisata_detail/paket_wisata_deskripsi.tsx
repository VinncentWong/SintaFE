import { Box, Flex, Image, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import deskripsi1 from "../../images/detail_wisata/deskripsi1.png";
import deskripsi2 from "../../images/detail_wisata/deskripsi2.png";
import deskripsi3 from "../../images/detail_wisata/deskripsi3.png";
import { fontFamily } from "../../style/font";

interface DeskrisiPaketWisataContentProps{
    paketWisataDescription: string,
    subTitle: string[],
    photos: string[],
    photosContent: string[]
}

const DeskripsiPaketWisata = () => {

    const [completeLoad, setCompleteLoad] = useState<boolean>(true);
    const tempData: DeskrisiPaketWisataContentProps = {
        paketWisataDescription: "Bosan dengan aktifitas sehari" + 
        "-hari dan ingin liburan yang menyenangkan? Kini kami telah menyediakan paket wisata " + 
        "pantai malang khusus bagi anda yang ingin mencari  suasana liburan yang baru dan menyenangkan." + 
        "Berbeda dengan tempat wisata pantai lainnya, tujuan wisata kali ini adalah Pantai CMC (Clungup Mangrove Conservation) "+
        "yang merupakan Pantai paling eksotis dan paling luxury di kota Malang. Bahkan bisa dibilang pantai" + 
        "paling luxury di Jawa Timur. Mengingat untuk menuju Ke Pantai ini dibutuhkan Reservasi dan tidak setiap orang" + 
        "dapat tiba-tiba datang dan masuk begitu saja. Terkait trip kali ini, berikut destinasi-destinasi yang akan kita tuju.",
        subTitle: [
            "Pantai Tiga Warna, Pantai Paling Istimewa di Malang",
            "Pantai Gatra, Serunya Bermain Kano di tempat ini",
            "Pantai Clungup, Pantai Indah untuk refreshing"
        ],
        photos: [
            deskripsi1, deskripsi2, deskripsi3
        ],
        photosContent: [
            "Untuk menuju ke Pantai Tiga Warna ini, anda diwajibkan jalan kaki dari loket dua sejauh 1 – 2 km melewati kawasan hutan bakau lindung. Selama anda berada di kawasan pantai ini anda dapat melakukan kegiatan free diving dengan menyewa peralatan yang disediakan oleh petugas setempat dengan harga Rp. 20.000 perorang. Peralatan yang disewakan meliputi Rompi Pelampung, Kacamata Selam, dan Alat bantu pernapasan. Selama di kawasan ini, jumlah kunjungan peserta dibatasi maksimal 2 jam saja. Jadi gunakan waktu selama anda ada disini untuk bersenang dengan diving dan juga jangan lupa mengambil foto dengan jernihnya air di tempat ini.",
            "Setelah mengunjungi Pantai Tiga Warna anda dapat kembali beraktifitas yang tidak kalah serunya di pantai ini. Jika di Pantai tiga warna kita dapat snorkeling dan dijatah maksimal 2 jam kunjungan saja, berbeda dengan tempat yang satu ini. Anda dapat menyewa perahu kano dan bermain sepuasnya di tempat wisata ini tanpa batasan jam. Dengan harga sewa yang terjangkau, yaitu Rp. 25.000 perorang untuk bermain kano sepuasnya. Selain bermain kano, anda dapat mandi di pesisir pantai yang airnya juga sangat bersih dan juga bersantai di sekitar kawasan pantai, entah ingin membawa tikar atau bersantai di gazebo. Yang penting happy.",
            "Setelah mengunjungi kedua pantai tersebut, yaitu pantai tiga warna dan pantai gatra. Sebelum kita pulang, destinasi selanjutnya adalah pantai Clungup. Di tempat ini anda dapat bersantai dan bermain air sepuasnya, selain memilik pemandangan yang bagus dan hamparan pasir yang bersih.Tempat wisata ini juga menawarkan keindahan yang tidak dimiliki kedua pantai sebelumnya. Pantai yang unik dengan dikelilingi oleh hutan bakau. Membuat pantai ini memiliki daya tarik tersendiri bagi yang ingin mengunjunginya."
        ]
    };

    useEffect(() => {

    }, []);

    return(
        <Flex 
        flexDir="column"
        width={{
            "lg" : "100%"
        }}>
            <Box 
            width={{
                "lg" : "100%"
            }}
            paddingLeft={{
                "lg" : "5rem"
            }}
            paddingRight={{
                "lg" : "5rem"
            }}>
                {completeLoad? 
                <Flex 
                flexDir="column">
                    <WisataDetailComponent 
                    paketWisataDescription={tempData.paketWisataDescription}
                    photos={tempData.photos}
                    photosContent={tempData.photosContent}
                    subTitle={tempData.subTitle}/>
                </Flex>
                : 
                <Box>
                    <SkeletonCircle isLoaded={completeLoad} size='10'/>
                    <SkeletonText mt='4' noOfLines={5} spacing='4' skeletonHeight='6' isLoaded={completeLoad}/>
                </Box>}
            </Box>
        </Flex>
    )
};

const WisataDetailComponent = (
    {paketWisataDescription, photos, photosContent, subTitle}
    : DeskrisiPaketWisataContentProps) => {
    const listElement = [];
    for(let i = 0; i < photos.length ; i++){
        listElement.push(
            <WisataSubtitleContent
            key={i}
            description={paketWisataDescription}
            image={photos[i]}
            index={String(i+1)}
            subtitle={subTitle[i]}
            imageContent={photosContent[i]}/>
        );
    }
    return(
        <Box>
            <Box>
                <Text
                color="#212121"
                fontWeight={600}
                fontSize={{
                    "lg" : "1.75rem"
                }}>Deskripsi Paket Wisata</Text>
                <Text
                color="#212121"
                fontWeight={400}
                fontSize={{
                    "lg" : "1rem"
                }}
                marginTop={{
                    "lg" : "0.5rem"
                }}
                marginBottom={{
                    "lg" : "0.5rem"
                }}>{paketWisataDescription}</Text>
            </Box>
            {listElement}
        </Box>
    )
};

interface WisataSubtitleContentProps{
    index: string,
    subtitle: string,
    image: string,
    description: string,
    imageContent: string
}

const WisataSubtitleContent = (
    {index, description, image, subtitle, imageContent}
    : WisataSubtitleContentProps) => {
    console.log(`description = ${description}`);
    return(
        <Flex
        flexDir="column">
            <Text
            fontFamily={fontFamily}
            color="#212121"
            fontWeight={600}
            fontSize={{
                "lg" : "1.5rem"
            }}
            marginTop={{
                "lg" : "1rem"
            }}
            marginBottom={{
                "lg" : "1rem"
            }}>Destinasi ke {index}: {subtitle}</Text>
            <Image src={image}
            width={{
                "lg" : "60%"
            }}
            marginLeft={{
                "lg" : "15rem"
            }}
            marginRight={{
                "lg" : "15rem"
            }}
            marginTop={{
                "lg" : "1rem"
            }}
            marginBottom={{
                "lg" : "1rem"
            }}/>
            <Text
            fontFamily={fontFamily}
            color="#212121"
            fontSize={{
                "lg" : "1rem"
            }}
            marginTop={{
                "lg" : "1rem"
            }}
            marginBottom={{
                "lg" : "1rem"
            }}>
                {imageContent}
            </Text>
        </Flex>
    )
};
export default DeskripsiPaketWisata;
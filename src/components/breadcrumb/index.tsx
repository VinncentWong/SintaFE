import { Button, Flex, Text } from "@chakra-ui/react";
import { fontFamily } from "../../style/font";
import DeskripsiPaketWisata from "../paket_wisata_detail/paket_wisata_deskripsi";

interface BreadCrumbProps{
    type: "deskripsi" | "infopenting" | "rundown" | "fasilitas" | "pesanpaketwisata"
}

const BreadCrumb = ({type}: BreadCrumbProps) => {
    return(
        <Flex
        border="2px solid #ABBED1"
        width={{
            "lg" : "87%"
        }}
        marginLeft={{
            "lg" : "5rem"
        }}
        marginRight={{
            "lg" : "5rem"
        }}
        marginTop={{
            "lg" : "1rem"
        }}
        marginBottom={{
            "lg" : "2rem"
        }}>
            <Button
            backgroundColor={type == "deskripsi"? "#0053AD": "transparent"}
            borderRadius="8px"
            width={{
                "lg" : "20%"
            }}
            paddingTop={{
                "lg" : "3rem"
            }}
            paddingBottom={{
                "lg" : "3rem"
            }}>
                <Text
                fontFamily={fontFamily}
                color={type == "deskripsi"? "white": "#212121"}>Deskripsi</Text>
            </Button>
            <Button
            backgroundColor={type == "infopenting"? "#0053AD": "transparent"}
            borderRadius="8px"
            width={{
                "lg" : "20%"
            }}
            paddingTop={{
                "lg" : "3rem"
            }}
            paddingBottom={{
                "lg" : "3rem"
            }}>
                <Text
                fontFamily={fontFamily}
                color={type == "infopenting"? "white": "#212121"}>Info Penting</Text>
            </Button>
            <Button
            backgroundColor={type == "rundown"? "#0053AD": "transparent"}
            borderRadius="8px"
            width={{
                "lg" : "20%"
            }}
            paddingTop={{
                "lg" : "3rem"
            }}
            paddingBottom={{
                "lg" : "3rem"
            }}>
                <Text
                fontFamily={fontFamily}
                color={type == "rundown"? "white": "#212121"}>Rundown</Text>
            </Button>
            <Button
            backgroundColor={type == "fasilitas"? "#0053AD": "transparent"}
            borderRadius="8px"
            width={{
                "lg" : "20%"
            }}
            paddingTop={{
                "lg" : "3rem"
            }}
            paddingBottom={{
                "lg" : "3rem"
            }}>
                <Text
                fontFamily={fontFamily}
                color={type == "fasilitas"? "white": "#212121"}>Fasilitas</Text>
            </Button>
            <Button
            backgroundColor={type == "pesanpaketwisata"? "#0053AD": "transparent"}
            borderRadius="8px"
            width={{
                "lg" : "20%"
            }}
            paddingTop={{
                "lg" : "3rem"
            }}
            paddingBottom={{
                "lg" : "3rem"
            }}>
                <Text
                fontFamily={fontFamily}
                color={type == "pesanpaketwisata"? "white": "#212121"}>Pesan Paket Wisata</Text>
            </Button>
        </Flex>
    )
};

export default BreadCrumb;
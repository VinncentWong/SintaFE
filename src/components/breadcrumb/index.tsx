import { Button, Flex, Text } from "@chakra-ui/react";
import { fontFamily } from "../../style/font";
import { PaketWisataType } from "../../router/PaketWisataRouter";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import WisataIdContext from "../../context/WisataIdContext";

interface BreadCrumbProps{
    type: PaketWisataType
}

const BreadCrumb = ({type}: BreadCrumbProps) => {
    const navigate = useNavigate();
    const id = useContext(WisataIdContext);
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
            _hover={{backgroundColor: undefined}}
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
            }}
            onClick={() => {
                navigate(`/paketwisata/deskripsi/${id.id}`);
            }}>
                <Text
                fontFamily={fontFamily}
                color={type == "deskripsi"? "white": "#212121"}>Deskripsi</Text>
            </Button>
            <Button
            _hover={{backgroundColor: undefined}}
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
            }}
            onClick={() => {
                navigate(`/paketwisata/infopenting/${id.id}`);
            }}>
                <Text
                fontFamily={fontFamily}
                color={type == "infopenting"? "white": "#212121"}>Info Penting</Text>
            </Button>
            <Button
            _hover={{backgroundColor: undefined}}
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
            }}
            onClick={() => {navigate(`/paketwisata/rundown/${id.id}`)}}>
                <Text
                fontFamily={fontFamily}
                color={type == "rundown"? "white": "#212121"}>Rundown</Text>
            </Button>
            <Button
            _hover={{backgroundColor: undefined}}
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
            }}
            onClick={() => {
                navigate(`/paketwisata/fasilitas/${id.id}`);
            }}>
                <Text
                fontFamily={fontFamily}
                color={type == "fasilitas"? "white": "#212121"}>Fasilitas</Text>
            </Button>
            <Button
            _hover={{backgroundColor: undefined}}
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
            }}
            onClick={() => {navigate(`/paketwisata/pesanpaketwisata/${id.id}`)}}>
                <Text
                fontFamily={fontFamily}
                color={type == "pesanpaketwisata"? "white": "#212121"}>Pesan Paket Wisata</Text>
            </Button>
        </Flex>
    )
};

export default BreadCrumb;
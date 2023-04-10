import { Flex, Image, Text } from "@chakra-ui/react";
import check from "../../images/logo/centang.png";
import { fontFamily } from "../../style/font";

const ListWhySinta = ({detail}: {detail: string}) => {
    return(
        <Flex
        marginTop={{
            "lg" : "2rem" 
        }}
        marginBottom={{
            "lg" : "2rem" 
        }}
        gap={{
            "lg" : "2rem"
        }}>
            <Image src={check}/>
            <Text
            fontFamily={fontFamily}
            fontWeight="400"
            paddingTop={{
                "lg" : "0.5rem"
            }}
            paddingBottom={{
                "lg" : "0.5rem"
            }}>{detail}</Text>
        </Flex>
    )
}

export default ListWhySinta;
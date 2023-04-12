import { Box, Flex, Image, Text } from "@chakra-ui/react";
import check from "../../images/logo/centang.png";
import { fontFamily } from "../../style/font";

const ListWhySinta = ({detail}: {detail: string}) => {
    return(
        <Flex
        marginTop={{
            "lg" : "1rem" 
        }}
        marginBottom={{
            "lg" : "1rem" 
        }}
        gap={{
            "lg" : "2rem"
        }}>
            <Box
            paddingTop={{
                "lg" : "0.5rem"
            }}
            paddingBottom={{
                "lg" : "0.5rem"
            }}>
                <Image 
                src={check}
                maxWidth={{
                    "lg" : "100%"
                }}
                maxHeight={{
                    "lg" : "100%"
                }}/>
            </Box>
            <Text
            fontFamily={fontFamily}
            fontWeight="400"
            paddingTop={{
                "lg" : "0.5rem"
            }}
            paddingBottom={{
                "lg" : "0.5rem"
            }}
            width={{
                "lg" : "70%"
            }}>{detail}</Text>
        </Flex>
    )
}

export default ListWhySinta;
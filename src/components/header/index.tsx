import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import header from "../../images/landingpage/header.png"
import { fontFamily } from "../../style/font";
const Header = () => {
    return(
        <Box
        position="relative"
        height={{
            "lg" : "90vh"
        }}
        backgroundImage={header}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        zIndex="1">
            <Flex
            flexDir={{
                "lg" : "column"
            }}
            justifyContent="center"
            alignItems="center"
            paddingTop={{
                "lg" : "12rem"
            }}>
                <Text
                fontFamily={fontFamily}
                fontSize={{
                    "lg" : "2rem"
                }}
                color="white"
                fontWeight="600">
                    Mari Jelajahi Dunia Bersama SINTA
                </Text>
                <InputGroup
                paddingLeft={{
                    "lg" : "25rem"
                }}
                paddingTop={{
                    "lg" : "3rem"
                }}>
                    <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                    marginLeft={{
                        "lg" : "25.2rem"
                    }}
                    paddingTop={{
                        "lg" : "4.3rem"
                    }}
                    />
                    <Input 
                    type='text' 
                    placeholder='Temukan paket trip liburanmu disini!' 
                    borderRadius="100px"
                    width={{
                        "lg" : "58%"
                    }}
                    _placeholder={{
                        "color" : "#717171"
                    }}
                    backgroundColor="#FCFCFC"/>
                </InputGroup>
            </Flex>
        </Box>
    );
};

export default Header;
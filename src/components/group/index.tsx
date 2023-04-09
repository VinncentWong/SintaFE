import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { fontFamily } from "../../style/font";

export interface DestinationGroupProps{
    title: string,
    subtitle: string,
    data: JSX.Element[]
}

const DestinationGroup = ({title, subtitle, data}: DestinationGroupProps) => {
    return(
        <Flex
        flexDir="column"
        paddingLeft={{
            "lg" : "3rem"
        }}
        paddingTop={{
            "lg" : "3rem"
        }}>
            <Box
            marginTop={{
                "lg" : "0.25rem"
            }}
            marginBottom={{
                "lg" : "0.25rem"
            }}>
                <Text
                    fontFamily={fontFamily}
                    color="#212121"
                    paddingLeft={{
                        "lg" : "0.5rem"
                    }}
                    fontWeight="600"
                    fontSize={{
                        "lg" : "2vw"
                    }}>{title}</Text>
            </Box>
            <Box
            marginTop={{
                "lg" : "0.25rem"
            }}
            marginBottom={{
                "lg" : "0.25rem"
            }}>
                <Text
                    fontFamily={fontFamily}
                    color="#717171"
                    paddingLeft={{
                        "lg" : "0.5rem"
                    }}
                    fontWeight="600"
                    fontSize={{
                        "lg" : "1.25vw"
                    }}>{subtitle}</Text>
            </Box>
            <Flex
            gap={"1.5rem"}>
                {data}
            </Flex>
            <Flex
            justifyContent="center"
            paddingTop={{
                "lg" : "3rem"
            }}
            paddingBottom={{
                "lg" : "3rem"
            }}>
                <Button
                    width={{
                        "lg" : "15rem"
                    }}
                    backgroundColor="#FCFCFC"
                    border="1px solid #0053AD"
                    borderRadius="8px">
                    <Text
                    color="#0053AD">Lihat Semua</Text>
                </Button>
            </Flex>
        </Flex>
    );
}

export default DestinationGroup;
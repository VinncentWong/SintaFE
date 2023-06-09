import { Box, Flex, Text } from "@chakra-ui/react";
import { fontFamily } from "../../style/font";
import { useNavigate } from "react-router-dom";

export interface DestinationCardProps{
    imageLink: any,
    typeDestination: string,
    destinationName: string,
    destinationCity: string,
    destinationProvince: string,
    destinationPrice: number,
    width: string,
    height: string,
    id?: number,
}

const DestinationCard = ({
    imageLink, typeDestination, destinationName, destinationCity, destinationProvince, destinationPrice, width, height, id
}: DestinationCardProps) => {
    const navigate = useNavigate();
    if(!id){
        id = 1;
    }
    return(
        <Flex
        boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)"
        borderRadius="12px"
        width={{
            "lg" : width
        }}
        height={{
            "lg" : height
        }}
        flexDir="column"
        onClick={() => {navigate(`/paketwisata/deskripsi/${id}`)}}>
            <Box
            backgroundImage={imageLink}
            backgroundSize="cover"
            width={{
                "lg" : "90%" 
            }}
            height={{
                "lg" : "25vh"
            }}
            marginLeft={{
                "lg" : "1rem" 
            }}
            marginRight={{
                "lg" : "1rem" 
            }}
            marginTop={{
                "lg" : "1.5rem" 
            }}>
                <Box
                width={{
                    "lg" : "25%"
                }}
                backgroundColor="#E2F8F0"
                fontWeight="600"
                borderRadius="0px 40px 40px 0px"
                marginTop={{
                    "lg" : "1.5rem"
                }}>
                    <Text
                    fontFamily={fontFamily}
                    color="#115B43"
                    paddingLeft={{
                        "lg" : "0.5rem"
                    }}>{typeDestination}</Text>
                </Box>
            </Box>
            <Box
            marginTop={{
                "lg" : "1rem" 
            }}
            marginBottom={{
                "lg" : "1rem" 
            }}
            marginLeft={{
                "lg" : "0.5rem" 
            }}
            marginRight={{
                "lg" : "0.5rem" 
            }}>
                <Text
                    fontFamily={fontFamily}
                    color="#212121"
                    paddingLeft={{
                        "lg" : "0.5rem"
                    }}
                    fontWeight="600">{destinationName}</Text>
            </Box>
            <Box
            marginTop={{
                "lg" : "1rem" 
            }}
            marginBottom={{
                "lg" : "1rem" 
            }}
            marginLeft={{
                "lg" : "0.5rem" 
            }}
            marginRight={{
                "lg" : "0.5rem" 
            }}>
                <Text
                    fontFamily={fontFamily}
                    color="#717171"
                    paddingLeft={{
                        "lg" : "0.5rem"
                    }}
                    fontWeight="400">{destinationCity}{destinationProvince}</Text>
            </Box>
            <Box
            marginTop={{
                "lg" : "1rem" 
            }}
            marginBottom={{
                "lg" : "1rem" 
            }}
            marginLeft={{
                "lg" : "0.5rem" 
            }}
            marginRight={{
                "lg" : "0.5rem" 
            }}>
                <Text
                    fontFamily={fontFamily}
                    color="#0671E0"
                    paddingLeft={{
                        "lg" : "0.5rem"
                    }}
                    fontWeight="600"
                    fontSize={{
                        "lg" : "2vw"
                    }}>Rp{destinationPrice}</Text>
            </Box>
        </Flex>
    )
};

export default DestinationCard;
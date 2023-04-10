import colorLogo from "../../images/logo/logo_color.png";
import logo from "../../images/logo/logo.png";
import cariColor from "../../images/logo/cari_color.png";
import jabatTanganColor from "../../images/logo/jabat_tangan_color.png";
import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { fontFamily } from "../../style/font";
import { useState } from "react";

interface NavbarProps{
    isAuthenticated: boolean
}

const Navbar = ({isAuthenticated}: NavbarProps) => {

    const [color, setColor] = useState<string>();

    return(
        <Flex
        position={{
            "lg" : "fixed"
        }}
        width={{
            "lg" : "100%"
        }}
        justifyContent={{
            "lg" : "start"
        }}
        zIndex="2"
        backgroundColor="white">
            <Flex
            width={{
                "lg" : "20%"
            }}>
                <Image 
                src={colorLogo}
                paddingLeft={{
                    "lg" : "2rem"
                }}
                paddingRight={{
                    "lg" : "2rem"
                }}/>
            </Flex>
            <Flex
            width="70%"
            marginLeft={{
                "lg" : "10rem"
            }}>
                <Flex
                width={{
                    "lg" : "13%"
                }}
                justifyContent="center">
                    <Link 
                    fontFamily={fontFamily}
                    fontWeight="600"
                    color={color}
                    marginTop={{
                        "lg" : "30px"
                    }}
                    marginBottom={{
                        "lg" : "30px"
                    }}>
                        <Flex>
                            <Image 
                            src={cariColor}
                            boxSize={{
                                "lg" : "30%"
                            }}
                            marginTop={{
                                "lg" : "7px"
                            }}
                            marginBottom={{
                                "lg" : "7px"
                            }}
                            marginLeft={{
                                "lg" : "7px"
                            }}
                            marginRight={{
                                "lg" : "7px"
                            }}/>
                            Cari
                        </Flex>
                    </Link>
                </Flex>
                <Flex
                width={{
                    "lg" : "40%"
                }}
                justifyContent="center">
                    <Link 
                    fontFamily={fontFamily}
                    fontWeight="600"
                    color={color}
                    width={{
                        "lg" : "75%"
                    }}
                    marginTop={{
                        "lg" : "30px"
                    }}
                    marginBottom={{
                        "lg" : "30px"
                    }}>
                        <Flex>
                            <Image 
                            src={jabatTanganColor}
                            boxSize={{
                                "lg" : "9%"
                            }}
                            marginTop={{
                                "lg" : "7px"
                            }}
                            marginBottom={{
                                "lg" : "7px"
                            }}
                            marginLeft={{
                                "lg" : "7px"
                            }}
                            marginRight={{
                                "lg" : "7px"
                            }}/>
                            Jadi Partner Sinta
                        </Flex>
                    </Link>
                </Flex>
                <Flex
                width={{
                    "lg" : "20%"
                }}
                justifyContent="center">
                    <Link 
                    fontFamily={fontFamily}
                    fontWeight="600"
                    color={color}
                    marginTop={{
                        "lg" : "30px"
                    }}
                    marginBottom={{
                        "lg" : "30px"
                    }}>
                        Paket Wisata
                    </Link>
                </Flex>
                <Flex
                width={{
                    "lg" : "20%"
                }}
                justifyContent="center">
                    <Link 
                    fontFamily={fontFamily}
                    fontWeight="600"
                    color={color}
                    marginTop={{
                        "lg" : "30px"
                    }}
                    marginBottom={{
                        "lg" : "30px"
                    }}>
                        Cek Booking
                    </Link>
                </Flex>
                <Flex
                width={{
                    "lg" : "20%"
                }}
                justifyContent="center">
                    <Link 
                    fontFamily={fontFamily}
                    fontWeight="600"
                    color={color}
                    marginTop={{
                        "lg" : "30px"
                    }}
                    marginBottom={{
                        "lg" : "30px"
                    }}>
                        Notifikasi
                    </Link>
                </Flex>
                {!isAuthenticated && <Flex
                width={{
                    "lg" : "25%"
                }}
                justifyContent="center"
                alignItems="center"
                marginRight={{
                    "lg" : "3rem"
                }}
                marginBottom={{
                    "lg" : "11px"
                }}>
                   <Button
                   border="1px solid #0053AD"
                   marginLeft={{
                    "lg" : "15px"
                   }}
                   marginRight={{
                    "lg" : "25px"
                   }}
                   backgroundColor="#FCFCFC">
                    <Text
                    fontFamily={fontFamily}
                    color="#0053AD">Masuk</Text>
                   </Button>
                   <Button
                   backgroundColor="#0053AD">
                    <Text
                    fontFamily={fontFamily}
                    color="white">Daftar</Text>
                   </Button>
                </Flex>}
            </Flex>
        </Flex>
    );
};

export default Navbar;
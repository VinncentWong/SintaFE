import { Flex, Image, Text } from "@chakra-ui/react";
import { fontFamily } from "../../style/font";
import bankTransfer from "../../images/payment/bank_transfer.png";
import dana from "../../images/payment/dana.png";
import gopay from "../../images/payment/gopay.png";
import ovo from "../../images/payment/ovo.png";
import shopeepay from "../../images/payment/shopeepay.png";

const Footer = () => {
    return(
        <Flex
        backgroundColor='#DBEDFF'
        paddingBottom={{
            "lg" : "3%"
        }}>
            <Flex
            flexDir='column'
            width={{
                "lg" : "35%"
            }}
            paddingTop={{
                "lg" : "2rem"
            }}
            paddingLeft={{
                "lg" : "5rem"
            }}
            paddingRight={{
                "lg" : "5rem"
            }}>
                <Text
                fontFamily={fontFamily}
                fontWeight="600"
                marginTop={{
                    "lg" : "1rem"
                }}
                marginBottom={{
                    "lg" : "2rem"
                }}>Tentang SINTA</Text>
                <Text
                fontFamily={fontFamily}
                fontWeight="400"
                color='#0053AD'
                paddingTop={{
                    "lg" : "0.7rem"
                }}
                paddingBottom={{
                    "lg" : "0.7rem"
                }}>Tentang Kami</Text>
                <Text
                fontFamily={fontFamily}
                fontWeight="400"
                color='#0053AD'
                paddingTop={{
                    "lg" : "0.7rem"
                }}
                paddingBottom={{
                    "lg" : "0.7rem"
                }}>Jadi Partner SINTA</Text>
                <Text
                fontFamily={fontFamily}
                fontWeight="400"
                color='#0053AD'
                paddingTop={{
                    "lg" : "0.7rem"
                }}
                paddingBottom={{
                    "lg" : "0.7rem"
                }}>FAQ (Frequently Asked Questions)</Text>
                <Text
                fontFamily={fontFamily}
                fontWeight="400"
                color='#0053AD'
                paddingTop={{
                    "lg" : "0.7rem"
                }}
                paddingBottom={{
                    "lg" : "0.7rem"
                }}>Kebijakan Privasi</Text>
                <Text
                fontFamily={fontFamily}
                fontWeight="400"
                color='#0053AD'
                paddingTop={{
                    "lg" : "0.7rem"
                }}
                paddingBottom={{
                    "lg" : "0.7rem"
                }}>Syarat & Ketentuan</Text>
            </Flex>
            <Flex
            flexDir='column'
            width={{
                "lg" : "35%"
            }}
            paddingTop={{
                "lg" : "2rem"
            }}
            paddingLeft={{
                "lg" : "5rem"
            }}
            paddingRight={{
                "lg" : "5rem"
            }}>
                <Text
                fontFamily={fontFamily}
                fontWeight="600"
                marginTop={{
                    "lg" : "1rem"
                }}
                marginBottom={{
                    "lg" : "2rem"
                }}>Opsi Pembayaran</Text>
                <Flex
                paddingTop={{
                    "lg" : "0.7rem"
                }}
                paddingBottom={{
                    "lg" : "0.7rem"
                }}>
                    <Image src={bankTransfer}/>
                    <Image src={ovo}/>
                </Flex>
                <Flex
                paddingTop={{
                    "lg" : "0.7rem"
                }}
                paddingBottom={{
                    "lg" : "0.7rem"
                }}>
                    <Image src={gopay}/>
                </Flex>
                <Flex
                paddingTop={{
                    "lg" : "0.7rem"
                }}
                paddingBottom={{
                    "lg" : "0.7rem"
                }}>
                    <Image src={shopeepay}/>
                    <Image 
                    maxWidth={{
                        "lg" : "100%"
                    }}
                    maxHeight={{
                        "lg" : "100%"
                    }}
                    src={dana} 
                    alignSelf="center"/>
                </Flex>
            </Flex>
            <Flex
            flexDir='column'
            width={{
                "lg" : "20%"
            }}
            paddingTop={{
                "lg" : "2rem"
            }}>
                <Text
                fontFamily={fontFamily}
                fontWeight="600"
                marginTop={{
                    "lg" : "1rem"
                }}
                marginBottom={{
                    "lg" : "2rem"
                }}>Ikuti kami</Text>
                <Text
                fontFamily={fontFamily}
                fontWeight="400"
                paddingTop={{
                    "lg" : "0.7rem"
                }}
                paddingBottom={{
                    "lg" : "0.7rem"
                }}>Facebook</Text>
                <Text
                fontFamily={fontFamily}
                fontWeight="400"
                color='#0053AD'
                fontSize={{
                    "lg" : "80%"
                }}>Sinta Travel</Text>
                <Text
                fontFamily={fontFamily}
                fontWeight="400"
                paddingTop={{
                    "lg" : "0.7rem"
                }}
                paddingBottom={{
                    "lg" : "0.7rem"
                }}>Instagram</Text>
                <Text
                fontFamily={fontFamily}
                fontWeight="400"
                color='#0053AD'
                fontSize={{
                    "lg" : "80%"
                }}>@sinta.travel</Text>
            </Flex>
            <Flex
            flexDir='column'
            width={{
                "lg" : "20%"
            }}
            paddingTop={{
                "lg" : "2rem"
            }}>
                <Text
                fontFamily={fontFamily}
                fontWeight="600"
                marginTop={{
                    "lg" : "1rem"
                }}
                marginBottom={{
                    "lg" : "2rem"
                }}>Hubungi kami</Text>
                <Text
                fontFamily={fontFamily}
                fontWeight="400"
                paddingTop={{
                    "lg" : "0.7rem"
                }}
                paddingBottom={{
                    "lg" : "0.7rem"
                }}>Email</Text>
                <Text
                fontFamily={fontFamily}
                fontWeight="400"
                color='#0053AD'
                fontSize={{
                    "lg" : "80%"
                }}>Sintahelpdesk@gmail.com</Text>
                <Text
                fontFamily={fontFamily}
                fontWeight="400"
                paddingTop={{
                    "lg" : "0.7rem"
                }}
                paddingBottom={{
                    "lg" : "0.7rem"
                }}>Whatsapp</Text>
                <Text
                fontFamily={fontFamily}
                fontWeight="400"
                color='#0053AD'
                fontSize={{
                    "lg" : "80%"
                }}>081234567890</Text>
            </Flex>
        </Flex>
    )
};

export default Footer;
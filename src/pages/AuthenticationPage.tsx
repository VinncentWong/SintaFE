import { Box, Button, Flex, Image, Input, Link, Text } from "@chakra-ui/react";
import background from "../images/register_login/background.png";
import logo from "../images/register_login/sinta.png";
import icon from "../images/register_login/truk.png";
import { fontFamily } from "../style/font";
import React, { ChangeEvent, useState } from "react";
import GoogleIcon from "../icon/google_icon";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface AuthenticationProps{
    type: "register" | "login" | "reset"
}

interface InputSintaProps{
    description: string,
    placeholder: string,
    notes: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    width: string
}

const InputSinta = ({description, notes, onChange, placeholder, value, width}: InputSintaProps) => {
    return (
        <Box
                width={{
                    "lg" : "100%"
                }}
                marginTop={{
                    "lg" : "1rem"
                }}
                marginBottom={{
                    "lg" : "1rem"
                }}>
                    <Text
                    fontFamily={fontFamily}
                    fontWeight={500}
                    fontSize="1rem"
                    marginY={{
                        "lg" : "0.5rem"
                    }}>
                        {description}<span style={{
                        "color" : "#E12C1F"
                    }}>*</span></Text>
                    <Input 
                    placeholder={placeholder}
                    _placeholder={{
                        "color" : "#717171"
                    }}
                    width={{
                        "lg" : width
                    }}
                    marginBottom={{
                        "lg" : "0.5rem"
                    }}
                    value={value}
                    onChange={onChange}/>
                    <Text
                    fontFamily={fontFamily}
                    fontWeight={400}
                    fontSize="0.75rem"
                    color="#89939E">{notes}</Text>
            </Box>
    );
}

const SyaratKebijakan = ({width, marginLeft}: {width: string, marginLeft?: string}) => {
    return(
        <Box
                marginLeft={marginLeft}
                marginBottom={{
                    "lg" : "5rem"
                }}>
                    <Text
                    fontFamily={fontFamily}
                    color="#717171"
                    fontWeight={{
                        "lg" : "0.75rem"
                    }}
                    width={{
                        "lg" : width
                    }}
                    textAlign="center">
                        Dengan membuat akun kamu menyetujui 
                        <span 
                        style={{
                            "color" : "#0053AD"
                        }}> Syarat & Ketentuan</span> dan <span
                        style={{
                            "color" : "#0053AD"
                        }}>Kebijakan Privasi</span> kami
                    </Text>
                </Box>
    );
}

interface BottomPageProps{
    buttonText: string,
    buttonHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
    marginTop?: string
    marginLeft?: string
}

const BottomPage = ({buttonText, buttonHandler, marginTop, marginLeft}: BottomPageProps) => {
    return(
        <Flex
                flexDir="column"
                alignItems="center"
                marginTop={marginTop}
                marginLeft={marginLeft}>
                    <Text
                    fontFamily={fontFamily}
                    fontSize="0.75rem"
                    color="#717171"
                    marginRight={{
                        "lg" : "8rem"
                    }}>---- Atau gunakan akun google-mu ----</Text>
                    <Button
                    variant="solid"
                    backgroundColor="white"
                    border="1px solid #0053AD"
                    borderRadius="8px"
                    leftIcon={<GoogleIcon/>}
                    marginRight={{
                        "lg" : "8rem"
                    }}
                    marginY={{
                        "lg" : "1rem"
                    }}
                    onClick={buttonHandler}>
                        <Text
                        fontFamily={fontFamily}
                        color="#0053AD">{buttonText}</Text>
                    </Button>
        </Flex>
    )
};

interface TopWithBackSymbolProps{
    description: string,
    href?: string
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const TopWithBackSymbol = ({description, href, onClick}: TopWithBackSymbolProps) => {
    return(
        <Flex
            width={{
                "lg" : "100%"
            }}
            marginTop={{
                "lg" : "3rem"
            }}>
                <Link 
                style={{
                    "width" : "15%"
                }} 
                href={href}
                paddingLeft={{
                    "lg" : "3rem"
                }}
                onClick={onClick}>
                    <ChevronLeftIcon
                        w={{
                            "lg" : 10
                        }}
                        h={{
                            "lg" : 10
                        }}
                    />
                </Link>
                    <Text
                        fontFamily={fontFamily}
                        fontWeight={600}
                        fontSize={{
                            "lg" : "1.75rem"
                        }}>
                        {description}
                    </Text>
        </Flex>
    )
};
const AuthenticationPage = ({type}: AuthenticationProps) => {
    const [pressSecondPage, setpressSecondPage] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [noTelp, setNoTelp] = useState<string>("");
    const [nama, setNama] = useState<string>("");
    const [kataSandi, setKataSandi] = useState<string>("");
    const [konfKataSandi, setKonfKataSandi] = useState<string>("");
    let showedElement: JSX.Element;
    if(type == "register"){
        if(!pressSecondPage){
            showedElement = 
            <Box 
            marginX={{
                "lg" : "3rem"
            }}
            marginY={{
                "lg" : "3rem"
            }}
            width={{
                "lg" : "100%"
            }}>
                <Box>
                    <Text
                    fontFamily={fontFamily}
                    fontWeight={600}
                    fontSize="2rem">Daftarkan Akunmu Disini</Text>
                </Box>
                <InputSinta 
                description="Email"
                notes="Gunakan alamat email yang valid"
                onChange={(e) => {
                    setEmail(e.currentTarget.value);
                }}
                placeholder="Masukkan alamat email anda disini"
                value={email}
                width="80%"/>
                <Box
                marginBottom={{
                    "lg" : "2rem"
                }}>
                    <Button
                    variant="solid"
                    colorScheme="telegram"
                    backgroundColor="#0053AD"
                    width={{
                        "lg" : "80%"
                    }}
                    onClick={() => {
                        setpressSecondPage(true);
                    }}>
                        <Text
                        fontFamily={fontFamily}
                        fontSize="0.75rem"
                        color="#FCFCFC">Lanjut Isi Detail Akun</Text>
                    </Button>
                </Box>
                <BottomPage
                buttonText="Register with Google"
                buttonHandler={(e) => {

                }}/>
                <SyaratKebijakan width="80%"/>
                <Box>
                    <Text
                    color="#212121"
                    fontFamily={fontFamily}
                    textAlign="center"
                    paddingRight={{
                        "lg" : "8rem"
                    }}>
                        Udah punya akun? 
                        <a
                        style={{
                            "color" : "#0053AD",
                            "fontWeight" : "600"
                        }}
                        href="/login"> Log in aja</a>
                    </Text>
                </Box>
            </Box>
        } else {
            showedElement = 
            <Box
            width={{
                "lg" : "100%"
            }}>
                <Box>
                    <TopWithBackSymbol
                    description="Isi Detail Akunmu"
                    onClick={() => {
                        setpressSecondPage(false);
                    }}/>
                    <Box
                    paddingX={{
                        "lg" : "3rem"
                    }}>
                        <InputSinta
                        description="Nomor Telepon"
                        notes="Gunakan format 08 dalam memasukkannya. Contoh: 081234567895"
                        onChange={(e) => {
                            setNoTelp(e.currentTarget.value);
                        }}
                        placeholder="Masukkan nomor telepon anda disini"
                        value={noTelp}
                        width="95%"/>
                        <InputSinta
                        description="Nama Lengkap"
                        notes="Gunakan nama lengkap anda sesuai dengan KTP/Paspor/SIM"
                        onChange={(e) => {
                            setNama(e.currentTarget.value);
                        }}
                        value={nama}
                        placeholder="Masukkan nama lengkap anda disini"
                        width="95%"/>
                        <InputSinta
                        description="Kata Sandi"
                        notes="Gunakan minimal 1 huruf kapital, 1 angka, dan 1 tanda baca"
                        onChange={(e) => {
                            setKataSandi(e.currentTarget.value);
                        }}
                        placeholder="Masukkan 8-30 karakter kata sandi anda disini"
                        value={kataSandi}
                        width="95%"
                        />
                        <InputSinta
                        description="Konfirmasi Kata Sandi"
                        notes="Pastikan kata sandi yang anda masukkan sama dengan sebelumnya"
                        onChange={(e) => {
                            setKonfKataSandi(e.currentTarget.value);
                        }}
                        placeholder="Masukkan ulang kata sandi anda disini"
                        value={konfKataSandi}
                        width="95%"
                        />
                        <Button
                            variant="solid"
                            colorScheme="telegram"
                            backgroundColor="#0053AD"
                            width={{
                                "lg" : "95%"
                            }}
                            onClick={() => {
                                
                            }}
                            marginTop={{
                                "lg" : "2rem"
                            }}
                            marginBottom={{
                                "lg" : "5rem"
                            }}
                        >
                            <Text
                            fontFamily={fontFamily}
                            fontSize="0.75rem"
                            color="#FCFCFC">Daftar</Text>
                        </Button>
                        <SyaratKebijakan width="90%"/>
                    </Box>
                </Box>
            </Box>
        }
    } else if(type == "reset"){
        showedElement = 
            <Box>
                <TopWithBackSymbol
                description="Reset Kata Sandimu Disini"
                href="/login"/>
                <Box 
                marginLeft={{
                    "lg" : "3.5rem"
                }}>
                    <InputSinta
                    description="Email"
                    placeholder="Masukkan alamat email anda disini"
                    notes="Pastikan email anda telah berhasil terdaftar dan terverifikasi"
                    onChange={(e) => {
                        setEmail(e.currentTarget.value);
                    }}
                    width="90%"
                    value={email}
                    />
                </Box>
                <Button
                        variant="solid"
                        colorScheme="telegram"
                        backgroundColor="#0053AD"
                        width={{
                            "lg" : "85%"
                        }}
                        onClick={() => {
                                
                        }}
                        marginTop={{
                            "lg" : "2rem"
                        }}
                        marginBottom={{
                            "lg" : "5rem"
                        }}
                        marginLeft={{
                            "lg" : "3rem"
                        }}
                    >
                        <Text
                            fontFamily={fontFamily}
                            fontSize="0.75rem"
                            color="#FCFCFC">Reset Kata Sandi</Text>
                </Button>
            </Box>;
    } else {
        showedElement = 
        <Box>
            <Box>
                <Text
                fontFamily={fontFamily}
                fontWeight={600}
                fontSize={{
                    "lg" : "1.75rem"
                }}
                marginTop={{
                    "lg" : "6rem"
                }}
                marginLeft={{
                    "lg" : "3.5rem"
                }}>
                    Log in Akunmu Disini
                </Text>
            </Box>
            <Box
             marginLeft={{
                "lg" : "3.5rem"
            }}
            position="relative">
                <InputSinta 
                description="Email"
                notes="Pastikan email anda telah berhasil terdaftar dan terverifikasi"
                onChange={(e) => {
                    setEmail(e.currentTarget.value);
                }}
                placeholder="Masukkan alamat email anda disini"
                width="95%"
                value={email}
                />
                <InputSinta 
                description="Kata Sandi"
                notes="Pastikan kata sandi yang anda masukkan benar"
                onChange={(e) => {
                    setKataSandi(e.currentTarget.value);
                }}
                placeholder="Masukkan kata sandi anda disini"
                width="95%"
                value={kataSandi}
                />
                <Link 
                position="absolute"
                top={{
                    "lg" : "14rem"
                }}
                left={{
                    "lg" : "29.5rem"
                }}
                href="/reset">
                    <Text
                    fontFamily={fontFamily}
                    color="#0053AD"
                    fontSize="0.9rem"
                    fontWeight={600}>
                    Lupa Kata Sandi?
                    </Text>
                </Link>
                <Button
                        variant="solid"
                        colorScheme="telegram"
                        backgroundColor="#0053AD"
                        width={{
                            "lg" : "95%"
                        }}
                        onClick={() => {
                                
                        }}
                        marginTop={{
                            "lg" : "2rem"
                        }}
                        marginBottom={{
                            "lg" : "5rem"
                        }}
                    >
                        <Text
                            fontFamily={fontFamily}
                            fontSize="0.75rem"
                            color="#FCFCFC">Masuk</Text>
                </Button>
                <BottomPage
                buttonText="Login with Google"
                buttonHandler={(e) => {

                }}
                marginTop="-2rem"
                marginLeft="5rem"
                />
                <SyaratKebijakan width="90%" marginLeft="1rem"/>
            </Box>
            <Flex
            marginLeft={{
                "lg" : "13rem"
            }}
            marginBottom={{
                "lg" : "5rem"
            }}>
                <Text
                fontFamily={fontFamily}
                fontSize={{
                    "lg" : "1.1rem"
                }}>Belum punya akun? </Text>
                <Link
                href="/register"> 
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{
                        "lg" : "1.1rem"
                    }}
                    color="#0053AD"
                    fontWeight={600}>  
                    &nbsp;Buat akun yuk!
                    </Text>
                </Link>
            </Flex>
        </Box>;
    }
    return(
        <Flex
        width={{
            "lg" : "100%"
        }}>
            <Box
            backgroundImage={background}
            height={{
                "lg" : "100vh"
            }}
            width={{
                "lg" : "50%"
            }}
            position={{
                "lg" : "fixed"
            }}
            overflowX={{
                "lg" : "hidden"
            }}
            overflowY={{
                "lg" : "hidden"
            }}>
                <Box
                position={{
                    "lg" : "absolute"
                }}
                left={{
                    "lg" : "15rem"
                }}
                top={{
                    "lg" : "3rem"
                }}>
                    <Image 
                    src={logo}
                    maxWidth={{
                        "lg" : "100%"
                    }}/>
                </Box>
                <Flex
                position={{
                    "lg" : "absolute"
                }}
                flexDir={{
                    "lg" : "column"
                }}
                top={{
                    "lg" : "7rem"
                }}
                width={{
                    "lg" : "100%"
                }}
                textAlign={{
                    "lg" : "center"
                }}>
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{
                        "lg" : "1.5rem"
                    }}
                    fontWeight={{
                        "lg" : "600"
                    }}
                    marginY={{
                        "lg" : "1rem"
                    }}>Temukan beragam paket wisata menarik dengan harga yang terjangkau</Text>
                    <Text
                    fontFamily={fontFamily}
                    fontSize={{
                        "lg" : "1rem"
                    }}
                    fontWeight={{
                        "lg" : "600"
                    }}
                    color="#717171">
                        Buat akun agar dapat memesan beragam paket wisata menarik 🥰
                    </Text>
                </Flex>
                <Box
                position={{
                    "lg" : "absolute"
                }}
                top={{
                    "lg" : "16rem"
                }}
                width={{
                    "lg" : "100%"
                }}>
                    <Image 
                    src={icon} 
                    width={{
                        "lg" : "100%"
                    }}/>
                </Box>
            </Box>
            <Box
            width={{
                "lg" : "50%"
            }}
            marginLeft={{
                "lg" : "43rem"
            }}>
                {showedElement}
            </Box>
        </Flex>
    );
};

export default AuthenticationPage;
import colorLogo from "../../images/logo/logo_color.png";
import logo from "../../images/logo/logo.png";
import cariColor from "../../images/logo/cari_color.png";
import jabatTanganColor from "../../images/logo/jabat_tangan_color.png";
import { Avatar, Box, Button, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { fontFamily } from "../../style/font";
import { useContext } from "react";
import LandingContext from "../../context/LandingContext";
import { useNavigate } from "react-router-dom";
import { User } from "../../response/response";

interface NavbarProps{
    isAuthenticated?: boolean,
    type: "landing" | "myaccount" |"other",
}

const Navbar = ({isAuthenticated, type}: NavbarProps) => {
    const value = useContext(LandingContext);
    const header = document.getElementById("header");
    const bottom = header?.getBoundingClientRect().bottom;
    let greaterThanHeader = false;
    if(bottom){
        if(value.position >= bottom){
            greaterThanHeader = true;
        } else {
            greaterThanHeader = false;
        }
    }
    const logoSinta = greaterThanHeader || (type === "other" || type === "myaccount" ) ? colorLogo: logo;
    const color = greaterThanHeader || type === "other"? "#0053AD" : "white";
    const backgroundColor = greaterThanHeader || (type === "other" || type === "myaccount") ? "white" : "transparent";
    const navigate = useNavigate();
    let user: User = {
        nama: "",
        createdAt: "",
        email: "",
        id: -1,
        noTelp: "",
        updatedAt: "",
        verified: "MENUNGGU",
        nomorKtp: ""
    };
    if(isAuthenticated){
        const storageUser = localStorage.getItem("user");
        if(storageUser){
            user = JSON.parse(storageUser) as User;
        }
    }
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
        backgroundColor={backgroundColor}
        boxShadow="0px 2px 4px rgba(171, 190, 209, 0.6)">
            <Flex
            width={{
                "lg" : "20%"
            }}>
                <Link href="/landingpage">
                    <Image 
                    src={logoSinta}
                    paddingLeft={{
                        "lg" : "2rem"
                    }}
                    paddingRight={{
                        "lg" : "2rem"
                    }}/>
                </Link>
            </Flex>
            {type !== "myaccount" && <Flex
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
                    }}
                    href="/jadipartner">
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
                    }}
                    href="/paketwisata">
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
                {isAuthenticated ? 
                <Flex
                width={{
                    "lg" : "25%"
                }}
                justifyContent="center"
                alignItems="center"
                marginRight={{
                    "lg" : "3rem"
                }}
                marginBottom={{
                    "lg" : "1.25rem"
                }}
                paddingLeft={{
                    "lg" : "6rem"
                }}
                >
                    <Menu>
                        <MenuButton>
                            <Avatar name={user.nama}/>
                        </MenuButton>
                        <MenuList 
                        marginTop={{
                            "lg" : "1rem"
                        }}>
                            <MenuItem>
                                <Link
                                fontSize={{
                                    "lg" : "0.875rem"
                                }}
                                fontFamily={fontFamily}
                                fontWeight={400}>Cek Booking</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                fontSize={{
                                    "lg" : "0.875rem"
                                }}
                                fontFamily={fontFamily}
                                fontWeight={400}>Cek Refund</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                fontSize={{
                                    "lg" : "0.875rem"
                                }}
                                fontFamily={fontFamily}
                                fontWeight={400}>Riwayat Pesanan</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                fontSize={{
                                    "lg" : "0.875rem"
                                }}
                                fontFamily={fontFamily}
                                fontWeight={400}
                                href={`/myaccount/detail/${user.id}`}>Akun Saya</Link>
                            </MenuItem>
                            <MenuItem
                            onClick={() => {
                                localStorage.clear();
                                navigate("/");
                            }}>
                                <Link
                                fontSize={{
                                    "lg" : "0.875rem"
                                }}
                                fontFamily={fontFamily}
                                fontWeight={400}>Keluar</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex> 
                : 
                <Flex
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
                   backgroundColor="#FCFCFC"
                   onClick={() => {
                    navigate("/login");
                   }}>
                    <Text
                    fontFamily={fontFamily}
                    color="#0053AD">Masuk</Text>
                   </Button>
                   <Button
                   backgroundColor="#0053AD"
                   onClick={() => {
                        navigate("/register");
                   }}>
                    <Text
                    fontFamily={fontFamily}
                    color="white">Daftar</Text>
                   </Button>
                </Flex>}
            </Flex>}
        </Flex>
    );
};

export default Navbar;
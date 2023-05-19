import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import listBullet from "../../images/filter/listbullets.png";
import { fontFamily } from "../../style/font";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import funnel from "../../images/filter/funnel.png";
import { ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import apiLokasi from "../../api/api_lokasi";
import {
  KotaKabupaten,
  KotaKabupatenResponse,
  Provinsi,
  ProvinsiResponse,
} from "../../response/lokasi";
import randomNumber from "../../util/random";

type TipeWisata = "all" | "dalam_negeri" | "luar_negeri";

type TipeFasilitas = "all" | "exclude";

type TipeTrip = "open" | "private";

interface CheckBoxKotaKabupatenProps {
  provinsi: string;
  kotaKabupaten?: KotaKabupaten[];
}

const CheckBoxKabupatenKota = ({
  provinsi,
  kotaKabupaten,
}: CheckBoxKotaKabupatenProps) => {
  if (kotaKabupaten) {
    const arrCheckbox = kotaKabupaten.map((d) => {
      return (
        <Checkbox
          width={{
            lg: "22%",
          }}
          key={randomNumber()}
        >
          {d.nama}
        </Checkbox>
      );
    });
    const arrFlex = [];
    for (let i = 0; i < kotaKabupaten.length; i = i + 3) {
      const slice = arrCheckbox.slice(i, i + 3);
      arrFlex.push(
        <Flex
          key={randomNumber()}
          gap={{
            lg: "5rem",
          }}
          marginTop={{
            lg: "1rem",
          }}
        >
          {slice}
        </Flex>
      );
    }
    return (
      <Flex
        flexDir="column"
        marginY={{
          lg: "1rem",
        }}
      >
        <Text
          fontFamily={fontFamily}
          fontWeight={600}
          color="#717171"
          fontSize={{
            lg: "1.25rem",
          }}
        >
          {provinsi}
        </Text>
        {arrFlex}
      </Flex>
    );
  } else {
    return <></>;
  }
};

const Filter = ({
  provinsi,
  kabupatenKota,
}: {
  provinsi: Provinsi[];
  kabupatenKota: KotaKabupaten[][];
}) => {
  const [tipeWisata, setTipeWisata] = useState<TipeWisata>("all");
  const [stateCities, setStateCities] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fasilitas, setFasilitas] = useState<TipeFasilitas>("all");
  const [trip, setTrip] = useState<TipeTrip>("open");

  const cities = ["Bandung", "Medan", "Surabaya", "Semarang", "Denpasar"];

  const changeCheckboxHandler = (newData: string[]) => {
    setStateCities(newData);
  };

  const arrCheckboxKotaKabupaten: JSX.Element[] = useMemo(() => {
    const filteredData: JSX.Element[] = [];
    provinsi.forEach((p, i) => {
      const filteredKabupatenKota = kabupatenKota[i];
      if (filteredKabupatenKota) {
        filteredData.push(
          <CheckBoxKabupatenKota
            key={randomNumber()}
            kotaKabupaten={filteredKabupatenKota}
            provinsi={p.nama}
          />
        );
      }
    });
    return filteredData;
  }, []);

  const arrCheckboxKotaKabupatenNonEmpty: JSX.Element[] = useMemo(() => {
    const filteredData: JSX.Element[] = [];
    const tempProvince: Provinsi[] = [];
    const tempKabupatenKota: KotaKabupaten[][] = [];
    provinsi.forEach((p, i) => {
      let isThisProvinceExist = false;
      const currentKabupatenKota = kabupatenKota[i];
      if (currentKabupatenKota) {
        const tempFilterKabupatenKota: KotaKabupaten[] = [];
        currentKabupatenKota.forEach((k) => {
          const lowerName = k.nama.toLowerCase();
          if (lowerName.includes(search.toLowerCase())) {
            if (lowerName.startsWith("kota")) {
              const substr = lowerName.substring(5);
              if (substr.startsWith(search.toLowerCase())) {
                isThisProvinceExist = true;
                tempFilterKabupatenKota.push(k);
              }
            } else {
              const substr = lowerName.substring(10);
              if (substr.startsWith(search.toLowerCase())) {
                isThisProvinceExist = true;
                tempFilterKabupatenKota.push(k);
              }
            }
          }
        });
        if (isThisProvinceExist) {
          tempKabupatenKota.push(tempFilterKabupatenKota);
          tempProvince.push(p);
        }
      }
    });
    tempProvince.forEach((p, i) => {
      if (tempKabupatenKota[i]) {
        filteredData.push(
          <CheckBoxKabupatenKota
            key={randomNumber()}
            kotaKabupaten={tempKabupatenKota[i]}
            provinsi={p.nama}
          />
        );
      }
    });
    return filteredData;
  }, [search, kabupatenKota, provinsi]);

  let showedElement: JSX.Element;
  if (search.length == 0) {
    showedElement = <Box>{arrCheckboxKotaKabupaten}</Box>;
  } else {
    showedElement = <Box>{arrCheckboxKotaKabupatenNonEmpty}</Box>;
  }
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setTimeout(
      (value: string) => {
        setSearch(value);
      },
      200,
      value
    );
  };
  return (
    <Flex
      flexDir="column"
      width={{
        lg: "30%",
      }}
      marginLeft={{
        lg: "3rem",
      }}
    >
      <Box
        marginBottom={{
          lg: "3rem",
        }}
      >
        <Flex
          width={{
            lg: "100%",
          }}
        >
          <Image
            src={listBullet}
            minWidth="min-content"
            maxWidth="100%"
            width={{
              lg: "10%",
            }}
          />
          <Text
            fontFamily={fontFamily}
            fontWeight={600}
            fontSize={{
              lg: "1.25rem",
            }}
            marginLeft={{
              lg: "0.5rem",
            }}
          >
            Kategori Wisata
          </Text>
        </Flex>
        <Divider
          orientation="horizontal"
          marginY={{
            lg: "1rem",
          }}
        />
        <Flex
          flexDir="column"
          gap={{
            lg: "1rem",
          }}
        >
          <Link
            fontFamily={fontFamily}
            fontWeight={600}
            onClick={() => {
              setTipeWisata("all");
            }}
            color={tipeWisata == "all" ? "#0053AD" : "#212121"}
          >
            Semua Trip Wisata
          </Link>
          <Link
            fontFamily={fontFamily}
            fontWeight={600}
            onClick={() => {
              setTipeWisata("dalam_negeri");
            }}
            color={tipeWisata == "dalam_negeri" ? "#0053AD" : "#212121"}
          >
            Trip Dalam Negeri
          </Link>
          <Link
            fontFamily={fontFamily}
            fontWeight={600}
            onClick={() => {
              setTipeWisata("luar_negeri");
            }}
            color={tipeWisata == "luar_negeri" ? "#0053AD" : "#212121"}
          >
            Trip Luar Negeri
          </Link>
        </Flex>
      </Box>
      <Box>
        <Flex
          width={{
            lg: "100%",
          }}
        >
          <Image
            src={funnel}
            minWidth="min-content"
            maxWidth="100%"
            width={{
              lg: "10%",
            }}
          />
          <Text
            fontFamily={fontFamily}
            fontWeight={600}
            fontSize={{
              lg: "1.25rem",
            }}
            marginLeft={{
              lg: "0.5rem",
            }}
          >
            Filter Paket Wisata
          </Text>
        </Flex>
        <Divider
          orientation="horizontal"
          marginY={{
            lg: "1rem",
          }}
        />
        <Flex flexDir="column">
          <Text
            fontFamily={fontFamily}
            fontWeight={600}
            fontSize={{
              lg: "0.875rem",
            }}
          >
            Lokasi Penjemputan
          </Text>
          {cities.map((d) => {
            return (
              <Checkbox
                key={randomNumber()}
                value={d}
                isChecked={stateCities.includes(d)}
                onChange={(e) => {
                  if (stateCities.includes(e.currentTarget.value)) {
                    setStateCities(
                      stateCities.filter((v) => v !== e.currentTarget.value)
                    );
                  } else {
                    setStateCities([...stateCities, e.currentTarget.value]);
                  }
                }}
                fontFamily={fontFamily}
                color="#4D4D4D"
                fontSize={{
                  lg: "0.875rem",
                }}
                marginY={{
                  lg: "0.5rem",
                }}
              >
                {d}
              </Checkbox>
            );
          })}
          <Link
            fontFamily={fontFamily}
            fontSize={{
              lg: "0.875rem",
            }}
            fontWeight={600}
            marginY={{
              lg: "1rem",
            }}
            width={{
              lg: "100%",
            }}
            onClick={onOpen}
          >
            Lihat Selengkapnya{" "}
            <ChevronRightIcon
              width={{
                lg: "10%",
              }}
              height={{
                lg: "90%",
              }}
            />
          </Link>
        </Flex>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setSearch("");
          onClose();
        }}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent overflowY="scroll">
          <ModalHeader>
            <Flex>
              <Text
                fontSize={{
                  lg: "1.25rem",
                }}
                color="#717171"
                fontWeight={600}
                fontFamily={fontFamily}
                paddingTop={{
                  lg: "0.5rem",
                }}
              >
                Lokasi
              </Text>
              <InputGroup
                marginLeft={{
                  lg: "2rem",
                }}
              >
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Cari Lokasi Penjemputan"
                  width={{
                    lg: "70%",
                  }}
                  onChange={searchHandler}
                />
              </InputGroup>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{showedElement}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Divider
        orientation="horizontal"
        marginBottom={{
          lg: "1rem",
        }}
      />
      <Box
        marginBottom={{
          lg: "1.5rem",
        }}
      >
        <Flex
          width={{
            lg: "100%",
          }}
          marginBottom={{
            lg: "0.5rem",
          }}
        >
          <Text
            fontFamily={fontFamily}
            fontWeight={600}
            fontSize={{
              lg: "1.25rem",
            }}
          >
            Fasilitas
          </Text>
        </Flex>
        <RadioGroup
          onChange={(e) => {
            setFasilitas(e as TipeFasilitas);
          }}
          value={fasilitas}
        >
          <Stack
            direction="column"
            gap={{
              lg: "0.5rem",
            }}
          >
            <Radio value="all" defaultChecked>
              <Text
                fontFamily={fontFamily}
                fontWeight={400}
                fontSize={{
                  lg: "0.875rem",
                }}
                color="#4D4D4D"
              >
                Sudah Include Semuanya
              </Text>
            </Radio>
            <Radio value="exclude">
              <Text
                fontFamily={fontFamily}
                fontWeight={400}
                fontSize={{
                  lg: "0.875rem",
                }}
                color="#4D4D4D"
              >
                Ada Beberapa Excludenya
              </Text>
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Divider
        marginBottom={{
          lg: "0.5rem",
        }}
      />
      <Box
        marginBottom={{
          lg: "1.5rem",
        }}
      >
        <Flex
          width={{
            lg: "100%",
          }}
          marginBottom={{
            lg: "0.5rem",
          }}
        >
          <Text
            fontFamily={fontFamily}
            fontWeight={600}
            fontSize={{
              lg: "1.25rem",
            }}
          >
            Tipe Trip Wisata
          </Text>
        </Flex>
        <RadioGroup
          onChange={(e) => {
            setTrip(e as TipeTrip);
          }}
          value={trip}
        >
          <Stack
            direction="column"
            gap={{
              lg: "0.5rem",
            }}
          >
            <Radio value="open" defaultChecked>
              <Text
                fontFamily={fontFamily}
                fontWeight={400}
                fontSize={{
                  lg: "0.875rem",
                }}
                color="#4D4D4D"
              >
                Open Trip
              </Text>
            </Radio>
            <Radio value="private">
              <Text
                fontFamily={fontFamily}
                fontWeight={400}
                fontSize={{
                  lg: "0.875rem",
                }}
                color="#4D4D4D"
              >
                Private Trip
              </Text>
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Divider
        marginBottom={{
          lg: "0.5rem",
        }}
      />
      <Box
        marginBottom={{
          lg: "1.5rem",
        }}
      >
        <Flex
          width={{
            lg: "100%",
          }}
          marginBottom={{
            lg: "0.5rem",
          }}
        >
          <Text
            fontFamily={fontFamily}
            fontWeight={600}
            fontSize={{
              lg: "1.25rem",
            }}
          >
            Rentang Harga (Dalam Rp)
          </Text>
        </Flex>
        <Stack direction="column" gap={{ lg: "0.5rem" }}>
          <NumberInput min={0}>
            <NumberInputField
              placeholder="Harga Minimum"
              _placeholder={{
                color: "#89939E",
              }}
            />
          </NumberInput>
          <NumberInput min={0}>
            <NumberInputField
              placeholder="Harga Maksimum"
              _placeholder={{
                color: "#89939E",
              }}
            />
          </NumberInput>
          <Button
            variant="solid"
            colorScheme="telegram"
            backgroundColor="#0053AD"
            width={{
              lg: "100%",
            }}
          >
            <Text fontFamily={fontFamily} fontSize="0.75rem" color="#FCFCFC">
              Terapkan
            </Text>
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};
export default Filter;

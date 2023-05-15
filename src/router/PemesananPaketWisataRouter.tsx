import { ChangeEvent, useState } from "react";
import PemesananPaketWisataContext from "../context/PemesananPaketWisataContext";
import { useLocation } from "react-router-dom";
import PemesananPaketWisataPage from "../pages/PemesananPaketWisataPage";
import Navbar from "../components/navbar";
import Timer from "../components/timer";
import PemesananBayarPaketWisataPage from "../pages/PemesananBayarPaketWisataPage";
import PemesananResultPage from "../pages/PemesananResultPage";
import { Box } from "@chakra-ui/react";

const PemesananPaketWisataRouter = () => {
    const currentLocation = useLocation().search;
    const searchParams = new URLSearchParams(currentLocation);
    const nDewasa = Number(searchParams.get("dewasa"));
    const nAnak = Number(searchParams.get("anak"));
    const nBayi = Number(searchParams.get("bayi"));
    const [titel, setTitel] = useState<string>("");
    const [nama, setNama] = useState<string>("");
    const [nomorKtp, setNomorKtp] = useState<string>("");
    const [nomorTelepon, setNomorTelepon] = useState<string>("");

    // state for dalam_negeri
    const [titelDewasas, setTitelDewasas] = useState<string[]>(new Array<string>(nDewasa));
    const [namaDewasas, setNamaDewasas] = useState<string[]>(new Array<string>(nDewasa));
    const [tanggalDewasas, setTanggalDewasas] = useState<string[]>(new Array<string>(nDewasa));
    const [titelAnaks, setTitelAnaks] = useState<string[]>(new Array<string>(nAnak));
    const [namaAnaks, setNamaAnaks] = useState<string[]>(new Array<string>(nAnak));
    const [tanggalAnaks, setTanggalAnaks] = useState<string[]>(new Array<string>(nAnak));
    const [titelBayis, setTitelBayis] = useState<string[]>(new Array<string>(nBayi));
    const [namaBayis, setNamaBayis] = useState<string[]>(new Array<string>(nBayi));
    const [tanggalBayis, setTanggalBayis] = useState<string[]>(new Array<string>(nBayi));
    const [currentPosition, setCurrentPosition] = useState<1|2|3>(1);

    // state for luar_negeri
    const [namaDepanTengahDewasas, setNamaDepanTengahDewasas] = useState<string[]>(new Array<string>(nDewasa));
    const [namaDepanTengahAnaks, setNamaDepanTengahAnaks] = useState<string[]>(new Array<string>(nAnak));
    const [namaDepanTengahBayis, setNamaDepanTengahBayis] = useState<string[]>(new Array<string>(nBayi));
    const [namaBelakangDewasas, setNamaBelakangDewasas] = useState<string[]>(new Array<string>(nDewasa));
    const [namaBelakangAnaks, setNamaBelakangAnaks] = useState<string[]>(new Array<string>(nAnak));
    const [namaBelakangBayis, setNamaBelakangBayis] = useState<string[]>(new Array<string>(nBayi));
    const [nomorPasporDewasas, setNomorPasporDewasas] = useState<string[]>(new Array<string>(nDewasa));
    const [nomorPasporAnaks, setNomorPasporAnaks] = useState<string[]>(new Array<string>(nAnak));
    const [nomorPasporBayis, setNomorPasporBayis] = useState<string[]>(new Array<string>(nBayi));
    const [tanggalHabisBerlakuDewasas, setTanggalHabisBerlakuDewasas] = useState<string[]>(new Array<string>(nDewasa));
    const [tanggalHabisBerlakuAnaks, setTanggalHabisBerlakuAnaks] = useState<string[]>(new Array<string>(nAnak));
    const [tanggalHabisBerlakuBayis, setTanggalHabisBerlakuBayis] = useState<string[]>(new Array<string>(nBayi));

    const [tipePembayaran, setTipePembayaran] = useState<string>("Gopay");
    const tipePaketWisata: "dalam_negeri" | "luar_negeri" = "dalam_negeri";
    let showedElement: JSX.Element;
    switch(currentPosition){
        case 1:
            showedElement = 
            <Box>
                <Timer/>
                <PemesananPaketWisataPage nAnak={nAnak} nBayi={nBayi} nDewasa={nDewasa}/>;
            </Box>
            break;
        case 2:
            showedElement = 
            <Box>
                <Timer/>
                <PemesananBayarPaketWisataPage nAnak={nAnak} nBayi={nBayi} nDewasa={nDewasa}/>
            </Box>
            break;
        case 3:
            showedElement = <PemesananResultPage/>
            break;
    }
    return(
        <PemesananPaketWisataContext.Provider
        value={
            {
                onNamaChange: (e: ChangeEvent<HTMLInputElement>) => {
                    setNama(e.currentTarget.value);
                },
                onNomorKtpChange: (e: ChangeEvent<HTMLInputElement>) => {
                    setNomorKtp(e.currentTarget.value);
                },
                onNomorTeleponChange: (e: ChangeEvent<HTMLInputElement>) => {
                    setNomorTelepon(e.currentTarget.value);
                },
                onTitelChange: (e: ChangeEvent<HTMLSelectElement>) => {
                    setTitel(e.currentTarget.value);
                },
                onNamaAnaksChange: (e, i) => {
                    namaAnaks[i] = e.currentTarget.value;
                    setNamaAnaks([...namaAnaks]);
                },
                onNamaBayisChange: (e, i) => {
                    namaBayis[i] = e.currentTarget.value;
                    setNamaBayis([...namaBayis]);
                },
                onNamaDewasasChange: (e, i) => {
                    namaDewasas[i] = e.currentTarget.value;
                    setNamaDewasas([...namaDewasas]);
                },
                onTanggalAnaksChange: (e, i) => {
                    tanggalAnaks[i] = e.currentTarget.value;
                    setTanggalAnaks([...tanggalAnaks]);
                },
                onTanggalBayisChange: (e, i) => {
                    tanggalBayis[i] = e.currentTarget.value;
                    setTanggalBayis([...tanggalBayis]);
                },
                onTanggalDewasasChange: (e, i) => {
                    tanggalDewasas[i] = e.currentTarget.value;
                    setTanggalDewasas([...tanggalDewasas]);
                },
                onTitelAnaksChange: (e, i) => {
                    titelAnaks[i] = e.currentTarget.value;
                    setTitelAnaks([...titelAnaks]);
                },
                onTitelBayisChange: (e, i) => {
                    titelBayis[i] = e.currentTarget.value;
                    setTitelBayis([...titelBayis]);
                },
                onTitelDewasasChange: (e, i) => {
                    titelDewasas[i] = e.currentTarget.value;
                    setTitelDewasas([...titelDewasas]);
                },
                setCurrentPosition: (n) => {
                    setCurrentPosition(n);
                },
                onNamaBelakangAnaksChange: (e, i) => {
                    namaBelakangAnaks[i] = e.currentTarget.value;
                    setNamaBelakangAnaks([...namaBelakangAnaks])
                },
                onNamaBelakangBayisChange: (e, i) => {
                    namaBelakangBayis[i] = e.currentTarget.value;
                    setNamaBelakangBayis([...namaBelakangBayis]);
                },
                onNamaBelakangDewasasChange: (e, i) => {
                    namaBelakangDewasas[i] = e.currentTarget.value;
                    setNamaBelakangDewasas([...namaBelakangDewasas]);
                },
                onNamaDepanTengahAnaksChange: (e, i) => {
                    namaDepanTengahAnaks[i] = e.currentTarget.value;
                    setNamaDepanTengahAnaks([...namaDepanTengahAnaks]);
                },
                onNamaDepanTengahBayisChange: (e, i) => {
                    namaDepanTengahBayis[i] = e.currentTarget.value;
                    setNamaDepanTengahBayis([...namaDepanTengahBayis]);
                },
                onNamaDepanTengahDewasasChange: (e, i) => {
                    namaDepanTengahDewasas[i] = e.currentTarget.value;
                    setNamaDepanTengahDewasas([...namaDepanTengahDewasas]);
                },
                onNomorPasporAnaksChange: (e, i) => {
                    nomorPasporAnaks[i] = e.currentTarget.value;
                    setNomorPasporAnaks([...nomorPasporAnaks]);
                },
                onNomorPasporBayisChange: (e, i) => {
                    nomorPasporBayis[i] = e.currentTarget.value;
                    setNomorPasporBayis([...nomorPasporBayis]);
                },
                onNomorPasporDewasasChange: (e, i) => {
                    nomorPasporDewasas[i] = e.currentTarget.value;
                    setNomorPasporDewasas([...nomorPasporDewasas]);
                },
                onTanggalHabisBerlakuAnaksChange: (e, i) => {
                    tanggalHabisBerlakuAnaks[i] = e.currentTarget.value;
                    setTanggalHabisBerlakuAnaks([...tanggalHabisBerlakuAnaks]);
                },
                onTanggalHabisBerlakuBayisChange: (e, i) => {
                    tanggalHabisBerlakuBayis[i] = e.currentTarget.value;
                    setTanggalHabisBerlakuBayis([...tanggalHabisBerlakuBayis]);
                },
                onTanggalHabisBerlakuDewasasChange: (e, i) => {
                    tanggalHabisBerlakuDewasas[i] = e.currentTarget.value;
                    setTanggalHabisBerlakuDewasas([...tanggalHabisBerlakuDewasas]);
                },
                setTipePembayaran: (v) => {
                    setTipePembayaran(v);
                },
                namaBelakangAnaks: namaBelakangAnaks,
                namaBelakangBayis: namaBelakangBayis,
                namaBelakangDewasas: namaBelakangDewasas,
                namaDepanTengahAnaks: namaDepanTengahAnaks,
                namaDepanTengahBayis: namaDepanTengahBayis,
                namaDepanTengahDewasas: namaDepanTengahDewasas,
                nomorPasporAnaks: nomorPasporAnaks,
                nomorPasporBayis: nomorPasporBayis,
                nomorPasporDewasas: nomorPasporDewasas,
                tanggalHabisBerlakuAnaks: tanggalHabisBerlakuAnaks,
                tanggalHabisBerlakuBayis: tanggalHabisBerlakuBayis,
                tanggalHabisBerlakuDewasas: tanggalHabisBerlakuDewasas,
                currentPosition: currentPosition,
                namaAnaks: namaAnaks,
                namaBayis: namaBayis,
                namaDewasas: namaDewasas,
                tanggalAnaks: tanggalAnaks,
                tanggalBayis: tanggalBayis,
                tanggalDewasas: tanggalDewasas,
                titelAnaks: titelAnaks,
                titelBayis: titelBayis,
                titelDewasas: titelDewasas,
                tipePaketWisata: tipePaketWisata,
                tipePembayaran: tipePembayaran,
            }
        }>
            <Navbar isAuthenticated type="pesanpaketwisata" typeUser="user"/>
            {showedElement}
        </PemesananPaketWisataContext.Provider>
    );
};

export default PemesananPaketWisataRouter;
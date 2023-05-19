import { PaketWisata } from "./paket_wisata"
import { User } from "./response"

export interface PemesananDalamNegeriResponse{
    message: string,
    success: boolean,
    data?: PemesananDalamNegeriObj
}

export interface PemesananDalamNegeriObj{
    pemesanan_dalam_negeri: PemesananDalamNegeri[]
}

export interface PemesananDalamNegeri{
    id: number,
    titel: string,
    namaLengkap: string,
    email: string,
    nomorKtp: string,
    nomorTelepon: string,
    banyakDewasa: number,
    banyakAnak: number,
    banyakBayi: number,
    tipePembayaran: string,
    statusPembayaran?: string,
    createdAt: string,
    updatedAt: string,
    user: User,
    paketWisata: PaketWisata,
    agenTravelId: number
}
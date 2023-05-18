import { AgenTravel } from "./agen_travel"

export interface PaketWisata{
    id: number,
    nama: string,
    kota: string,
    provinsi: string,
    harga: number,
    lama_paket_wisata: string,
    gambar: string
}

export interface PaketWisataResponse{
    message: string,
    success: boolean,
    data?: PaketWisataObj
}

export interface SinglePaketWisataResponse{
    message: string,
    success: boolean,
    data?: {
        paket_wisata: PaketWisatas
    }
}

export interface PaketWisataObj{
    paket_wisata: PaketWisatas[]
}

export interface PaketWisatas{
    id: number,
    nama: string,
    durasiPaketWisataHari: number,
    durasiPaketWisataMalam: number,
    linkGroup: string,
    lokasiPenjemputan: string,
    jenisKelengkapan: string,
    deskripsi: string,
    infoPenting: string,
    rundown: string,
    fasilitas: string,
    infoHarga: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: string,
    tipePaketWisata: string,
    domain: string,
    detailTanggal: DetailTanggal[],
    hargaPaketWisata: HargaPaketWisata[],
    agenTravel: AgenTravel,
    gambarCover: string
}

export interface DetailTanggal{
    id: number,
    tanggalMulai: string,
    tanggalPulang: string,
}

export interface HargaPaketWisata{
    id: number,
    tipeOrang: string,
    harga: number,
    kuota: number
}
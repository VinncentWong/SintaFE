import { AgenTravel } from "./agen_travel"

export interface PembelianPremiumResponse{
    message: string,
    success: boolean,
    data?: PembelianPremiumObj
}

export interface PembelianPremiumObj{
    pembelian_premium : PembelianPremium
}

export interface PembelianPremium{
    id: number,
    tipePembayaran: string,
    lamaPremium: number,
    totalPembayaran: number,
    createdAt: string,
    agenTravel: AgenTravel
}
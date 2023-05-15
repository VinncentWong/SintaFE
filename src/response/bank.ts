import { AgenTravel } from "./agen_travel"

export interface BankResponse{
    message: string,
    success: boolean,
    data: ArrayBank
}

export interface ArrayBank{
    bank: Bank[]
}

export interface Bank{
    id: number,
    nama: string,
    nomorRekening: string,
    provider: string,
    agenTravel: AgenTravel,
    createdAt: string,
    deletedAt: string,
}
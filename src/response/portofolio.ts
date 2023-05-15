import { AgenTravel } from "./agen_travel"

export interface PortofolioResponse{
    message: string,
    success: boolean,
    data: PortofolioArray
}

export interface PortofolioArray{
    portofolio: Portofolio[]
}

export interface Portofolio{
    id: number,
    text: string,
    agenTravel: AgenTravel
}
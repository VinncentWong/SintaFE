export interface Provinsi{
    id: number,
    nama: string
}

export interface ProvinsiResponse{
    provinsi: Provinsi[]
}

export interface KotaKabupaten{
    id: number,
    id_provinsi: number,
    nama: string
}

export interface KotaKabupatenResponse{
    kota_kabupaten: KotaKabupaten[]
}
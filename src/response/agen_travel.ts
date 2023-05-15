export interface AgenTravel{
    id: number,
    emailPerusahaan: string,
    emailPribadi?: string,
    nomorTeleponPerusahaan?: string,
    nomorTeleponPribadi?: string,
    namaBadanUsaha: string,
    alamatBadanUsaha?: string,
    nama?: string,
    kontakWhatsappPic?: string,
    suratIzinUsaha?: string,
    bio?: string,
    tentangSaya?: string,
    kontakWhatsappBadanUsaha?: string,
    akunInstagramBadanUsaha?: string,
    akunFacebookBadanUsaha?: string,
    akunTelegramBadanUsaha?: string,
    akunLineBadanUsaha?: string,
    tanggalBerlangganan?: string,
    tanggalExpirePremium?: string,
    statusVerifikasi?: string,
    role: string,
    createdAt: string,
    updatedAt: string,
    isVerified: boolean,
    isPremium : boolean,
    sudahLengkapiProfil: boolean,
    sudahIsiDetailBank: boolean,
}

export interface AgenTravelData{
    jwt_token: string,
    agentravel: AgenTravel
}

export interface AgenTravelResponse{
    success: boolean,
    message: string,
    data?: AgenTravelData
}
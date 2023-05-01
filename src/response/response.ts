export interface User{
    id: number,
    email: string,
    nomorKtp?: string,
    nama: string,
    noTelp: string,
    verified: string,
    createdAt: string,
    updatedAt: string
}

interface Response{
    message: string,
    success: boolean,
    data?: null,
    user?: User,
    jwt_token?: string
}

export default Response;
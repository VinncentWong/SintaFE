export interface User{
    id: number,
    email: string,
    nomorKtp?: string,
    nama: string,
    noTelp: string,
    verified: "TERVERIFIKASI" | "MENUNGGU" | "TIDAK_TERVERIFIKASI",
    createdAt: string,
    updatedAt: string
}

interface UserResponse{
    message: string,
    success: boolean,
    data?: {user: User, jwt_token?: string}
}

export default UserResponse;
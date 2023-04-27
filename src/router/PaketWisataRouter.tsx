import { Navigate, useLocation, useParams } from "react-router-dom";
import DetailPaketWisata from "../pages/DetailPaketWisata";
import WisataIdContext from "../context/WisataIdContext";
import { useState } from "react";

export type PaketWisataType = "deskripsi" | "infopenting" | "rundown" | "fasilitas" | "pesanpaketwisata" | undefined;

export const PaketWisataRouter = () => {
    const [loadComplete, setloadComplete] = useState<boolean>(true);
    const url = useLocation();
    const {userId} = useParams();
    let type: PaketWisataType;
    const pathName = url.pathname;
    if(pathName.includes("deskripsi")){
        type = "deskripsi";
    } else if(pathName.includes("infopenting")){
        type = "infopenting";
    } else if(pathName.includes("rundown")){
        type = "rundown";
    } else if(pathName.includes("fasilitas")){
        type = "fasilitas";
    } else{
        type = undefined;
    }
    if(!type || !userId){
        return(
            <Navigate to="/paketwisata"/>
        )
    } else {
        return(
            <WisataIdContext.Provider value={{
                "id": Number(userId),
                "loadComplete": loadComplete
            }}>
                <DetailPaketWisata type={type}/>
            </WisataIdContext.Provider>
        )
    }
};
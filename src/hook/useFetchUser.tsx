import { useEffect, useState } from "react";
import UserResponse, { User } from "../response/response";
import api from "../api/api";
import { getJwtToken } from "../util/auth_util";
import axios from "axios";

const useFetchUser = (suburl: string) => {
    const [data, setData] = useState<UserResponse>({message: "", success: false, data: undefined});
    const [error, setError] = useState<string>("");
    const [load, setLoad] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await api.get(suburl, {
                    headers: {
                        Authorization: `Bearer ${getJwtToken()}`
                    }
                });
                setData(result.data);
            } catch(e){
                if(axios.isAxiosError<UserResponse>(e)){
                    const messageError = e.response?.data.message;
                    if(messageError){
                        setError(messageError);
                    }
                }
            } finally{
                setLoad(true);
            };
        }
        fetchData();
    },[]);
    return {data, load, error};
};

export default useFetchUser;
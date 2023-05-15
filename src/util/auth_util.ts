import { AgenTravel } from "../response/agen_travel";

export const getJwtToken = () => {
    const jwt = localStorage.getItem("jwtToken");
    return jwt;
};

export const getAgenTravel = () => {
    const agenTravel = JSON.parse(localStorage.getItem("agenTravel") as string) as AgenTravel;
    return agenTravel;
}

export const getJwtAgenTravel = () => {
    const jwtToken = localStorage.getItem("jwtTokenAgenTravel");
    return jwtToken;
}

export default () => {
    if(localStorage.getItem("user")){
        return true;
    } else {
        return false;
    }
}
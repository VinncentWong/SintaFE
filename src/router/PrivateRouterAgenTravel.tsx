import { Navigate, Outlet } from "react-router-dom";

const PrivateRouterAgenTravel = () => {
    const agenTravel = localStorage.getItem("agenTravel");
    const jwtToken = localStorage.getItem("jwtTokenAgenTravel");
    if(!agenTravel || !jwtToken){
        return(
            <Navigate to={"/agentravel/login"}/>
        )
    } else {
        return(
            <Outlet/>
        )
    }
};

export default PrivateRouterAgenTravel;
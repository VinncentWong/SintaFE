import { Outlet, useNavigate } from "react-router-dom";

const PrivateRouter = () => {
    const navigate = useNavigate();
    if(localStorage.getItem("user") == undefined){
        navigate("/");
    }
    return(
        <Outlet/>
    );
};

export default PrivateRouter;
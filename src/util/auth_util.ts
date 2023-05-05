export const getJwtToken = () => {
    const jwt = localStorage.getItem("jwtToken");
    return jwt;
};

export default () => {
    if(localStorage.getItem("user")){
        return true;
    } else {
        return false;
    }
}
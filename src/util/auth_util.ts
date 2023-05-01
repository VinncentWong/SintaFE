export default () => {
    if(localStorage.getItem("user")){
        return true;
    } else {
        return false;
    }
}